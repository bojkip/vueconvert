<template>
    <v-card>
        <v-container class="d-flex justify-end">
            <v-btn icon @click="addComponentBtn">
                <v-icon>mdi-plus-thick</v-icon>
            </v-btn>
        </v-container>
        <v-container>
            <add-search-bar v-if="addComponent"></add-search-bar>
        </v-container>
    </v-card>
</template>

<script>
import AddSearchBar from './AddSearchBar.vue';

export default{
    components:{
        AddSearchBar,
    },
    data(){
        return{
        removeComponent: true,
        addComponent: false,
        };
    },
    methods: {
        removeComponentBtn(){
            this.removeComponent = false;
        },
        addComponentBtn(){
            this.addComponent = !this.addComponent;
        },
    },
}
</script>