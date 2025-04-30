<!-- OnTheJob.vue: Grid/gallery of job photos + embedded YouTube links using <StorytimeVideo> -->
<template>
  <div class="work-gallery">
    <h1>Work Project Gallery</h1>
    <p>Snapshots of the community-focused work I did before tech.</p>
    <br>
    <h2>Photos</h2>
    <div class="gallery-grid">
      <div
        class="photo-item"
        v-for="(photo, index) in photos"
        :key="index">
        <img :src="photo.src" :alt="photo.alt" />
        <p class="caption">{{ photo.caption }}</p>
      </div>
    </div>
    <br>
    <h2>Virtual Storytime Videos- Frederick County Public Libraries</h2>
    <div class="video-grid">
      <StorytimeVideo
        v-for="video in videos"
        :key="video.title"
        :title="video.title"
        :url="video.url"
      />
    </div>
  </div>
</template>

<script>
  import StorytimeVideo from '../components/StorytimeVideo.vue'

  export default {
    name: 'OnTheJob',
    components: {
      StorytimeVideo,
    },
    data() {
      return {
        photos: [
          {
            src: '/images/gallery/JC_ClassroomSetup.jpeg',
            alt: 'Early childhood classroom with activity stations',
            caption: 'Early childhood classroom setup at the Judy Center'
          },
          { src: '/images/gallery/JC_CommArt.jpeg',
            alt: 'Colorful fingerpaint on canvas with tape marking out the word hello',
            caption: 'Community art project at the Judy Center'
          },
          {
            src: '/images/gallery/JC_LangPortrait.JPG',
            alt: 'Instructions to complete an art project with art supplies in the background',
            caption: 'Language portrait project during schoolwide Multicultural Night event'
          },
          {
            src: '/images/gallery/JC_FamLendingLib.JPG',
            alt: 'Display of activities for families to borrow',
            caption: 'School readiness activity lending library at the Judy Center'
          },
          {
            src: '/images/gallery/FCPL_CommTree.jpeg',
            alt: 'Large tree made of construction paper with colorful leaves on display',
            caption: 'Family tree community art project at the public library'
          },
          {
            src: '/images/gallery/FCPL_BookDisplay.jpg',
            alt: 'Bookshelf with bulletin board with cut out lettering and seasonal fall artwork that says Gratitude Stew',
            caption: "Children's book display at the public library"
          },
        ],
        videos: [
          {
            title: 'Baby Storytime June 2021',
            url: "https://www.youtube.com/embed/GwXD10UmkJc?si=tYLF0s7_7OkdEIfI",
          },
          {
            title: 'Baby Storytime May 2021',
            url: 'https://www.youtube.com/embed/q5cneYMjz9g?si=iLhwLL_pGzQqeNqR',
          },
          {
            title: 'Baby Storytime March 2021',
            url: 'https://www.youtube.com/embed/A84xMmdzBxY?si=XkLVB8VaMcwS-ion',
          },
          {
            title: 'Virtual Storytime January 2021 (My favorite!)',
            url: 'https://www.youtube.com/embed/c9Jsd8Pivj8?si=nKLLIc7lygvVs2ia',
          },
          {
            title: 'Virtual Storytime October 2020',
            url: 'https://www.youtube.com/embed/pXYUmbiwsj0?si=Iq9T76p5myfrdser',
          },
          {
            title: 'Virtual Storytime August 2020',
            url: 'https://www.youtube.com/embed/sstZInE3-WU?si=u7qQ2_uzCDe9JwsK',
          },
          {
            title: 'Virtual Storytime June 2020',
            url: 'https://www.youtube.com/embed/rX1qea_TGYE?si=aAfykf97409bQYs6',
          },
          {
            title: 'Virtual Storytime April 2020',
            url: 'https://www.youtube.com/embed/eF5gXXtGGx0?si=BfIl2VeMEObi_dVC'
          }

        ],
      }
    },
  }
</script>

<style scoped>
  .work-gallery {
    text-align: center;
    max-width: 1000px;
    margin: 0 auto;
  }

  .gallery-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .photo-item {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
  }

  .photo-item img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .caption {
    font-size: 0.9rem;
    color: #555;
    margin-top: 0.5rem;
    text-align: center;
  }

  .video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
</style>

