<template>
  <v-app
  app 
  flat >
  
    <nav>
      <nav-bar></nav-bar>
    </nav>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import AllCategoriesBtn from './components/AllCategories/AllCategoriesBtn.vue';
import NavBar from './components/Nav.vue';
import AddComponentsBtn from './components/AddComponents/AddComponentsBtn.vue';
import SearchComponent from './components/SearchComponent.vue';

export default {
  components: {
    SearchBar,
    AllCategoriesBtn,
    NavBar,
    AddComponentsBtn,
    SearchComponent,
  },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
