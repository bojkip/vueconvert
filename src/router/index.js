import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Length from '@/components/Units/Length.vue';
import AllCategoriesList from '@/components/AllCategories/AllCategoriesList.vue';
import Temperature from '@/components/Units/Temperature.vue';
import Volume from '@/components/Units/Volume.vue';
import Area from '@/components/Units/Area.vue';
import Energy from '@/components/Units/Energy.vue';
import Navbar from  '@/components/Nav.vue';
import Time from '@/components/Units/Time.vue';
import Mass from '@/components/Units/Mass.vue';
import Pressure from '@/components/Units/Pressure.vue';


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
  {
    path: '/time',
    name: 'time',
    component: Time,
  },
  {
    path: '/length',
    name: 'length',
    component: Length,
  },
  {
    path: '/mass',
    name: 'mass',
    component: Mass,
  },
  {
    path: '/pressure',
    name: 'pressure',
    component: Pressure,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
