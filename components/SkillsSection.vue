<script setup>
const skillCategories = [
  {
    title: 'Front-end',
    icon: '💻',
    color: 'amber',
    description: 'Création d\'interfaces web modernes et responsives',
    skills: [
      { name: 'HTML5', level: 90, status: 'Maîtrisé' },
      { name: 'CSS3 / SASS', level: 85, status: 'Maîtrisé' },
      { name: 'JavaScript (ES6+)', level: 80, status: 'Compétent' },
      { name: 'Vue.js / Nuxt', level: 75, status: 'Compétent' },
      { name: 'Tailwind CSS', level: 85, status: 'Compétent' },
      { name: 'Responsive Design', level: 90, status: 'Maîtrisé' },
    ]
  },
  {
    title: 'Back-end & BDD',
    icon: '⚙️',
    color: 'orange',
    description: 'Développement côté serveur et gestion des données',
    skills: [
      { name: 'PHP / Laravel', level: 75, status: 'Compétent' },
      { name: 'Python', level: 65, status: 'En progression' },
      { name: 'SQL (MySQL, PostgreSQL)', level: 80, status: 'Compétent' },
      { name: 'Node.js', level: 60, status: 'En progression' },
      { name: 'API REST', level: 70, status: 'Compétent' },
    ]
  },
  {
    title: 'Outils & Méthodes',
    icon: '🛠️',
    color: 'green',
    description: 'Environnements de développement et bonnes pratiques',
    skills: [
      { name: 'Git / GitHub', level: 85, status: 'Compétent' },
      { name: 'Méthodes Agiles (Scrum)', level: 75, status: 'Compétent' },
      { name: 'Figma', level: 70, status: 'Compétent' },
      { name: 'VS Code', level: 90, status: 'Maîtrisé' },
      { name: 'Linux / Terminal', level: 70, status: 'Compétent' },
      { name: 'Tests (Jest, PHPUnit)', level: 65, status: 'En progression' },
    ]
  }
]

const getColorClasses = (color) => {
  const colors = {
    amber: {
      bg: 'bg-amber-900/30',
      text: 'text-amber-400',
      border: 'border-amber-700',
      progress: 'bg-amber-500',
      light: 'bg-amber-900/50'
    },
    orange: {
      bg: 'bg-orange-900/30',
      text: 'text-orange-400',
      border: 'border-orange-700',
      progress: 'bg-orange-500',
      light: 'bg-orange-900/50'
    },
    green: {
      bg: 'bg-green-900/30',
      text: 'text-green-400',
      border: 'border-green-700',
      progress: 'bg-green-500',
      light: 'bg-green-900/50'
    }
  }
  return colors[color] || colors.amber
}
</script>

<template>
  <section id="skills" class="py-20 bg-black transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Mes Compétences
        </h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Compétences techniques acquises au cours de ma formation BTS SIO SLAM et de mes projets personnels
        </p>
        <div class="w-20 h-1 bg-linear-to-r from-amber-500 to-orange-600 mx-auto mt-4"></div>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Cartes de catégories -->
        <div
          v-for="category in skillCategories"
          :key="category.title"
          class="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <!-- Header de catégorie -->
          <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shadow-md"
                 :class="getColorClasses(category.color).light">
              <span>{{ category.icon }}</span>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                {{ category.title }}
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ category.description }}
              </p>
            </div>
          </div>

          <!-- Liste des compétences -->
          <div class="space-y-3">
            <div v-for="skill in category.skills" :key="skill.name" class="p-3 bg-black/20 rounded-lg flex justify-between items-center border border-gray-800/50">
              <span class="text-sm font-semibold text-gray-200">
                {{ skill.name }}
              </span>
              <span class="text-xs px-2 py-1 rounded-full font-medium"
                    :class="skill.status === 'Maîtrisé' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                             skill.status === 'Compétent' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                             'bg-orange-500/10 text-orange-400 border border-orange-500/20'">
                {{ skill.status }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Section certifications / extras -->
      <div class="mt-16 bg-gray-900 rounded-2xl p-8 border border-gray-800">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center flex items-center justify-center gap-2">
          <span class="text-amber-500">🎓</span>
          Certifications & Formations complémentaires
        </h3>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gray-800 rounded-xl p-5 text-center shadow-md border border-gray-700">
            <div class="w-12 h-12 bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-xl">📜</span>
            </div>
            <h4 class="font-semibold text-gray-900 dark:text-white mb-1">Certification Pix</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">Numérique - Niveau Expert</p>
          </div>

          <div class="bg-gray-800 rounded-xl p-5 text-center shadow-md border border-gray-700">
            <div class="w-12 h-12 bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-xl">📚</span>
            </div>
            <h4 class="font-semibold text-gray-900 dark:text-white mb-1">Formation Git Avancé</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">Gestion de versions et workflows</p>
          </div>

          <div class="bg-gray-800 rounded-xl p-5 text-center shadow-md border border-gray-700">
            <div class="w-12 h-12 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-xl">🌐</span>
            </div>
            <h4 class="font-semibold text-gray-900 dark:text-white mb-1">Accessibilité Web</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">RGAA / A11y</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
