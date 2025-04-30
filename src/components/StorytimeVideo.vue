<!-- StorytimeVideo.vue: Component to embed a video + caption -->
<template>
  <div class="video-wrapper">
    <iframe
      :src="url"
      :title="title"
      frameborder="0"
      allowfullscreen
    ></iframe>
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'StorytimeVideo',
  props: {
    title: String,
    url: String,
  },
}
</script>

<style scoped>
.video-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

iframe {
  width: 100%;
  height: 200px;
  border-radius: 8px;
}

p {
  margin-top: 0.5rem;
  font-size: 1rem;
  text-align: center;
}
</style>
