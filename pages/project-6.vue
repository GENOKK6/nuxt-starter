<script setup>
useHead({
  title: 'SicilyLines Desktop - Kizamba Gospel',
  meta: [
    { name: 'description', content: 'Application de bureau C# WinForms pour la gestion d\'une compagnie maritime - Architecture N-Tier, ADO.NET' }
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
            <span class="w-2 h-2 rounded-full bg-amber-500"></span>
            C# WinForms
          </span>
          <span class="text-gray-400 text-sm">2024</span>
        </div>

        <!-- Project Image -->
        <div class="mb-12 rounded-2xl overflow-hidden border border-gray-800 reveal-up" style="animation-delay: 0.15s;">
          <img src="/images/project-6.png" alt="SicilyLines Desktop Mockup" class="w-full h-auto object-cover aspect-video">
        </div>

        <h1 class="text-section apple-heading mb-6">
          SicilyLines : Interface <span class="gradient-text">Desktop</span>
        </h1>

        <p class="text-xl apple-body mb-8">
          Développement de la branche "Back-office" de SicilyLines en application lourde. 
          Conçu pour les administrateurs, cet outil permet une gestion fine des liaisons et des tarifs directement depuis le système d'exploitation Windows.
        </p>

        <!-- Tech stack -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">💻</div>
            <div class="text-xs text-gray-400">C# / .NET</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🪟</div>
            <div class="text-xs text-gray-400">Windows Forms</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🐬</div>
            <div class="text-xs text-gray-400">MySQL / ADO.NET</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🏗️</div>
            <div class="text-xs text-gray-400">Multi-couches</div>
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
            Cette application Desktop complète le site web SicilyLines en offrant une interface de gestion plus adaptée aux tâches administratives répétitives. 
            L'accent a été mis sur la performance des échanges avec la base de données et la robustesse de l'application face aux erreurs de saisie.
          </p>
          <p class="text-gray-400 leading-relaxed">
            L'architecture logicielle repose sur une séparation claire entre la couche de présentation (WinForms), 
            la couche de domaine (objets métier) et la couche d'accès aux données (DAL), garantissant une maintenance facilitée.
          </p>
        </div>
      </div>

      <!-- Features -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.3s;">
        <h2 class="text-2xl font-semibold mb-6">Points clés</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">🧱</div>
            <h3 class="font-semibold mb-3">Architecture N-Tier</h3>
            <p class="text-sm text-gray-400">
              Utilisation de patterns de conception pour isoler la logique métier de l'accès aux données via des classes de gestion (Manager classes).
            </p>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">🔗</div>
            <h3 class="font-semibold mb-3">Liaisons Complexes</h3>
            <p class="text-sm text-gray-400">
              Gestion dynamique des liaisons entre ports avec contrôle d'intégrité et calculs de tarifs automatiques.
            </p>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">⚙️</div>
            <h3 class="font-semibold mb-3">Performance SQL</h3>
            <p class="text-sm text-gray-400">
              Optimisation des requêtes via ADO.NET pour une réactivité maximale sur des volumes de données importants.
            </p>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">⚠️</div>
            <h3 class="font-semibold mb-3">Robustesse</h3>
            <p class="text-sm text-gray-400">
              Système complet de gestion des exceptions pour éviter tout crash de l'application en cas d'erreur réseau ou SQL.
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
