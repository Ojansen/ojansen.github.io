<template>
  <div>
    <Header />
    <section class="bg-white py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">Welcome to my Portfolio!</h2>
        <p class="text-gray-700">Hi, I'm Obe, a Full-Stack Web Developer with 1 year of experience.
          My passion for coding and problem-solving has led me to work on a wide range of projects,
          from e-commerce platforms to custom web applications. As a Full-Stack Developer,
          I am proficient in both front-end and back-end development, using technologies such as HTML, CSS, JavaScript, Node.js, Vue.js, and SQL to create responsive, scalable, and secure web applications.
          My strong attention to detail and ability to work well in a team have helped me deliver successful projects and exceed client expectations.
          I am constantly learning and experimenting with new technologies, and I am excited to take on new challenges and contribute to the growth of your business.</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '~/components/Header.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far)

Vue.component('font-awesome-icon', FontAwesomeIcon)

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Header
  }
})
</script>
