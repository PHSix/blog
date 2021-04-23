import Vue from 'vue';
import VueRouter from 'vue-router';
import Detail from '../views/detail.vue'
import Home from '../views/home.vue';
import About from '../views/about.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/detail',
    component: Detail,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '*',
    component: Home,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
