import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Length from '@/components/Units/Length.vue';
import AllCategoriesList from '@/components/AllCategoriesList.vue';
import Temperature from '@/components/Units/Temperature.vue';
import Volume from '@/components/Units/Volume.vue';
import Area from '@/components/Units/Area.vue';
import Energy from '@/components/Units/Energy.vue';
import Navbar from  '@/components/TheNav.vue';
import Time from '@/components/Units/Time.vue';
import Mass from '@/components/Units/Mass.vue';
import Pressure from '@/components/Units/Pressure.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
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
