<script setup>
const currentYear = new Date().getFullYear()

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { name: 'Accueil', href: '#hero' },
      { name: 'À propos', href: '#about' },
      { name: 'Compétences', href: '#skills' },
      { name: 'Projets', href: '#projects' },
      { name: 'Veille', href: '#watch' },
      { name: 'Contact', href: '#contact' }
    ]
  },
  {
    title: 'Réseaux',
    links: [
      { name: 'LinkedIn', href: 'https://linkedin.com/in/ton-profil', external: true },
      { name: 'GitHub', href: 'https://github.com/ton-username', external: true },
      { name: 'Twitter', href: 'https://twitter.com/ton-profil', external: true }
    ]
  },
  {
    title: 'Utile',
    links: [
      { name: 'Télécharger CV', href: '/cv-gospel.pdf', external: true },
      { name: 'Projets GitHub', href: 'https://github.com/ton-username', external: true },
      { name: 'Mentions légales', href: '/mentions-legales', external: false }
    ]
  }
]

const scrollToSection = (href) => {
  if (href.startsWith('#')) {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<template>
  <footer class="bg-gray-900 dark:bg-black text-white py-16 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
        <!-- Colonne 1 : Présentation -->
        <div class="lg:col-span-2">
          <div class="mb-6">
            <a href="#hero" class="text-3xl font-bold hover:text-blue-400 transition-colors">
              <span class="text-blue-400">G.</span> Gospel
            </a>
          </div>
          <p class="text-gray-400 mb-6 max-w-md leading-relaxed">
            Étudiant en BTS SIO option SLAM, passionné par le développement web et la création d'applications innovantes.
            Actuellement à la recherche d'une alternance pour mon deuxième année.
          </p>
          <!-- Badge de statut -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-sm font-semibold">
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Disponible pour une alternance
          </div>
        </div>

        <!-- Colonnes liens -->
        <div v-for="section in footerLinks" :key="section.title" class="lg:col-span-1">
          <h4 class="text-lg font-bold text-white mb-6">{{ section.title }}</h4>
          <ul class="space-y-3">
            <li v-for="link in section.links" :key="link.name">
              <a
                :href="link.href"
                @click.prevent="link.href.startsWith('#') ? scrollToSection(link.href) : null"
                :target="link.external ? '_blank' : '_self'"
                :rel="link.external ? 'noopener noreferrer' : null"
                class="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
              >
                <span class="group-hover:translate-x-1 transition-transform">→</span>
                {{ link.name }}
                <svg v-if="link.external" class="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Ligne de séparation -->
      <div class="border-t border-gray-800 my-12"></div>

      <!-- Bottom section -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="text-center md:text-left">
          <p class="text-gray-400 text-sm">
            © {{ currentYear }} Gospel. Portfolio BTS SIO SLAM.
          </p>
          <p class="text-gray-500 text-xs mt-1">
            Développé avec
            <span class="text-red-500">♥</span>
            en utilisant Nuxt 4, Vue 3 & Tailwind CSS
          </p>
        </div>

        <!-- Badges tech stack -->
        <div class="flex items-center gap-3">
          <img src="https://img.shields.io/badge/Nuxt-4-18C48C?logo=nuxt.js&logoColor=white" alt="Nuxt" class="h-6">
          <img src="https://img.shields.io/badge/Vue-3-4FC08D?logo=vue.js&logoColor=white" alt="Vue" class="h-6">
          <img src="https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind" class="h-6">
        </div>
      </div>
    </div>
  </footer>
</template>
