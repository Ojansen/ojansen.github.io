<template>
  <div>
    <Navigation />
    <main>
      <Nuxt />
    </main>
    <footer class="bg-gray-900 text-white py-4">
      <div class="container mx-auto text-center">
        <p>&copy; {{ year }} - {{ name }}</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      name: 'Full-Stack Web Developer',
      year: new Date().getFullYear()
    }
  }
}
</script>
