<script setup>
const mobileMenuOpen = ref(false)

useHead({
  title: 'Compétences - Kizamba Gospel',
  meta: [
    {
      name: 'description',
      content: 'Découvrez mes compétences techniques en développement web, frameworks, bases de données et outils.'
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
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-16 reveal-up">
        <span class="text-sm font-semibold text-amber-500 tracking-widest uppercase">Compétences</span>
        <h1 class="text-section apple-heading mt-4 mb-6">
          Expertise <span class="gradient-text">technique</span>
        </h1>
        <p class="text-xl apple-body max-w-2xl">
          Maîtrise technique acquise au cours de mon cursus en BTS SIO SLAM,
          enrichie par des projets personnels et l'intégration de l'IA.
        </p>
      </div>

      <!-- Skills categories -->
      <div class="space-y-16">
        <!-- Frontend -->
        <div class="reveal-up" style="animation-delay: 0.1s;">
          <div class="flex items-center gap-4 mb-8">
            <div class="icon-box bg-amber-900/30">
              <span>🎨</span>
            </div>
            <div>
              <h2 class="text-2xl font-semibold">Développement Frontend</h2>
              <p class="text-sm text-gray-400">Fondamentaux de l'interface utilisateur</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="skill in [
              { name: 'HTML5 / CSS3', category: 'Fondamentaux Web', description: 'Maîtrise de la structure sémantique et de la mise en forme. Création de sites responsives et respect des standards web.' }
            ]" :key="skill.name" class="skill-card p-6 rounded-2xl max-w-md">
              <div class="mb-4">
                <h3 class="font-semibold mb-1">{{ skill.name }}</h3>
                <p class="text-xs text-gray-400">{{ skill.category }}</p>
              </div>
              <p class="text-sm text-gray-400">{{ skill.description }}</p>
            </div>
          </div>
        </div>

        <!-- Backend & Logic -->
        <div class="reveal-up" style="animation-delay: 0.2s;">
          <div class="flex items-center gap-4 mb-8">
            <div class="icon-box bg-amber-900/30">
              <span>⚙️</span>
            </div>
            <div>
              <h2 class="text-2xl font-semibold">Backend & Architecture</h2>
              <p class="text-sm text-gray-400">Développement de serveurs, APIs et bases de données</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="skill in [
              { name: 'PHP / Laravel', category: 'Langage & Framework', description: 'Apprentissage en BTS SIO (MVC, ORM Eloquent). Création d\'applications web avec gestion de données.' },
              { name: 'C# / .NET', category: 'Langages & Frameworks', description: 'Maîtrise de l\'écosystème .NET : développement d\'applications Desktop (WinForms) et mobiles multi-plateformes (.NET MAUI) avec une forte base en POO.' },
              { name: 'Python', category: 'Langage de Programmation', description: 'Bases solides en programmation impérative et POO, utilisé pour des scripts d\'automatisation et l\'analyse de données.' },
              { name: 'MySQL', category: 'Base de données SQL', description: 'Modélisation de données (MCD/MLD) et manipulation via requêtes SQL complexes.' }
            ]" :key="skill.name" class="skill-card p-6 rounded-2xl">
              <div class="mb-4">
                <h3 class="font-semibold mb-1">{{ skill.name }}</h3>
                <p class="text-xs text-gray-400">{{ skill.category }}</p>
              </div>
              <p class="text-sm text-gray-400">{{ skill.description }}</p>
            </div>
          </div>
        </div>

        <!-- IA & Outils -->
        <div class="reveal-up" style="animation-delay: 0.3s;">
          <div class="flex items-center gap-4 mb-8">
            <div class="icon-box bg-amber-900/30">
              <span>🤖</span>
            </div>
            <div>
              <h2 class="text-2xl font-semibold">IA, Outils & Certifications</h2>
              <p class="text-sm text-gray-400">Productivité et gestion de projet</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="skill in [
              { name: 'GitHub & Git', category: 'Versioning', description: 'Maîtrise du versioning et des bases de la collaboration sur GitHub (Certifié GitHub Foundations).' },
              { name: 'Utilisation d\'IA', category: 'Productivité', description: 'Utilisation de l\'IA (OpenAI, Claude, Cursor) pour accélérer le développement et l\'apprentissage.' }
            ]" :key="skill.name" class="skill-card p-6 rounded-2xl">
              <div class="mb-4">
                <h3 class="font-semibold mb-1">{{ skill.name }}</h3>
                <p class="text-xs text-gray-400">{{ skill.category }}</p>
              </div>
              <p class="text-sm text-gray-400">{{ skill.description }}</p>
            </div>
          </div>
        </div>

        <!-- Compétences Passives (Soft Skills) -->
        <div class="reveal-up" style="animation-delay: 0.4s;">
          <div class="flex items-center gap-4 mb-8">
            <div class="icon-box bg-amber-900/30">
              <span>🧠</span>
            </div>
            <div>
              <h2 class="text-2xl font-semibold">Compétences Transverses</h2>
              <p class="text-sm text-gray-400">Qualités professionnelles et méthodologiques</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="skill in [
              { name: 'Anglais Technique', category: 'Communication', description: 'Lecture de documentations, veille technologique et communication fluide.' },
              { name: 'Autonomie & Veille', category: 'Apprentissage', description: 'Capacité à s\'auto-former rapidement sur de nouveaux outils.' },
              { name: 'Analyse & Conception', category: 'Logique métier', description: 'Capacité à concevoir une solution logicielle adaptée à un besoin client.' }
            ]" :key="skill.name" class="skill-card p-6 rounded-2xl">
              <div class="mb-4">
                <h3 class="font-semibold mb-1">{{ skill.name }}</h3>
                <p class="text-xs text-gray-400">{{ skill.category }}</p>
              </div>
              <p class="text-sm text-gray-400">{{ skill.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- IA Strategy Banner -->
      <div class="mt-20 reveal-up" style="animation-delay: 0.5s;">
        <div class="bg-linear-to-r from-amber-900/10 to-amber-900/20 p-10 rounded-3xl border border-amber-900/30">
          <div class="flex flex-col md:flex-row items-center gap-8">
            <div class="flex-1">
              <div class="inline-flex items-center gap-2 mb-4">
                <span class="badge">VISION</span>
                <span class="text-amber-500 font-semibold">IA NATIVE</span>
              </div>
              <h3 class="text-2xl font-semibold mb-4">Un développement propulsé par l'IA</h3>
              <p class="text-gray-400 mb-6 leading-relaxed">
                J'intègre l'IA au cœur de chaque étape de mon cycle de développement. De l'architecture initiale à la mise en production, j'utilise les outils les plus avancés (Cursor, Copilot, Perplexity) pour garantir une rapidité d'exécution et une qualité de code optimale.
              </p>
              <div class="flex flex-wrap gap-3">
                <span class="px-4 py-2 bg-amber-900/20 border border-amber-900/30 rounded-lg text-sm">OpenAI & LLM</span>
                <span class="px-4 py-2 bg-amber-900/20 border border-amber-900/30 rounded-lg text-sm">Automatisation</span>
                <span class="px-4 py-2 bg-orange-900/20 border border-orange-900/30 rounded-lg text-sm">Productivité</span>
                <span class="px-4 py-2 bg-yellow-900/20 border border-yellow-900/30 rounded-lg text-sm">Futurisme</span>
              </div>
            </div>
            <div class="shrink-0">
              <div class="text-center">
                <div class="inline-block p-10 border-2 border-amber-500/30 rounded-full bg-amber-900/10 relative">
                  <div class="text-4xl">🚀</div>
                  <div class="absolute inset-0 border-2 border-amber-500/20 rounded-full animate-pulse"></div>
                </div>
                <div class="mt-4 text-gray-400 text-sm italic">"Build faster, better"</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
