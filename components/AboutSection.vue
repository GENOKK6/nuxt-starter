<script setup>
const personalInfo = {
  name: 'Gospel',
  age: 19,
  formation: 'BTS SIO option SLAM',
  school: '[Nom de ton établissement]', // À remplir
  location: '[Ville/Région]', // À remplir
  email: 'gospel@example.com', // À remplacer
  phone: '06 00 00 00 00', // À remplacer
}

const timeline = [
  {
    year: '2024 - Présent',
    title: 'BTS SIO SLAM',
    description: 'Formation en Solutions Logicielles et Applications Métiers. Spécialisation en développement web et applications.',
    type: 'education'
  },
  {
    year: '2023 - 2024',
    title: 'BTS SIO Première année',
    description: 'Acquisition des bases en informatique : réseaux, bases de données, programmation.',
    type: 'education'
  },
  {
    year: 'Stage [Année]',
    title: 'Développeur Web Junior',
    description: 'Stage en entreprise - Participation au développement d\'applications web. Mise en œuvre des compétences acquises.',
    type: 'internship'
  },
  // Tu peux ajouter d'autres entrées ici
]
</script>

<template>
  <section id="about" class="py-20 bg-black transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          À propos de moi
        </h2>
        <div class="w-20 h-1 bg-linear-to-r from-amber-500 to-orange-600 mx-auto"></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Colonne gauche : Présentation -->
        <div class="space-y-6">
          <div class="bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-800">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="text-amber-500">🎯</span>
              Mon parcours
            </h3>

            <p class="text-gray-300 leading-relaxed mb-6">
              Je m'appelle <strong class="text-amber-500">{{ personalInfo.name }}</strong>, j'ai {{ personalInfo.age }} ans et je suis actuellement étudiant en
              <strong class="text-orange-500">{{ personalInfo.formation }}</strong>. Mon passion pour l'informatique et特别是 le développement
              web m'a conduit à choisir cette voie professionnelle.
            </p>

            <p class="text-gray-300 leading-relaxed mb-6">
              Au cours de ma formation, j'ai développé des compétences techniques solides en développement front-end et back-end,
              ainsi qu'en conception de bases de données. Je suis particulièrement intéressé par la création d'applications
              web modernes, responsives et accessibles.
            </p>

            <p class="text-gray-300 leading-relaxed">
              Je suis actuellement à la recherche d'une <strong class="text-green-400">alternance</strong> pour mon deuxième année
              afin de mettre en pratique mes connaissances et de continuer à progresser dans le milieu professionnel.
            </p>

            <!-- Infos de contact rapides -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div class="flex items-center gap-3">
                <div class="p-2 bg-amber-900/20 rounded-lg">
                  <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Téléphone</p>
                  <p class="text-gray-900 dark:text-white font-medium">{{ personalInfo.phone }}</p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div class="p-2 bg-orange-900/20 rounded-lg">
                  <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p class="text-gray-900 dark:text-white font-medium">{{ personalInfo.email }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Badge de statut -->
          <div class="bg-linear-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white shadow-lg">
            <div class="flex items-center gap-3 mb-2">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="font-bold text-lg">Disponible pour une alternance</span>
            </div>
            <p class="text-green-100">À partir de septembre 2025 - Contrat d'apprentissage ou de professionnalisation</p>
          </div>
        </div>

        <!-- Colonne droite : Timeline -->
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="text-purple-600 dark:text-purple-400">📚</span>
            Mon parcours académique
          </h3>

          <div class="relative">
            <!-- Ligne verticale -->
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-amber-600 to-orange-600"></div>

            <!-- Timeline items -->
            <div v-for="(item, index) in timeline" :key="index" class="relative flex gap-6 mb-8 last:mb-0">
              <!-- Point sur la timeline -->
              <div class="shrink-0 w-16 h-16 rounded-full bg-linear-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold shadow-lg z-10">
                <span class="text-sm">{{ item.year }}</span>
              </div>

              <!-- Contenu -->
              <div class="flex-1 pt-2">
                <div class="bg-gray-900 rounded-xl p-6 shadow-md border border-gray-800 hover:shadow-lg transition-shadow">
                  <div class="flex flex-wrap items-center gap-2 mb-2">
                    <span class="px-3 py-1 text-xs font-semibold rounded-full"
                          :class="item.type === 'education' ? 'bg-amber-900/20 text-amber-500' : 'bg-orange-900/20 text-orange-500'">
                      {{ item.type === 'education' ? 'Formation' : 'Stage' }}
                    </span>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{{ item.year }}</span>
                  </div>

                  <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {{ item.title }}
                  </h4>

                  <p class="text-gray-600 dark:text-gray-400 text-sm">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Bilan et objectifs -->
          <div class="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <span class="text-green-600 dark:text-green-400">🎯</span>
              Mes objectifs
            </h4>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-green-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Approfondir mes compétences en développement web moderne (React, Vue.js, Node.js)</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Apprendre les bonnes pratiques de développement (clean code, tests, CI/CD)</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Contribuer à des projets open-source et élargir mon réseau professionnel</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
