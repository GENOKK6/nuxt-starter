<script setup>
const projects = [
  {
    id: 1,
    title: 'Application de Gestion de Bibliothèque',
    type: 'PPE',
    context: 'Projet de fin d\'année - BTS SIO',
    year: '2024',
    description: 'Développement d\'une application web complète permettant la gestion des prêts, des membres et des livres. Interface intuitive avec tableaux de bord administratif.',
    technologies: ['Vue.js', 'Node.js', 'MySQL', 'Express', 'Bootstrap'],
    githubUrl: 'https://github.com/ton-username/projet-bibliotheque',
    image: null, // Remplacer par une image réelle si disponible
    highlights: [
      'Authentication JWT',
      'CRUD complet',
      'Statistiques en temps réel',
      'Export PDF'
    ]
  },
  {
    id: 2,
    title: 'Plateforme de Veille Technologique',
    type: 'Stage / Entreprise',
    context: 'Stage en entreprise - Développement d\'outil interne',
    year: '2024',
    description: 'Création d\'une plateforme de veille allowing les employés de collecter, classifier et partager des articles technologiques. Système de tagging et notifications.',
    technologies: ['PHP', 'Laravel', 'PostgreSQL', 'Vue.js', 'Algolia'],
    githubUrl: 'https://github.com/ton-username/veille-tech',
    image: null,
    highlights: [
      'API RESTful',
      'Moteur de recherche full-text',
      'Système d\'abonnements',
      'Newsletter automatisée'
    ]
  },
  {
    id: 3,
    title: 'E-commerce Écoresponsable',
    type: 'PPE',
    context: 'Projet personnel / PPE2',
    year: '2025',
    description: 'Site e-commerce dédié aux produits écologiques avec système de paiement sécurisé, gestion des stocks et interface admin complète.',
    technologies: ['React', 'Python/Django', 'Stripe API', 'Docker', 'PostgreSQL'],
    githubUrl: 'https://github.com/ton-username/ecommerce-eco',
    image: null,
    highlights: [
      'Paiement sécurisé Stripe',
      'Responsive design',
      'Backoffice complet',
      'CI/CD GitHub Actions'
    ]
  }
]

const getTypeColor = (type) => {
  return type === 'PPE' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200' : 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200'
}

const getTechColor = (index) => {
  const colors = [
    'bg-blue-600 text-white',
    'bg-green-600 text-white',
    'bg-purple-600 text-white',
    'bg-orange-600 text-white',
    'bg-pink-600 text-white',
    'bg-teal-600 text-white',
    'bg-indigo-600 text-white',
    'bg-amber-600 text-white'
  ]
  return colors[index % colors.length]
}

const openGitHub = (url) => {
  window.open(url, '_blank')
}
</script>

<template>
  <section id="projects" class="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Mes Projets
        </h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Réalisations effectuées dans le cadre de mes PPE (Paroles de l\'Expérience Professionnelle) et stages
        </p>
        <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
      </div>

      <!-- Filtres (optionnel - désactivé pour l'instant car seulement 3 projets) -->
      <!--
      <div class="flex justify-center gap-4 mb-12">
        <button class="px-6 py-2 bg-blue-600 text-white rounded-full">Tous</button>
        <button class="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600">PPE</button>
        <button class="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600">Stages</button>
      </div>
      -->

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Cartes projets -->
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col"
        >
          <!-- Image placeholder / Header -->
          <div class="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <div v-if="!project.image" class="text-center text-white p-8">
              <svg class="w-16 h-16 mx-auto mb-2 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              <p class="font-semibold text-lg">Project Preview</p>
              <p class="text-sm opacity-80">{{ project.title }}</p>
            </div>
            <img v-else :src="project.image" :alt="project.title" class="w-full h-full object-cover">

            <!-- Badge type -->
            <div class="absolute top-4 right-4">
              <span class="px-3 py-1 text-xs font-bold rounded-full shadow-md" :class="getTypeColor(project.type)">
                {{ project.type }}
              </span>
            </div>
          </div>

          <!-- Contenu de la carte -->
          <div class="flex-1 p-6 flex flex-col">
            <!-- Header -->
            <div class="mb-3">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                {{ project.title }}
              </h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ project.context }} • {{ project.year }}
              </p>
            </div>

            <!-- Description -->
            <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-1">
              {{ project.description }}
            </p>

            <!-- Highlights -->
            <div class="mb-4">
              <p class="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">Fonctionnalités clés :</p>
              <ul class="space-y-1">
                <li v-for="(highlight, idx) in project.highlights" :key="idx" class="text-xs text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <svg class="w-3 h-3 text-green-600 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  {{ highlight }}
                </li>
              </ul>
            </div>

            <!-- Technologies -->
            <div class="mb-6">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(tech, index) in project.technologies"
                  :key="tech"
                  class="px-3 py-1 text-xs font-semibold rounded-full shadow-sm text-white transition-transform hover:scale-105"
                  :class="getTechColor(index)"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Bouton CTA -->
            <button
              @click="openGitHub(project.githubUrl)"
              class="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 text-white dark:text-gray-900 font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 dark:hover:from-blue-500 dark:hover:to-purple-500 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              Voir sur GitHub
            </button>
          </div>
        </div>
      </div>

      <!-- Message encouragement -->
      <div class="mt-12 text-center">
        <div class="inline-block bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-6 border border-blue-100 dark:border-gray-700">
          <p class="text-gray-700 dark:text-gray-300">
            Ces projets représentent mes réalisations principales dans le cadre de ma formation.
            N'hésitez pas à consulter les dépôts GitHub pour voir le code source et les détails techniques.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
