<script setup>
const darkMode = ref(false)

// Vérifier la préférence système au chargement
// Toujours forcer le mode sombre
onMounted(() => {
  darkMode.value = true
  document.documentElement.classList.add('dark')
  localStorage.setItem('color-theme', 'dark')
})

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  if (darkMode.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('color-theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('color-theme', 'light')
  }
}

const isMobileMenuOpen = ref(false)

// Navigation multi-pages
const navItems = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/about' },
  { name: 'Compétences', path: '/skills' },
  { name: 'Projets', path: '/portfolio' },
  { name: 'Veille', path: '/veille' },
  { name: 'Stages', path: '/stages' },
  { name: 'Contact', path: '/contact' },
]

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header class="simple-header">
    <div class="container">
      <nav class="simple-nav">
        <NuxtLink to="/" class="simple-logo">
          <span style="background: linear-gradient(135deg, var(--amber-500), var(--orange-600)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">GK</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <ul class="simple-nav-links hidden md:flex">
          <li v-for="item in navItems" :key="item.name">
            <NuxtLink
              :to="item.path"
              @click="closeMobileMenu"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>

        <!-- Dark Mode Toggle Desktop (Désactivé car thème forcé noir/or) -->
        <div class="hidden md:flex items-center gap-4">
          <div class="p-2 text-amber-500">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle menu"
        >
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
        <ul class="flex flex-col gap-4">
          <li v-for="item in navItems" :key="item.name">
            <NuxtLink
              :to="item.path"
              @click="closeMobileMenu"
              class="block text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors font-medium"
              style="padding: 0.5rem 0;"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
        <!-- Dark Mode Indicator Mobile -->
        <div class="mt-4 pt-4 border-t border-gray-700">
          <div class="flex items-center gap-2 text-amber-500 font-medium">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
            </svg>
            Mode Sombre Or
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
