<template>
  <header class="h-screen bg-gray-800 flex items-center justify-center bg-gradient-to-b from-sky-400 from-40% to-orange-300 to-90%">
    <div class="container mx-auto text-center flex flex-col items-center">
      <img src="~/assets/profile.jpeg" alt="Profile picture" class="lg:h-64 lg:w-64 w-44 h-44 mb-4 rounded-full ring-4 ring-white shadow-2xl">
      <h1 class="text-white text-6xl font-bold mb-4">{{ name }}</h1>
      <p class="text-white text-lg mb-8">{{ jobTitle }} by <a href="https://www.bttr.nl" target="_blank" class="underline">BTTR</a> </p>
      <p class="text-white text-lg mb-8">{{ jobDescription }}</p>
      <nuxt-link to="/projects" class="bg-white text-gray-900 py-3 px-6 rounded-full font-bold hover:bg-gray-200">View Projects</nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      name: 'Obe Jansen',
      jobTitle: "Full-Stack Web Developer",
      jobDescription: 'I build web applications using the latest technologies.'
    }
  }
}
</script>
