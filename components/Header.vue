<template>
  <header class="h-screen bg-gray-800 flex items-center justify-center bg-gradient-to-r from-green-500 to-blue-500">
    <div class="container mx-auto text-center flex flex-col items-center">
      <img src="~/assets/profilephoto.jpg" alt="Profile picture" class="h-26 w-26 mb-4 rounded-full">
      <h1 class="text-white text-6xl font-bold mb-4">{{ name }}</h1>
      <p class="text-white mb-8">{{ jobTitle }}</p>
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
