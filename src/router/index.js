import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ResumeView from '@/views/ResumeView.vue'
import WorkGalleryView from '@/views/WorkGalleryView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/projects', name: 'projects', component: ProjectsView },
  { path: '/resume', name: 'resume', component: ResumeView },
  { path: '/on-the-job', name: 'on-the-job', component: WorkGalleryView }
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
