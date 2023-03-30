<template>
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8">My GitHub Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-card-header">
            <h3 class="text-xl font-bold">{{ project.name }}</h3>
            <p class="text-gray-700">{{ project.description }}</p>
          </div>
          <div class="project-card-body">
            <ul class="text-gray-700">
              <li>
                <i class="fas fa-code-branch"></i> {{ project.language }}
              </li>
              <li>
                <i class="fas fa-star"></i>Stars: {{ project.stargazers_count }}
              </li>
              <li>
                <i class="fas fa-eye"></i>Watchers: {{ project.watchers_count }}
              </li>
            </ul>
          </div>
          <div class="project-card-footer">
            <a :href="project.html_url" target="_blank" class="px-6 py-2 bg-green-500 rounded-lg hover:bg-green-700">View on GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      projects: []
    }
  },
  async created() {
    const response = await axios.get('https://api.github.com/users/Ojansen/repos');
    this.projects = response.data;
  }
}
</script>

<style>
.project-card {
  background-color: white;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.project-card:hover {
  transform: translateY(-0.5rem);
}

.project-card-header {
  margin-bottom: 1rem;
}

.project-card-footer {
  margin-top: 1rem;
  text-align: center;
}
</style>
