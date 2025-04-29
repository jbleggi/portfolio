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

    <section class="about-me">
      <h2>About Me</h2>
      <p>
        After 15 years working in education and serving my community, I am changing fields with the intention of helping other service providers and organizations create effective, user-friendly software and workflows.
      </p>
      <p>
        I may be new to software development, but I am not new to the professional environment! I have spent the first part of my career seeking progressively challenging roles while I honed leadership and advocacy skills.
      </p>
      <p>
        I look forward to a fresh start where I can continue to refine my new skill set while contributing to my community in a productive, collaborative, and solution-oriented work environment.
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
