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
    color: 'text-amber-500' 
  },
  { 
    name: 'Padlet', 
    icon: 'i-heroicons-rectangle-group', 
    description: 'Mon mur final : c\'est là que je "pose" mes articles essentiels une fois validés par mes critères de qualité.',
    color: 'text-amber-500' 
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

const recentArticles = [
  {
    title: 'Lancement du Model Context Protocol (MCP)',
    source: 'Anthropic',
    date: 'Nov 2025',
    link: 'https://www.blogdumoderateur.com/model-context-protocol-mcp/',
    tags: ['Standard', 'Infrastructure'],
    summary: 'Le point de départ : unifier l\'accès aux données pour toutes les IA.'
  },
  {
    title: 'Introducing Cowork: Claude for the rest of your work',
    source: 'Anthropic',
    date: '12 Jan 2026',
    link: 'https://claude.com/blog/cowork-research-preview',
    tags: ['Productivité', 'Agents'],
    summary: 'Anthropic étend ses capacités d\'agent au-delà du code pour toutes les tâches pro.'
  },
  {
    title: 'Introducing Claude Sonnet 4.6',
    source: 'Anthropic',
    date: '17 Fév 2026',
    link: 'https://www.anthropic.com/news/claude-sonnet-4-6',
    tags: ['Modèles', 'Performance'],
    summary: 'Saut qualitatif majeur dans le raisonnement et la fenêtre de contexte de 1M tokens.'
  },
  {
    title: 'OpenAI déploie GPT-5.4 Thinking',
    source: 'OpenAI',
    date: '05 Mars 2026',
    link: 'https://openai.com/index/introducing-gpt-5-4/',
    tags: ['Modèles', 'Agentic'],
    summary: 'Capacités de pilotage OS natives : l\'IA manipule l\'ordinateur comme un humain.'
  },
  {
    title: 'Codex Security: now in research preview',
    source: 'OpenAI',
    date: '06 Mars 2026',
    link: 'https://openai.com/index/codex-security-now-in-research-preview/',
    tags: ['Sécurité', 'Audit'],
    summary: 'L\'IA s\'attaque à la détection proactive des failles dans le code source.'
  },
  {
    title: 'The era of "AI as text" is over',
    source: 'GitHub Blog',
    date: '10 Mars 2026',
    link: 'https://github.blog/ai-and-ml/github-copilot/the-era-of-ai-as-text-is-over-execution-is-the-new-interface/',
    tags: ['Majeur', 'Vision'],
    summary: 'GitHub annonce que l\'interface de demain n\'est plus le texte, mais l\'exécution.'
  },
  {
    title: 'Copilot Cowork : Microsoft intègre Anthropic',
    source: 'BDM',
    date: '10 Mars 2026',
    link: 'https://www.blogdumoderateur.com/copilot-cowork-microsoft-integre-technologie-anthropic-deleguer-taches-microsoft-365/',
    tags: ['Entreprise', 'Synergie'],
    summary: 'Alliance stratégique pour porter les agents dans la suite Office 365.'
  },
  {
    title: 'Code Review : Claude inspecte vos Pull Requests',
    source: 'BDM',
    date: '12 Mars 2026',
    link: 'https://www.blogdumoderateur.com/claude-code-review-deploie-agents-ia-inspecter-pull-requests/',
    tags: ['Qualité', 'Automation'],
    summary: 'Déploiement d\'agents autonomes pour la revue de code sur GitHub.'
  },
  {
    title: 'Gemini CLI : Google déploie le "Plan Mode"',
    source: 'Google / BDM',
    date: '15 Mars 2026',
    link: 'https://www.blogdumoderateur.com/gemini-cli-google-deploie-plan-mode/',
    tags: ['Outil', 'Architecture'],
    summary: 'Sécurisation des modifications critiques via une étape de planification IA.'
  }
]

const externalSources = [
  { 
    title: 'The Diary Of A CEO', 
    desc: 'Podcast Strategy & Vision',
    icon: 'i-heroicons-microphone',
    info: 'Essentiel pour comprendre la vision business et les enjeux de société derrière l\'IA.'
  },
  { 
    title: 'YouTube Technique', 
    desc: 'Démos & Architecture des Agents',
    icon: 'i-heroicons-video-camera',
    info: 'Vidéos de démonstration technique pour valider les annonces et comprendre le Computer Use.'
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
            <span class="text-sm font-semibold text-amber-500 tracking-widest uppercase">Veille Technologique</span>
        <h1 class="text-section apple-heading mt-4 mb-6">
          L'impact de l'<span class="gradient-text">IA Générative</span>
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
          <div class="w-full md:w-1/3 p-8 bg-white/5 border border-white/10 rounded-3xl text-center shadow-2xl relative overflow-hidden group">
            <div class="absolute inset-0 bg-linear-to-br from-amber-500/10 to-transparent"></div>
            <div class="text-5xl mb-4">🔍</div>
            <p class="text-sm italic text-white/60 font-medium">"Observer pour ne pas être dépassé."</p>
          </div>
        </div>
      </section>

      <!-- Section Stratégie (Outils) -->
      <section class="mb-32">
        <h2 class="text-section apple-heading text-white text-center mb-16 reveal-up">Ma Stratégie de Collecte</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div v-for="tool in tools" :key="tool.name" class="stat-card p-8 reveal-up">
            <div class="mb-6 inline-flex p-3 rounded-2xl bg-white/5">
              <UIcon :name="tool.icon" class="w-8 h-8" :class="tool.color" />
            </div>
            <h3 class="text-lg font-bold text-white mb-3">{{ tool.name }}</h3>
            <p class="text-sm text-white/50 leading-relaxed">{{ tool.description }}</p>
          </div>
        </div>

        <!-- Pourquoi PAS ? -->
        <div class="bg-amber-600/5 border border-red-500/20 rounded-4xl p-10 md:p-16 mb-16 reveal-up">
          <h2 class="text-2xl font-bold text-white mb-8 apple-heading">Ce que j'ai écarté (et pourquoi)</h2>
          <div class="grid md:grid-cols-2 gap-12">
            <div class="space-y-4">
              <h3 class="text-xl font-bold text-amber-500 flex items-center gap-2">
                <UIcon name="i-heroicons-x-circle" class="w-6 h-6" />
                Réseaux & Newsletters
              </h3>
              <p class="apple-body italic text-white/60">
                "Je voulais m'éloigner de l'addiction aux réseaux sociaux. De plus, on y trouve énormément d'articles 'bidons' ou créés par des IA pour faire du clic sans réelle valeur technique."
              </p>
            </div>
            <div class="space-y-4">
              <h3 class="text-xl font-bold text-amber-500 flex items-center gap-2">
                <UIcon name="i-heroicons-exclamation-triangle" class="w-6 h-6" />
                Google Alerts
              </h3>
              <p class="apple-body italic text-white/60">
                "Trop de bruit. J'ai reçu beaucoup de liens peu intéressants ou hors-sujet. J'ai préféré la précision de Gemini Pro et Anthropic pour filtrer les vrais signaux."
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Synthèse & Organisation (Captures) -->
      <section class="mb-32">
        <div class="text-center mb-16 reveal-up">
          <h2 class="text-section apple-heading text-white mb-4">Synthèse & Organisation</h2>
          <p class="apple-body">Visualisation de mes murs de veille et outils de tri.</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Gemini -->
          <div class="reveal-up group">
             <a href="https://gemini.google.com" target="_blank" class="aspect-video bg-black/40 border border-white/10 rounded-3xl flex items-center justify-center overflow-hidden relative shadow-2xl group-hover:border-amber-500/50 transition-colors">
                <UIcon name="i-heroicons-sparkles" class="w-12 h-12 text-amber-500/20 mb-2 transition-transform group-hover:scale-110" />
                <div class="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-black to-transparent">
                  <p class="text-[10px] font-bold uppercase tracking-widest text-white/40">Tri Intelligent (Gemini Pro)</p>
                </div>
             </a>
          </div>
          <!-- Padlet -->
          <div class="reveal-up group">
             <a href="https://padlet.com/gospel14es/les-arcticles-et-blogs-qui-m-ont-aid-a-realis-ma-veille-tech-bbiqgev6tg4uqlvn" target="_blank" class="aspect-video bg-black/40 border border-white/10 rounded-3xl flex items-center justify-center overflow-hidden relative shadow-2xl group-hover:border-amber-500/50 transition-colors">
                <NuxtImg src="/images/padlet.png" class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity" />
                <UIcon name="i-heroicons-rectangle-group" class="w-12 h-12 text-amber-500/20 mb-2 transition-transform group-hover:scale-110" />
                <div class="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-black to-transparent">
                  <p class="text-[10px] font-bold uppercase tracking-widest text-white/40">Mur Mural (Padlet)</p>
                </div>
             </a>
          </div>
          <!-- Feedly 1 -->
          <div class="reveal-up group">
             <a href="https://feedly.com/i/collection/content/user/58ffdcea-f8a4-4a71-bb62-3e4ed3dad497/category/global.all" target="_blank" class="aspect-video bg-black/40 border border-white/10 rounded-3xl flex items-center justify-center overflow-hidden relative shadow-2xl group-hover:border-orange-500/50 transition-colors">
                <NuxtImg src="/images/feedly.png" class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity" />
                <UIcon name="i-heroicons-rss" class="w-12 h-12 text-orange-500/20 mb-2 transition-transform group-hover:scale-110" />
                <div class="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-black to-transparent">
                  <p class="text-[10px] font-bold uppercase tracking-widest text-white/40">Flux RSS (Feedly 1/2)</p>
                </div>
             </a>
          </div>
          <!-- Sans Permission (ex-Feedly 2) -->
          <div class="reveal-up group">
             <a href="https://youtu.be/s4p4ecvLKZ4?si=t8to2o-wfmixXY_A" target="_blank" class="aspect-video bg-black/40 border border-white/10 rounded-3xl flex items-center justify-center overflow-hidden relative shadow-2xl group-hover:border-red-500/50 transition-colors">
                <NuxtImg src="/images/sans_permission.jpg" class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity" />
                <UIcon name="i-heroicons-microphone" class="w-12 h-12 text-amber-500/20 mb-2 transition-transform group-hover:scale-110" />
                <div class="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-black to-transparent">
                  <p class="text-[10px] font-bold uppercase tracking-widest text-white/40">Podcast (Sans Permission)</p>
                </div>
             </a>
          </div>
          <!-- Podcast Thumbnail (Diary of a CEO) -->
          <div class="reveal-up group">
             <a href="https://youtu.be/UclrVWafRAI?si=wkRfHD4DsXn3HQuc" target="_blank" class="aspect-video bg-black/40 border border-white/10 rounded-3xl flex items-center justify-center overflow-hidden relative shadow-2xl group-hover:border-amber-400/50 transition-colors">
                <NuxtImg src="/images/The_Diary_Of_Ceo.avif" class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity" />
                <UIcon name="i-heroicons-microphone" class="w-12 h-12 text-amber-400/20 mb-2 transition-transform group-hover:scale-110" />
                <div class="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-black to-transparent">
                  <p class="text-[10px] font-bold uppercase tracking-widest text-white/40">Podcast (Diary of a CEO)</p>
                </div>
             </a>
          </div>
          <!-- CTA Padlet -->
          <div class="reveal-up">
            <a href="https://padlet.com/gospel14es/les-arcticles-et-blogs-qui-m-ont-aid-a-realis-ma-veille-tech-bbiqgev6tg4uqlvn" target="_blank" class="w-full h-full flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors group">
              <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-10 h-10 text-white mb-4 transition-transform group-hover:scale-110 group-hover:rotate-12" />
              <p class="text-sm font-bold text-white text-center">Accéder au Padlet complet</p>
            </a>
          </div>
        </div>
      </section>

      <!-- Section Timeline d\'Articles -->
      <section class="mb-32 relative">
        <div class="text-center mb-16 reveal-up">
          <h2 class="text-section apple-heading text-white mb-4">L\'Évolution du Signal</h2>
          <p class="apple-body">Chronologie de ma veille : du standard MCP aux agents autonomes.</p>
        </div>
        
        <!-- Timeline Line -->
        <div class="absolute left-1/2 top-[180px] bottom-0 w-px bg-linear-to-b from-amber-500 via-orange-500 to-transparent -translate-x-1/2 hidden lg:block"></div>

        <div class="space-y-12 lg:space-y-24 relative">
          <div v-for="(article, index) in recentArticles" :key="article.title" :class="[
            'timeline-item relative flex flex-col lg:flex-row items-center gap-8 w-full group',
            index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
          ]">
            <!-- Content Card -->
            <div class="w-full lg:w-[45%]">
              <div :class="[
                'stat-card p-8 group-hover:border-amber-500/30 transition-all duration-500 reveal-up',
                index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
              ]">
                <div :class="['flex items-center gap-2 mb-4 text-[10px] font-bold uppercase tracking-widest text-amber-400', index % 2 === 0 ? 'lg:justify-end' : 'justify-start']">
                  <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full">{{ article.date }}</span>
                  <span class="text-white/30">•</span>
                  <span class="italic text-white/40">{{ article.source }}</span>
                </div>
                
                <h3 class="text-xl font-bold text-white mb-4 leading-tight group-hover:text-amber-400 transition-colors">{{ article.title }}</h3>
                <p class="text-sm text-white/50 mb-6 leading-relaxed">{{ article.summary }}</p>
                
                <div :class="['flex flex-wrap gap-2 mb-8', index % 2 === 0 ? 'lg:justify-end' : 'justify-start']">
                   <span v-for="tag in article.tags" :key="tag" class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/30">
                      {{ tag }}
                   </span>
                </div>

                <div :class="['flex', index % 2 === 0 ? 'lg:justify-end' : 'justify-start']">
                  <a :href="article.link" target="_blank" class="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-white hover:text-amber-400 transition-colors group/link">
                    Lire l'article
                    <UIcon name="i-heroicons-arrow-up-right" class="w-4 h-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>

            <!-- Central Point -->
            <div class="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
              <div class="w-4 h-4 rounded-full bg-apple-dark border-2 border-amber-500 group-hover:scale-150 group-hover:bg-amber-500 transition-all duration-300 z-10 shadow-[0_0_15px_rgba(255,215,0,0.5)]"></div>
            </div>

            <!-- Spacer for the other side -->
            <div class="hidden lg:block lg:w-[45%]"></div>
          </div>
        </div>
      </section>

      <!-- Impact & Synthèse (Double Face) -->
      <section class="mb-32 reveal-up">
        <div class="bg-linear-to-br from-amber-600 to-orange-800 rounded-[3rem] p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px]"></div>
          <h2 class="text-3xl font-bold mb-12 apple-heading text-center">Vision Critique des Impacts</h2>
          
          <div class="grid lg:grid-cols-2 gap-8">
            <div v-for="impact in impacts" :key="impact.title" class="p-8 md:p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all group">
              <div class="flex items-center gap-4 mb-10">
                <div class="p-3 bg-white/10 rounded-2xl group-hover:scale-110 transition-transform">
                  <UIcon :name="impact.icon" class="w-8 h-8 text-white" />
                </div>
                <h3 class="text-2xl font-bold apple-heading">{{ impact.title }}</h3>
              </div>
              
              <div class="space-y-6">
                <!-- Bénéfices -->
                <div class="flex gap-4 p-5 rounded-2xl bg-green-500/10 border border-green-500/20">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-amber-400 shrink-0" />
                  <div>
                    <p class="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-2">Opportunités</p>
                    <p class="text-white/80 text-[15px] leading-relaxed">{{ impact.benefits }}</p>
                  </div>
                </div>

                <!-- Risques -->
                <div class="flex gap-4 p-5 rounded-2xl bg-amber-600/10 border border-red-500/20">
                  <UIcon name="i-heroicons-exclamation-triangle" class="w-6 h-6 text-red-400 shrink-0" />
                  <div>
                    <p class="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-2">Risques & Limites</p>
                    <p class="text-white/80 text-[15px] leading-relaxed">{{ impact.risks }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Conclusion Fin -->
      <section class="max-w-4xl mx-auto mb-32 reveal-up">
        <div class="bg-gray-900 p-12 md:p-20 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[50px]"></div>
          <h2 class="text-4xl font-bold mb-10 apple-heading tracking-tight">Le métier demain ?</h2>
          <div class="apple-body text-xl space-y-8 text-white/80 font-normal">
            <p>
              Je suis convaincu que l'ingénieur de 2026 sera avant tout un <strong class="text-white font-bold">chef d'orchestre</strong>. Mais pour bien diriger cet orchestre numérique, il est vital de ne pas oublier le solfège : l'algorithmie et la logique pure.
            </p>
            <p>
              L'IA doit rester un <strong class="text-white font-bold">amplificateur</strong> et non une béquille. Ma veille m'a appris que ma valeur ajoutée humaine résidera dans cet esprit critique : savoir quand faire confiance à la machine et quand reprendre la main pour garantir la sécurité et la pérennité de notre code.
            </p>
          </div>
          <div class="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div class="flex items-center gap-4">
               <div class="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold tracking-tighter">GK</div>
               <div>
                  <div class="text-sm font-bold uppercase tracking-widest">Gospel Kizamba</div>
                  <div class="text-[10px] text-white/40 font-bold uppercase tracking-wider">Mise à jour : Mars 2026</div>
               </div>
            </div>
            <NuxtLink to="/contact" class="px-8 py-3 bg-linear-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:scale-105 transition-transform">Me contacter</NuxtLink>
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
  border-radius: 2.5rem;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.stat-card:hover {
  background: rgba(255, 255, 255, 0.06);
  transform: translateY(-8px);
  border-color: rgba(255, 215, 0, 0.3);
}

.gradient-text {
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
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
