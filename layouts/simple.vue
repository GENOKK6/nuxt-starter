<script setup>
const mobileMenuOpen = ref(false)
</script>

<template>
  <div class="bg-apple-dark text-apple-text font-sans">
    <!-- Navigation fixe -->
    <nav class="fixed top-0 left-0 right-0 z-50 nav-blur">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex justify-between items-center h-12">
          <NuxtLink to="/" class="text-xl font-semibold tracking-tight text-white">GK</NuxtLink>
          <div class="hidden md:flex items-center gap-8">
            <NuxtLink to="/" class="nav-link text-sm font-medium" :class="{ 'active': $route.path === '/' }">Accueil</NuxtLink>
            <NuxtLink to="/about" class="nav-link text-sm font-medium" :class="{ 'active': $route.path === '/about' }">À propos</NuxtLink>
            <NuxtLink to="/skills" class="nav-link text-sm font-medium" :class="{ 'active': $route.path === '/skills' }">Compétences</NuxtLink>
            <NuxtLink to="/portfolio" class="nav-link text-sm font-medium" :class="{ 'active': $route.path === '/portfolio' }">Projets</NuxtLink>
            <NuxtLink to="/stages" class="nav-link text-sm font-medium" :class="{ 'active': $route.path === '/stages' }">Stages</NuxtLink>
            <NuxtLink to="/certifications" class="nav-link text-sm font-medium" :class="{ 'active': $route.path === '/certifications' }">Certifs</NuxtLink>
            <NuxtLink to="/veille" class="nav-link text-sm font-medium" :class="{ 'active': $route.path === '/veille' }">Veille</NuxtLink>
            <NuxtLink to="/contact" class="nav-link text-sm font-medium" :class="{ 'active': $route.path === '/contact' }">Contact</NuxtLink>
          </div>
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 text-white">
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-black border-t border-gray-800">
        <div class="px-6 py-4 space-y-3">
          <NuxtLink to="/" @click="mobileMenuOpen = false" class="block text-base font-medium" :class=" $route.path === '/' ? 'text-white' : 'text-gray-400 hover:text-white' ">Accueil</NuxtLink>
          <NuxtLink to="/about" @click="mobileMenuOpen = false" class="block text-base font-medium" :class=" $route.path === '/about' ? 'text-white' : 'text-gray-400 hover:text-white' ">À propos</NuxtLink>
          <NuxtLink to="/skills" @click="mobileMenuOpen = false" class="block text-base font-medium" :class=" $route.path === '/skills' ? 'text-white' : 'text-gray-400 hover:text-white' ">Compétences</NuxtLink>
          <NuxtLink to="/portfolio" @click="mobileMenuOpen = false" class="block text-base font-medium" :class=" $route.path === '/portfolio' ? 'text-white' : 'text-gray-400 hover:text-white' ">Projets</NuxtLink>
          <NuxtLink to="/stages" @click="mobileMenuOpen = false" class="block text-base font-medium" :class=" $route.path === '/stages' ? 'text-white' : 'text-gray-400 hover:text-white' ">Stages</NuxtLink>
          <NuxtLink to="/certifications" @click="mobileMenuOpen = false" class="block text-base font-medium" :class=" $route.path === '/certifications' ? 'text-white' : 'text-gray-400 hover:text-white' ">Certifications</NuxtLink>
          <NuxtLink to="/veille" @click="mobileMenuOpen = false" class="block text-base font-medium" :class=" $route.path === '/veille' ? 'text-white' : 'text-gray-400 hover:text-white' ">Veille</NuxtLink>
          <NuxtLink to="/contact" @click="mobileMenuOpen = false" class="block text-base font-medium" :class=" $route.path === '/contact' ? 'text-white' : 'text-gray-400 hover:text-white' ">Contact</NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Contenu de la page avec padding-top -->
    <main class="pt-12">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-800 py-12 mt-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <div class="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <div>© 2025 <span class="text-white">Gospel Kizamba</span></div>
          <div class="flex gap-6 flex-wrap justify-center">
            <a href="https://github.com/GENOKK6" target="_blank" class="hover:text-white">GitHub</a>
            <NuxtLink to="/about" class="hover:text-white">À propos</NuxtLink>
            <NuxtLink to="/skills" class="hover:text-white">Compétences</NuxtLink>
            <NuxtLink to="/portfolio" class="hover:text-white">Projets</NuxtLink>
            <NuxtLink to="/stages" class="hover:text-white">Stages</NuxtLink>
            <NuxtLink to="/certifications" class="hover:text-white">Certificats</NuxtLink>
            <NuxtLink to="/veille" class="hover:text-white">Veille</NuxtLink>
            <NuxtLink to="/contact" class="hover:text-white">Contact</NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* Styles Apple-style globaux pour le layout simple */
:global(html) {
  scroll-behavior: smooth;
}

:global(body) {
  background: #000000;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
}

.nav-blur {
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-link {
  position: relative;
  transition: color 0.3s;
  color: #8e8e93;
}

.nav-link:hover {
  color: #ffffff;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: #FFD700;
  transition: width 0.3s;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-link.active {
  color: #ffffff;
}

/* Classes utilitaires Apple-style */
.apple-heading {
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.05;
}

.apple-body {
  font-weight: 400;
  line-height: 1.6;
  color: #8e8e93;
}

.gradient-text {
  background: linear-gradient(180deg, #FFD700 0%, #DAA520 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.btn-primary {
  background: linear-gradient(135deg, #FFD700 0%, #DAA520 100%);
  color: #000000;
  padding: 14px 32px;
  border-radius: 980px;
  font-weight: 600;
  font-size: 17px;
  transition: all 0.3s;
  display: inline-block;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
}

.btn-primary:hover {
  transform: scale(1.02) translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
}

.btn-secondary {
  background: transparent;
  color: #ffffff;
  padding: 14px 32px;
  border-radius: 980px;
  font-weight: 500;
  font-size: 17px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: inline-block;
  text-decoration: none;
  transition: all 0.3s;
}

.btn-secondary:hover {
  border-color: #FFD700;
  background: rgba(255, 215, 0, 0.1);
}

.btn-outline {
  background: transparent;
  color: #ffffff;
  padding: 14px 32px;
  border-radius: 980px;
  font-weight: 500;
  font-size: 17px;
  border: 2px solid rgba(255, 215, 0, 0.5);
  display: inline-block;
  text-decoration: none;
  transition: all 0.3s;
}

.btn-outline:hover {
  border-color: #FFD700;
  background: rgba(255, 215, 0, 0.1);
}

.reveal-up {
  opacity: 0;
  transform: translateY(60px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.reveal-up.active {
  opacity: 1;
  transform: translateY(0);
}

.section {
  padding: 120px 0;
}

@media (max-width: 768px) {
  .section {
    padding: 80px 0;
  }
}

.text-hero {
  font-size: clamp(40px, 8vw, 80px);
  line-height: 1.05;
}

.text-section {
  font-size: clamp(28px, 5vw, 48px);
  line-height: 1.07;
}

.decorative-circle {
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 69, 0, 0.1));
  filter: blur(40px);
}

.timeline-item {
  position: relative;
  padding-left: 40px;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(255, 255, 255, 0.2);
}

.timeline-dot {
  position: absolute;
  left: 0;
  top: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #FFD700;
  border: 3px solid #000;
}

/* Animations */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.legend {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  display: inline-block;
  animation: blink 2s infinite;
}
</style>
