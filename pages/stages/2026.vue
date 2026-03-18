<script setup>
useHead({
  title: 'Stage 2026 - Lookiz - Kizamba Gospel',
  meta: [
    {
      name: 'description',
      content: 'Détails de mon second stage chez Lookiz : développement backend IA pour la peluche intelligente Ary.'
    }
  ]
})

definePageMeta({
  layout: 'simple'
})

const stageDates = {
  start: 'Janvier 2026',
  end: 'Février 2026',
  duration: '6 semaines'
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' })
  document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el))
})
</script>

<template>
  <section class="section pt-32">
    <div class="max-w-5xl mx-auto px-6 lg:px-8">
      <!-- Back button -->
      <div class="mb-8 reveal-up">
        <NuxtLink to="/stages" class="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
          Retour aux stages
        </NuxtLink>
      </div>

      <!-- Hero -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.1s;">
        <div class="flex items-center gap-3 mb-4">
          <span class="badge">
            <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Stage 2026
          </span>
          <span class="text-gray-400 text-sm">2ème année - Projet Défi</span>
        </div>

        <h1 class="text-section apple-heading mb-6">
          Innovation IA chez <span class="gradient-text">Lookiz (Ary)</span>
        </h1>

        <p class="text-xl apple-body mb-8">
          Immersion au cœur d'une EdTech française révolutionnaire. Développement du moteur backend et des scripts de génération de contenus éducatifs pour la peluche interactive 100% vocale Ary.
        </p>

        <!-- Tech stack -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🐍</div>
            <div class="text-xs text-gray-400">Python 3.11</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🤖</div>
            <div class="text-xs text-gray-400">OpenAI / Claude</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">💾</div>
            <div class="text-xs text-gray-400">JSON Structuré</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">⚡</div>
            <div class="text-xs text-gray-400">Back-end Intégration</div>
          </div>
        </div>

        <div class="flex flex-wrap gap-4">
          <a href="https://github.com/GENOKK6/Lookiz" target="_blank" class="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-amber-500/20">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Voir le code (Dashboard Admin)
          </a>
        </div>
      </div>

      <!-- Présentation Lookiz -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.2s;">
        <h2 class="text-2xl font-semibold mb-6 text-amber-400">L'entreprise : Lookiz</h2>
        <div class="bg-linear-to-br from-amber-900/10 to-orange-900/10 p-8 rounded-3xl border border-amber-900/20">
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <p class="text-gray-400 leading-relaxed mb-4">
                Fondée par <strong>Jonathan Bibas</strong>, Lookiz est une startup EdTech française basée à Paris. Sa mission est de proposer des jouets éducatifs intelligents, ludiques et <strong>sans écran</strong> pour renouveler l'éveil des enfants.
              </p>
              <ul class="space-y-2 text-sm text-gray-400">
                <li>• <strong>Siège :</strong> 5 Rue Rodier, 7 Paris</li>
                <li>• <strong>Visibilité :</strong> VivaTech 2024, Télématin</li>
                <li>• <strong>Actualité :</strong> Passage remarqué dans "Qui veut être mon associé ?" (M6, Janvier 2026)</li>
              </ul>
            </div>
            <div class="flex flex-col justify-center bg-black/40 p-6 rounded-2xl border border-white/5">
              <h4 class="text-white font-semibold mb-2">Le produit : Ary</h4>
              <p class="text-sm text-gray-400 mb-4">
                Une peluche connectée dopée à l'IA vocale capable de répondre à 3500 sujets et d'inventer des histoires sur mesure.
              </p>
              <div class="flex items-center gap-2 text-xs text-amber-400">
                <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Levée de fonds réussie : 50k€ (Alice Lhabouz)
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Missions Techniques -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.3s;">
        <h2 class="text-2xl font-semibold mb-6 text-amber-400">Missions & Contributions</h2>
        <div class="space-y-6">
          <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800">
            <h3 class="font-semibold mb-4 text-white">⚙️ Développement Backend IA</h3>
            <p class="text-gray-400 mb-4">
              Pendant 6 semaines, j'ai travaillé en profondeur sur le moteur qui anime Ary. Mon travail s'est concentré sur la logique de traitement des requêtes et la génération de réponses de haute qualité.
            </p>
            <div class="grid md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white/5 rounded-xl border border-white/10">
                <span class="block text-amber-400 font-bold mb-1">Python & JSON</span>
                Scripts de génération de jeux de données éducatifs structurés pour alimenter la base de connaissances d'Ary.
              </div>
              <div class="p-4 bg-white/5 rounded-xl border border-white/10">
                <span class="block text-amber-400 font-bold mb-1">Intégration API</span>
                Maintenance et optimisation des liaisons avec les APIs OpenAI et Anthropic (Claude) pour la conversation temps réel.
              </div>
            </div>
          </div>

          <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800">
            <h3 class="font-semibold mb-4 text-white">🔒 Éthique & Sécurité (Red Teaming)</h3>
            <p class="text-gray-400 mb-4">
              L'un des piliers de Lookiz est la sécurité. J'ai participé activement au bridage de l'IA pour garantir des réponses adaptées à l'âge des enfants.
            </p>
            <ul class="list-disc list-inside space-y-2 text-sm text-gray-400 ml-4">
              <li>Tests de pénétration verbale pour éviter les biais de l'IA.</li>
              <li>Mise en place de filtres de confidentialité (zéro conservation de données vocales).</li>
              <li>Optimisation de l'IA pour un environnement 100% vocal sans navigation internet libre.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Projets réalisés pendant le stage -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.4s;">
        <h2 class="text-2xl font-semibold mb-6 text-amber-400">Projets & Réalisations</h2>
        <div class="grid gap-6">
          <!-- Projet 1: OpenRout -->
          <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800 hover:border-amber-500/30 transition-all group">
            <div class="flex flex-col md:flex-row justify-between gap-4 mb-4">
              <div>
                <h3 class="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">OpenRout (v2.0)</h3>
                <p class="text-sm text-amber-500/80 font-medium tracking-wide border-b border-amber-500/20 inline-block">Plateforme Éducative Fullstack</p>
              </div>
              <div class="flex gap-2">
                <span v-for="tech in ['React 18', 'PHP', 'MySQL', 'Tailwind']" :key="tech" class="px-3 py-1 bg-white/5 rounded-lg text-[10px] text-gray-400 uppercase tracking-tighter">{{ tech }}</span>
              </div>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed mb-4">
              Refonte complète du Dashboard d'apprentissage. Interface moderne permettant la gestion des cours d'Anglais, Français et CEJM avec un système de progression en temps réel pour l'élève.
            </p>
            <a href="https://github.com/GENOKK6/Lookiz" target="_blank" class="text-xs text-amber-500 hover:underline flex items-center gap-1">
              Voir le dépôt GitHub →
            </a>
          </div>

          <!-- Projet 2: Content Designer -->
          <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800 hover:border-amber-500/30 transition-all group">
            <div class="flex flex-col md:flex-row justify-between gap-4 mb-4">
              <div>
                <h3 class="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">Lookiz Content Designer</h3>
                <p class="text-sm text-amber-500/80 font-medium tracking-wide border-b border-amber-500/20 inline-block">Solution de Génération IA</p>
              </div>
              <div class="flex gap-2">
                <span v-for="tech in ['Python', 'OpenRouter', 'Gemini']" :key="tech" class="px-3 py-1 bg-white/5 rounded-lg text-[10px] text-gray-400 uppercase tracking-tighter">{{ tech }}</span>
              </div>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed mb-4">
              Développement d'un pipeline automatisé créant plus de 500 modules pédagogiques structurés. Utilisation massive du prompting zero-shot pour garantir la qualité éducative sur des thèmes comme les Dinosaures ou l'Espace.
            </p>
            <a href="https://github.com/GENOKK6/Lookiz" target="_blank" class="text-xs text-amber-500 hover:underline flex items-center gap-1">
              Voir le dépôt GitHub →
            </a>
          </div>

          <!-- Projet 3: Voice Engine -->
          <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800 hover:border-amber-500/30 transition-all group">
            <div class="flex flex-col md:flex-row justify-between gap-4 mb-4">
              <div>
                <h3 class="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">Moteur d'Interaction Vocale</h3>
                <p class="text-sm text-amber-500/80 font-medium tracking-wide border-b border-amber-500/20 inline-block">Système IA Conversationnel</p>
              </div>
              <div class="flex gap-2">
                <span v-for="tech in ['Python', 'NLP', 'Audio Processing']" :key="tech" class="px-3 py-1 bg-white/5 rounded-lg text-[10px] text-gray-400 uppercase tracking-tighter">{{ tech }}</span>
              </div>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed mb-4">
              Optimisation de la logique conversationnelle pour la peluche Ary. Gestion des dialogues fluides, des quiz interactifs et sécurisation des interactions pour un public jeune enfant.
            </p>
            <a href="https://github.com/GENOKK6/Lookiz" target="_blank" class="text-xs text-amber-500 hover:underline flex items-center gap-1">
              Voir le dépôt GitHub →
            </a>
          </div>
        </div>
      </div>

      <!-- Bilan -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.5s;">
        <h2 class="text-2xl font-semibold mb-6">Bilan personnel</h2>
        <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800 text-gray-400 leading-relaxed">
          <p class="mb-4">
            Ce stage chez Lookiz a été une expérience fondatrice. Travailler sur un produit qui a reçu la reconnaissance d'investisseurs et de médias nationaux m'a appris l'exigence du monde professionnel de l'EdTech.
          </p>
          <p>
            J'ai pu confronter mes compétences en <strong>Python</strong> et en <strong>IA</strong> à des problématiques réelles de mise à l'échelle (scalabilité) et de sécurité critique. Ce projet m'a prouvé que le code peut avoir une utilité sociale immense en éduquant les enfants de manière sécurisée et intelligente.
          </p>
        </div>
      </div>

      <!-- Extraits Techniques -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.6s;">
        <h2 class="text-2xl font-semibold mb-6 text-amber-400">Extraits Techniques (Backend IA)</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Python Logic -->
          <div class="space-y-4">
            <h4 class="text-sm font-semibold text-gray-400 flex items-center gap-2">
              <span class="w-2 h-2 bg-amber-500 rounded-full"></span>
              Logique de Contrôle (Python)
            </h4>
            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 p-4 overflow-hidden shadow-2xl">
              <pre class="text-[10px] md:text-xs text-amber-200 font-mono leading-relaxed"><code>def call_ai(self, messages, json_mode=False):
    """Appel IA avec fallback automatique."""
    for model in [PRIMARY_MODEL] + FALLBACK:
        try:
            payload = {"model": model, "messages": messages}
            if json_mode:
                payload["response_format"] = {"type": "json"}
            
            response = requests.post(
                url="https://openrouter.ai/api/v1/chat",
                headers={"Authorization": f"Bearer {API_KEY}"},
                json=payload
            )
            return response.json()['choices'][0]['message']
        except:
            continue</code></pre>
            </div>
          </div>

          <!-- JSON Structure -->
          <div class="space-y-4">
            <h4 class="text-sm font-semibold text-gray-400 flex items-center gap-2">
              <span class="w-4 h-4 text-amber-500">📄</span>
              Structure de Données (JSON)
            </h4>
            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 p-4 overflow-hidden shadow-2xl">
              <pre class="text-[10px] md:text-xs text-amber-200 font-mono leading-relaxed"><code>{
  "sujet": "Les étoiles",
  "niveau": "Découverte",
  "content": [
    "Une étoile est une énorme boule de gaz très chaud.",
    "Le Soleil est l'étoile la plus proche de la Terre."
  ]
}</code></pre>
            </div>
          </div>
        </div>
        <p class="mt-6 text-sm text-gray-500 italic text-center">
          "Le back-end assure la fluidité entre la voix de l'enfant et l'intelligence d'Ary."
        </p>
      </div>

      <!-- Artefacts & Galerie de Contenus -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.7s;">
        <h2 class="text-2xl font-semibold mb-6 text-amber-400">Bibliothèque de Contenus IA</h2>
        <p class="text-gray-400 mb-8 leading-relaxed">
          Plus de <strong>500+ modules interactifs</strong> ont été générés et validés. Voici un aperçu des thématiques structurées pour l'IA d'Ary :
        </p>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div v-for="topic in [
            { id: 1, name: 'Dinosaures', icon: '🦖', count: 45 },
            { id: 2, name: 'Astronomie', icon: '🪐', count: 62 },
            { id: 3, name: 'Le Corps Humain', icon: '🧠', count: 38 },
            { id: 4, name: 'Mythologie', icon: '⚡', count: 54 },
            { id: 5, name: 'Géographie', icon: '🌍', count: 41 },
            { id: 6, name: 'Anglais', icon: '🇬🇧', count: 85 },
            { id: 7, name: 'Fables', icon: '🦊', count: 30 },
            { id: 8, name: 'Physique', icon: '🔬', count: 25 }
          ]" :key="topic.id" class="p-4 bg-white/5 border border-white/10 rounded-2xl text-center hover:border-amber-500/50 transition-colors">
            <div class="text-3xl mb-2">{{ topic.icon }}</div>
            <div class="text-sm font-semibold text-white mb-1">{{ topic.name }}</div>
            <div class="text-[10px] text-amber-500 uppercase tracking-widest font-bold">{{ topic.count }} modules</div>
          </div>
        </div>
      </div>

      <!-- Terminal Output Simulations & Ressources -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.7s;">
        <h2 class="text-2xl font-semibold mb-8 text-amber-400">Rendus et Outils d'Analyse (Python)</h2>
        
        <div class="grid lg:grid-cols-2 gap-8 mb-12">
          <!-- Image 1: gen.py -->
          <div>
            <h3 class="text-sm font-semibold mb-4 text-gray-400 flex items-center gap-2">
              <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
              Génération de Contenus (gen.py)
            </h3>
            <div class="bg-black border border-gray-800 rounded-2xl p-1 shadow-2xl overflow-hidden group">
              <img src="/images/json-gen.py-resultat.png" alt="Terminal Output Gen.py" class="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
          </div>

          <!-- Image 2: edupro.py -->
          <div>
            <h3 class="text-sm font-semibold mb-4 text-gray-400 flex items-center gap-2">
              <span class="w-2 h-2 bg-amber-500 rounded-full"></span>
              Moteur de Dialogue (edupro.py)
            </h3>
            <div class="bg-black border border-gray-800 rounded-2xl p-1 shadow-2xl overflow-hidden group">
              <img src="/images/json-terminal-edupro.py-suite.png" alt="Terminal Output Edupro.py" class="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-semibold mb-6 text-red-500 mt-12">Ressources & Outils Sécurité (Téléchargements)</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <a href="/downloads/HackAry.zip" download class="bg-red-900/10 p-6 rounded-2xl border border-red-900/30 hover:border-red-500/50 transition-colors group flex items-center justify-between">
            <div class="flex items-center gap-4">
              <div class="text-3xl">🔓</div>
              <div>
                <h3 class="font-semibold text-white group-hover:text-red-400 transition-colors">Dossier HackAry</h3>
                <p class="text-sm text-gray-400 mt-1">Scripts et analyses (Red Teaming & Sécurité)</p>
              </div>
            </div>
            <svg class="w-6 h-6 text-gray-500 group-hover:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
          </a>

          <a href="/downloads/TestAry.zip" download class="bg-blue-900/10 p-6 rounded-2xl border border-blue-900/30 hover:border-blue-500/50 transition-colors group flex items-center justify-between">
            <div class="flex items-center gap-4">
              <div class="text-3xl">🧪</div>
              <div>
                <h3 class="font-semibold text-white group-hover:text-blue-400 transition-colors">Dossier TestAry</h3>
                <p class="text-sm text-gray-400 mt-1">Vérification de l'API de reconnaissance vocale</p>
              </div>
            </div>
            <svg class="w-6 h-6 text-gray-500 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
          </a>
        </div>
      </div>

      <!-- Next/Prev Stage -->
      <div class="pt-12 border-t border-white/10 flex justify-between items-center reveal-up">
        <NuxtLink to="/stages/2025" class="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
          ← Stage 2025
        </NuxtLink>
        <NuxtLink to="/stages" class="btn-outline">
          Retour à la liste
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
