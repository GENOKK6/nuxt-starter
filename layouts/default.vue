<template>
  <div class="min-h-screen flex flex-col bg-black text-white transition-colors duration-300">
    <Header />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
// Le Header et Footer sont importés automatiquement par Nuxt
// car ils se trouvent dans le dossier components/
</script>
