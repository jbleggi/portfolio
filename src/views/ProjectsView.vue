<!-- Projects.vue: Showcase with <ProjectCard> components for each project -->
  <template>
    <div class="projects-view">
      <h2>Projects</h2>
      <p>Click a card below to be redirected to the GitHub repository or deployed site link (if applicable).</p>
      <div class="projects-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :type="project.type"
          :link="project.link"
        />
      </div>
    </div>
  </template>

  <script>
  import ProjectCard from '@/components/ProjectCard.vue'

  export default {
    name: 'ProjectsView',
    components: {
      ProjectCard,
    },
    data() {
      return {
        projects: [
          {
            title: 'Success Cafe (Work in Progress)',
            description: 'An accessible point-of-sale application created for a vocational training program for young adults with developmental delays.',
            image: '/images/projects/work-in-progress.png',
            type: 'Individual',
            link: "https://github.com/jbleggi/success_pos_fe",
          },
          {
            title: 'Geography Trivia',
            description: 'A simple trivia React app about world geography using the TriviaDV.',
            image: '/images/projects/geography_trivia.png',
            type: 'Individual',
            link: "https://geography-trivia-ff812cf4e286.herokuapp.com/"
          },
          {
            title: 'Tea Subscription Service',
            description: 'An ecommerce mockup for a tea subscription business.',
            image: '/images/projects/tea_time.png',
            type: 'Individual',
            link: "https://github.com/jbleggi/final-frontend"
          },
          {
            title: 'RepRadar',
            description: 'A group project that visualizes current executive orders and allows users to search for local representatives using zip code.',
            image: '/images/projects/rep_radar.png',
            type: 'Group',
            link: "https://github.com/RedRadar-WT-Team"
          },
          {
            title: 'Rancid Tomatillos',
            description: 'A paired project for movie ratings and reviews designed to mimic Rotten Tomatoes.',
            image: '/images/projects/rancid_tomatillos.png',
            type: 'Paired',
            link: "https://github.com/mhaefling/rancid-tomatillos"
          },
        ],
      }
    },
  }
  </script>

  <style scoped>
  .projects-view {
    padding: 2rem;
    text-align: center;
  }

  .projects-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 2rem;
  }
  </style>
