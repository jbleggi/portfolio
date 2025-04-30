<!-- ProjectCard.vue: Reusable card for each project (title, image, description, etc.) -->
<template>
  <a :href="link" class="project-card" target="_blank" rel="noopener noreferrer">
    <img v-if="image" :src="image" :alt="title" class="project-image" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <p class="project-type">{{ type }}</p>
  </a>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: String,
    description: String,
    image: String,
    type: {
      type: String,
      default: 'Individual',
    },
    link: String
  },
}
</script>

<style scoped>
.project-card {
  display: block;
  text-decoration: none;
  color: inherit;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background-color: #fff;
  max-width: 300px;
  text-align: left;
  transition: box-shadow 0.2s ease;
}

.project-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.project-image {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.project-type {
  font-size: 0.85rem;
  color: #888;
}
</style>
