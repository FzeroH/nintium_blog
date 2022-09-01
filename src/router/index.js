import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home.vue';
import Tags from '@/components/Tags.vue';
import About from '@/components/About.vue';
import Login from '@/components/Login.vue';
import Screenlock from '@/components/Screenlock.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/tags',
    name: 'tags',
    component: Tags,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/screenlock',
    name: 'screen-lock',
    component: Screenlock,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
