<!-- StorytimeVideo.vue: Component to embed a video + caption -->
<template>
  <div class="video-wrapper">
    <iframe
      :src="url"
      :title="title"
      width="100%"
      height="315"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
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
  width: 100%;
}

iframe {
  width: 100%;
  max-width: 560px;
  height: 315px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

p {
  margin-top: 0.5rem;
  font-size: 1rem;
  text-align: center;
  color: #333;
}
</style>
