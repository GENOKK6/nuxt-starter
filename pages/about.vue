<script setup>
useHead({
  title: 'À propos - Kizamba Gospel',
  meta: [
    {
      name: 'description',
      content: 'Découvrez mon parcours, mes ambitions et ma formation en développement web.'
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
  <!-- Hero section -->
  <section class="section pt-32" style="text-align: center;">
    <div class="max-w-4xl mx-auto px-6 lg:px-8">
      <div class="mb-12 reveal-up">
        <span class="text-sm font-semibold text-amber-500 tracking-widest uppercase">À propos</span>
        <h1 class="text-section apple-heading mt-4 mb-6">
          Mon <span class="gradient-text">parcours</span>
        </h1>
      </div>

      <div class="space-y-12 text-left">
        <!-- Qui suis-je -->
        <div class="reveal-up">
          <h2 class="text-2xl font-semibold mb-6">Qui suis-je ?</h2>
          <div class="space-y-4 text-lg apple-body">
            <p>
              Je m'appelle <strong class="text-white">Gospel Kizamba</strong>, développeur fullstack en
              <strong class="text-white">BTS SIO SLAM</strong> (Solutions Logicielles et Applications Métiers).
            </p>
            <p>
              Plus qu'un simple passionné de technologie, je suis animé par l'innovation et la création. J'ai choisi ce cursus avec un objectif clair : acquérir le bagage technique nécessaire pour comprendre les mécanismes profonds de l'informatique. Je ne me définis pas uniquement comme un codeur, mais comme un <strong class="text-white">concepteur de solutions</strong>. Mon but est de maîtriser la logique de développement pour transformer des idées concrètes en produits capables de répondre à des besoins réels du marché.
            </p>
            <p>
              Aujourd'hui, ma force réside dans ma capacité à orchestrer ces connaissances en plaçant l'<strong class="text-white">Intelligence Artificielle</strong> au cœur de mon processus créatif, ce qui me permet de prototyper et de déployer des solutions fonctionnelles avec une efficacité décuplée.
            </p>
            <p>
              Actuellement en <strong class="text-white">2ème année</strong>, je développe des projets
              professionnels qui allient robustesse technique et ambition entrepreneuriale.
            </p>
          </div>
        </div>

        <!-- Timeline -->
        <div class="reveal-up" style="animation-delay: 0.1s;">
          <h2 class="text-2xl font-semibold mb-8">Mon <span class="gradient-text">parcours</span></h2>
          <div class="space-y-8">
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="text-xl font-semibold">2026 - Stage chez Lookiz</h3>
                  <span class="text-sm text-gray-400">Janvier - Février 2026</span>
                </div>
                <p class="text-gray-400 mb-3">
                  Développement du moteur conversationnel de la peluche intelligente Ary.
                  Génération de 500+ contenus pédagogiques structurés via Python.
                </p>
                <NuxtLink to="/stages" class="text-amber-500 hover:underline text-sm">Voir les détails →</NuxtLink>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="text-xl font-semibold">2025-26 - BTS SIO SLAM</h3>
                  <span class="text-sm text-gray-400">2ème année</span>
                </div>
                <p class="text-gray-400 mb-3">
                  Spécialisation en solutions logicielles, architecture MVC et intégration d'IA.
                  Approfondissement des concepts de programmation objet et de gestion de projet.
                </p>
                <NuxtLink to="/skills" class="text-amber-500 hover:underline text-sm">Voir mes compétences →</NuxtLink>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="text-xl font-semibold">2025 - Stage chez Eid Batiment</h3>
                  <span class="text-sm text-gray-400">Juin 2025</span>
                </div>
                <p class="text-gray-400 mb-3">
                  Accompagnement strategique et initiation aux outils d'IA générative (ChatGPT, Claude) pour optimiser les processus administratifs dans le BTP.
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="text-xl font-semibold">2024-25 - BTS SIO SLAM</h3>
                  <span class="text-sm text-gray-400">1ère année</span>
                </div>
                <p class="text-gray-400 mb-3">
                  Acquisition des fondamentaux : HTML, CSS, PHP, C#, Python et SQL. Développement d'une vision globale des solutions logicielles et des infrastructures métiers.
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="text-xl font-semibold">2021-24 - Baccalauréat Pro</h3>
                  <span class="text-sm text-gray-400">Lycée Adolphe Cherioux</span>
                </div>
                <p class="text-gray-400">
                  Baccalauréat professionnel (spécialité Organisation et Réalisation du Gros Œuvre).
                  Analyse de plans et respect des normes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Objectives -->
        <div class="reveal-up" style="animation-delay: 0.2s;">
          <h2 class="text-2xl font-semibold mb-6">Mes <span class="gradient-text">objectifs</span></h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
              <div class="w-12 h-12 bg-amber-900/30 rounded-2xl flex items-center justify-center mb-4">
                <span class="text-xl">🎯</span>
              </div>
              <h3 class="font-semibold mb-2">Court terme</h3>
              <p class="text-sm text-gray-400">
                Valider mon BTS avec mention, approfondir mon expérience en entreprise et obtenir des certifications reconnues (GitHub, Cloud, IA).
              </p>
            </div>

            <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
              <div class="w-12 h-12 bg-purple-900/30 rounded-2xl flex items-center justify-center mb-4">
                <span class="text-xl">🚀</span>
              </div>
              <h3 class="font-semibold mb-2">Moyen terme</h3>
              <p class="text-sm text-gray-400">
                Compléter mon profil technique par une formation juridique ou managériale afin d'élargir ma vision stratégique et de structurer mes futurs projets entrepreneuriaux.
              </p>
            </div>

            <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
              <div class="w-12 h-12 bg-green-900/30 rounded-2xl flex items-center justify-center mb-4">
                <span class="text-xl">🌟</span>
              </div>
              <h3 class="font-semibold mb-2">Long terme</h3>
              <p class="text-sm text-gray-400">
                Concevoir et propulser plusieurs solutions SaaS innovantes, tout en développant un écosystème de projets à forte valeur ajoutée.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- CV Link Section -->
      <div class="mt-20 reveal-up" style="animation-delay: 0.3s;">
        <div class="bg-linear-to-r from-amber-900/20 to-red-900/20 p-10 rounded-3xl border border-white/10 text-center">
          <h2 class="text-2xl font-semibold mb-4 text-white">Consulter mon CV</h2>
          <p class="text-gray-400 mb-8 max-w-xl mx-auto">
            Pour une vue d'ensemble de mes compétences, de mon parcours académique 
            et de mes expériences professionnelles détaillées.
          </p>
          <NuxtLink to="/cv" class="btn-primary">
            Voir le résumé de mon CV →
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
