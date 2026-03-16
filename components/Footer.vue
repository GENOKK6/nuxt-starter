<script setup>
const currentYear = new Date().getFullYear()

// Navigation multi-pages
const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { name: 'Accueil', path: '/' },
      { name: 'À propos', path: '/about' },
      { name: 'Compétences', path: '/skills' },
      { name: 'Projets', path: '/portfolio' },
      { name: 'Veille', path: '/veille' },
      { name: 'Contact', path: '/contact' }
    ]
  },
  {
    title: 'Réseaux',
    links: [
      { name: 'LinkedIn', href: 'https://linkedin.com/in/kizamba-gospel', external: true },
      { name: 'GitHub', href: 'https://github.com/gospel-kizamba', external: true },
      { name: 'Twitter/X', href: 'https://x.com/gospel_kizamba', external: true }
    ]
  },
  {
    title: 'Utile',
    links: [
      { name: 'Télécharger CV', href: '/cv-gospel.pdf', external: true },
      { name: 'Projets GitHub', href: 'https://github.com/gospel-kizamba', external: true },
      { name: 'Mentions légales', href: '/mentions-legales', external: false }
    ]
  }
]
</script>

<template>
  <footer class="simple-footer">
    <div class="container">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; margin-bottom: 2rem;">
        <!-- Colonne 1 : Présentation -->
        <div>
          <div style="margin-bottom: 1rem;">
            <NuxtLink to="/" class="simple-logo" style="font-size: 1.5rem;">GK</NuxtLink>
          </div>
          <p style="color: #6b7280; font-size: 0.95rem; line-height: 1.6;">
            Étudiant en BTS SIO option SLAM, passionné par le développement web et la création d'applications innovantes.
          </p>
          <!-- Badge de statut -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-sm font-semibold" style="margin-top: 1rem;">
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Disponible pour une alternance
          </div>
        </div>

        <!-- Colonnes liens -->
        <div v-for="section in footerLinks" :key="section.title">
          <h4 style="color: white; margin-bottom: 1rem; font-size: 1rem; font-weight: 700;">{{ section.title }}</h4>
          <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.75rem;">
            <li v-for="link in section.links" :key="link.name">
              <NuxtLink
                v-if="!link.external"
                :to="link.path"
                class="text-gray-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2 group"
              >
                <span class="group-hover:translate-x-1 transition-transform">→</span>
                {{ link.name }}
              </NuxtLink>
              <a
                v-else
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2 group"
              >
                <span class="group-hover:translate-x-1 transition-transform">→</span>
                {{ link.name }}
                <svg class="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Ligne de séparation -->
      <div class="border-t border-gray-800" style="margin: 2rem 0;"></div>

      <!-- Bottom section -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="text-center md:text-left">
          <p style="color: #9ca3af; font-size: 0.875rem;">
            © {{ currentYear }} Kizamba Gospel. Tous droits réservés.
          </p>
          <p style="color: #9ca3af; font-size: 0.75rem; margin-top: 0.25rem;">
            Portfolio BTS SIO SLAM │ Développé avec
            <span style="color: #ef4444;">♥</span>
            en utilisant Nuxt 4, Vue 3 & Tailwind CSS
          </p>
        </div>

        <!-- Badges tech stack -->
        <div style="display: flex; gap: 0.75rem; align-items: center;">
          <img src="https://img.shields.io/badge/Nuxt-4-18C48C?logo=nuxt.js&logoColor=white" alt="Nuxt" style="height: 24px;">
          <img src="https://img.shields.io/badge/Vue-3-4FC08D?logo=vue.js&logoColor=white" alt="Vue" style="height: 24px;">
          <img src="https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind" style="height: 24px;">
        </div>
      </div>
    </div>
  </footer>
</template>
