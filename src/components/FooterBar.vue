<!-- Footer.vue: Contact info, GitHub, LinkedIn -->
<template>
  <footer class="footer">
    <h3>Jillian Bleggi</h3>
    <p>Frederick, MD USA</p>
    <p><a href="mailto:jillian.bleggi@gmail.com">Email me</a></p>
    <p>
      <a href="https://github.com/jbleggi" target="_blank">GitHub</a> |
      <a href="https://linkedin.com/in/jillianbleggi" target="_blank">LinkedIn</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
}
</script>

<style scoped>
.footer {
  background-color: #f0f0f0;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: #555;
  border-top: 1px solid #ddd;
}

.footer a {
  color: #0073e6;
  text-decoration: none;
  margin: 0 0.5rem;
}
</style>
