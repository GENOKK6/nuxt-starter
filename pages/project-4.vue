<script setup>
useHead({
  title: 'SioCards - Kizamba Gospel',
  meta: [
    { name: 'description', content: 'SioCards : Application d\'apprentissage web couplant Flashcards et IA avec répétition espacée, conçue pour le BTS SIO.' }
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
    <div class="max-w-5xl mx-auto px-6 lg:px-8">
      <!-- Back button -->
      <div class="mb-8 reveal-up">
        <NuxtLink to="/portfolio" class="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
          Retour aux projets
        </NuxtLink>
      </div>

      <!-- Hero -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.1s;">
        <div class="flex items-center gap-3 mb-4">
          <span class="badge" style="display:inline-flex; align-items:center; gap:6px; background:rgba(255,255,255,0.1); padding:6px 16px; border-radius:20px; font-size:12px; font-weight:600;">
            <span class="w-2 h-2 rounded-full bg-purple-500"></span>
            Projet Personnel / Apprentissage
          </span>
          <span class="text-gray-400 text-sm">2025</span>
        </div>

        <h1 class="text-section mb-6 text-4xl font-bold">
          SioCards : <span style="background: linear-gradient(135deg, #9333ea 0%, #a855f7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Flashcards x IA</span>
        </h1>

        <p class="text-xl mb-8 text-gray-300">
          Ce logiciel web s'inspire de célèbres solutions de mémorisation comme Anki. En y intégrant l'Intelligence Artificielle de bout en bout, il permet à l'étudiant de saisir un cours et de générer instantanément des flashcards révisables intelligemment via un algorithme de répétition espacée, accompagnées de feedbacks sur-mesure.
        </p>

        <!-- Tech stack -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="p-4 rounded-xl text-center border border-gray-800" style="background: rgba(255,255,255,0.05)">
            <div class="text-2xl mb-2"> Vue</div>
            <div class="text-xs text-gray-400">Vue.js / Nuxt</div>
          </div>
          <div class="p-4 rounded-xl text-center border border-gray-800" style="background: rgba(255,255,255,0.05)">
            <div class="text-2xl mb-2">🧠</div>
            <div class="text-xs text-gray-400">Génération IA</div>
          </div>
          <div class="p-4 rounded-xl text-center border border-gray-800" style="background: rgba(255,255,255,0.05)">
            <div class="text-2xl mb-2">📅</div>
            <div class="text-xs text-gray-400">Répétition Espacée</div>
          </div>
          <div class="p-4 rounded-xl text-center border border-gray-800" style="background: rgba(255,255,255,0.05)">
            <div class="text-2xl mb-2">🎯</div>
            <div class="text-xs text-gray-400">Machine Learning</div>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex flex-wrap gap-4 mt-8">
          <a href="/SioCards/index.html" target="_blank" class="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl transition-colors font-medium flex items-center gap-2">
            Voir la Démo Live (Frontend)
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Live Preview -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.15s;">
        <h2 class="text-2xl font-semibold mb-6">Aperçu interactif du Prototype</h2>
        <div class="w-full bg-apple-light-gray/30 rounded-2xl border border-gray-800 overflow-hidden" style="height: 600px;">
          <iframe src="/SioCards/index.html" class="w-full h-full" frameborder="0"></iframe>
        </div>
      </div>

      <!-- Description -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.2s;">
        <h2 class="text-2xl font-semibold mb-6">Mémorisation & Contexte BTS SIO</h2>
        <div class="p-8 rounded-2xl border border-gray-800" style="background: rgba(255,255,255,0.05)">
          <p class="text-gray-400 leading-relaxed mb-6">
            L'origine du projet vient d'un besoin personnel : maximiser ma rétention de connaissances dans le cadre de mon BTS (SLAM, matières générales) et pour ma future poursuite d'études. M'inspirant de "Anki", cette plateforme web rend la révision indolore !
          </p>
          <p class="text-gray-400 leading-relaxed">
            Plutôt que de concevoir fastidieusement les questions/réponses de mes flashcards, le modèle LLM lit mes exercices et leçons, génère les combinaisons, et un calendrier de "spaced repetition" est assigné automatiquement.
            Au moment de la révision, l'IA écoute mes réponses (orales ou saisies rapides) pour me donner un feedback qui remet parfois dans le contexte l'information manquante, au lieu d'un bête "vrai/faux".
          </p>
        </div>
      </div>

    </div>
  </section>
</template>
