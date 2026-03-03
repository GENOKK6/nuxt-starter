<script setup>
const skillCategories = [
  {
    title: 'Front-end',
    icon: '💻',
    color: 'blue',
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
    color: 'purple',
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
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      text: 'text-blue-600 dark:text-blue-400',
      border: 'border-blue-200 dark:border-blue-700',
      progress: 'bg-blue-600',
      light: 'bg-blue-50 dark:bg-blue-900/50'
    },
    purple: {
      bg: 'bg-purple-100 dark:bg-purple-900/30',
      text: 'text-purple-600 dark:text-purple-400',
      border: 'border-purple-200 dark:border-purple-700',
      progress: 'bg-purple-600',
      light: 'bg-purple-50 dark:bg-purple-900/50'
    },
    green: {
      bg: 'bg-green-100 dark:bg-green-900/30',
      text: 'text-green-600 dark:text-green-400',
      border: 'border-green-200 dark:border-green-700',
      progress: 'bg-green-600',
      light: 'bg-green-50 dark:bg-green-900/50'
    }
  }
  return colors[color] || colors.blue
}
</script>

<template>
  <section id="skills" class="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Mes Compétences
        </h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Compétences techniques acquises au cours de ma formation BTS SIO SLAM et de mes projets personnels
        </p>
        <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Cartes de catégories -->
        <div
          v-for="category in skillCategories"
          :key="category.title"
          class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
          <div class="space-y-5">
            <div v-for="skill in category.skills" :key="skill.name" class="space-y-2">
              <!-- Header avec nom et niveau -->
              <div class="flex justify-between items-center">
                <span class="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {{ skill.name }}
                </span>
                <span class="text-xs px-2 py-1 rounded-full"
                      :class="skill.status === 'Maîtrisé' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                               skill.status === 'Compétent' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' :
                               'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'">
                  {{ skill.status }}
                </span>
              </div>

              <!-- Barre de progression -->
              <div class="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full transition-all duration-1000 ease-out"
                  :class="getColorClasses(category.color).progress"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>

              <!-- Pourcentage en petit -->
              <div class="text-right">
                <span class="text-xs text-gray-500 dark:text-gray-400">{{ skill.level }}%</span>
              </div>
            </div>
          </div>

          <!-- Badge de maîtrise globale de la catégorie -->
          <div class="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between text-sm">
              <span class="text-gray-600 dark:text-gray-400">Maîtrise moyenne</span>
              <span class="font-bold"
                    :class="getColorClasses(category.color).text">
                {{
                  Math.round(
                    category.skills.reduce((sum, s) => sum + s.level, 0) / category.skills.length
                  )
                }}%
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Section certifications / extras -->
      <div class="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 border border-blue-100 dark:border-gray-700">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center flex items-center justify-center gap-2">
          <span class="text-blue-600 dark:text-blue-400">🎓</span>
          Certifications & Formations complémentaires
        </h3>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-gray-900 rounded-xl p-5 text-center shadow-md border border-gray-100 dark:border-gray-700">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-xl">📜</span>
            </div>
            <h4 class="font-semibold text-gray-900 dark:text-white mb-1">Certification Pix</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">Numérique - Niveau Expert</p>
          </div>

          <div class="bg-white dark:bg-gray-900 rounded-xl p-5 text-center shadow-md border border-gray-100 dark:border-gray-700">
            <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-xl">📚</span>
            </div>
            <h4 class="font-semibold text-gray-900 dark:text-white mb-1">Formation Git Avancé</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">Gestion de versions et workflows</p>
          </div>

          <div class="bg-white dark:bg-gray-900 rounded-xl p-5 text-center shadow-md border border-gray-100 dark:border-gray-700">
            <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
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
