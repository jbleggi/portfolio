<!-- ProjectCard.vue: Reusable card for each project (title, image, description, etc.) -->
<template>
  <div class="project-card">
    <img v-if="image" :src="image" :alt="title" class="project-image" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <p class="project-type">{{ type }}</p>
  </div>
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
  },
}
</script>

<style scoped>
.project-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background-color: #fff;
  max-width: 300px;
  text-align: left;
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
