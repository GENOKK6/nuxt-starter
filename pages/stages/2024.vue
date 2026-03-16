<script setup>
useHead({
  title: 'Stage 2024 - Lookiz - Kizamba Gospel',
  meta: [
    {
      name: 'description',
      content: 'Détails de mon premier stage en 1ère année de BTS SEO SLAM chez Lookiz : développement d\'une peluche IA éducative.'
    }
  ]
})

definePageMeta({
  layout: 'simple'
})

const stageDates = {
  start: '12 janvier 2024',
  end: '20 février 2024',
  duration: '8 semaines'
}

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
      <!-- Back button -->
      <div class="mb-8 reveal-up">
        <NuxtLink to="/stages" class="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
          Retour aux stages
        </NuxtLink>
      </div>

      <!-- Hero -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.1s;">
        <div class="flex items-center gap-3 mb-4">
          <span class="badge">
            <span class="w-2 h-2 rounded-full bg-green-500"></span>
            Stage 2024
          </span>
        </div>

        <h1 class="text-section apple-heading mb-6">
          Mon stage <span class="gradient-text">chez Lookiz</span>
        </h1>

        <p class="text-xl apple-body mb-8">
          Développement d'une peluche IA éducative pour enfants avec intégration d'API
          de traitement du langage naturel et génération audio. Implémentation de nouvelles
          fonctionnalités dans une architecture existante.
        </p>

        <!-- Tech stack -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🟢</div>
            <div class="text-xs text-gray-400">Node.js</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🚂</div>
            <div class="text-xs text-gray-400">Express</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🐍</div>
            <div class="text-xs text-gray-400">Python</div>
          </div>
          <div class="bg-apple-light-gray/30 p-4 rounded-xl text-center border border-gray-800">
            <div class="text-2xl mb-2">🤖</div>
            <div class="text-xs text-gray-400">LLM APIs</div>
          </div>
        </div>
      </div>

      <!-- Infos générales -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.2s;">
        <h2 class="text-2xl font-semibold mb-6">Informations générales</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-sm text-gray-400 mb-2">Entreprise</div>
            <div class="text-lg font-semibold mb-4">Lookiz</div>
            <div class="text-sm text-gray-400 mb-2">Poste</div>
            <div class="text-base">Développeur web junior</div>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="text-sm text-gray-400 mb-2">Période</div>
            <div class="text-lg font-semibold mb-4">
              {{ stageDates.start }} - {{ stageDates.end }}
            </div>
            <div class="text-sm text-gray-400 mb-2">Durée</div>
            <div class="text-base">{{ stageDates.duration }}</div>
          </div>
        </div>
      </div>

      <!-- Contexte de l'entreprise -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.3s;">
        <h2 class="text-2xl font-semibold mb-6">Le contexte</h2>
        <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800">
          <p class="text-gray-400 leading-relaxed mb-6">
            Lookiz est une startup qui développe des solutions innovantes autour de l'IA
            et de l'éducation. Leur projet phare était <strong class="text-white">Harry la peluche</strong> -
            une peluche interactive pour enfants qui intègre des capacités de conversation
            et d'apprentissage grâce à l'IA.
          </p>
          <p class="text-gray-400 leading-relaxed">
            Mon rôle était d'aider le fondateur / directeur technique dans l'injection
            de nouvelles fonctionnalités dans le projet. J'étais intégré à une petite équipe
            (1-2 personnes) et j'ai pu travailler sur le cycle complet du développement :
            de la conception à la livraison.
          </p>
        </div>
      </div>

      <!-- Missions -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.4s;">
        <h2 class="text-2xl font-semibold mb-6">Mes missions et responsabilités</h2>
        <div class="space-y-4">
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                <span class="text-2xl">🎯</span>
              </div>
              <div>
                <h3 class="font-semibold mb-2 text-amber-400">Analyse des besoins</h3>
                <p class="text-sm text-gray-400 leading-relaxed">
                  Comprendre les fonctionnalités demandées par le client, analyser
                  les exigences techniques et fonctionnelles, et estimer la faisabilité
                  des développements à réaliser.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                <span class="text-2xl">💻</span>
              </div>
              <div>
                <h3 class="font-semibold mb-2 text-cyan-400">Développement backend</h3>
                <p class="text-sm text-gray-400 leading-relaxed">
                  Implémentation des nouvelles fonctionnalités dans l'application existante.
                  Travail avec Node.js, Express, et Python pour la partie IA. Intégration d'API
                  de traitement de langage naturel (NLP) et de génération audio.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                <span class="text-2xl">🔒</span>
              </div>
              <div>
                <h3 class="font-semibold mb-2 text-amber-400">Tests et sécurité</h3>
                <p class="text-sm text-gray-400 leading-relaxed">
                  Mise en place de tests unitaires et d'intégration pour garantir la stabilité
                  des nouvelles fonctionnalités. Réalisation de tests de sécurité pour identifier
                  les vulnérabilités potentielles dans les injections de code.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                <span class="text-2xl">📦</span>
              </div>
              <div>
                <h3 class="font-semibold mb-2 text-amber-400">Intégration et déploiement</h3>
                <p class="text-sm text-gray-400 leading-relaxed">
                  Configuration de l'environnement de développement, gestion des dépendances,
                  et préparation au déploiement sur les serveurs de production.
                  Utilisation de Git pour le versioning et collaboration via GitHub.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Technologies -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.5s;">
        <h2 class="text-2xl font-semibold mb-6">Technologies et outils</h2>
        <div class="flex flex-wrap gap-3">
          <span class="skill-tag">Node.js</span>
          <span class="skill-tag">Express</span>
          <span class="skill-tag">Python</span>
          <span class="skill-tag">LLM APIs</span>
          <span class="skill-tag">GitHub</span>
          <span class="skill-tag">VS Code</span>
          <span class="skill-tag">Docker</span>
          <span class="skill-tag">API REST</span>
          <span class="skill-tag">Audio Processing</span>
        </div>
      </div>

      <!-- Ce que j'ai appris -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.6s;">
        <h2 class="text-2xl font-semibold mb-6">Ce que j'ai appris</h2>
        <div class="space-y-4">
          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <h3 class="font-semibold mb-3 text-amber-400">🔗 L'interconnexion des technologies</h3>
            <p class="text-sm text-gray-400 leading-relaxed">
              J'ai vu concrètement comment une peluche physique peut être connectée à une
              IA conversationnelle via une architecture client-serveur. Le traitement audio,
              l'NLP, et la génération de réponse en temps réel forment une chaîne complexe
              mais fascinante.
            </p>
          </div>

          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <h3 class="font-semibold mb-3 text-amber-400">🛡️ L'importance de la sécurité</h3>
            <p class="text-sm text-gray-400 leading-relaxed">
              Un projet qui cible des enfants doit être extrêmement sécurisé. J'ai appris
              à valider et sanitizer toutes les entrées, à protéger les API contre les
              injections, et à concevoir des architectures robustes contre les attaques.
            </p>
          </div>

          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <h3 class="font-semibold mb-3 text-amber-400">⚡ Travailler en petite structure</h3>
            <p class="text-sm text-gray-400 leading-relaxed">
              Dans une startup ou une petite entreprise, chaque décision a un impact immédiat.
              Il faut être autonome, curieux, et capable de rapidement comprendre un codebase
              existant pour y ajouter des fonctionnalités. La communication avec le patron
              était directe et les feedbacks rapides.
            </p>
          </div>

          <div class="bg-apple-light-gray/30 p-6 rounded-2xl border border-gray-800">
            <h3 class="font-semibold mb-3 text-amber-400">🤖 L'IA en production</h3>
            <p class="text-sm text-gray-400 leading-relaxed">
              C'était ma première expérience concrète d'intégration d'une IA (LLM) dans
              une application réelle. J'ai compris les défis : latence, coûts d'API,
              gestion des tokens, et l'importance de bien formater les prompts pour
              obtenir des réponses adaptées aux enfants.
            </p>
          </div>
        </div>
      </div>

      <!-- Challenges et réussites -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.7s;">
        <h2 class="text-2xl font-semibold mb-6">Challenges et réussites</h2>
        <div class="space-y-4">
          <div class="bg-amber-500/10 border border-amber-500/30 p-6 rounded-2xl">
            <h3 class="font-semibold mb-3 text-amber-400">⚠️ Le challenge principal</h3>
            <p class="text-sm text-gray-400 leading-relaxed">
              Le plus difficile a été de <strong class="text-white">comprendre rapidement un codebase existant</strong>
              que je n'avais pas écrit. Il a fallu que je m'imprègne de l'architecture,
              des conventions de code, et des choix techniques pris avant mon arrivée.
              En parallèle, je devais livrer des fonctionnalités opérationnelles dans
              un délai très court.
            </p>
          </div>

          <div class="bg-green-500/10 border border-green-500/30 p-6 rounded-2xl">
            <h3 class="font-semibold mb-3 text-amber-400">✅ Ma plus grande fierté</h3>
            <p class="text-sm text-gray-400 leading-relaxed">
              Avoir réussi à <strong class="text-white">injecter une fonctionnalité complète d'interaction vocale</strong>
              qui fonctionne en temps réel. Voir la peluche répondre aux questions des enfants
              avec ma contribution a été très gratifiant. J'ai aussi appris à faire des
              <strong class="text-white">tests de sécurité sérieux</strong> et à documenter mon code
              pour que l'équipe puisse le maintenir.
            </p>
          </div>
        </div>
      </div>

      <!-- Réflexion -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.8s;">
        <h2 class="text-2xl font-semibold mb-6">Réflexion et outlook</h2>
        <div class="bg-amber-500/10 border border-amber-500/30 p-8 rounded-2xl">
          <p class="text-gray-400 leading-relaxed mb-6">
            Ce premier stage m'a confirmé que je voulais continuer dans le développement,
            mais surtout qu'<strong class="text-white">inclure l'IA dans des projets concrets</strong> était
            une voie passionnante. J'ai vu l'impact positif que peut avoir la technologie
            sur les gens (ici, des enfants), et cela donne du sens au travail de développeur.
          </p>
          <p class="text-gray-400 leading-relaxed">
            J'ai également réalisé l'importance de l'<strong class="text-white">autonomie</strong> et de la
            <strong class="text-white">communication</strong> dans une équipe restreinte. Si je devais recommencer,
            je passerais plus de temps dès le premier jour à explorer le codebase existant
            pour mieux en saisir l'architecture avant de commencer à coder.
          </p>
        </div>
      </div>

      <!-- Navigation -->
      <div class="text-center reveal-up" style="animation-delay: 0.9s; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1); margin-top: 3rem;">
        <p class="mb-6 text-gray-400">
          Découvrez également mon stage de 2ème année
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <NuxtLink to="/stages/2025" class="btn-outline">
            Voir le stage 2025
          </NuxtLink>
          <NuxtLink to="/stages" class="btn-outline">
            Retour aux stages
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Styles communs déjà définis dans le layout */
</style>
