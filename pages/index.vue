<script setup>
// Configuration SEO
useHead({
  title: 'Gospel - Portfolio BTS SIO SLAM',
  meta: [
    {
      name: 'description',
      content: 'Portfolio de Gospel, étudiant en BTS SIO option SLAM. Développeur web spécialisé en Vue.js, PHP, et Python. Compétences, projets et veille technologique.'
    },
    {
      name: 'keywords',
      content: 'BTS SIO, SLAM, développeur web, portfolio, Vue.js, PHP, Python, alternance, stage, informatique'
    },
    {
      property: 'og:title',
      content: 'Gospel - Portfolio BTS SIO SLAM'
    },
    {
      property: 'og:description',
      content: 'Portfolio étudiant BTS SIO SLAM - Développement web, compétences techniques, projets et veille technologique'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})

// Définir le layout
definePageMeta({
  layout: 'default'
})
</script>

<template>
  <!-- Toutes les sections sont directement appelées ici -->
  <HeroSection />
  <AboutSection />
  <SkillsSection />
  <ProjectsSection />
  <WatchSection />
  <ContactSection />
</template>
