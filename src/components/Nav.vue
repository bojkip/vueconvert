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
        <div class="mt-4 mx-2">
        <v-icon>mdi-sync</v-icon>
        </div>
        <div>
        <v-toolbar-title class="font-weight-bold mt-4">CONVERT</v-toolbar-title>
        </div>
        
        <search-bar class="d-none d-xxl-flex d-lg-flex"></search-bar>
        

        <all-categories-btn class="d-none d-xxl-flex d-lg-flex"></all-categories-btn>
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
            <v-list-item-title class="ps-10 primary--text"  @click="$router.push('/all-categories')">All Categories</v-list-item-title>
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

