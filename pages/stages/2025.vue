<script setup>
useHead({
  title: 'Stage 2025 - Eid Batiment - Kizamba Gospel',
  meta: [
    {
      name: 'description',
      content: 'Détails de mon premier stage chez Eid Batiment : acculturation IA et initiation technologique.'
    }
  ]
})

definePageMeta({
  layout: 'simple'
})

const stageDates = {
  start: 'Mai 2025',
  end: 'Juin 2025',
  duration: '4 semaines'
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
            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
            Stage 2025
          </span>
          <span class="text-gray-400 text-sm">1ère année</span>
        </div>

        <h1 class="text-section apple-heading mb-6">
          Initiation IA chez <span class="gradient-text">Eid Batiment</span>
        </h1>

        <p class="text-xl apple-body mb-8">
          Accompagnement d'une entreprise du BTP dans sa transformation numérique. Un stage axé sur le conseil, l'acculturation technologique et l'optimisation des flux de travail par l'IA.
        </p>

        <!-- Info Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div class="bg-apple-light-gray/30 p-6 rounded-xl border border-gray-800">
            <div class="text-gray-400 text-xs uppercase tracking-widest mb-2">Secteur</div>
            <div class="text-lg font-semibold">Bâtiment / BTP</div>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-xl border border-gray-800">
            <div class="text-gray-400 text-xs uppercase tracking-widest mb-2">Rôle</div>
            <div class="text-lg font-semibold">Solution Designer / IA Tutor</div>
          </div>
          <div class="bg-apple-light-gray/30 p-6 rounded-xl border border-gray-800">
            <div class="text-gray-400 text-xs uppercase tracking-widest mb-2">Focus</div>
            <div class="text-lg font-semibold">Productivité</div>
          </div>
        </div>
      </div>

      <!-- Mission Context -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.2s;">
        <h2 class="text-2xl font-semibold mb-6">Le contexte de la mission</h2>
        <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800">
          <p class="text-gray-400 leading-relaxed mb-6">
            Eid Batiment est une entreprise familiale spécialisée dans le gros œuvre. Lors de mon stage de première année, mon objectif n'était pas de coder une solution technique figée, mais d'initier l'entrepreneur et ses équipes à la révolution de l'<strong>Intelligence Artificielle</strong>.
          </p>
          <p class="text-gray-400 leading-relaxed">
            Dans un secteur traditionnel comme le bâtiment, l'IA représente un levier de productivité immense, souvent méconnu. Ma mission a été de faire le pont entre mes compétences technologiques acquises en BTS SIO et les besoins réels du terrain.
          </p>
        </div>
      </div>

      <!-- Key Activities -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.3s;">
        <h2 class="text-2xl font-semibold mb-6">Activités principales</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-blue-900/10 border border-blue-900/30 p-6 rounded-2xl">
            <h3 class="font-semibold mb-3">Acculturation IA</h3>
            <p class="text-sm text-gray-400">
              Formations individuelles et collectives sur l'utilisation de <strong>ChatGPT</strong> et <strong>Claude</strong> pour la rédaction de mails, le résumé de rapports techniques et l'assistance administrative.
            </p>
          </div>
          <div class="bg-blue-900/10 border border-blue-900/30 p-6 rounded-2xl">
            <h3 class="font-semibold mb-3">Conception de Solutions</h3>
            <p class="text-sm text-gray-400">
              Analyse des processus de l'entreprise pour identifier les tâches répétitives automatisables. Rédaction de cahiers des charges pour des futurs outils digitaux métier.
            </p>
          </div>
          <div class="bg-blue-900/10 border border-blue-900/30 p-6 rounded-2xl">
            <h3 class="font-semibold mb-3">Aide à la Décision</h3>
            <p class="text-sm text-gray-400">
              Accompagnement du gérant dans le choix d'outils numériques pour la gestion de ses chantiers et la dématérialisation des documents.
            </p>
          </div>
          <div class="bg-blue-900/10 border border-blue-900/30 p-6 rounded-2xl">
            <h3 class="font-semibold mb-3">Veille Technologique</h3>
            <p class="text-sm text-gray-400">
              Présentation des nouveaux outils IA spécifiques au secteur (génération d'images pour avant-projet, assistants de calcul de devis).
            </p>
          </div>
        </div>
      </div>

      <!-- Bilan -->
      <div class="mb-16 reveal-up" style="animation-delay: 0.4s;">
        <h2 class="text-2xl font-semibold mb-6">Ce que j'ai appris</h2>
        <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800 text-gray-400 leading-relaxed">
          <p class="mb-4">
            Ce stage a été une leçon d'<strong>adaptation</strong>. J'ai dû apprendre à vulgariser des concepts complexes (LLM, Prompts, Automatisation) pour des professionnels qui n'ont pas de bagage informatique.
          </p>
          <p>
            Cela m'a confirmé que le rôle d'un développeur aujourd'hui dépasse largement le simple codage : il s'agit d'être un <strong>conseiller</strong> capable de guider les entreprises vers les bonnes technologies pour résoudre leurs problèmes concrets.
          </p>
        </div>
      </div>

      <!-- Navigation -->
      <div class="pt-12 border-t border-white/10 flex justify-between items-center reveal-up">
        <NuxtLink to="/stages" class="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
          ← Retour à la liste
        </NuxtLink>
        <NuxtLink to="/stages/2026" class="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2 font-semibold">
          Stage 2026 (Lookiz) →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
