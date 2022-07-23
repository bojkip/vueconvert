<template>
  <div>
    <!-- <search-bar></search-bar> -->
    <length></length>
  </div>
</template>

<script>
import Length from '../components/Units/Length.vue';
import SearchBar from '../components/SearchBar.vue';

export default {
  name: 'Home',

  components: {
    Length,
    SearchBar,
  },
};
</script>
