<script setup>
useHead({
  title: 'Contact - Kizamba Gospel',
  meta: [
    {
      name: 'description',
      content: 'Contactez Kizamba Gospel, développeur web en BTS SIO SLAM, pour toute opportunité professionnelle ou collaboration.'
    }
  ]
})

definePageMeta({
  layout: 'simple'
})

// Formulaire avec Alpine.js (via x-data dans le template)
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const submitForm = async () => {
  // Validation
  if (!form.name || !form.email || !form.subject || !form.message) {
    errorMessage.value = 'Veuillez remplir tous les champs.'
    return
  }

  if (!isValidEmail(form.email)) {
    errorMessage.value = 'Veuillez entrer une adresse email valide.'
    return
  }

  isSubmitting.value = true
  errorMessage.value = ''
  successMessage.value = ''

  try {
    const response = await fetch('https://formspree.io/f/xaqpdnnr', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message
      })
    })

    if (response.ok) {
      successMessage.value = '✓ Votre message a été envoyé avec succès ! Je vous répondrai par email très prochainement.'
      // Reset form
      form.name = ''
      form.email = ''
      form.subject = ''
      form.message = ''
    } else {
      throw new Error('Erreur réseau')
    }
  } catch (error) {
    errorMessage.value = "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou m'écrire directement à gospel14@gmail.com."
  } finally {
    isSubmitting.value = false
    // Auto-hide messages after 10s
    setTimeout(() => {
      successMessage.value = ''
      errorMessage.value = ''
    }, 10000)
  }
}

const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' })

  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
})
</script>

<template>
  <section class="section pt-32">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-16 reveal-up text-center">
        <span class="text-sm font-semibold text-amber-500 tracking-widest uppercase">Contact</span>
        <h1 class="text-section apple-heading mt-4 mb-6">
          Parlons de votre <span class="gradient-text">projet</span>
        </h1>
        <p class="text-xl apple-body max-w-2xl mx-auto">
          Vous avez un projet en tête ? Une opportunité de collaboration ?
          N'hésitez pas à me contacter. Je réponds généralement sous 24h.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact info -->
        <div class="reveal-left" style="animation-delay: 0.1s;">
          <h2 class="text-2xl font-semibold mb-6">Mes coordonnées</h2>

          <div class="space-y-6 mb-10">
            <div class="contact-card flex items-start gap-4">
              <div class="contact-icon">
                <span>📧</span>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Email</h4>
                <p class="text-gray-400 text-sm mb-1">Adresse principale</p>
                <a href="mailto:gospel14@gmail.com" class="text-amber-500 hover:underline">gospel14@gmail.com</a>
              </div>
            </div>

            <div class="contact-card flex items-start gap-4">
              <div class="contact-icon">
                <span>📱</span>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Téléphone</h4>
                <p class="text-gray-400 text-sm mb-1">Ligne directe</p>
                <p class="text-white">+33 07 67 36 79 04</p>
              </div>
            </div>

            <div class="contact-card flex items-start gap-4">
              <div class="contact-icon">
                <span>📍</span>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Localisation</h4>
                <p class="text-gray-400 text-sm mb-1">Basé en France</p>
                <p class="text-white">94 Ivry-sur-Seine</p>
              </div>
            </div>

            <div class="contact-card flex items-start gap-4">
              <div class="contact-icon">
                <span>🕐</span>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Disponibilité</h4>
                <p class="text-gray-400 text-sm mb-1">En cours</p>
                <p class="text-white">Disponible du 1er juin au 29 août</p>
              </div>
            </div>
          </div>

          <!-- Social links -->
          <h3 class="text-lg font-semibold mb-4">Réseaux professionnels</h3>
          <div class="flex gap-4 mb-10">
            <a href="https://github.com/GENOKK6" target="_blank" class="social-link">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>

          <!-- Info box -->
          <div class="bg-amber-900/10 border border-amber-900/20 p-6 rounded-2xl">
            <div class="flex items-start gap-3">
              <div class="text-2xl">💡</div>
              <div>
                <h4 class="font-semibold mb-2">Avant de me contacter</h4>
                <p class="text-gray-400 text-sm leading-relaxed">
                  Je réponds à toutes les demandes, mais pour optimiser nos échanges,
                  merci de préciser: le type de projet, votre budget, et vos délais.
                  Je privilégie les projets avec une stack moderne et une composante IA.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact form -->
        <div class="reveal-right" style="animation-delay: 0.2s;">
          <div class="bg-white/5 p-8 rounded-2xl border border-gray-800 h-full">
            <h2 class="text-2xl font-semibold mb-6">Envoyez-moi un message</h2>

            <form 
              @submit.prevent="submitForm"
              class="space-y-6"
            >
              <div class="form-group">
                <label class="form-label" for="name">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  v-model="form.name"
                  required
                  class="form-input"
                  placeholder="Votre nom"
                />
              </div>

              <div class="form-group">
                <label class="form-label" for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  v-model="form.email"
                  required
                  class="form-input"
                  placeholder="votre@email.com"
                />
              </div>

              <div class="form-group">
                <label class="form-label" for="subject">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  v-model="form.subject"
                  required
                  class="form-input"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div class="form-group">
                <label class="form-label" for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  v-model="form.message"
                  required
                  class="form-input"
                  rows="6"
                  placeholder="Décrivez votre projet, votre demande..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="btn-primary w-full bg-linear-to-r from-[#FFD700] to-[#B8860B] text-white border-none cursor-pointer"
                :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
              >
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
              </button>

              <!-- Success/Error messages -->
              <div v-if="successMessage" class="success-message" style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); color: #10b981; padding: 16px; border-radius: 12px; margin-top: 16px;">
                <p>{{ successMessage }}</p>
              </div>

              <div v-if="errorMessage" class="error-message" style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); color: #ef4444; padding: 16px; border-radius: 12px; margin-top: 16px;">
                <p>{{ errorMessage }}</p>
              </div>
            </form>


          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Styles already in layout, but add specific page styles here */
.form-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.8);
}

.form-group {
  margin-bottom: 24px;
}


</style>
