<script setup>
useHead({
  title: 'CV - Kizamba Gospel',
  meta: [
    {
      name: 'description',
      content: 'Curriculum Vitae de Kizamba Gospel, développeur fullstack spécialisé en IA.'
    }
  ]
})

definePageMeta({
  layout: 'simple'
})

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
        const fills = entry.target.querySelectorAll('.progress-fill')
        fills.forEach(fill => {
          const width = fill.style.width
          fill.style.width = '0%'
          setTimeout(() => { fill.style.width = width }, 100)
        })
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' })
  document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el))
})
</script>

<template>
  <section class="section pt-32">
    <div class="max-w-4xl mx-auto px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-16 reveal-up text-center">
        <div class="mb-6">
          <div class="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center text-5xl font-bold text-white mb-4">
            GK
          </div>
          <div class="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-xs text-blue-400 mb-4">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            Disponible immédiatement
          </div>
        </div>

        <h1 class="text-section apple-heading mb-4">
          Gospel <span class="gradient-text">Kizamba</span>
        </h1>

        <p class="text-xl text-gray-400 mb-6">
          Développeur Fullstack spécialisé en Intelligence Artificielle
        </p>

        <div class="flex justify-center gap-4 mb-8 text-sm text-gray-400">
          <a href="mailto:gospel14@gmail.com" class="text-blue-400 hover:underline">
            gospel14@gmail.com
          </a>
          <span class="text-gray-600">|</span>
          <span>+33 07 67 36 79 04</span>
          <span class="text-gray-600">|</span>
          <span>94 Ivry-sur-Seine, France</span>
        </div>

        <div class="flex justify-center gap-4">
          <a href="/Cv de Gospel.pdf" download="Cv_Gospel_Kizamba.pdf" class="btn-outline flex items-center gap-2">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            Télécharger PDF
          </a>
          <NuxtLink to="/contact" class="btn-primary">
            Me contacter
          </NuxtLink>
        </div>
      </div>

      <!-- Info Grid -->
      <div class="grid md:grid-cols-3 gap-6 mb-12 reveal-up" style="animation-delay: 0.1s;">
        <div class="info-box">
          <h4>📍 Localisation</h4>
          <p>Paris, France</p>
        </div>
        <div class="info-box">
          <h4>🎓 Formation</h4>
          <p>BTS SIO SLAM 2</p>
        </div>
        <div class="info-box">
          <h4>💼 Statut</h4>
          <p>Étudiant / Recherche de stage</p>
        </div>
      </div>

      <!-- Education -->
      <div class="mb-12 reveal-up" style="animation-delay: 0.2s;">
        <h2 class="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span class="text-blue-400">🎓</span>
          Formation
        </h2>

        <div class="space-y-6">
          <!-- BTS SIO -->
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-lg font-semibold">BTS Services informatiques aux organisations</h3>
                <span class="text-sm text-gray-400">2024 - 2026</span>
              </div>
              <p class="text-blue-400 font-medium text-sm mb-3">Lycée de Cachan</p>
              <div class="text-gray-400 text-sm leading-relaxed space-y-2">
                <p>Option SLAM (Solutions Logicielles et Applications Métiers)</p>
                <ul class="list-disc list-inside ml-2">
                  <li>Développement d'applications (POO)</li>
                  <li>Conception de bases de données (Méthode Merise)</li>
                  <li>Développement Web et interfaces utilisateurs</li>
                </ul>
              </div>
              <div class="flex flex-wrap gap-2 mt-4">
                <span class="skill-tag">PHP</span>
                <span class="skill-tag">SQL</span>
                <span class="skill-tag">Merise</span>
                <span class="skill-tag">POO</span>
              </div>
            </div>
          </div>

          <!-- Bac Pro -->
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-lg font-semibold">Baccalauréat pro (Organisation et Gros Œuvre)</h3>
                <span class="text-sm text-gray-400">2021 - 2024</span>
              </div>
              <p class="text-blue-400 font-medium text-sm mb-3">Lycée polyvalent Adolphe Cherioux</p>
              <p class="text-gray-400 text-sm leading-relaxed">
                Analyse de plans techniques, planification et respect des normes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills -->
      <div class="mb-12 reveal-up" style="animation-delay: 0.3s;">
        <h2 class="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span class="text-green-400">💻</span>
          Compétences techniques
        </h2>

        <div class="space-y-6">
          <div v-for="category in skills" :key="category.name" class="pb-6 border-b border-gray-800 last:border-0">
            <div class="flex justify-between items-center mb-4">
              <h3 class="font-semibold" x-text="category.name"></h3>
              <span class="text-blue-400 font-mono font-bold" x-text="category.level + '%'"></span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" :style="'width: ' + category.level + '%'"></div>
            </div>
            <p class="text-sm text-gray-400 mt-2" x-text="category.description"></p>
          </div>
        </div>
      </div>

      <!-- Languages -->
      <div class="mb-12 reveal-up" style="animation-delay: 0.4s;">
        <h2 class="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span class="text-purple-400">🌐</span>
          Langues
        </h2>

        <div class="space-y-4">
          <div class="language-bar">
            <span class="language-name">Français</span>
            <div class="flex-1 progress-bar">
              <div class="progress-fill" style="width: 100%"></div>
            </div>
            <span class="language-level">Langue maternelle</span>
          </div>
          <div class="language-bar">
            <span class="language-name">Anglais</span>
            <div class="flex-1 progress-bar">
              <div class="progress-fill" style="width: 75%"></div>
            </div>
            <span class="language-level">B1/B2</span>
          </div>
          <div class="language-bar">
            <span class="language-name">Espagnol</span>
            <div class="flex-1 progress-bar">
              <div class="progress-fill" style="width: 85%"></div>
            </div>
            <span class="language-level">B2/C1</span>
          </div>
        </div>
      </div>

      <!-- Extra (Sports/E-sport) -->
      <div class="mb-12 reveal-up" style="animation-delay: 0.45s;">
        <h2 class="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span class="text-red-400">🏆</span>
          Extrascolaire
        </h2>
        <div class="grid md:grid-cols-3 gap-4 font-body">
          <div class="bg-apple-light-gray/30 p-4 rounded-xl border border-gray-800 text-center">
            <div class="text-2xl mb-2">⚽</div>
            <div class="text-sm font-semibold">Football</div>
            <div class="text-xs text-gray-400">150 matchs - Esprit d'équipe</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl border border-gray-800 text-center">
            <div class="text-2xl mb-2">🏀</div>
            <div class="text-sm font-semibold">Basket</div>
            <div class="text-xs text-gray-400">Compétition - Travail d'équipe</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl border border-gray-800 text-center">
            <div class="text-2xl mb-2">🎮</div>
            <div class="text-sm font-semibold">Tournois E-sport</div>
            <div class="text-xs text-gray-400">10 participations - Stratégie</div>
          </div>
        </div>
      </div>

      <!-- Experience -->
      <div class="mb-12 reveal-up" style="animation-delay: 0.5s;">
        <h2 class="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span class="text-amber-400">💼</span>
          Expérience professionnelle
        </h2>

        <div class="space-y-6">
          <!-- Experience Lookiz -->
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800 transition-all hover:border-blue-500/30">
              <div class="flex justify-between items-start mb-3">
                <h3 class="text-xl font-bold text-white">Stage - Développeur Backend IA</h3>
                <span class="text-sm font-bold text-gray-400">2026</span>
              </div>
              <p class="text-blue-400 font-bold text-sm mb-4">Lookiz · Paris (75)</p>
              <ul class="space-y-3 text-gray-400 text-sm leading-relaxed">
                <li class="flex items-start gap-2">
                  <span class="text-blue-500 mt-1">•</span>
                  <span>Intégration des APIs OpenAI et Anthropic (Claude) pour l'interaction vocale en temps réel.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-500 mt-1">•</span>
                  <span>Génération automatisée de 500+ ressources pédagogiques structurées (JSON).</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-500 mt-1">•</span>
                  <span>Sécurisation (Red Teaming) et filtres éthiques pour contenus adaptés aux enfants.</span>
                </li>
              </ul>
              <div class="flex flex-wrap gap-2 mt-6">
                <span class="skill-tag">Python 3.11</span>
                <span class="skill-tag">OpenAI API</span>
                <span class="skill-tag">Claude</span>
                <span class="skill-tag">Red Teaming</span>
              </div>
            </div>
          </div>

          <!-- Experience EID -->
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800 transition-all hover:border-blue-500/30">
              <div class="flex justify-between items-start mb-3">
                <h3 class="text-xl font-bold text-white">Stage - Initiation & Accompagnement IA</h3>
                <span class="text-sm font-bold text-gray-400">2023 - 2024</span>
              </div>
              <p class="text-blue-400 font-bold text-sm mb-4">EID BATIMENT · Paris (75)</p>
              <ul class="space-y-3 text-gray-400 text-sm leading-relaxed">
                <li class="flex items-start gap-2">
                  <span class="text-blue-500 mt-1">•</span>
                  <span>Accompagnement d'une entreprise BTP dans sa transformation numérique via l'IA.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-500 mt-1">•</span>
                  <span>Automatisation des devis et tâches administratives via ChatGPT et Claude.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-500 mt-1">•</span>
                  <span>Mise en place d'une veille technologique sectorielle pour l'aide à la décision.</span>
                </li>
              </ul>
              <div class="flex flex-wrap gap-2 mt-6">
                <span class="skill-tag">ChatGPT</span>
                <span class="skill-tag">Claude</span>
                <span class="skill-tag">Transformation Numérique</span>
                <span class="skill-tag">BTP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Projects preview -->
      <div class="mb-12 reveal-up" style="animation-delay: 0.6s;">
        <h2 class="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span class="text-purple-400">🚀</span>
          Projets notables
        </h2>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <h3 class="font-semibold mb-2">Application de Bibliothèque</h3>
            <p class="text-sm text-gray-400 mb-4">
              Application full-stack avec gestion des prêts, membres et livres. Authentication JWT, tableau de bord admin.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag">Vue.js</span>
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">MySQL</span>
            </div>
          </div>

          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <h3 class="font-semibold mb-2">Plateforme de Veille</h3>
            <p class="text-sm text-gray-400 mb-4">
              Outil de veille technologique avec agrégation RSS, catégorisation automatique et interface admin.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag">PHP</span>
              <span class="skill-tag">Laravel</span>
              <span class="skill-tag">PostgreSQL</span>
            </div>
          </div>
        </div>

        <div class="mt-6 text-center">
          <NuxtLink to="/portfolio" class="btn-outline">
            Voir tous mes projets →
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const skillsData = [
  { name: 'PHP, C#, SQL', level: 85, description: 'Bases solides en programmation backend et développement d\'applications.' },
  { name: 'HTML / CSS', level: 90, description: 'Maîtrise du développement frontend responsive.' },
  { name: 'SQL - Bases de données', level: 80, description: 'Conception et gestion de bases de données relationnelles.' },
  { name: 'Réseaux et systèmes', level: 75, description: 'Notions fondamentales en infrastructure et réseaux.' },
  { name: 'Outils informatiques professionnels', level: 88, description: 'Utilisation experte des outils de développement et de bureautique.' }
]

export default {
  setup() {
    const skills = ref(skillsData)
    return {
      skills
    }
  }
}
</script>

<style scoped>
.info-box {
  background: rgba(44, 44, 46, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 20px;
}

.info-box h4 {
  font-size: 12px;
  color: #8e8e93;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.info-box p {
  font-size: 16px;
  font-weight: 600;
}

.progress-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #007AFF, #5856D6);
  border-radius: 3px;
  transition: width 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.language-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.language-name {
  min-width: 100px;
  font-size: 14px;
}

.language-level {
  font-size: 12px;
  color: #8e8e93;
}

.skill-tag {
  display: inline-block;
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  margin: 2px;
}
</style>
