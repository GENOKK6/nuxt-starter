<script setup>
useHead({
  title: 'GestionEcole - Kizamba Gospel',
  meta: [
    { name: 'description', content: 'Application de gestion académique développée avec Laravel et Tailwind CSS - Gestion des élèves, notes et absences.' }
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
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            Laravel
          </span>
          <span class="text-gray-400 text-sm">2024-25</span>
        </div>

        <h1 class="text-section apple-heading mb-6">
          GestionEcole : Portail <span class="gradient-text">Académique</span>
        </h1>

        <p class="text-xl apple-body mb-8">
          Système complet de gestion pour établissements scolaires. Centralisation des données élèves, suivi des performances académiques et outils de communication pour le corps enseignant.
        </p>

        <!-- Tech stack -->
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">💎</div>
            <div class="text-xs text-gray-400">Laravel</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🌊</div>
            <div class="text-xs text-gray-400">Tailwind CSS</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🐬</div>
            <div class="text-xs text-gray-400">MySQL</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">⚡</div>
            <div class="text-xs text-gray-400">Vite.js</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🎛️</div>
            <div class="text-xs text-gray-400">UI/UX Components</div>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex flex-wrap gap-4">
          <a href="https://github.com/GENOKK6" target="_blank" class="btn-primary flex items-center gap-2">
            Voir sur GitHub
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Description -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.2s;">
        <h2 class="text-2xl font-semibold mb-6">Objectifs pédagogiques</h2>
        <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800">
          <p class="text-gray-400 leading-relaxed mb-6">
            Ce projet vise à répondre aux problématiques de gestion administrative complexe au sein d'un lycée ou d'une école supérieure. 
            Il intègre une gestion fine des utilisateurs (Admin, Prof, Elève) avec des interfaces dédiées pour chacun.
          </p>
          <p class="text-gray-400 leading-relaxed">
            L'accent a été mis sur l'ergonomie avec l'utilisation de **Tailwind CSS**, permettant une navigation fluide et un design épuré, facilitant la saisie des notes et le suivi des absences par les professeurs.
          </p>
        </div>
      </div>

      <!-- Features -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.3s;">
        <h2 class="text-2xl font-semibold mb-6">Fonctionnalités clés</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">🎓</div>
            <h3 class="font-semibold mb-3">Dossier Élève interactif</h3>
            <p class="text-sm text-gray-400">
              Chaque élève possède son profil avec historique des notes, absences et bulletins.
            </p>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">📈</div>
            <h3 class="font-semibold mb-3">Suivi des Performances</h3>
            <p class="text-sm text-gray-400">
              Calcul automatique des moyennes par matière et par semestre avec pondération des coefficients.
            </p>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">🗓️</div>
            <h3 class="font-semibold mb-3">Gestion des Absences</h3>
            <p class="text-sm text-gray-400">
              Outil de saisie rapide pour les enseignants et consultation en temps réel pour l'administration.
            </p>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">🏢</div>
            <h3 class="font-semibold mb-3">Organisation des Classes</h3>
            <p class="text-sm text-gray-400">
              Possibilité de créer des classes, d'y affecter des élèves et de définir des emplois du temps de base.
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
