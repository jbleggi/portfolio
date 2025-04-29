<template>
  <div id="app">
    <NavigationBar />

    <main>
      <RouterView />
    </main>

    <FooterBar />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import FooterBar from './components/FooterBar.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    FooterBar,
  },
}
</script>

<style>
/* Global styles */
body {
  margin: 0;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
  padding: 2rem;
}
</style>
