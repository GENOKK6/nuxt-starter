<script setup>
useHead({
  title: 'Système Bancaire POO - Kizamba Gospel',
  meta: [
    { name: 'description', content: 'Simulation bancaire en C# mettant en œuvre les principes avancés de la POO : héritage, polymorphisme, abstraction.' }
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
            <span class="w-2 h-2 rounded-full bg-orange-500"></span>
            Algorithmique C#
          </span>
          <span class="text-gray-400 text-sm">2024</span>
        </div>

        <!-- Project Image -->
        <div class="mb-12 rounded-2xl overflow-hidden border border-gray-800 reveal-up" style="animation-delay: 0.15s;">
          <img src="/images/project-8.png" alt="Banking System Logic Visualization" class="w-full h-auto object-cover aspect-video">
        </div>

        <h1 class="text-section apple-heading mb-6">
          Architectures <span class="gradient-text">Bancaires</span> & POO
        </h1>

        <p class="text-xl apple-body mb-8">
          Un projet fondamental axé sur la rigueur du code. 
          Cette simulation de services bancaires implémente les concepts les plus avancés de la POO pour créer un système extensible et sécurisé.
        </p>

        <!-- Tech stack -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">💾</div>
            <div class="text-xs text-gray-400">.NET Core</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🧱</div>
            <div class="text-xs text-gray-400">POO Avancée</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🧪</div>
            <div class="text-xs text-gray-400">Unit Testing</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🔐</div>
            <div class="text-xs text-gray-400">Encapsulation</div>
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
        <h2 class="text-2xl font-semibold mb-6">Objectifs pédagogiques</h2>
        <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800">
          <p class="text-gray-400 leading-relaxed mb-6">
            L'objectif de ce projet était de construire un noyau logiciel capable de gérer différents types de comptes (courants, épargne, entreprise) 
            tout en partageant une base commune via l'héritage. 
          </p>
          <p class="text-gray-400 leading-relaxed">
            Une attention particulière a été portée sur le polymorphisme pour le calcul des intérêts et les frais de gestion, 
            permettant de traiter n'importe quel compte de manière générique tout en préservant ses spécificités.
          </p>
        </div>
      </div>

      <!-- Features -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.3s;">
        <h2 class="text-2xl font-semibold mb-6">Concepts implémentés</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">🧬</div>
            <h3 class="font-semibold mb-3">Héritage & Abstraction</h3>
            <p class="text-sm text-gray-400">
              Classes de base abstraites définissant le contrat des comptes et spécialisations concrètes.
            </p>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">🎭</div>
            <h3 class="font-semibold mb-3">Polymorphisme</h3>
            <p class="text-sm text-gray-400">
              Redéfinition des méthodes de transaction pour appliquer des règles métier spécifiques à chaque type de compte.
            </p>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">🛡️</div>
            <h3 class="font-semibold mb-3">Sécurité & Validation</h3>
            <p class="text-sm text-gray-400">
              Encapsulation stricte pour protéger l'état interne des comptes et validation rigoureuse des flux de trésorerie.
            </p>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">📊</div>
            <h3 class="font-semibold mb-3">Transactions</h3>
            <p class="text-sm text-gray-400">
              Journalisation automatique de toutes les opérations pour un audit complet et une traçabilité sans faille.
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
