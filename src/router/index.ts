import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/privacy-policy', component: PrivacyPolicy },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})
  
export default router;