<script setup>
useHead({
  title: 'Veille IA - Kizamba Gospel',
  meta: [
    {
      name: 'description',
      content: 'Veille technologique sur l\'Intelligence Artificielle dans le développement web et les outils de génération de code.'
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
        <span class="text-sm font-semibold text-blue-600 tracking-widest uppercase">Veille IA</span>
        <h1 class="text-section apple-heading mt-4 mb-6">
          Ma <span class="gradient-text">veille</span> technologique
        </h1>
        <p class="text-xl apple-body max-w-2xl mx-auto">
          L'IA dans le développement logiciel : exploration, tests et partage de mes découvertes.
        </p>
      </div>

      <!-- Introduction -->
      <div class="reveal-up" style="animation-delay: 0.1s;">
        <div class="bg-apple-light-gray/30 p-8 rounded-3xl border border-gray-800 mb-12">
          <h2 class="text-2xl font-semibold mb-6">1. Pourquoi ce sujet ?</h2>
          <p class="text-lg text-gray-400 leading-relaxed mb-6">
            L'<strong class="text-white">Intelligence Artificielle</strong> est en train de transformer notre façon de coder.
            Mon objectif n'est pas de laisser l'IA coder à ma place, mais de <strong class="text-white">comprendre</strong>
            comment utiliser des outils comme <strong class="text-white">GitHub Copilot</strong> ou <strong class="text-white">Claude</strong>
            pour devenir un <strong class="text-white">"développeur augmenté"</strong> : coder plus vite,
            réduire les tâches répétitives et améliorer la qualité de mes projets.
          </p>
        </div>
      </div>

      <!-- Outils de veille -->
      <div class="reveal-up" style="animation-delay: 0.2s;">
        <h2 class="text-2xl font-semibold mb-6">2. Comment je m'informe</h2>
        <p class="text-gray-400 mb-8 max-w-2xl">
          Pour rester à jour sans me noyer dans l'information, j'utilise un <strong class="text-white">processus simple</strong> :
        </p>

        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">📰</div>
            <h3 class="font-semibold mb-3">Feedly & Newsletters</h3>
            <p class="text-sm text-gray-400">
              Regroupement des articles de blogs techniques fiables (Medium, dev.to, GitHub Blog).
            </p>
          </div>

          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">🚀</div>
            <h3 class="font-semibold mb-3">X (Twitter) & GitHub Trends</h3>
            <p class="text-sm text-gray-400">
              Capturer les tendances en temps réel et voir quels outils sont réellement testés par la communauté.
            </p>
          </div>

          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">🔬</div>
            <h3 class="font-semibold mb-3">La pratique</h3>
            <p class="text-sm text-gray-400">
              L'information ne suffit pas, je teste directement les plugins et agents dans mon éditeur (VS Code) pour me faire mon propre avis.
            </p>
          </div>
        </div>
      </div>

      <!-- Articles selection -->
      <div class="reveal-up" style="animation-delay: 0.3s;">
        <h2 class="text-2xl font-semibold mb-6">3. Mes Découvertes</h2>
        <p class="text-gray-400 mb-8 italic">
          Sélection d'articles que j'ai lus et qui m'ont marqué dans ma veille sur l'IA.
        </p>

        <div class="space-y-8">
          <article class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800">
            <div class="flex flex-wrap justify-between items-start gap-4 mb-4">
              <h3 class="text-xl font-semibold">L'IA qui génère des tests unitaires</h3>
              <span class="px-4 py-1 bg-blue-900/30 border border-blue-900/40 rounded-full text-sm">GitHub Blog</span>
            </div>
            <p class="text-sm text-gray-400 mb-4">
              Lu le 15 janvier 2025
            </p>
            <div class="mb-4">
              <h4 class="text-sm font-semibold mb-2 text-white">Résumé :</h4>
              <p class="text-gray-400 leading-relaxed">
                L'article explique comment GitHub Copilot peut maintenant générer automatiquement des tests unitaires complets en analysant le code existant.
              </p>
            </div>
            <div>
              <h4 class="text-sm font-semibold mb-2 text-white">Ce que j'en retiens :</h4>
              <p class="text-gray-400 leading-relaxed">
                Très utile pour gagner du temps, mais nécessite toujours une relecture humaine pour éviter les "hallucinations" de l'IA. Les tests générés couvrent bien les cas standards mais pas forcément les edge cases.
              </p>
            </div>
          </article>

          <article class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800">
            <div class="flex flex-wrap justify-between items-start gap-4 mb-4">
              <h3 class="text-xl font-semibold">Les agents autonomes pour le développement</h3>
              <span class="px-4 py-1 bg-purple-900/30 border border-purple-900/40 rounded-full text-sm">Medium</span>
            </div>
            <p class="text-sm text-gray-400 mb-4">
              Lu le 3 février 2025
            </p>
            <div class="mb-4">
              <h4 class="text-sm font-semibold mb-2 text-white">Résumé :</h4>
              <p class="text-gray-400 leading-relaxed">
                Une analyse sur les agents autonomes qui peuvent lire tout le contexte d'un projet avant de coder, en utilisant RAG pour comprendre la codebase.
              </p>
            </div>
            <div>
              <h4 class="text-sm font-semibold mb-2 text-white">Ce que j'en retiens :</h4>
              <p class="text-gray-400 leading-relaxed">
                L'importance de bien structurer son code source pour que l'IA puisse le comprendre efficacement. La documentation et l'organisation des fichiers sont clés.
              </p>
            </div>
          </article>
        </div>
      </div>

      <!-- Bilan -->
      <div class="reveal-up mt-12" style="animation-delay: 0.4s;">
        <div class="bg-gradient-to-r from-green-900/20 to-blue-900/20 p-10 rounded-3xl border border-green-900/30">
          <h2 class="text-2xl font-semibold mb-6">4. Bilan et Perspectives</h2>
          <p class="text-gray-400 mb-8 max-w-3xl">
            Après plusieurs mois de veille et de tests, voici mes <strong class="text-white">conclusions</strong> sur l'IA dans le développement :
          </p>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-black/30 p-6 rounded-2xl border border-green-900/30">
              <div class="flex items-center gap-3 mb-4">
                <span class="text-2xl">✅</span>
                <h3 class="font-semibold text-green-400">Les vrais avantages</h3>
              </div>
              <p class="text-sm text-gray-400 leading-relaxed">
                Un gain de temps énorme sur le code "répétitif" (boilerplate, documentation, requêtes simples)
                et une aide précieuse pour débugger une erreur incompréhensible.
              </p>
            </div>

            <div class="bg-black/30 p-6 rounded-2xl border border-amber-900/30">
              <div class="flex items-center gap-3 mb-4">
                <span class="text-2xl">⚠️</span>
                <h3 class="font-semibold text-amber-400">La limite</h3>
              </div>
              <p class="text-sm text-gray-400 leading-relaxed">
                L'esprit critique est indispensable. L'IA propose, mais le développeur dispose.
                C'est toujours à moi de valider l'architecture, la sécurité et la logique métier de mon code.
                L'outil ne remplace pas l'expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>