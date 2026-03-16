<script setup>
useHead({
  title: 'Certifications - Kizamba Gospel',
  meta: [
    {
      name: 'description',
      content: 'Découvrez mes certifications OpenClassrooms et autres distinctions académiques.'
    }
  ]
})

definePageMeta({
  layout: 'simple'
})

const certifications = [
  {
    title: 'Apprendre à apprendre',
    issuer: 'OpenClassrooms',
    date: '2024',
    description: 'Comprendre le fonctionnement du cerveau pour optimiser son apprentissage, gérer sa mémoire et rester concentré.',
    link: '/images/certif_apprendre_a_apprendre.pdf',
    icon: '🧠',
    color: '#FFD700',
    skills: ['Métacognition', 'Mémoire', 'Focus', 'Soft Skills']
  },
  {
    title: 'Gérez votre code avec Git et GitHub',
    issuer: 'OpenClassrooms',
    date: '2024',
    description: 'Maîtrise du versioning avec Git et de la collaboration sur GitHub pour le développement logiciel.',
    link: '/images/gerer_le_code_avec_github.pdf',
    icon: '🐙',
    color: '#FFD700',
    skills: ['Git', 'GitHub', 'Versioning', 'Open Source']
  }
]

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
        <span class="text-sm font-semibold text-amber-500 tracking-widest uppercase">Certifications</span>
        <h1 class="text-section apple-heading mt-4 mb-6">
          Mes <span class="gradient-text">distinctions</span> académiques
        </h1>
        <p class="text-xl apple-body max-w-2xl">
          Un aperçu des certifications et formations complémentaires que j'ai obtenues pour valider mon expertise technique.
        </p>
      </div>

      <!-- Certifications Grid -->
      <div class="grid md:grid-cols-2 gap-8 mb-20">
        <div v-for="(cert, index) in certifications" :key="cert.title" 
             class="reveal-up" :style="{ 'animation-delay': (0.1 * (index + 1)) + 's' }">
          <div class="cert-card bg-apple-light-gray/30 rounded-3xl border border-gray-800 transition-all hover:border-amber-500/30 group">
            <div class="p-8">
              <div class="flex justify-between items-start mb-6">
                <div class="w-14 h-14 bg-amber-900/20 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  {{ cert.icon }}
                </div>
                <span class="text-xs font-bold text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest">
                  {{ cert.issuer }}
                </span>
              </div>
              
              <h3 class="text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">
                {{ cert.title }}
              </h3>
              
              <p class="text-sm text-gray-400 mb-6 leading-relaxed h-[60px]">
                {{ cert.description }}
              </p>

              <!-- Skills -->
              <div class="flex flex-wrap gap-2 mb-8">
                <span v-for="skill in cert.skills" :key="skill" class="skill-tag">
                  {{ skill }}
                </span>
              </div>
              
              <div class="flex items-center justify-between mt-auto">
                <span class="text-xs font-semibold text-gray-500">{{ cert.date }}</span>
                <a :href="cert.link" target="_blank" class="flex items-center gap-2 text-sm font-bold text-amber-500 hover:text-amber-400 transition-colors">
                  Voir le certificat
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- In progress Section -->
      <div class="reveal-up mb-20" style="animation-delay: 0.4s;">
        <div class="bg-amber-900/10 border border-amber-900/30 p-10 rounded-3xl">
          <div class="flex items-start gap-6 flex-col md:flex-row">
            <div class="text-4xl">🎯</div>
            <div>
              <h2 class="text-2xl font-bold mb-4">Certifications en <span class="gradient-text">cours</span></h2>
              <p class="text-gray-400 mb-8 leading-relaxed">
                Je continue de me former chaque semaine pour renforcer mon profil technique, particulièrement dans le domaine de l'IA générative et des infrastructures Cloud.
              </p>
              
              <div class="flex flex-wrap gap-4">
                <div class="bg-amber-900/20 border border-amber-900/30 px-5 py-4 rounded-2xl flex-1 min-w-[200px]">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                    <span class="text-xs font-bold text-amber-400 uppercase tracking-widest">En préparation</span>
                  </div>
                  <h4 class="font-semibold text-white">GitHub Foundations</h4>
                  <p class="text-[10px] text-gray-500 mt-1 uppercase">Prévu pour Avril 2026</p>
                </div>
                
                <div class="bg-amber-900/20 border border-amber-900/30 px-5 py-4 rounded-2xl flex-1 min-w-[200px]">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                    <span class="text-xs font-bold text-red-400 uppercase tracking-widest">Plannifié</span>
                  </div>
                  <h4 class="font-semibold text-white">AWS Cloud Practitioner</h4>
                  <p class="text-[10px] text-gray-500 mt-1 uppercase">Prévu pour Juin 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Back Link -->
      <div class="text-center reveal-up" style="animation-delay: 0.5s;">
        <NuxtLink to="/skills" class="btn-outline">
          ← Retour aux compétences
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cert-card {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.cert-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(255, 215, 0, 0.1);
}

.skill-tag {
  display: inline-block;
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
}
</style>

