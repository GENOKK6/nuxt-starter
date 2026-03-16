<script setup>
useHead({
  title: 'Mentions Légales - Kizamba Gospel',
  meta: [
    {
      name: 'description',
      content: 'Mentions légales du portfolio de Kizamba Gospel.'
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
    <div class="max-w-4xl mx-auto px-6 lg:px-8">
      <!-- Back button -->
      <div class="mb-8 reveal-up">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
          Retour à l'accueil
        </NuxtLink>
      </div>

      <!-- Header -->
      <div class="mb-12 reveal-up" style="animation-delay: 0.1s;">
        <h1 class="text-section apple-heading mb-6">
          Mentions <span class="gradient-text">Légales</span>
        </h1>
        <p class="text-xl apple-body text-gray-400">
          Informations légales concernant le site portfolio de Kizamba Gospel.
        </p>
      </div>

      <!-- Content -->
      <div class="space-y-8">
        <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800 reveal-up" style="animation-delay: 0.2s;">
          <h2 class="text-2xl font-semibold mb-4 text-amber-400">1. Édition du site</h2>
          <div class="text-gray-400 space-y-2">
            <p><strong class="text-white">Propriétaire :</strong> Kizamba Gospel</p>
            <p><strong class="text-white">Adresse :</strong> Paris, France</p>
            <p><strong class="text-white">Email :</strong> kizamba.gospel@edu.dev</p>
            <p><strong class="text-white">Statut :</strong> Étudiant en BTS SIO SLAM</p>
          </div>
        </div>

        <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800 reveal-up" style="animation-delay: 0.3s;">
          <h2 class="text-2xl font-semibold mb-4 text-amber-400">2. Hébergement</h2>
          <div class="text-gray-400 space-y-2">
            <p><strong class="text-white">Hébergeur :</strong> Vercel Inc.</p>
            <p><strong class="text-white">Adresse :</strong> 340 S Lemon Ave #4139, Walnut, CA 91789, USA</p>
            <p><strong class="text-white">Site web :</strong> <a href="https://vercel.com" target="_blank" class="text-amber-400 hover:underline">vercel.com</a></p>
          </div>
        </div>

        <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800 reveal-up" style="animation-delay: 0.4s;">
          <h2 class="text-2xl font-semibold mb-4 text-amber-400">3. Propriété intellectuelle</h2>
          <p class="text-gray-400 leading-relaxed mb-4">
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur
            et la propriété intellectuelle. Tous les droits de reproduction, de représentation et de
            diffusion sont réservés.
          </p>
          <p class="text-gray-400 leading-relaxed">
            Les contenus présents sur ce site (textes, images, logo, code source) sont la propriété
            exclusive de Kizamba Gospel, sauf mentions contraires. Toute reproduction, même partielle,
            est strictement interdite sans autorisation préalable.
          </p>
        </div>

        <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800 reveal-up" style="animation-delay: 0.5s;">
          <h2 class="text-2xl font-semibold mb-4 text-amber-400">4. Données personnelles</h2>
          <p class="text-gray-400 leading-relaxed mb-4">
            Ce site ne collecte aucune donnée personnelle de ses visiteurs. Aucun cookie de tracking
            n'est utilisé. Les seules données potentiellement collectées le sont via le formulaire de contact,
            et uniquement dans le but de répondre aux messages reçus.
          </p>
          <p class="text-gray-400 leading-relaxed">
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression
            de vos données personnelles. Pour exercer ce droit, vous pouvez me contacter à l'adresse
            email indiquée ci-dessus.
          </p>
        </div>

        <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800 reveal-up" style="animation-delay: 0.6s;">
          <h2 class="text-2xl font-semibold mb-4 text-amber-400">5. Responsabilité</h2>
          <p class="text-gray-400 leading-relaxed">
            Le propriétaire de ce site s'efforce de fournir des informations aussi précises que possible.
            Cependant, il ne pourra être tenu responsable des omissions, des inexactitudes et des
            erreurs dans la tenue et la mise à jour des pages. Les informations contenues sur ce site
            sont fournies à titre indicatif et peuvent faire l'objet de modifications.
          </p>
        </div>

        <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800 reveal-up" style="animation-delay: 0.7s;">
          <h2 class="text-2xl font-semibold mb-4 text-amber-400">6. Liens externes</h2>
          <p class="text-gray-400 leading-relaxed">
            Ce site peut contenir des liens vers des sites externes. Le propriétaire n'exerce aucun
            contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leurs pratiques
            de confidentialité ou leur disponibilité. La présence de ces liens ne constitue pas une
            validation ou une recommandation des sites concernés.
          </p>
        </div>

        <div class="bg-apple-light-gray/30 p-8 rounded-2xl border border-gray-800 reveal-up" style="animation-delay: 0.8s;">
          <h2 class="text-2xl font-semibold mb-4 text-amber-400">7. Droit applicable</h2>
          <p class="text-gray-400 leading-relaxed">
            Les présentes mentions légales sont soumises au droit français. En cas de litige relatif
            à l'utilisation du présent site, les tribunaux français seuls seront compétents.
          </p>
        </div>
      </div>

      <!-- Back -->
      <div class="text-center reveal-up" style="animation-delay: 0.9s; margin-top: 48px;">
        <NuxtLink to="/" class="btn-outline">
          ← Retour à l'accueil
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Styles communs déjà définis dans le layout */
</style>
