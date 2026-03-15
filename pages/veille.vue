<script setup>
definePageMeta({
  layout: 'simple'
})

useHead({
  title: 'Ma Veille Technologique - Gospel Kizamba',
  meta: [
    { name: 'description', content: 'Découvrez ma méthodologie de veille technologique sur l\'IA générative dans le développement.' }
  ]
})

const tools = [
  { 
    name: 'Gemini Pro + Deep Search', 
    icon: 'i-heroicons-sparkles', 
    description: 'Mon "assistant de tri". Il m\'aide à séparer le bruit technique des vrais signaux grâce à ses capacités d\'analyse approfondie.',
    color: 'text-blue-500' 
  },
  { 
    name: 'Padlet', 
    icon: 'i-heroicons-rectangle-group', 
    description: 'Mon mur final : c\'est là que je "pose" mes articles essentiels une fois validés par mes critères de qualité.',
    color: 'text-pink-500' 
  },
  { 
    name: 'Feedly', 
    icon: 'i-heroicons-rss', 
    description: 'Ma source principale de flux RSS. Idéal pour centraliser les blogs d\'ingénierie et éviter de se disperser sur le web.',
    color: 'text-orange-500' 
  },
  { 
    name: 'Immersion en Stage', 
    icon: 'i-heroicons-building-office', 
    description: 'Le terrain : mon tuteur nous challengeait quotidiennement sur les nouvelles IA (Claude, GPT).',
    color: 'text-green-500' 
  }
]

const pillars = [
  { 
    title: 'Fiabilité', 
    desc: 'La source fait-elle autorité ? (Blogs officiels, experts reconnus).', 
    icon: 'i-heroicons-shield-check',
    color: 'bg-green-500/20 text-green-400'
  },
  { 
    title: 'Actualité', 
    desc: 'L\'information est-elle récente ? (Utile pour l\'IA qui évolue chaque semaine).', 
    icon: 'i-heroicons-clock',
    color: 'bg-blue-500/20 text-blue-400'
  },
  { 
    title: 'Pertinence', 
    desc: 'Est-ce vraiment utile pour mon projet ou ma carrière de dev ?', 
    icon: 'i-heroicons-light-bulb',
    color: 'bg-amber-500/20 text-amber-400'
  }
]

const impacts = [
  { 
    title: 'Éducation', 
    benefits: 'Accompagnement personnalisé et déblocage rapide sur des problèmes complexes.',
    risks: 'Abandon de l\'effort intellectuel, risque de triche et perte des compétences fondamentales en algorithmie.',
    icon: 'i-heroicons-academic-cap' 
  },
  { 
    title: 'Entreprise', 
    benefits: 'Gain de productivité massif sur les tâches répétitives et prototypage ultra-rapide.',
    risks: 'Dépendance dangereuse aux outils, difficulté de maintenance du code généré et explosion de la dette technique.',
    icon: 'i-heroicons-briefcase' 
  },
  { 
    title: 'Environnement', 
    benefits: 'Optimisation de la consommation énergétique via des algorithmes pilotés par l\'IA.',
    risks: 'Consommation électrique colossale des datacenters et empreinte carbone liée à l\'entraînement.',
    icon: 'i-heroicons-globe-europe-africa' 
  },
  { 
    title: 'Droit & Éthique', 
    benefits: 'Emergence de modèles souverains (Mistral) garantissant la confidentialité des données.',
    risks: 'Flous juridiques sur la propriété intellectuelle et risques de fuites de données sensibles.', 
    icon: 'i-heroicons-scale' 
  }
]

const sources = [
  { title: 'Podcasts Entrepreneurs', desc: 'Écouter les fondateurs parler de l\'arrivée de Claude Work ou GitHub Agent.' },
  { title: 'YouTube Spécialisé', desc: 'Vidéos de démonstration technique pour valider les annonces marketing.' },
  { title: 'Blogs d\'Ingénierie', desc: 'Les sources primaires comme OpenAI, Anthropic ou GitHub Blog.' }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el))
})
</script>

<template>
  <div class="veille-page pt-20 pb-16 bg-apple-dark text-apple-text min-h-screen">
    <!-- Hero Section -->
    <section class="relative overflow-hidden mb-24 py-32 px-6">
      <div class="absolute inset-0 z-0">
        <NuxtImg 
          src="/veille_tech_banner_1773602902932.png" 
          alt="Bannière Veille" 
          class="w-full h-full object-cover opacity-20"
        />
        <div class="absolute inset-0 bg-linear-to-b from-black via-apple-dark/90 to-apple-dark"></div>
      </div>
      
      <div class="max-w-4xl relative z-10 mx-auto text-center">
        <h1 class="text-hero apple-heading mb-8 animate-fade-in">
          Comprendre <span class="gradient-text">ma veille</span>
        </h1>
        <p class="apple-body text-xl max-w-2xl mx-auto animate-fade-in" style="color: rgba(255,255,255,0.85);">
          Comment je reste à jour dans un monde où l'IA redéfinit le code chaque semaine.
        </p>
      </div>
    </section>

    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <!-- Section Définition -->
      <section class="mb-32 reveal-up">
        <div class="flex flex-col md:flex-row gap-12 items-center">
          <div class="flex-1">
            <h2 class="text-3xl font-bold apple-heading text-white mb-6">C'est quoi une "Veille" ?</h2>
            <div class="apple-body text-lg space-y-4">
              <p>
                Imaginez un filtre intelligent. Faire une veille, c'est trier l'immense quantité d'informations qui sort chaque jour pour ne garder que ce qui est <strong class="text-white">vrai, nouveau et utile</strong>.
              </p>
              <p>
                J'ai choisi l'IA car elle change tout : de l'éducation à la manière dont les entreprises développent des robots ou des applications. C'est l'avenir de mon métier de développeur.
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/3 p-8 bg-white/5 border border-white/10 rounded-3xl text-center">
            <div class="text-5xl mb-4">🔍</div>
            <p class="text-sm italic text-white/60">"Observer pour ne pas être dépassé."</p>
          </div>
        </div>
      </section>

      <!-- Section Outils (Le COMMENT) -->
      <section class="mb-32">
        <h2 class="text-section apple-heading text-white text-center mb-16 reveal-up">Mes outils de collecte</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="tool in tools" :key="tool.name" class="stat-card p-8 reveal-up">
            <div class="mb-6 inline-flex p-3 rounded-2xl bg-white/5">
              <UIcon :name="tool.icon" class="w-8 h-8" :class="tool.color" />
            </div>
            <h3 class="text-lg font-bold text-white mb-3">{{ tool.name }}</h3>
            <p class="text-sm text-white/50 leading-relaxed">{{ tool.description }}</p>
          </div>
        </div>
      </section>

      <!-- Section Choix Critiques (Honnêteté) -->
      <section class="mb-32 reveal-up">
        <div class="bg-red-500/5 border border-red-500/20 rounded-4xl p-10 md:p-16">
          <h2 class="text-2xl font-bold text-white mb-8 apple-heading">Ce que j'ai écarté (et pourquoi)</h2>
          <div class="grid md:grid-cols-2 gap-12">
            <div class="space-y-4">
              <h3 class="text-xl font-bold text-red-400">❌ Réseaux & Newsletters</h3>
              <p class="apple-body italic">
                "Je voulais m'éloigner de l'addiction aux réseaux sociaux. De plus, on y rouve énormément d'articles 'bidons' ou créés par des IA pour faire du clic."
              </p>
            </div>
            <div class="space-y-4">
              <h3 class="text-xl font-bold text-red-400">⚠️ Google Alerts</h3>
              <p class="apple-body italic">
                "Trop de bruit. J'ai reçu beaucoup de liens peu intéressants ou hors-sujet. J'ai préféré la précision de Gemini Pro."
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Mes Trois Piliers -->
      <section class="mb-32">
        <div class="text-center mb-16 reveal-up">
          <h2 class="text-section apple-heading text-white mb-4">Mes trois piliers de sélection</h2>
          <p class="apple-body">Pourquoi je choisis un article plutôt qu'un autre ?</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="pillar in pillars" :key="pillar.title" class="p-10 rounded-4xl bg-white/5 border border-white/5 hover:border-white/20 transition-all text-center reveal-up">
            <div :class="['w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto', pillar.color]">
              <UIcon :name="pillar.icon" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold text-white mb-4">{{ pillar.title }}</h3>
            <p class="text-sm text-white/60 leading-relaxed">{{ pillar.desc }}</p>
          </div>
        </div>
      </section>

      <!-- Espace Captures d'écran -->
      <section class="mb-32">
        <h2 class="text-section apple-heading text-white text-center mb-12 reveal-up">Démonstration visuelle</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Capture 1 -->
          <div class="reveal-up">
             <div class="aspect-video bg-black/40 border border-white/10 rounded-3xl flex items-center justify-center group overflow-hidden relative shadow-2xl">
                <div class="z-10 text-center">
                   <UIcon name="i-heroicons-camera" class="w-10 h-10 text-white/20 mb-2 mx-auto" />
                   <p class="text-xs uppercase tracking-widest text-white/40">Capture : Mon Mur Padlet</p>
                </div>
                <div class="absolute inset-0 bg-linear-to-tr from-pink-500/5 to-transparent"></div>
             </div>
             <p class="mt-4 text-sm text-center text-white/50">Mon mur Padlet où j'organise mes articles essentiels.</p>
          </div>
          <!-- Capture 2 -->
          <div class="reveal-up">
             <div class="aspect-video bg-black/40 border border-white/10 rounded-3xl flex items-center justify-center group overflow-hidden relative shadow-2xl">
                <div class="z-10 text-center">
                   <UIcon name="i-heroicons-sparkles" class="w-10 h-10 text-white/20 mb-2 mx-auto" />
                   <p class="text-xs uppercase tracking-widest text-white/40">Capture : Tri avec Gemini</p>
                </div>
                <div class="absolute inset-0 bg-linear-to-tr from-blue-500/5 to-transparent"></div>
             </div>
             <p class="mt-4 text-sm text-center text-white/50">Exemple de tri intelligent avec Gemini Pro.</p>
          </div>
        </div>
        <div class="mt-12 text-center reveal-up">
          <a href="https://padlet.com" target="_blank" class="btn-primary inline-flex items-center gap-3">
            <UIcon name="i-heroicons-link" class="w-5 h-5" />
            Accéder à mon Padlet Public
          </a>
        </div>
      </section>

      <!-- Impact & Synthèse -->
      <section class="mb-32 reveal-up">
        <div class="bg-linear-to-br from-blue-600 to-purple-800 rounded-[3rem] p-12 md:p-20 text-white">
          <h2 class="text-3xl font-bold mb-8 apple-heading">L'impact de l'IA aujourd'hui</h2>
          <div class="grid lg:grid-cols-2 gap-8">
            <div v-for="impact in impacts" :key="impact.title" class="p-8 md:p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all">
              <div class="flex items-center gap-4 mb-8">
                <div class="p-3 bg-white/10 rounded-2xl">
                  <UIcon :name="impact.icon" class="w-8 h-8 text-white" />
                </div>
                <h3 class="text-2xl font-bold apple-heading">{{ impact.title }}</h3>
              </div>
              
              <div class="space-y-6">
                <!-- Bénéfices -->
                <div class="flex gap-4 p-4 rounded-2xl bg-green-500/10 border border-green-500/20">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-green-400 shrink-0" />
                  <div>
                    <p class="text-xs font-bold uppercase tracking-widest text-green-400 mb-1">Bénéfices</p>
                    <p class="text-white/80 text-sm leading-relaxed">{{ impact.benefits }}</p>
                  </div>
                </div>

                <!-- Risques -->
                <div class="flex gap-4 p-4 rounded-2xl bg-red-500/10 border border-red-500/20">
                  <UIcon name="i-heroicons-exclamation-triangle" class="w-6 h-6 text-red-400 shrink-0" />
                  <div>
                    <p class="text-xs font-bold uppercase tracking-widest text-red-400 mb-1">Risques & Limites</p>
                    <p class="text-white/80 text-sm leading-relaxed">{{ impact.risks }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Conclusion & Avis -->
      <section class="max-w-4xl mx-auto mb-32 reveal-up">
        <div class="bg-white p-12 md:p-20 rounded-[3rem] text-black shadow-2xl">
          <h2 class="text-4xl font-bold mb-8 apple-heading tracking-tight">Le métier demain ?</h2>
          <div class="apple-body text-lg space-y-6 text-black/80 font-normal">
            <p>
              Je suis convaincu que l'ingénieur de 2026 sera avant tout un <strong class="text-black font-bold">chef d'orchestre</strong>. Mais pour bien diriger cet orchestre numérique, il est vital de ne pas oublier le solfège : l'algorithmie et la logique pure.
            </p>
            <p>
              L'IA doit rester un <strong class="text-black">amplificateur</strong> et non une béquille. Ma veille m'a appris que ma valeur ajoutée humaine résidera dans cet esprit critique : savoir quand faire confiance à la machine et quand reprendre la main pour garantir la sécurité et la pérennité de notre code.
            </p>
          </div>
          <div class="mt-12 pt-8 border-t border-black/10 flex items-center justify-between">
            <div class="text-sm font-bold tracking-widest uppercase italic">Gospel Kizamba</div>
            <NuxtLink to="/contact" class="text-blue-600 font-bold hover:underline">Discutons-en →</NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.veille-page {
  animation: fadeIn 1s ease-out;
}

.stat-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 2rem;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.stat-card:hover {
  background: rgba(255, 255, 255, 0.06);
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.2);
}

.gradient-text {
  background: linear-gradient(135deg, #007AFF 0%, #A259FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.reveal-up {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal-up.active {
  opacity: 1;
  transform: translateY(0);
}

.animate-fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}
</style>