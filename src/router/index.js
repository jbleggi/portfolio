import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ResumeView from '../views/ResumeView.vue'
import WorkGalleryView from '@/views/WorkGalleryView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/projects', name: 'projects', component: ProjectsView },
  { path: '/resume', name: 'resume', component: ResumeView },
  { path: '/on-the-job', name: 'on-the-job', component: WorkGalleryView }
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
