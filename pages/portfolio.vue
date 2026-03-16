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
    type: 'Projet Laravel',
    context: 'Gestion de traversées maritimes - BTS SIO',
    year: '2024-25',
    description: 'Application complète développée avec Laravel permettant la gestion des traversées, des réservations et des horaires entre la Sicile et les îles environnantes.',
    technologies: ['Laravel', 'PHP', 'Blade', 'Eloquent ORM', 'MySQL'],
    githubUrl: 'https://github.com/KizambaGospel',
    detailUrl: '/project-1',
    gradient: 'from-amber-600 to-red-700',
    statusColor: 'bg-green-500',
    highlights: [
      'Architecture MVC Laravel',
      'Gestion des réservations',
      'Authentification sécurisée',
      'Modélisation MCD/MLD'
    ]
  },
  {
    id: 2,
    title: 'GestionEcole',
    type: 'Projet Laravel',
    context: 'Système de gestion académique - BTS SIO',
    year: '2024-25',
    description: 'Plateforme de gestion centralisée pour les établissements scolaires : gestion des élèves, des notes, des classes et des professeurs.',
    technologies: ['Laravel', 'PHP', 'Vite', 'MySQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/KizambaGospel',
    detailUrl: '/project-2',
    gradient: 'from-orange-500 to-red-600',
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
    title: 'AnimoSIO',
    type: 'PHP Natif',
    context: 'Boutique en ligne animalière',
    year: '2024',
    description: 'Site e-commerce dynamique développé en PHP natif pour la vente d\'accessoires et de nourriture pour animaux de compagnie.',
    technologies: ['PHP', 'HTML5', 'CSS3', 'MySQL', 'Sessions'],
    githubUrl: 'https://github.com/KizambaGospel',
    detailUrl: '/project-3',
    gradient: 'from-orange-500 to-red-600',
    statusColor: 'bg-amber-500',
    highlights: [
      'Catalogue dynamique',
      'Système de panier',
      'Espace client / Connexion',
      'Gestion des images'
    ]
  },
  {
    id: 6,
    title: 'SicilyLines Desktop',
    type: 'Application C# / WinForms',
    context: 'Gestion administrative - BTS SIO',
    year: '2024',
    description: 'Interface d\'administration de bureau permettant la gestion des paramètres système, des tarifs et des liaisons maritimes avec connexion SQL.',
    technologies: ['C#', 'WinForms', 'SQL Server', 'ADO.NET'],
    githubUrl: 'https://github.com/KizambaGospel',
    detailUrl: '/project-6',
    gradient: 'from-amber-600 to-orange-800',
    statusColor: 'bg-amber-400',
    image: '/images/project-6.png',
    highlights: [
      'Architecture N-Tier',
      'CRUD Secteurs et Liaisons',
      'Gestion des erreurs avancée',
      'Intégration base de données'
    ]
  },
  {
    id: 7,
    title: 'Gestion de Bibliothèque',
    type: 'Application .NET MAUI',
    context: 'Projet Mobile Multi-plateforme',
    year: '2025',
    description: 'Application moderne pour la gestion d\'un catalogue de livres, permettant le suivi des stocks et des emprunts sur mobile et desktop.',
    technologies: ['C#', '.NET MAUI', 'XAML', 'SQLite'],
    githubUrl: 'https://github.com/KizambaGospel',
    detailUrl: '/project-7',
    gradient: 'from-red-500 to-rose-800',
    statusColor: 'bg-red-500',
    image: '/images/project-7.png',
    highlights: [
      'Interface Cross-platform',
      'Navigation Shell MAUI',
      'Persistance SQLite locale',
      'Architecture MVVM'
    ]
  },
  {
    id: 8,
    title: 'Système Bancaire POO',
    type: 'Application C# Console/IHM',
    context: 'Perfectionnement Algorithmique',
    year: '2024',
    description: 'Mise en œuvre approfondie des concepts de programmation orientée objet à travers une simulation de services bancaires complexes.',
    technologies: ['C#', '.NET Core', 'POO', 'Unit Testing'],
    githubUrl: 'https://github.com/KizambaGospel',
    detailUrl: '/project-8',
    gradient: 'from-amber-600 to-orange-800',
    statusColor: 'bg-amber-600',
    image: '/images/project-8.png',
    highlights: [
      'Héritage et Polymorphisme',
      'Gestion des transactions',
      'Sécurité des comptes',
      'Algorithmique avancée'
    ]
  },
  {
    id: 4,
    title: 'Projets Bureau d\'études',
    type: 'PHP / Gestion métier',
    context: 'Immobilier & Formulaires complexes',
    year: '2024-25',
    description: 'Ensemble de solutions métiers incluant la "Société Immobilière de Gestion" et des systèmes de formulaires dynamiques pour le bâtiment.',
    technologies: ['PHP', 'JavaScript', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/KizambaGospel',
    detailUrl: '/project-4',
    gradient: 'from-gray-700 to-gray-900',
    statusColor: 'bg-amber-500',
    highlights: [
      'Gestion de formulaires complexes',
      'Validation de données',
      'Calculs métiers dynamiques',
      'Liaison avec le Bac Pro Bâtiment'
    ]
  },
  {
    id: 5,
    title: 'Architecture MVC & POO',
    type: 'Concepts logiciaux',
    context: 'Maîtrise de la programmation objet',
    year: '2025',
    description: 'Mise en œuvre approfondie des concepts de programmation orientée objet (POO) et de l\'architecture Model-View-Controller.',
    technologies: ['PHP 8.x', 'POO', 'MVC', 'Design Patterns'],
    githubUrl: 'https://github.com/KizambaGospel',
    detailUrl: '/project-5',
    gradient: 'from-purple-600 to-pink-700',
    statusColor: 'bg-purple-500',
    highlights: [
      'Classes et Héritage',
      'Séparation des préoccupations',
      'Code propre et réutilisable',
      'Abstractions avancées'
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
                <NuxtLink :to="project.detailUrl" class="flex-1 py-3 bg-linear-to-r from-amber-600 to-red-600 hover:scale-[1.02] text-white text-center font-medium rounded-xl transition-all">
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
