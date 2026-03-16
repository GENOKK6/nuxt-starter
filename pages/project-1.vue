<script setup>
useHead({
  title: 'SicilyLines - Kizamba Gospel',
  meta: [
    { name: 'description', content: 'Application de gestion de traversées maritimes développée avec Laravel - Architecture MVC, Eloquent ORM' }
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
            <span class="w-2 h-2 rounded-full bg-amber-500"></span>
            Laravel
          </span>
          <span class="text-gray-400 text-sm">2024-25</span>
        </div>

        <h1 class="text-section apple-heading mb-6">
          SicilyLines : Gestion de <span class="gradient-text">Traversées</span>
        </h1>

        <p class="text-xl apple-body mb-8">
          Développement d'une plateforme web robuste pour la gestion des liaisons maritimes entre la Sicile et les îles Egadi. 
          Maîtrise complète du framework Laravel pour la gestion des réservations, des horaires et du personnel.
        </p>

        <!-- Tech stack -->
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">💎</div>
            <div class="text-xs text-gray-400">Laravel 10</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🐘</div>
            <div class="text-xs text-gray-400">PHP 8.2</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🐬</div>
            <div class="text-xs text-gray-400">MySQL</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🎨</div>
            <div class="text-xs text-gray-400">Blade / CSS</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">⚡</div>
            <div class="text-xs text-gray-400">Vite</div>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex flex-wrap gap-4">
          <a href="https://github.com/GENOKK6/SicilyLines" target="_blank" class="btn-primary flex items-center gap-2">
            Voir le code sur GitHub
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
            SicilyLines est un projet d'envergure réalisé en BTS SIO SLAM. Il simule les besoins d'une compagnie de transport maritime. 
            L'objectif était de mettre en place une solution web capable de gérer des données complexes : de l'affectation des bateaux aux lignes, 
            jusqu'au système de réservation pour les passagers.
          </p>
          <p class="text-gray-400 leading-relaxed">
            Grâce à Laravel, j'ai pu implémenter une logique métier solide avec l'ORM Eloquent, permettant des relations complexes entre les ports, les secteurs, et les traversées. Le projet respecte les principes du "Clean Code" et de la séparation des responsabilités.
          </p>
        </div>
      </div>

      <!-- Features -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.3s;">
        <h2 class="text-2xl font-semibold mb-6">Fonctionnalités principales</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">🚢</div>
            <h3 class="font-semibold mb-3">Gestion de Flotte</h3>
            <p class="text-sm text-gray-400">
              Système complet de gestion des bateaux avec caractéristiques techniques et capacités de transport.
            </p>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">📍</div>
            <h3 class="font-semibold mb-3">Cartographie des Lignes</h3>
            <p class="text-sm text-gray-400">
              Organisation des traversées par secteurs géographiques et ports d'attache, avec calcul des distances.
            </p>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">🎟️</div>
            <h3 class="font-semibold mb-3">Système de Réservation</h3>
            <p class="text-sm text-gray-400">
              Interface utilisateur permettant de consulter les disponibilités en temps réel et de réserver des places.
            </p>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">🔐</div>
            <h3 class="font-semibold mb-3">Backoffice Admin</h3>
            <p class="text-sm text-gray-400">
              Espace sécurisé permettant aux administrateurs de configurer les tarifs, les horaires et de gérer les clients.
            </p>
          </div>
        </div>
      </div>

      <!-- Architecture -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.4s;">
        <h2 class="text-2xl font-semibold mb-6">Concepts Techniques</h2>
        <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800">
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="font-semibold mb-4 text-amber-400">Laravel & Backend</h3>
              <ul class="space-y-2 text-sm text-gray-400">
                <li>• Modèles Eloquent et relations (1:n, n:m)</li>
                <li>• Migrations de base de données SQL</li>
                <li>• Contrôleurs structurés et validation de formulaires</li>
                <li>• Middlewares d'authentification</li>
              </ul>
            </div>
            <div>
              <h3 class="font-semibold mb-4 text-green-400">Base de données</h3>
              <ul class="space-y-2 text-sm text-gray-400">
                <li>• Modélisation Merise (MCD/MLD)</li>
                <li>• Optimisation des index</li>
                <li>• Intégrité référentielle</li>
                <li>• Requêtes complexes avec Query Builder</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Back -->
      <div class="text-center reveal-up" style="animation-delay: 0.6s;">
        <NuxtLink to="/portfolio" class="btn-outline">
          ← Retour au portfolio
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
