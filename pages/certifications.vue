<script setup>
useHead({
  title: 'Certifications - Kizamba Gospel',
  meta: [
    {
      name: 'description',
      content: 'Attestations de formation, certifications techniques et validations de compétences.'
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
</script>

<template>
  <section class="section pt-32">
    <div class="max-w-5xl mx-auto px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-16 reveal-up">
        <span class="text-sm font-semibold text-yellow-600 tracking-widest uppercase">Credentials</span>
        <h1 class="text-section apple-heading mt-4 mb-6">
          Mes <span class="gradient-text">certifications</span>
        </h1>
        <p class="text-xl apple-body max-w-2xl">
          Attestations de formation, certifications techniques et validations
          de compétences acquises tout au long de mon parcours.
        </p>
      </div>

      <!-- Certifications grid -->
      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <template x-for="cert in certifications" :key="cert.id" class="reveal-up" :style="`animation-delay: ${cert.id * 0.1}s`">
          <div class="cert-card">
            <div class="p-8">
              <div class="flex items-start justify-between mb-4">
                <div class="cert-icon" :style="`background: ${cert.color}20;`">
                  <span :style="`color: ${cert.color};`" x-text="cert.icon"></span>
                </div>
                <span class="cert-level" :class="cert.level.toLowerCase()" x-text="cert.level"></span>
              </div>

              <h3 class="text-xl font-semibold mb-2" x-text="cert.title"></h3>
              <p class="text-blue-400 font-medium text-sm mb-4" x-text="cert.issuer"></p>

              <p class="text-gray-400 text-sm mb-6 leading-relaxed" x-text="cert.description"></p>

              <!-- Skills -->
              <div class="mb-6">
                <div class="flex flex-wrap gap-2">
                  <template x-for="skill in cert.skills">
                    <span class="skill-tag" x-text="skill"></span>
                  </template>
                </div>
              </div>

              <!-- Details -->
              <div class="space-y-2 mb-6 text-sm">
                <div class="info-item">
                  <span class="info-label">Date d'obtention</span>
                  <span class="info-value" x-text="cert.date"></span>
                </div>
                <div class="info-item">
                  <span class="info-label">Validité</span>
                  <span class="info-value" x-text="cert.validity"></span>
                </div>
                <div class="info-item">
                  <span class="info-label">ID de certification</span>
                  <span class="info-value font-mono text-xs" x-text="cert.idNumber"></span>
                </div>
              </div>

              <!-- Actions -->
              <div class="flex gap-3">
                <button class="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors">
                  Voir le certificat
                </button>
                <button class="px-4 py-2.5 border border-gray-600 hover:border-blue-500 hover:text-blue-400 transition-colors rounded-xl">
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </template>
      </div>

      <!-- In progress -->
      <div class="reveal-up" style="animation-delay: 0.6s;">
        <div class="bg-blue-900/10 border border-blue-900/30 p-10 rounded-3xl">
          <div class="flex items-start gap-6">
            <div class="text-4xl">🎯</div>
            <div>
              <h2 class="text-2xl font-semibold mb-4">Certifications en <span class="gradient-text">cours</span></h2>
              <p class="text-gray-400 mb-6 leading-relaxed">
                Je prépare actuellement plusieurs certifications pour renforcer mon profil
                technique, particulièrement dans le domaine de l'IA et du cloud. Ces formations
                permettront de valider mes compétences sur des technologies spécifiques.
              </p>

              <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-blue-900/20 border border-blue-900/30 p-4 rounded-xl">
                  <div class="flex items-center gap-2 mb-2">
                    <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span class="text-blue-400 font-semibold text-sm">En préparation</span>
                  </div>
                  <p class="text-white font-medium text-sm">AWS Certified Developer</p>
                  <p class="text-gray-500 text-xs mt-1">Déc 2025</p>
                </div>

                <div class="bg-purple-900/20 border border-purple-900/30 p-4 rounded-xl">
                  <div class="flex items-center gap-2 mb-2">
                    <div class="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <span class="text-purple-400 font-semibold text-sm">Inscrit</span>
                  </div>
                  <p class="text-white font-medium text-sm">OpenAI API Certification</p>
                  <p class="text-gray-500 text-xs mt-1">Mars 2025</p>
                </div>

                <div class="bg-green-900/20 border border-green-900/30 p-4 rounded-xl">
                  <div class="flex items-center gap-2 mb-2">
                    <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span class="text-green-400 font-semibold text-sm">Planifié</span>
                  </div>
                  <p class="text-white font-medium text-sm">Docker Certified Associate</p>
                  <p class="text-gray-500 text-xs mt-1">Avril 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Back -->
      <div class="text-center reveal-up" style="animation-delay: 0.7s; margin-top: 40px;">
        <NuxtLink to="/cv" class="btn-outline">
          ← Voir mon CV complet
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
const certificationsData = [
  {
    id: 1,
    title: 'OpenAI API Developer Fundamentals',
    issuer: 'OpenAI',
    date: '15 Décembre 2024',
    validity: 'À vie (no expiration)',
    level: 'Gold',
    icon: '🏆',
    color: '#10a37f',
    idNumber: 'OADF-2024-789456',
    skills: ['GPT-4', 'Chat Completion API', 'Prompt Engineering', 'Tokens & Pricing', 'Content Moderation']
  },
  {
    id: 2,
    title: 'GitHub Copilot Developer',
    issuer: 'GitHub / Microsoft',
    date: '10 Novembre 2024',
    validity: '2 ans (expire Nov 2026)',
    level: 'Gold',
    icon: '🤖',
    color: '#4078c0',
    idNumber: 'GHCD-2024-654321',
    skills: ['Copilot setup', 'Prompt engineering', 'Code completion', 'Security best practices']
  },
  {
    id: 3,
    title: 'Vue.js 3 Certification',
    issuer: 'Vue School',
    date: '5 Octobre 2024',
    validity: 'À vie',
    level: 'Silver',
    icon: '💚',
    color: '#41b883',
    idNumber: 'VUE3-2024-112233',
    skills: ['Composition API', 'Reactivity', 'Components', 'Directives', 'State management']
  },
  {
    id: 4,
    title: 'MySQL Database Administrator',
    issuer: 'Oracle / MySQL',
    date: '20 Septembre 2024',
    validity: '3 ans (expire Sept 2027)',
    level: 'Bronze',
    icon: '🐬',
    color: '#00758f',
    idNumber: 'MYSQL-DBA-2024-998877',
    skills: ['SQL queries', 'Indexation', 'Optimisation', 'Backup/Restore', 'User management']
  },
  {
    id: 5,
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '1er Août 2024',
    validity: 'À vie',
    level: 'Silver',
    icon: '📱',
    color: '#0a0a0a',
    idNumber: 'RWD-2024-555666',
    skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Media queries', 'Accessibility']
  },
  {
    id: 6,
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: '15 Juillet 2024',
    validity: 'À vie',
    level: 'Silver',
    icon: '⚡',
    color: '#f7df1e',
    idNumber: 'JS-ALGO-2024-444333',
    skills: ['ES6+', 'Algorithms', 'Data structures', 'Functional programming', 'Debugging']
  }
]

export default {
  setup() {
    const certifications = ref(certificationsData)
    return {
      certifications
    }
  }
}
</script>

<style scoped>
.cert-card {
  background: rgba(44, 44, 46, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.cert-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0, 122, 255, 0.5);
  box-shadow: 0 20px 40px rgba(0, 122, 255, 0.1);
}

.cert-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: rgba(0, 122, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin-bottom: 1rem;
}

.cert-level {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.cert-level.bronze {
  background: rgba(205, 127, 50, 0.2);
  color: #cd7f32;
  border: 1px solid rgba(205, 127, 50, 0.3);
}

.cert-level.silver {
  background: rgba(192, 192, 192, 0.2);
  color: #c0c0c0;
  border: 1px solid rgba(192, 192, 192, 0.3);
}

.cert-level.gold {
  background: rgba(255, 215, 0, 0.2);
  color: #ffd700;
  border: 1px solid rgba(255, 215, 0, 0.3);
}

.skill-tag {
  display: inline-block;
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  margin: 2px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.info-item:last-child { border-bottom: none; }

.info-label {
  color: #8e8e93;
  font-size: 14px;
}

.info-value {
  font-weight: 500;
  font-size: 14px;
}
</style>
