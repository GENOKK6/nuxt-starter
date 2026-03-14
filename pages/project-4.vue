<script setup>
useHead({
  title: 'Bureau d\'études & Gestion - Kizamba Gospel',
  meta: [
    { name: 'description', content: 'Projets orientés vers la gestion immobilière et les applications métiers du bâtiment - PHP et calculs dynamiques.' }
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
          <span class="badge">
            <span class="w-2 h-2 rounded-full bg-blue-400"></span>
            Gestion Métier
          </span>
          <span class="text-gray-400 text-sm">2024-25</span>
        </div>

        <h1 class="text-section apple-heading mb-6">
          Projets <span class="gradient-text">Bureau d'études</span>
        </h1>

        <p class="text-xl apple-body mb-8">
          Développement d'outils de gestion spécifiques pour le secteur du bâtiment et de l'immobilier. Une passerelle entre mon background en Bâtiment (Bac Pro) et mes compétences actuelles en développement logiciel.
        </p>

        <!-- Tech stack -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🏠</div>
            <div class="text-xs text-gray-400">Gestion Immobilière</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">📋</div>
            <div class="text-xs text-gray-400">PHP Formulaires</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🧱</div>
            <div class="text-xs text-gray-400">Logique Bâtiment</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🧮</div>
            <div class="text-xs text-gray-400">Calculs dynamiques</div>
          </div>
        </div>
      </div>

      <!-- Description -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.2s;">
        <h2 class="text-2xl font-semibold mb-6">L’union du digital et du métier</h2>
        <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800">
          <p class="text-gray-400 leading-relaxed mb-6">
            Ces projets, tels que la **Société Immobilière de Gestion**, montrent ma capacité à comprendre les règles métiers métier complexes du bâtiment et à les traduire en code. J'ai développé des systèmes permettant de quantifier des pièces, de gérer des formulaires techniques et d'automatiser des processus administratifs.
          </p>
          <p class="text-gray-400 leading-relaxed">
            Ma connaissance du terrain acquise lors de mon Bac Pro Technicien du Bâtiment me donne un avantage unique pour concevoir des outils digitaux réellement adaptés aux besoins des entrepreneurs du secteur.
          </p>
        </div>
      </div>

      <!-- Features -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.3s;">
        <h2 class="text-2xl font-semibold mb-6">Outils développés</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">📄</div>
            <h3 class="font-semibold mb-3">Formulaire de Pièces</h3>
            <p class="text-sm text-gray-400">
              Système de saisie dynamique pour le métré et la quantification des éléments de construction.
            </p>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">🏘️</div>
            <h3 class="font-semibold mb-3">Suivi Immobilier</h3>
            <p class="text-sm text-gray-400">
              Outil de gestion des biens et des dossiers pour les compagnies immobilières.
            </p>
          </div>
        </div>
      </div>

      <!-- Back -->
      <div class="text-center reveal-up" style="animation-delay: 0.5s;">
        <NuxtLink to="/portfolio" class="btn-outline">
          ← Retour au portfolio
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
