<script setup>
const contactInfo = {
  email: 'gospel@example.com',
  phone: '06 00 00 00 00',
  location: 'Paris, France', // À remplacer
  availability: 'Disponible pour alternance à partir de septembre 2025'
}

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/ton-profil',
    icon: 'linkedin',
    color: 'bg-blue-600'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ton-username',
    icon: 'github',
    color: 'bg-gray-900 dark:bg-white'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/ton-profil',
    icon: 'twitter',
    color: 'bg-sky-500'
  }
]

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref(null) // 'success' | 'error' | null
const submitMessage = ref('')

const submitForm = async () => {
  isSubmitting.value = true
  submitStatus.value = null
  submitMessage.value = ''

  // TODO: Configurer l'URL de ton endpoint d'API
  // Pour l'instant, simulation d'envoi réussi
  try {
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Exemple avec fetch (à décommenter et configurer) :
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })
    //
    // if (response.ok) {
    //   throw new Error('Erreur lors de l\'envoi')
    // }

    submitStatus.value = 'success'
    submitMessage.value = 'Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.'
    formData.name = ''
    formData.email = ''
    formData.subject = ''
    formData.message = ''
  } catch (error) {
    submitStatus.value = 'error'
    submitMessage.value = 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.'
  } finally {
    isSubmitting.value = false
  }
}

const getSocialIcon = (iconName) => {
  const icons = {
    linkedin: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
    github: '<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>',
    twitter: '<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>'
  }
  return icons[iconName] || icons.github
}
</script>

<template>
  <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Contactez-moi
        </h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Vous avez un projet ? Une opportunité d'alternance ? N'hésitez pas à me contacter !
        </p>
        <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
      </div>

      <div class="grid lg:grid-cols-3 gap-12">
        <!-- Colonne gauche : Infos de contact -->
        <div class="lg:col-span-1 space-y-6">
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span class="text-blue-600 dark:text-blue-400">📋</span>
              Mes coordonnées
            </h3>

            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
                  <a :href="`mailto:${contactInfo.email}`" class="text-gray-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {{ contactInfo.email }}
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0-2a5 5 0 100 10 5 5 0 000-10z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">Téléphone</p>
                  <a :href="`tel:${contactInfo.phone}`" class="text-gray-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {{ contactInfo.phone }}
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">Localisation</p>
                  <p class="text-gray-900 dark:text-white font-semibold">{{ contactInfo.location }}</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">Disponibilité</p>
                  <p class="text-gray-900 dark:text-white font-semibold">{{ contactInfo.availability }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Réseaux sociaux -->
          <div class="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-900 rounded-2xl p-6 border border-blue-100 dark:border-gray-700">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4 text-center">Réseaux professionnels</h3>
            <div class="flex justify-center gap-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                :class="social.color"
                :aria-label="`Voir mon profil ${social.name}`"
              >
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" v-html="getSocialIcon(social.icon)"></svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Colonne droite : Formulaire -->
        <div class="lg:col-span-2">
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span class="text-purple-600 dark:text-purple-400">✉️</span>
              Envoyez-moi un message
            </h3>

            <!-- Message de statut -->
            <div v-if="submitMessage" :class="[
              'p-4 rounded-lg mb-6',
              submitStatus === 'success' ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200' :
              'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
            ]">
              <div class="flex items-center gap-2 mb-1 font-semibold">
                <svg v-if="submitStatus === 'success'" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
                <span>{{ submitStatus === 'success' ? 'Message envoyé !' : 'Erreur' }}</span>
              </div>
              <p class="text-sm">{{ submitMessage }}</p>
            </div>

            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Nom complet <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    v-model="formData.name"
                    required
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label for="email" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    v-model="formData.email"
                    required
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all"
                    placeholder="votre.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label for="subject" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Sujet <span class="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  v-model="formData.subject"
                  required
                  class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all"
                  placeholder="Objet de votre message"
                />
              </div>

              <div>
                <label for="message" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Message <span class="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all resize-none"
                  placeholder="Décrivez votre projet, votre demande d'alternance, ou simplement une question..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg"
              >
                <svg v-if="isSubmitting" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
