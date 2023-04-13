<template>
  <div>
    <nav class="backdrop-blur sticky top-0 py-4">
      <div class="container mx-auto flex justify-between items-center px-4">
        <nuxt-link to="/" class="font-bold text-lg pill">Portfolio</nuxt-link>
        <div class="sm:flex flex-wrap gap-5 hidden">
          <nuxt-link to="/" class="pill">Home</nuxt-link>
          <nuxt-link to="/projects" class="pill">Projects</nuxt-link>
          <nuxt-link to="/skills" class="pill">Skills</nuxt-link>
          <nuxt-link to="/bingo" class="pill">Bingo</nuxt-link>
        </div>
        <button @click="toggleMenu()" type="button" class="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path :class="{'hidden': isOpen, 'inline-flex': !isOpen }" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path :class="{'hidden': !isOpen, 'inline-flex': isOpen }" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </nav>
    <div :class="{'block': isOpen, 'hidden': !isOpen}" class="block">
      <div class="h-screen backdrop-blur bg-white bg-opacity-50 absolute inset-x-0 overflow-hidden">
        <div class="flex flex-col divide-y text-center">
          <nuxt-link to="/" class="py-10 text-3xl transition-all duration-100 focus:bg-white">Home</nuxt-link>
          <nuxt-link to="/projects" class="py-10 text-3xl transition-all duration-100 focus:bg-white">Projects</nuxt-link>
          <nuxt-link to="/skills" class="py-10 text-3xl transition-all duration-100 focus:bg-white">Skills</nuxt-link>
          <nuxt-link to="/bingo" class="py-10 text-3xl transition-all duration-100 focus:bg-white">Bingo</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
    }
  }
};
</script>

<style>
.pill {
  @apply px-4 hover:text-gray-400 rounded-full bg-white py-2 px-4 transition-all duration-200 ease-in-out;
}
.pill:hover {
  @apply bg-black text-white;
}
</style>
