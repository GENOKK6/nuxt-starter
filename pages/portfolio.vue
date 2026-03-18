<script setup>
const mobileMenuOpen = ref(false)

useHead({
  title: 'Portfolio - Kizamba Gospel',
  meta: [
    {
      name: 'description',
      content: 'Portfolio de projets web réalisés par Kizamba Gospel, développeur en BTS SIO SLAM.'
    }
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

// Données des projets
const projectsData = [
  {
    id: 1,
    title: 'SicilyLines',
    type: 'Projet de cours / PHP',
    context: 'Gestion de traversées maritimes - BTS SIO',
    year: '2024-25',
    description: 'Application complète développée avec Laravel permettant la gestion des traversées, des réservations et des horaires entre la Sicile et les îles environnantes.',
    technologies: ['Laravel', 'PHP', 'Blade', 'Figma', 'MySQL'],
    githubUrl: 'https://github.com/GENOKK6',
    detailUrl: '/project-1',
    gradient: 'from-[#FFD700] to-[#8B6508]',
    statusColor: 'bg-green-500',
    highlights: [
      'Architecture MVC Laravel',
      'Gestion des réservations',
      'Authentification sécurisée',
      'Maquettage & Intégration'
    ]
  },
  {
    id: 2,
    title: 'GestionEcole',
    type: 'Projet de cours / PHP',
    context: 'Système de gestion académique - BTS SIO',
    year: '2024-25',
    description: 'Plateforme de gestion centralisée pour les établissements scolaires : gestion des élèves, des notes, des classes et des professeurs.',
    technologies: ['Laravel', 'PHP', 'Vite', 'MySQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/GENOKK6',
    detailUrl: '/project-2',
    gradient: 'from-[#FFD700] to-[#DAA520]',
    statusColor: 'bg-green-500',
    highlights: [
      'Gestion CRUD des élèves',
      'Calcul automatique des moyennes',
      'Dashboard administrateur',
      'Interface responsive'
    ]
  },
  {
    id: 3,
    title: 'FlowBill',
    type: 'Projet entrepreneurial / B2B',
    context: 'En cours de développement (Frontend)',
    year: '2025',
    description: 'Plateforme B2B en cours de conception pour la relance des factures et devis. L\'IA se chargera d\'extraire les données des PDFs clients pour automatiser le processus.',
    technologies: ['HTML5', 'CSS3', 'IA Extraction', 'PHP (à venir)'],
    githubUrl: 'https://github.com/GENOKK6',
    detailUrl: '/project-3',
    gradient: 'from-emerald-600 to-teal-800',
    statusColor: 'bg-emerald-400',
    highlights: [
      'Intégration d\'une plateforme HTML/CSS',
      'Réflexion sur l\'architecture backend',
      'Analyse IA pour lecture des PDFs',
      'Phase de prototypage'
    ]
  },
  {
    id: 4,
    title: 'SioCards (Anki AI)',
    type: 'Projet personnel / Études',
    context: 'Apprentissage par Flashcards & IA',
    year: '2025',
    description: 'Une application web d\'apprentissage reprenant le fonctionnement des flashcards d\'Anki mais propulsée par l\'IA, avec un calendrier de révisions espacées.',
    technologies: ['Vue.js', 'Machine Learning', 'IA Générative', 'Nuxt'],
    githubUrl: 'https://github.com/GENOKK6',
    detailUrl: '/project-4',
    gradient: 'from-purple-600 to-purple-900',
    statusColor: 'bg-purple-500',
    highlights: [
      'Génération de Flashcards via IA',
      'Calendrier de Révision Espacée',
      'Feedback intelligent',
      'Conçu pour le BTS et poursuite d\'études'
    ]
  }
]

const projects = ref(projectsData)
</script>

<template>
  <section class="section pt-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-16 reveal-up">
        <span class="text-sm font-semibold text-amber-500 tracking-widest uppercase">Portfolio</span>
        <h1 class="text-section apple-heading mt-4 mb-6">
          Mes <span class="gradient-text">projets</span>
        </h1>
        <p class="text-xl apple-body max-w-2xl">
          Une sélection de mes réalisations les plus significatives,
          combinant design moderne et robustesse technique.
        </p>
      </div>

      <!-- Projects grid -->
      <div class="grid lg:grid-cols-2 gap-12">
        <div v-for="project in projects" :key="project.id" class="reveal-up" :style="{ animationDelay: project.id * 0.1 + 's' }">
          <div class="project-card">
            <!-- Project image -->
            <div class="project-image aspect-video">
              <img v-if="project.image" :src="project.image" :alt="project.title" class="w-full h-full object-cover">
              <div v-else class="w-full h-full bg-linear-to-br" :class="project.gradient"></div>
              <div class="project-image-content">
                <div class="mb-3">
                  <span class="badge">
                    <span class="w-2 h-2 rounded-full" :class="project.statusColor"></span>
                    <span>{{ project.type }}</span>
                  </span>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="p-8">
              <div class="flex justify-between items-start mb-3">
                <div class="flex items-center gap-2 text-sm text-gray-400">
                  <span>{{ project.year }}</span>
                  <span>•</span>
                  <span>{{ project.context }}</span>
                </div>
              </div>

              <h3 class="text-2xl font-semibold mb-4 group-hover:text-amber-500 transition-colors">{{ project.title }}</h3>

              <p class="text-gray-400 mb-6 leading-relaxed">{{ project.description }}</p>

              <!-- Highlights -->
              <div class="mb-6">
                <h4 class="text-sm font-semibold mb-3 text-gray-300">Fonctionnalités clés</h4>
                <ul class="space-y-2">
                  <li v-for="highlight in project.highlights" :key="highlight" class="flex items-center gap-2 text-sm text-gray-400">
                    <svg class="w-4 h-4 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ highlight }}</span>
                  </li>
                </ul>
              </div>

              <!-- Technologies -->
              <div class="mb-8">
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in project.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
                </div>
              </div>

              <!-- Actions -->
              <div class="flex gap-4">
                <NuxtLink :to="project.detailUrl" class="flex-1 py-3 bg-linear-to-r from-[#FFD700] to-[#B8860B] hover:scale-[1.02] text-white text-center font-medium rounded-xl transition-all">
                  Voir les détails
                </NuxtLink>
                <a :href="project.githubUrl" target="_blank" class="px-4 py-3 border border-gray-600 hover:border-amber-500 hover:text-amber-400 transition-colors rounded-xl">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-card {
  background: rgba(44, 44, 46, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.project-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 30px 60px rgba(255, 215, 0, 0.12);
  border-color: rgba(255, 215, 0, 0.4);
}

.project-image {
  border-radius: 24px 24px 0 0;
  overflow: hidden;
  position: relative;
}

.project-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.8) 100%);
}

.project-image-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  z-index: 1;
}

.tech-tag {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  margin: 2px;
  transition: all 0.3s;
}

.tech-tag:hover {
  background: rgba(255, 215, 0, 0.2);
  color: #FFD700;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}
</style>
