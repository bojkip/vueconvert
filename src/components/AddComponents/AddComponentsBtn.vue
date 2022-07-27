<template>
    <v-container>
        <v-row>
            <v-col class="d-flex justify-center">
                <v-btn rounded @click="showBtn">{{btnTxt}}</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <add-search-bar v-if="showSerch"></add-search-bar>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import AddSearchBar from './AddSearchBar.vue';

export default {
    components:{
        AddSearchBar,
    },
    data(){
        return {
            showSerch: false,
            btnTxt: 'Add Another Component',
        }
    },
    methods: {
        showBtn() {
            this.showSerch = !this.showSerch;
            if (this.showSerch === false){
                this.btnTxt = 'Add Another Component';
            }
            else{
                this.btnTxt = 'Remove Component';
            }
        }
    },
    computed:{
        
    }
}
</script>