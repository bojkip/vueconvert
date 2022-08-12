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

    <the-footer class="mt-10"></the-footer>
  </v-app>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import AllCategoriesBtn from './components/AllCategories/AllCategoriesBtn.vue';
import NavBar from './components/Nav.vue';
import AddComponentsBtn from './components/AddComponents/AddComponentsBtn.vue';
import SearchComponent from './components/SearchComponent.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  components: {
    SearchBar,
    AllCategoriesBtn,
    NavBar,
    AddComponentsBtn,
    SearchComponent,
    TheFooter,
  },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Uchen&display=swap');
    
    .v-application {
        font-family: 'Uchen', serif;
    }
</style>