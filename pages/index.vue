<script setup>
useHead({
  title: 'Kizamba Gospel - Développeur Web',
  meta: [
    {
      name: 'description',
      content: 'Portfolio de Kizamba Gospel, développeur web en BTS SIO SLAM 2, spécialisé dans l\'IA et la génération de code.'
    }
  ]
})

definePageMeta({
  layout: 'simple'
})
</script>

<template>
  <!-- Hero Section -->
  <section style="padding: 10rem 0 8rem 0; margin-top: 3rem;">
    <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm text-white/90 mb-8">
        <span class="w-2 h-2 rounded-full" style="background: #10b981; animation: blink 2s infinite;"></span>
        BTS SIO SLAM · 2ème année
      </div>

      <!-- Avatar -->
      <div style="width: 120px; height: 120px; background: linear-gradient(135deg, #007AFF, #5856D6); border-radius: 50%; margin: 0 auto 2rem auto; display: flex; align-items: center; justify-content: center; font-size: 3rem; color: white; font-weight: 800; box-shadow: 0 0 0 6px rgba(255,255,255,0.1), 0 12px 40px rgba(0,122,255,0.3);">
        KG
      </div>

      <h1 class="text-hero apple-heading mb-6">Kizamba Gospel</h1>

      <p class="text-xl mb-4" style="color: rgba(255,255,255,0.85);">
        Développeur Web · <strong class="gradient-text">Intelligence Artificielle</strong>
      </p>

      <p class="apple-body mb-10" style="max-width: 620px; margin: 0 auto; font-size: 1.1rem;">
        Je crée des applications modernes en intégrant les meilleurs outils IA.
        Mon objectif : devenir un <strong style="color: #93c5fd;">développeur augmenté</strong>, capable d'utiliser l'IA comme levier pour coder mieux et plus vite.
      </p>

      <!-- CTA Buttons -->
      <div class="flex gap-4 justify-center flex-wrap">
        <NuxtLink to="/about" class="btn-primary">En savoir plus</NuxtLink>
        <NuxtLink to="/portfolio" class="btn-secondary">Voir mes projets</NuxtLink>
        <NuxtLink to="/contact" class="btn-outline">Me contacter</NuxtLink>
      </div>
    </div>
  </section>

  <!-- Stats rapides -->
  <section class="section">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-6">
        <div class="stat-card reveal-up">
          <div style="font-size: 3rem; font-weight: 800; background: linear-gradient(180deg, #007AFF, #5856D6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 0.5rem;">2</div>
          <div class="apple-body">Années de formation</div>
        </div>
        <div class="stat-card reveal-up" style="animation-delay: 0.1s;">
          <div style="font-size: 3rem; font-weight: 800; color: #8b5cf6; margin-bottom: 0.5rem;">2</div>
          <div class="apple-body">Stages réalisés</div>
        </div>
        <div class="stat-card reveal-up" style="animation-delay: 0.2s;">
          <div style="font-size: 3rem; font-weight: 800; color: #10b981; margin-bottom: 0.5rem;">4+</div>
          <div class="apple-body">Projets réalisés</div>
        </div>
        <div class="stat-card reveal-up" style="animation-delay: 0.3s;">
          <div style="font-size: 3rem; font-weight: 800; color: #f59e0b; margin-bottom: 0.5rem;">🤖</div>
          <div class="apple-body">Veille IA active</div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA vers les pages -->
  <section class="section">
    <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <div class="reveal-up">
        <h2 class="text-section apple-heading mb-6">Explorez mon <span class="gradient-text">portfolio</span></h2>
        <p class="apple-body mb-10" style="max-width: 580px; margin: 0 auto; font-size: 1.1rem; line-height: 1.7;">
          Découvrez mon parcours, mes compétences, mes projets et mes expériences professionnelles.
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <NuxtLink to="/about" class="btn-primary">Mon histoire</NuxtLink>
          <NuxtLink to="/skills" class="btn-secondary">Mes compétences</NuxtLink>
          <NuxtLink to="/portfolio" class="btn-secondary">Projets</NuxtLink>
          <NuxtLink to="/stages" class="btn-secondary">Stages</NuxtLink>
          <NuxtLink to="/veille" class="btn-outline">Veille IA</NuxtLink>
          <NuxtLink to="/contact" class="btn-outline">Contact</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Animation reveal on scroll
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
