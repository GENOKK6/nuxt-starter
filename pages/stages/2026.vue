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
            <span class="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
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
      </div>

      <!-- Présentation Lookiz -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.2s;">
        <h2 class="text-2xl font-semibold mb-6 text-purple-400">L'entreprise : Lookiz</h2>
        <div class="bg-gradient-to-br from-purple-900/10 to-blue-900/10 p-8 rounded-3xl border border-purple-900/20">
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
              <div class="flex items-center gap-2 text-xs text-green-400">
                <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Levée de fonds réussie : 50k€ (Alice Lhabouz)
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Missions Techniques -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.3s;">
        <h2 class="text-2xl font-semibold mb-6 text-blue-400">Missions & Contributions</h2>
        <div class="space-y-6">
          <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800">
            <h3 class="font-semibold mb-4 text-white">⚙️ Développement Backend IA</h3>
            <p class="text-gray-400 mb-4">
              Pendant 6 semaines, j'ai travaillé en profondeur sur le moteur qui anime Ary. Mon travail s'est concentré sur la logique de traitement des requêtes et la génération de réponses de haute qualité.
            </p>
            <div class="grid md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white/5 rounded-xl border border-white/10">
                <span class="block text-purple-400 font-bold mb-1">Python & JSON</span>
                Scripts de génération de jeux de données éducatifs structurés pour alimenter la base de connaissances d'Ary.
              </div>
              <div class="p-4 bg-white/5 rounded-xl border border-white/10">
                <span class="block text-blue-400 font-bold mb-1">Intégration API</span>
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

      <!-- Réalisations Concrètes -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.4s;">
        <h2 class="text-2xl font-semibold mb-6">Réalisations</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-green-900/10 border border-green-900/30 p-6 rounded-2xl">
            <div class="text-2xl mb-4">📜</div>
            <h4 class="font-semibold mb-2">Générateur JSON Éducatif</h4>
            <p class="text-sm text-gray-400 italic">"Génération de plus de 500 contenus thématiques (dinosaures, espace, histoire) via scripts Python."</p>
          </div>
          <div class="bg-blue-900/10 border border-blue-900/30 p-6 rounded-2xl">
            <div class="text-2xl mb-4">🔑</div>
            <h4 class="font-semibold mb-2">Gestion des Clés API</h4>
            <p class="text-sm text-gray-400 italic">"Implémentation d'un système robuste de gestion des tokens et rotation des clés d'API pour le déploiement."</p>
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
        <h2 class="text-2xl font-semibold mb-6 text-green-400">Extraits Techniques (Backend IA)</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Python Logic -->
          <div class="space-y-4">
            <h4 class="text-sm font-semibold text-gray-400 flex items-center gap-2">
              <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
              Logique de Contrôle (Python)
            </h4>
            <div class="bg-[#1e1e1e] rounded-xl border border-white/10 p-4 overflow-hidden shadow-2xl">
              <pre class="text-[10px] md:text-xs text-blue-300 font-mono leading-relaxed"><code>def call_ai(self, messages, json_mode=False):
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
  "sound": "sparkle",
  "content": "Sais-tu que les volcans rejettent de la lave chaude ?",
  "action": "current",
  "quiz": {
    "question": "Quel liquide sort d'un volcan ?",
    "keyword": "lave",
    "attempts": 2
  }
}</code></pre>
            </div>
          </div>
        </div>
        <p class="mt-6 text-sm text-gray-500 italic text-center">
          "Le back-end assure la fluidité entre la voix de l'enfant et l'intelligence d'Ary."
        </p>
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
