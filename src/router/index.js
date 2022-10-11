import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import RestaurantPage from "../components/RestaurantPage.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/about/:id',
    name: 'Restaurant',
    component: RestaurantPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router