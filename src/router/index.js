import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AllCategoriesList from '@/components/AllCategories/AllCategoriesList.vue';
import Temperature from '@/components/Units/Temperature.vue';
import Volume from '@/components/Units/Volume.vue';
import Area from '@/components/Units/Area.vue';
import Energy from '@/components/Units/Energy.vue';
import Navbar from  '@/components/Nav.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/all-categories',
    name: 'all-categories-list',
    component: AllCategoriesList,
  },
  {
    path: '/temperature',
    name: 'temperature',
    component: Temperature,
  },
  {
    path: '/volume',
    name: 'volume',
    component: Volume,
  },
  {
    path: '/area',
    name: 'area',
    component: Area,
  },
  {
    path: '/energy',
    name: 'energy',
    component: Energy,
  },
  {
    path: '/nav',
    name: 'nav',
    component: Navbar,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
