<template>
  <v-app>
    <v-app-bar
      app
      flat
      color="white"
      
      
    >
      <div class="mt-4 mx-2">
        <v-icon>mdi-sync</v-icon>
      </div>
      <div>
        <v-toolbar-title class="font-weight-bold mt-4">CONVERT</v-toolbar-title>
      </div>
      
      <search-bar></search-bar>
      

      <all-categories-btn></all-categories-btn>
    
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import AllCategoriesBtn from './components/AllCategories/AllCategoriesBtn.vue';

export default {
  components: {
    SearchBar,
    AllCategoriesBtn
  },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
