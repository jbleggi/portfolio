<!-- Home.vue: Your intro and "About Me" content -->
<template>
  <div class="home">
    <section class="intro">
      <h1>Hi there! 👋</h1>
      <img src="/images/profile.JPG" alt="Jillian's Profile Photo" class="profile-photo"/>
      <p>
        I'm Jillian, a software developer with a background in education and community advocacy.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}

.intro {
  margin-bottom: 2rem;
}

.profile-photo {
  max-width: 150px;
  border-radius: 50%;
  margin: 1rem 0;
}

.about-me {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

h1, h2 {
  color: #333;
}
</style>
