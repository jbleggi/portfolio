<!-- Resume.vue: Either a downloadable PDF or structured resume content -->
<template>
  <div class="resume-view">
    <h1>Resume</h1>
    <iframe
      :src="resumeUrl"
      width="125%"
      height="700px"
      style="border: 1px solid black;">
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'ResumeView',
  computed: {
    resumeUrl() {
      return `${import.meta.env.BASE_URL}Bleggi_Resume_2025.pdf`;
    },
  },
};
</script>
