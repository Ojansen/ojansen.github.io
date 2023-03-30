<template>
  <div>
  <h1 class="text-3xl font-bold mb-10">
    Hello world!
  </h1>
  <NuxtLink to="/bingo" class="py-2 px-4 rounded-lg bg-emerald-600">
    Let's play Bingo
  </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
