<script setup>
const watchTheme = {
  currentTheme: 'Intelligence Artificielle Générative',
  description: 'Ma veille porte sur les avancées en IA générative, les modèles de langage et leurs applications dans le développement logiciel.',
  tools: [
    { name: 'Feedly', icon: '📰', description: 'Agrégation RSS' },
    { name: 'Google Alerts', icon: '🔔', description: 'Alertes par mots-clés' },
    { name: 'GitHub Trending', icon: '⭐', description: 'Projets populaires' },
    { name: 'Medium / Dev.to', icon: '✍️', description: 'Articles techniques' },
    { name: 'Twitter / X', icon: '🐦', description: 'Suivi experts' }
  ]
}

const recentArticles = [
  {
    id: 1,
    title: 'Les nouveaux modèles d\'IA en 2025 : vers une démocratisation ?',
    source: 'Journal du Net',
    date: '2025-02-15',
    type: 'Article',
    tags: ['IA', 'GPT', 'Innovation'],
    summary: 'Analyse des derniers modèles d\'IA générative et de leur impact sur les métiers du développement.',
    readTime: '8 min'
  },
  {
    id: 2,
    title: 'GitHub Copilot X : La révolution du pair programming',
    source: 'Medium - Tech Blog',
    date: '2025-01-20',
    type: 'Tutoriel',
    tags: ['Outils', 'IA', 'Productivité'],
    summary: 'Retour d\'expérience sur l\'utilisation de Copilot X au quotidien pour le développement d\'applications.',
    readTime: '12 min'
  },
  {
    id: 3,
    title: 'Prompt Engineering pour développeurs',
    source: 'Dev.to',
    date: '2025-02-01',
    type: 'Guide',
    tags: ['Prompt', 'IA', 'Best Practices'],
    summary: 'Techniques et meilleures pratiques pour formuler des prompts efficaces avec les LLMs.',
    readTime: '15 min'
  }
]

const getTypeColor = (type) => {
  const colors = {
    'Article': 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200',
    'Tutoriel': 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200',
    'Guide': 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200'
  }
  return colors[type] || 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
}

const getTagColor = (index) => {
  const colors = [
    'bg-blue-600 text-white',
    'bg-green-600 text-white',
    'bg-purple-600 text-white',
    'bg-orange-600 text-white',
    'bg-teal-600 text-white',
    'bg-indigo-600 text-white'
  ]
  return colors[index % colors.length]
}
</script>

<template>
  <section id="watch" class="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Veille Technologique
        </h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Une compétence essentielle en informatique : je me tiens informé des nouvelles technologies et tendances du secteur
        </p>
        <div class="w-20 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
      </div>

      <!-- Section Thème actuel -->
      <div class="mb-16">
        <div class="bg-linear-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 rounded-2xl p-8 border border-blue-100 dark:border-gray-700 shadow-lg">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div class="flex-1">
              <span class="inline-block px-4 py-1 bg-blue-600 text-white text-sm font-bold rounded-full mb-4">
                🎯 Thème actuel
              </span>
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                {{ watchTheme.currentTheme }}
              </h3>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
                {{ watchTheme.description }}
              </p>
            </div>

            <div class="flex flex-wrap gap-3">
              <div
                v-for="tool in watchTheme.tools"
                :key="tool.name"
                class="bg-white dark:bg-gray-900 rounded-xl px-4 py-3 shadow-md border border-gray-100 dark:border-gray-700 text-center min-w-[100px] hover:shadow-lg transition-shadow"
              >
                <div class="text-2xl mb-1">{{ tool.icon }}</div>
                <p class="text-sm font-semibold text-gray-900 dark:text-white">{{ tool.name }}</p>
                <p class="text-xs text-gray-600 dark:text-gray-400">{{ tool.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section Articles récents -->
      <div class="mb-12">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
          <svg class="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          Mes dernières lectures
        </h3>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="article in recentArticles"
            :key="article.id"
            class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 flex flex-col"
          >
            <!-- Header -->
            <div class="flex items-start justify-between mb-3">
              <span class="px-3 py-1 text-xs font-bold rounded-full shadow-sm" :class="getTypeColor(article.type)">
                {{ article.type }}
              </span>
              <span class="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ article.readTime }}
              </span>
            </div>

            <!-- Titre -->
            <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 flex-1">
              {{ article.title }}
            </h4>

            <!-- Meta -->
            <div class="flex items-center gap-2 mb-3 text-sm">
              <span class="text-gray-600 dark:text-gray-400">{{ article.source }}</span>
              <span class="text-gray-400">•</span>
              <span class="text-gray-500 dark:text-gray-400">{{ article.date }}</span>
            </div>

            <!-- Résumé -->
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
              {{ article.summary }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(tag, index) in article.tags"
                :key="tag"
                class="px-2 py-1 text-xs font-medium rounded-md text-white"
                :class="getTagColor(index)"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Section Méthodologie -->
      <div class="bg-linear-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 border border-green-100 dark:border-gray-700">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span class="text-green-600 dark:text-green-400">🔄</span>
          Ma méthodologie de veille
        </h3>

        <div class="grid md:grid-cols-4 gap-6">
          <div class="bg-white dark:bg-gray-900 rounded-xl p-5 text-center shadow-md border border-gray-100 dark:border-gray-700">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 dark:text-white mb-1">1. veille</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">Recherche et collecte d'information via mes outils</p>
          </div>

          <div class="bg-white dark:bg-gray-900 rounded-xl p-5 text-center shadow-md border border-gray-100 dark:border-gray-700">
            <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 dark:text-white mb-1">2. Triage</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">Filtrage des articles pertinents par catégorie</p>
          </div>

          <div class="bg-white dark:bg-gray-900 rounded-xl p-5 text-center shadow-md border border-gray-100 dark:border-gray-700">
            <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 dark:text-white mb-1">3. Synthèse</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">Résumé et prise de notes sur chaque source</p>
          </div>

          <div class="bg-white dark:bg-gray-900 rounded-xl p-5 text-center shadow-md border border-gray-100 dark:border-gray-700">
            <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 dark:text-white mb-1">4. Archivage</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">Organisation et stockage pour consultation future</p>
          </div>
        </div>
      </div>

      <!-- Appel à l'action -->
      <div class="mt-12 text-center">
        <p class="text-gray-700 dark:text-gray-300 mb-4">
          La veille technologique est une activité continue qui me permet de rester à jour.
        </p>
        <NuxtLink
          to="/veille"
          class="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-xl"
        >
          Découvrir ma veille complète
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
