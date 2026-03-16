<script setup>
useHead({
  title: 'Architecture & POO - Kizamba Gospel',
  meta: [
    { name: 'description', content: 'Projets axés sur les concepts de programmation orientée objet et l\'architecture MVC en PHP.' }
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
            <span class="w-2 h-2 rounded-full bg-red-500"></span>
            Architecture
          </span>
          <span class="text-gray-400 text-sm">2025</span>
        </div>

        <h1 class="text-section apple-heading mb-6">
          Architecture <span class="gradient-text">MVC & POO</span>
        </h1>

        <p class="text-xl apple-body mb-8">
          Exploration approfondie des structures logicielles modernes. Passage du code procédural vers une architecture solide orientée objet et structurée selon le pattern Model-View-Controller.
        </p>

        <!-- Tech stack -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🏗️</div>
            <div class="text-xs text-gray-400">MVC Pattern</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🧱</div>
            <div class="text-xs text-gray-400">POO Avancée</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🔌</div>
            <div class="text-xs text-gray-400">Interfaces / Abstraction</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">📂</div>
            <div class="text-xs text-gray-400">Autoloading</div>
          </div>
        </div>
      </div>

      <!-- Description -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.2s;">
        <h2 class="text-2xl font-semibold mb-6">La rigueur au service du code</h2>
        <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800">
          <p class="text-gray-400 leading-relaxed mb-6">
            Ces travaux illustrent ma maîtrise théorique et pratique des patterns indispensables au développement d'applications professionnelles. J'ai mis en place mes propres frameworks MVC légers pour comprendre la mécanique interne du routage et du dispatching de requêtes.
          </p>
          <p class="text-gray-400 leading-relaxed">
            La programmation orientée objet (POO) me permet de concevoir des systèmes modulaires, faciles à tester et à maintenir, en respectant les principes SOLID.
          </p>
        </div>
      </div>

      <!-- Technical Points -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.3s;">
        <h2 class="text-2xl font-semibold mb-6">Compétences démontrées</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">🧩</div>
            <h3 class="font-semibold mb-3">Modularité</h3>
            <p class="text-sm text-gray-400">
              Décomposition de l'application en modules indépendants et réutilisables grâce aux classes PHP.
            </p>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">🚦</div>
            <h3 class="font-semibold mb-3">Routage Centralisé</h3>
            <p class="text-sm text-gray-400">
              Mise en place d'un "Front Controller" gérant toutes les requêtes HTTP et les redirigeant vers les bons contrôleurs.
            </p>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">🗄️</div>
            <h3 class="font-semibold mb-3">Abstraction de Données</h3>
            <p class="text-sm text-gray-400">
              Utilisation de patterns comme le Singleton ou le Repository pour isoler la logique d'accès à la base de données.
            </p>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">✨</div>
            <h3 class="font-semibold mb-3">Clean Architecture</h3>
            <p class="text-sm text-gray-400">
              Application de règles de nommage strictes et d'une structure de fichiers organisée pour une clarté maximale.
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
