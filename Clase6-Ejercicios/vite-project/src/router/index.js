import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import Post from '../views/Post.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/Post',
    name: 'Post',
    component: Post
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;