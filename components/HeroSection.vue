<script setup>
const CV_URL = '/cv-gospel.pdf' // À remplacer par le vrai chemin vers ton CV

const scrollToContact = () => {
  const element = document.querySelector('#contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="hero" class="min-h-screen flex items-center justify-center bg-black dark:bg-black transition-colors duration-300">
    <div class="container mx-auto px-4 py-20">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Texte d'accroche -->
        <div class="space-y-6 animate-fade-in">
          <div class="inline-block px-4 py-2 bg-amber-900/20 text-amber-500 rounded-full text-sm font-semibold mb-4">
            Étudiant BTS SIO SLAM
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Bonjour, je suis <span class="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500">Gospel</span>
          </h1>

          <div class="space-y-3">
            <p class="text-xl text-gray-300">
              19 ans, étudiant en <strong class="text-amber-500">BTS SIO</strong> option <strong class="text-orange-500">SLAM</strong>
            </p>
            <p class="text-lg text-gray-400">
              Passionné par le développement web et la création d'applications innovantes
            </p>
          </div>

          <p class="text-gray-400 max-w-lg">
            Actuellement en recherche d'une alternance pour mon deuxième année, je suis motivé à appliquer mes compétences en développement logiciel et à apprendre auprès de professionnels expérimentés.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4 pt-4">
            <button
              @click="scrollToContact"
              class="group inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Me contacter
            </button>
            <a
              :href="CV_URL"
              target="_blank"
              class="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-700 text-gray-300 font-semibold rounded-xl hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Télécharger CV
            </a>
          </div>

          <!-- Stats rapides -->
          <div class="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800 mt-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-amber-500">2</div>
              <div class="text-sm text-gray-400">Années de formation</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-orange-500">5+</div>
              <div class="text-sm text-gray-400">Projets réalisés</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-green-600 dark:text-green-400">100%</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Motivation</div>
            </div>
          </div>
        </div>

        <!-- Illustration/Photo placeholder -->
        <div class="flex justify-center lg:justify-end animate-slide-in-right">
          <div class="relative">
            <!-- Cercle décoratif -->
            <div class="absolute inset-0 bg-linear-to-r from-amber-500 to-orange-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <!-- Image/profile placeholder -->
            <div class="relative w-80 h-80 md:w-96 md:h-96 rounded-full bg-gray-900 flex items-center justify-center shadow-2xl border-4 border-gray-800">
              <div class="text-center p-8">
                <svg class="w-32 h-32 text-gray-400 dark:text-gray-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <p class="text-gray-500 dark:text-gray-400 font-medium">Photo professionnelle</p>
                <p class="text-sm text-gray-400 dark:text-gray-500">À ajouter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-slide-in-right {
  animation: slide-in-right 1s ease-out 0.3s both;
}
</style>
