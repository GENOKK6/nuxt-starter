<script setup>
useHead({
  title: 'FlowBill - Kizamba Gospel',
  meta: [
    { name: 'description', content: 'FlowBill : Plateforme B2B en cours de développement pour automatiser la relance des factures client.' }
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
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            Développement en cours
          </span>
          <span class="text-gray-400 text-sm">2025</span>
        </div>

        <h1 class="text-section mb-6 text-4xl font-bold">
          FlowBill : <span style="background: linear-gradient(135deg, #10B981 0%, #059669 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Relance Client Automatisée</span>
        </h1>

        <p class="text-xl mb-8 text-gray-300">
          FlowBill est mon prochain grand projet B2B ("Business to Business"). Il a pour vocation de permettre aux entreprises et freelances de ne plus perdre de temps sur les impayés, en automatisant intégralement leurs processus de relance grâce à la lecture IA des devis.
        </p>

        <!-- Tech stack -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="p-4 rounded-xl text-center border border-gray-800" style="background: rgba(255,255,255,0.05)">
            <div class="text-2xl mb-2">🎨</div>
            <div class="text-xs text-gray-400">HTML5 / CSS3</div>
          </div>
          <div class="p-4 rounded-xl text-center border border-gray-800" style="background: rgba(255,255,255,0.05)">
            <div class="text-2xl mb-2">🧠</div>
            <div class="text-xs text-gray-400">IA Documentaire</div>
          </div>
          <div class="p-4 rounded-xl text-center border border-gray-800" style="background: rgba(255,255,255,0.05)">
            <div class="text-2xl mb-2">⚙️</div>
            <div class="text-xs text-gray-400">PHP (Réflexion)</div>
          </div>
          <div class="p-4 rounded-xl text-center border border-gray-800" style="background: rgba(255,255,255,0.05)">
            <div class="text-2xl mb-2">🚀</div>
            <div class="text-xs text-gray-400">Phase Prototypage</div>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex flex-wrap gap-4 mt-8">
          <a href="/FlowBill/index.html" target="_blank" class="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-colors font-medium flex items-center gap-2">
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
          <iframe src="/FlowBill/index.html" class="w-full h-full" frameborder="0"></iframe>
        </div>
      </div>

      <!-- Description -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.2s;">
        <h2 class="text-2xl font-semibold mb-6">Phase de Création : Où en est le projet ?</h2>
        <div class="p-8 rounded-2xl border border-gray-800" style="background: rgba(255,255,255,0.05)">
          <p class="text-gray-400 leading-relaxed mb-6">
            Actuellement au <strong>tout début du cycle de développement</strong>, l'interface utilisateur de la plateforme a été imaginée et développée de zéro (from scratch) pour l'instant en HTML et CSS pur.
          </p>
          <p class="text-gray-400 leading-relaxed mb-6">
            Nous ne sommes qu'en phase d'analyse de l'architecture. La réflexion est portée sur une question majeure : <em>Comment concevoir l'expérience de téléchargement de documents (PDF formatés de devis / factures), puis configurer l'intelligence artificielle pour extraire proprement l'adresse du client et le montant à recouvrer ?</em>
          </p>
          <p class="text-gray-400 leading-relaxed">
            Dans les semaines à venir, un développement Backend (très probablement en PHP) viendra supporter cette partie "Front-end" pour offrir la logique d'authentification des entreprises et le stockage en base de données. 
          </p>
        </div>
      </div>

    </div>
  </section>
</template>
