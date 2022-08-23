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
import NavBar from './components/TheNav.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  components: {
    NavBar,
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