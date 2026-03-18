const fs = require('fs');
const readline = require('readline');
const PDFDocument = require('pdfkit');

// --- 1. COULEURS & STYLE ---
const COLORS = {
    header: '#2c3e50',
    background: '#f4f6f7',
    success: '#27ae60',
    successBg: '#d5f5e3',
    warning: '#f39c12',
    warningBg: '#fdebd0',
    error: '#c0392b',
    errorBg: '#fadbd8',
    text: '#34495e'
};

class MusicSelector {
    constructor(jsonFilePath) {
        try {
            const rawData = fs.readFileSync(jsonFilePath, 'utf-8');
            this.rawData = JSON.parse(rawData);
        } catch (e) {
            this.rawData = [];
        }
        this.songsIndex = [];
        this.modulesIndex = [];
        this._buildIndex();
    }

    // --- INDEXATION ---
    _buildIndex() {
        const seenSongs = new Set();
        this.rawData.forEach(mod => {
            const moduleName = mod.module ? mod.module.trim() : "";
            const themeName = mod.theme ? mod.theme.trim() : "";

            if (mod.content?.music_list?.length > 0) {
                this.modulesIndex.push({
                    name: moduleName,
                    keywords: this._tokenize(`${moduleName} ${themeName}`),
                    songs: mod.content.music_list
                });

                mod.content.music_list.forEach(song => {
                    const uniqueKey = song.name.toLowerCase().trim();
                    if (!seenSongs.has(uniqueKey)) {
                        seenSongs.add(uniqueKey);
                        this.songsIndex.push({
                            name: song.name,
                            id: song.musicId,
                            module: moduleName,
                            keywords: this._tokenize(song.name)
                        });
                    }
                });
            }
        });
    }

    _normalize(str) {
        return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
    }

    _tokenize(str) {
        const stopWords = ["le", "la", "les", "un", "une", "des", "du", "au", "aux", "et", "ou", "a", "pour", "sur", "dans", "avec", "version", "ary", "mets", "joue", "lance", "chante", "met", "s'il", "te", "plait", "svp", "merci", "je", "veux", "voudrais", "ecouter", "est-ce", "que", "tu", "peux", "dis", "moi", "nous", "chanson", "musique", "titre"];
        return this._normalize(str).split(" ").filter(w => w.length > 1 && !stopWords.includes(w));
    }

    // --- MOTEUR DE RECHERCHE ---
    search(query) {
        const userKeywords = this._tokenize(query);
        if (userKeywords.length === 0) return { success: false, query: query, message: "Pas de mots-clés" };

        let bestMatch = null, bestScore = 0, matchType = "";

        // 1. Titre Exact
        this.songsIndex.forEach(song => {
            const score = this._calculateScore(userKeywords, song.keywords);
            if (score > bestScore) { bestScore = score; bestMatch = song; matchType = "TITRE"; }
        });

        // 2. Module (Album)
        if (bestScore < 0.85) {
            let bestModScore = 0, bestMod = null;
            this.modulesIndex.forEach(mod => {
                const score = this._calculateScore(userKeywords, mod.keywords);
                if (score > bestModScore) { bestModScore = score; bestMod = mod; }
            });

            if (bestModScore > 0.6) {
                const randomSong = bestMod.songs[Math.floor(Math.random() * bestMod.songs.length)];
                bestMatch = { name: randomSong.name, id: randomSong.musicId, module: bestMod.name };
                bestScore = bestModScore;
                matchType = `ALBUM (${bestMod.name})`;
            }
        }

        if (bestScore < 0.45) return { success: false, query: query, message: "Aucune correspondance trouvée." };

        return {
            success: true,
            query: query,
            result: bestMatch,
            score: bestScore,
            matchType: matchType,
            response: `Je lance "${bestMatch.name}"`
        };
    }

    _calculateScore(userWords, targetWords) {
        let matches = 0;
        if (targetWords.length === 0) return 0;
        userWords.forEach(uWord => {
            if (targetWords.includes(uWord)) matches += 1;
            else if (targetWords.find(t => t.startsWith(uWord) || t.includes(uWord))) matches += 0.8;
        });
        return matches / Math.max(userWords.length, 1);
    }

    // --- AUDIT DE COHÉRENCE ---
    verifyResult(res) {
        if (!res.success) return { valid: false, reason: "Non trouvé" };
        const qWords = this._tokenize(res.query);
        const rName = this._normalize(res.result.name);
        const rMod = this._normalize(res.result.module);

        // Vérifie si au moins un mot clé de la demande est dans la réponse
        const coherent = qWords.some(qw => rName.includes(qw) || rMod.includes(qw));

        if (res.score < 0.5) return { valid: false, reason: "Score faible" };
        if (!coherent) return { valid: false, reason: "Incohérence Sémantique" };

        return { valid: true, reason: "OK" };
    }

    // --- GÉNÉRATEUR DE QUESTIONS ---
    generateQuestions(count) {
        const titles = this.songsIndex.map(s => s.name);
        const modules = this.modulesIndex.map(m => m.name);
        const questions = [];

        for (let i = 0; i < count; i++) {
            const isTitle = Math.random() > 0.3;
            const target = isTitle ? titles[Math.floor(Math.random() * titles.length)] : modules[Math.floor(Math.random() * modules.length)];
            const forms = [`Ary mets ${target}`, `Joue ${target} stp`, `Lance ${target}`, `Je veux écouter ${target}`];
            questions.push(forms[Math.floor(Math.random() * forms.length)]);
        }
        return questions;
    }
}

// --- 2. MOTEUR PDF "DESIGN PRO" ---

function drawCard(doc, x, y, width, height, color, title, value) {
    doc.roundedRect(x, y, width, height, 5).fill(color).stroke();
    doc.fillColor('#fff').fontSize(10).text(title, x + 10, y + 10);
    doc.fontSize(20).text(value, x + 10, y + 30);
}

function generateBeautifulPDF(results, selector, filename = "Rapport_Audit_Ary.pdf") {
    const doc = new PDFDocument({ margin: 40, size: 'A4' });
    const stream = fs.createWriteStream(filename);
    doc.pipe(stream);

    // ANALYSE DES DONNÉES
    const audited = results.map(r => ({ ...r, audit: selector.verifyResult(r) }));
    const failures = audited.filter(r => !r.success || !r.audit.valid);
    const success = audited.filter(r => r.success && r.audit.valid);
    const score = ((success.length / results.length) * 100).toFixed(1);

    // --- PAGE 1 : DASHBOARD ---

    // Header
    doc.rect(0, 0, 600, 80).fill(COLORS.header);
    doc.fontSize(24).fillColor('#fff').text("RAPPORT D'AUDIT SÉMANTIQUE", 40, 25);
    doc.fontSize(10).text(`Généré le ${new Date().toLocaleString()}`, 40, 55);

    // Score Global
    doc.moveDown(4);

    // Cartes Statistiques
    drawCard(doc, 40, 100, 150, 80, COLORS.header, "TESTS TOTAUX", results.length);
    drawCard(doc, 210, 100, 150, 80, COLORS.success, "SUCCÈS CONFIRMÉS", success.length);
    drawCard(doc, 380, 100, 150, 80, failures.length > 0 ? COLORS.error : COLORS.success, "ÉCHECS / DOUTES", failures.length);

    // Barre de progression visuelle
    doc.moveDown(6);
    doc.fontSize(12).fillColor(COLORS.text).text(`Taux de fiabilité global : ${score}%`, 40, 200);
    doc.rect(40, 220, 515, 20).fill('#ddd'); // Fond gris
    doc.rect(40, 220, 515 * (score / 100), 20).fill(score > 90 ? COLORS.success : COLORS.error); // Barre colorée

    // --- SECTION CRITIQUE : LES ERREURS ---
    doc.moveDown(3);
    doc.fontSize(16).fillColor(COLORS.error).text("⚠️ ANALYSE DES PROBLÈMES (Prioritaire)", { underline: true });
    doc.moveDown();

    if (failures.length === 0) {
        doc.fontSize(12).fillColor(COLORS.success).text("✅ Aucune erreur détectée ! Le système est parfait.");
    } else {
        failures.forEach((fail, i) => {
            // Fond rouge clair pour l'erreur
            doc.rect(40, doc.y, 515, 55).fill(COLORS.errorBg);

            doc.fillColor(COLORS.error).fontSize(10).font('Helvetica-Bold');
            doc.text(`[ERREUR #${i + 1}] Demande : "${fail.query}"`, 50, doc.y + 10);

            doc.fillColor(COLORS.text).font('Helvetica');
            if (!fail.success) {
                doc.text(`CAUSE : Rien n'a été trouvé dans la base.`, 50, doc.y + 5);
            } else {
                // Cas où l'IA a répondu n'importe quoi (Incohérence)
                doc.text(`RÉPONSE IA : "${fail.result.name}" (Score: ${(fail.score * 100).toFixed(0)}%)`, 50, doc.y + 5);
                doc.font('Helvetica-Bold').fillColor(COLORS.error).text(`DIAGNOSTIC : ${fail.audit.reason}`, 50, doc.y + 5);
            }
            doc.moveDown(2);
        });
    }

    // --- PAGE 2 : LISTE DES SUCCÈS (Compact) ---
    doc.addPage();
    doc.rect(0, 0, 600, 50).fill(COLORS.success);
    doc.fontSize(18).fillColor('#fff').text("JOURNAL DES SUCCÈS", 40, 15);
    doc.moveDown(3);

    doc.fillColor(COLORS.text).fontSize(10);

    // On n'affiche pas tout si c'est énorme, on condense
    const displayLimit = Math.min(success.length, 500);

    success.slice(0, displayLimit).forEach((s, i) => {
        // Ligne zébrée
        if (i % 2 === 0) doc.rect(40, doc.y - 2, 515, 12).fill('#f2f2f2');

        doc.fillColor('#333').text(`${i + 1}. "${s.query}"`, 45, doc.y, { continued: true });
        doc.fillColor(COLORS.success).text(`  ->  ${s.result.name}`, { align: 'right' });
    });

    if (success.length > displayLimit) {
        doc.moveDown();
        doc.fillColor('#7f8c8d').text(`... et ${success.length - displayLimit} autres succès masqués pour économiser le papier.`, { align: 'center' });
    }

    doc.end();
    console.log(`\n✨ RAPPORT PREMIUM GÉNÉRÉ : ${filename}`);
}

// --- 3. EXECUTION ---

function main() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const selector = new MusicSelector('musiquE.json');
    let data = [];

    const menu = () => {
        console.log('\n=====================================');
        console.log(`   AUDIT DESIGN PRO (${data.length} tests)`);
        console.log('=====================================');
        console.log('1. + Ajouter 200 questions automatiques');
        console.log('2. + Ajouter 1 question manuelle');
        console.log('3. 🖨️  Générer le PDF et Quitter');

        rl.question('\nChoix : ', (c) => {
            if (c === '1') {
                const qs = selector.generateQuestions(200);
                qs.forEach(q => data.push(selector.search(q)));
                console.log("✅ Ajouté.");
                menu();
            } else if (c === '2') {
                rl.question('Question : ', (q) => {
                    const res = selector.search(q);
                    const audit = selector.verifyResult(res);
                    console.log(audit.valid ? "✅ OK" : "⚠️ " + audit.reason);
                    data.push(res);
                    menu();
                });
            } else if (c === '3') {
                if (data.length > 0) generateBeautifulPDF(data, selector);
                setTimeout(() => process.exit(0), 1000);
            } else {
                rl.close();
            }
        });
    };
    menu();
}

if (require.main === module) main();