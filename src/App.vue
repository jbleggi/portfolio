<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <div id="app">
    <header>
      <img
        alt="Jillian Bleggi profile"
        src="src/assets/profile.JPG"
        class="profile-photo"
      />
      <h1>Hi there! 👋</h1>
      <NavigationBar />
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>
        Let's get in touch:
        <br />
        <a href="mailto:jillian.bleggi@gmail.com">Email</a><br />
        <a href="https://github.com/jbleggi">GitHub</a><br />
        <a href="https://linkedin.com/in/jillianbleggi/">LinkedIn</a>
      </p>
    </footer>
  </div>
</template>

<style scoped>
.profile-photo {
  width: 25%;
  height: auto;
  display: block;
  margin: 2rem auto;
  border-radius: 50%;
}

footer {
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;
  border-top: 1px dashed black;
}
</style>
