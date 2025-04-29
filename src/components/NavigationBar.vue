<!-- Navbar.vue: Your top nav (links to About, Projects, Resume, On The Job) -->
<template>
  <nav class="navbar">
    <ul class="nav-list">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/resume">Resume</router-link></li>
      <li><router-link to="/on-the-job">Work Photo Gallery</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  text-align: center;
  margin-top: 1rem;
}

.nav-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 0;
  list-style: none;
}

.nav-list a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}

.nav-list a.router-link-active {
  color: #42b983;
}
</style>
