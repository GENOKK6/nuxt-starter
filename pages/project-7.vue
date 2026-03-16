<script setup>
useHead({
  title: 'Gestion de Bibliothèque - Kizamba Gospel',
  meta: [
    { name: 'description', content: 'Application mobile multi-plateforme développée avec .NET MAUI et XAML - Gestion de catalogue et SQLite' }
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          Retour aux projets
        </NuxtLink>
      </div>

      <!-- Hero -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.1s;">
        <div class="flex items-center gap-3 mb-4">
          <span class="badge">
            <span class="w-2 h-2 rounded-full bg-amber-600"></span>
            .NET MAUI
          </span>
          <span class="text-gray-400 text-sm">2025</span>
        </div>

        <!-- Project Image -->
        <div class="mb-12 rounded-2xl overflow-hidden border border-gray-800 reveal-up" style="animation-delay: 0.15s;">
          <img src="/images/project-7.png" alt="Library MAUI Mockup" class="w-full h-auto object-cover aspect-video">
        </div>

        <h1 class="text-section apple-heading mb-6">
          Gestion de <span class="gradient-text">Bibliothèque</span> Mobile
        </h1>

        <p class="text-xl apple-body mb-8">
          Exploration du développement cross-platform avec .NET MAUI. 
          Cette application permet de gérer un catalogue de livres complet avec une interface moderne et fluide, disponible sur Windows et Mobile.
        </p>

        <!-- Tech stack -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">📱</div>
            <div class="text-xs text-gray-400">.NET MAUI</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">💎</div>
            <div class="text-xs text-gray-400">XAML</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">💾</div>
            <div class="text-xs text-gray-400">SQLite / XML</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🔄</div>
            <div class="text-xs text-gray-400">MVVM Pattern</div>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex flex-wrap gap-4">
          <a href="https://github.com/KizambaGospel" target="_blank" class="btn-primary flex items-center gap-2">
            Voir sur GitHub
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Description -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.2s;">
        <h2 class="text-2xl font-semibold mb-6">Description du projet</h2>
        <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800">
          <p class="text-gray-400 leading-relaxed mb-6">
            Le projet BiblioMAUI a été conçu pour tester les capacités de .NET MAUI dans un contexte de gestion d'inventaire. 
            L'application propose une interface riche utilisant XAML pour définir des composants visuels adaptatifs.
          </p>
          <p class="text-gray-400 leading-relaxed">
            Grâce au pattern MVVM, les données sont découplées de l'interface, ce qui a permis d'implémenter facilement 
            des fonctionnalités de recherche en temps réel et de filtrage par catégories.
          </p>
        </div>
      </div>

      <!-- Features -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.3s;">
        <h2 class="text-2xl font-semibold mb-6">Innovations techniques</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">🎨</div>
            <h3 class="font-semibold mb-3">UI Moderne</h3>
            <p class="text-sm text-gray-400">
              Utilisation intensive de styles globaux et de templates XAML pour une cohérence visuelle sur toutes les plateformes.
            </p>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">🗄️</div>
            <h3 class="font-semibold mb-3">Persistance Hybride</h3>
            <p class="text-sm text-gray-400">
              Mise en œuvre du stockage local via SQLite pour les données structurées et XML pour les configurations.
            </p>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">🧭</div>
            <h3 class="font-semibold mb-3">Navigation Shell</h3>
            <p class="text-sm text-gray-400">
              Exploitation du MAUI Shell pour une structure d'application claire et des transitions fluides entre les pages.
            </p>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">🏗️</div>
            <h3 class="font-semibold mb-3">MVVM natif</h3>
            <p class="text-sm text-gray-400">
              Liaisons de données bidirectionnelles (Data Binding) pour une synchronisation parfaite entre le modèle et la vue.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}
</style>
