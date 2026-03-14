<script setup>
useHead({
  title: 'AnimoSIO - Kizamba Gospel',
  meta: [
    { name: 'description', content: 'Boutique en ligne animalière développée en PHP natif - Gestion de catalogue, paniers et sessions.' }
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
            <span class="w-2 h-2 rounded-full bg-orange-500"></span>
            PHP Natif
          </span>
          <span class="text-gray-400 text-sm">2024</span>
        </div>

        <h1 class="text-section apple-heading mb-6">
          AnimoSIO : Boutique <span class="gradient-text">Animalière</span>
        </h1>

        <p class="text-xl apple-body mb-8">
          Développement d'une boutique en ligne "from scratch" en PHP natif. Un projet fondamental pour maîtriser la logique backend sans framework, la gestion des sessions utilisateurs et les bases de données SQL.
        </p>

        <!-- Tech stack -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🐘</div>
            <div class="text-xs text-gray-400">PHP 8</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">💾</div>
            <div class="text-xs text-gray-400">MySQL</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🎨</div>
            <div class="text-xs text-gray-400">CSS3 / HTML5</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">📦</div>
            <div class="text-xs text-gray-400">Session Management</div>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex flex-wrap gap-4">
          <a href="https://github.com/GENOKK6" target="_blank" class="btn-primary flex items-center gap-2">
            Voir le code
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Description -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.2s;">
        <h2 class="text-2xl font-semibold mb-6">Un projet socle</h2>
        <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800">
          <p class="text-gray-400 leading-relaxed mb-6">
            AnimoSIO est l'un de mes premiers projets dynamiques complets. Il m'a permis de comprendre comment construire une application web à partir de rien : de la création du catalogue de produits à la gestion complexe d'un panier d'achat persistant via les sessions PHP.
          </p>
          <p class="text-gray-400 leading-relaxed">
            L'application gère également l'upload et l'affichage dynamique de photos de produits, ainsi qu'un système de filtrage par catégories (chiens, chats, oiseaux, etc.), offrant une expérience utilisateur fluide.
          </p>
        </div>
      </div>

      <!-- Technical Points -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.3s;">
        <h2 class="text-2xl font-semibold mb-6">Points techniques abordés</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">🛒</div>
            <h3 class="font-semibold mb-3">Panier Dynamique</h3>
            <p class="text-sm text-gray-400">
              Utilisation de tableaux circulaires et de variables de session pour maintenir les articles dans le panier durant la navigation.
            </p>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">🖼️</div>
            <h3 class="font-semibold mb-3">Gestion des Médias</h3>
            <p class="text-sm text-gray-400">
              Liaison entre les fichiers physiques stockés sur le serveur et les références en base de données pour un affichage optimisé.
            </p>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">📋</div>
            <h3 class="font-semibold mb-3">Formulaires & Validation</h3>
            <p class="text-sm text-gray-400">
              Système de commande avec vérification des entrées utilisateurs et stockage sécurisé des informations en base MySQL.
            </p>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-3xl mb-4">📱</div>
            <h3 class="font-semibold mb-3">Responsive Design</h3>
            <p class="text-sm text-gray-400">
              Interface adaptée aux mobiles pour permettre aux clients de consulter le catalogue en déplacement.
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
