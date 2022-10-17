import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import RestaurantPage from "../components/RestaurantPage.vue";
import CreateRestaurant from "../components/CreateRestaurant.vue";

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
    props: true,
  },
  {
    path: '/about/new-restaurant',
    name: 'CreateRestaurant',
    component: CreateRestaurant
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router