<template>
<v-div
class="mx-auto overflow-hidden"
flat


>
<v-app-bar
    flat
    class="app-bar"
    style="background-color: white;"
>
    <div class="mt-4 mx-2">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        </div>
        <a href="/">
            <img class="mt-5 pr-5" src="../assets/i025.png" alt="">
        </a>
        <div>
        <v-toolbar-title class="font-weight-bold mt-4" style="font-family: 'Uchen', serif;
    ">
            <a href="/">
                UNIT <span style="color:#008585">YARD</span>
            </a>
        </v-toolbar-title>
        </div>
        
        <search-bar class="d-none d-xxl-flex d-lg-flex"></search-bar>
</v-app-bar>

<v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
    flat
>
    <v-list
        nav
        dense
    >
        <v-list-item-group
        v-model="group"
        link
        >
        <nav-search-bar></nav-search-bar>

        <v-list-item>
            <v-list-item-title style="color: #008585;" class="ps-4"  @click="$router.push('/')">All Categories</v-list-item-title>
        </v-list-item>
        </v-list-item-group>
    </v-list>
</v-navigation-drawer>
</v-div>
</template>

<script>
import SearchBar from './SearchBar.vue'
import NavSearchBar from './NavSearchBar.vue'
import AllCategoriesBtn from './AllCategories/AllCategoriesBtn.vue'


export default {
    data: () => ({
    drawer: false,
    group: null,
    }),
    components: {
        SearchBar,
        NavSearchBar,
        AllCategoriesBtn,
    }
}
</script>

<style scoped>
    a{
        text-decoration: none;
    }
</style>

