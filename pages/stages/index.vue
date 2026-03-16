<script setup>
useHead({
  title: 'Mes Stages - Kizamba Gospel',
  meta: [
    {
      name: 'description',
      content: 'Retour sur mes expériences professionnelles : stage 2025 et stage 2026 en développement web et IA.'
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
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-16 reveal-up">
        <span class="text-sm font-semibold text-amber-500 tracking-widest uppercase">Stages</span>
        <h1 class="text-section apple-heading mt-4 mb-6">
          Mes <span class="gradient-text">expériences</span> professionnelles
        </h1>
        <p class="text-xl apple-body max-w-2xl">
          Découvrez mes deux périodes de stage en entreprise, les projets réalisés
          et les compétences développées dans le monde professionnel.
        </p>
      </div>

      <!-- Stages grid -->
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Stage 2025 -->
        <div class="reveal-up" style="animation-delay: 0.1s;">
          <div class="bg-apple-light-gray/30 rounded-2xl border border-gray-800 overflow-hidden hover:border-amber-500/50 transition-all duration-300">
            <div class="bg-linear-to-r from-[#FFD700] to-[#B8860B] p-6 text-white">
              <div class="text-sm opacity-90 mb-1">Stage de 1ère année</div>
              <h2 class="text-2xl font-semibold mb-1">Stage 2025</h2>
              <p class="text-sm opacity-90">Durée : 4 semaines</p>
            </div>
            <div class="p-6">
              <div class="mb-4 text-gray-400">
                <p><strong>Entreprise :</strong> Eid Batiment</p>
                <p><strong>Poste :</strong> Consultant Initiation IA</p>
              </div>
              <p class="text-gray-400 mb-6 leading-relaxed">
                Accompagnement d'un entrepreneur du bâtiment dans la transition numérique. 
                Initiation aux outils d'IA générative (ChatGPT, Claude) pour l'optimisation administrative 
                et la rédaction de devis.
              </p>
              <div class="mb-6">
                <h4 class="text-sm font-semibold mb-3 text-gray-300">Domaines d'intervention</h4>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-amber-900/20 border border-amber-900/30 rounded-lg text-xs">Acculturation IA</span>
                  <span class="px-3 py-1 bg-amber-900/20 border border-amber-900/30 rounded-lg text-xs">ChatGPT</span>
                  <span class="px-3 py-1 bg-amber-900/20 border border-amber-900/30 rounded-lg text-xs">Optimisation Administrative</span>
                </div>
              </div>
              <NuxtLink to="/stages/2025" class="btn-secondary w-full text-center block">
                Voir les détails
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Stage 2026 -->
        <div class="reveal-up" style="animation-delay: 0.2s;">
          <div class="bg-apple-light-gray/30 rounded-2xl border border-gray-800 overflow-hidden hover:border-amber-500/50 transition-all duration-300">
            <div class="bg-linear-to-r from-[#FFD700] to-[#8B6508] p-6 text-white">
              <div class="text-sm opacity-90 mb-1">Stage de 2ème année</div>
              <h2 class="text-2xl font-semibold mb-1">Stage 2026</h2>
              <p class="text-sm opacity-90">Durée : 6 semaines</p>
            </div>
            <div class="p-6">
              <div class="mb-4 text-gray-400">
                <p><strong>Entreprise :</strong> Lookiz</p>
                <p><strong>Poste :</strong> Développeur Backend IA</p>
              </div>
              <p class="text-gray-400 mb-6 leading-relaxed">
                Développement du moteur conversationnel de la peluche intelligente Ary. 
                Intégration d'API OpenAI/Claude, gestion de scripts Python pour la génération de JSON 
                éducatifs et sécurisation des interactions.
              </p>
              <div class="mb-6">
                <h4 class="text-sm font-semibold mb-3 text-gray-300">Technologies utilisées</h4>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-amber-900/20 border border-amber-900/30 rounded-lg text-xs">Python</span>
                  <span class="px-3 py-1 bg-amber-900/20 border border-amber-900/30 rounded-lg text-xs">OpenAI / Claude API</span>
                  <span class="px-3 py-1 bg-amber-900/20 border border-amber-900/30 rounded-lg text-xs">JSON</span>
                  <span class="px-3 py-1 bg-amber-900/20 border border-amber-900/30 rounded-lg text-xs">Security (Red Teaming)</span>
                </div>
              </div>
              <NuxtLink to="/stages/2026" class="btn-secondary w-full text-center block">
                Voir le rapport détaillé
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills acquired banner -->
      <div class="mt-20 reveal-up" style="animation-delay: 0.3s;">
        <div class="bg-linear-to-r from-amber-900/10 to-amber-900/20 p-8 rounded-3xl border border-amber-900/30">
          <div class="text-center">
            <h3 class="text-2xl font-semibold mb-4">Compétences acquises</h3>
            <p class="text-gray-400 max-w-3xl mx-auto mb-8">
              Ces stages m'ont permis de renforcer mes compétences techniques mais aussi
              d'apprendre à travailler en équipe, à gérer des projets et à communiquer
              efficacement avec des clients et des encadrants.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <span class="px-4 py-2 bg-amber-900/20 border border-amber-900/30 rounded-lg text-sm">Travail d'équipe</span>
              <span class="px-4 py-2 bg-amber-900/20 border border-amber-900/30 rounded-lg text-sm">Gestion de projet</span>
              <span class="px-4 py-2 bg-amber-900/20 border border-amber-900/30 rounded-lg text-sm">Intégration IA</span>
              <span class="px-4 py-2 bg-orange-900/20 border border-orange-900/30 rounded-lg text-sm">Documentation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech-tag {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  margin: 2px;
  transition: all 0.3s;
}

.tech-tag:hover {
  background: rgba(255, 215, 0, 0.2);
  color: #FFD700;
}
</style>
