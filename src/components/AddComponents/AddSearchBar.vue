<template>
    <v-card flat width="100em">
        <v-toolbar v-if="searchBarShow" class="white--text pt-1" flat>
            <v-toolbar-title>Search</v-toolbar-title>
                    <v-autocomplete
                        v-model="value"
                        :items="items"
                        dense
                        autofocus
                        
                        label="Search"
                        placeholder="Volume or Temperature"
                        class="pt-5"
                    ></v-autocomplete>
                    <div class="pa-5">
                        <v-btn @click="searchBtn">
                            <v-icon left>mdi-magnify</v-icon>
                            <span>Search</span>
                        </v-btn>
                    </div>
        </v-toolbar>
        <v-card flat v-if="this.storedValue === 'Energy'">
            <energy></energy>
            <add-components-btn></add-components-btn>
        </v-card>
        <v-card flat v-if="this.storedValue === 'Length'">
            <length></length>
            <add-components-btn></add-components-btn>
        </v-card>
        <v-card flat v-if="this.storedValue === 'Temperature'">
            <temperature></temperature>
            <add-components-btn></add-components-btn>
        </v-card>
    </v-card>
</template>

<script>
import Energy from '../Units/Energy.vue';
import Length from '../Units/Length.vue';
import Temperature from '../Units/Temperature.vue';
import AddComponentsBtn from './AddComponentsBtn.vue';

    export default {
        components:{
            Energy,
            Length,
            Temperature,
            AddComponentsBtn,
        },
    data: () => ({
        items: [
            'Energy', 'Length', 'Temperature',
        ],
        value: '',
        storedValue: '',
        searchBarShow: true,
    }),
    methods: {
        searchBtn(){
            if(this.value === 'Energy'){
                this.storedValue = this.value;
                this.searchBarShow = false;
            }
            else if(this.value === 'Length'){
                this.storedValue = this.value;
                this.searchBarShow = false;
            }
            else if(this.value === 'Temperature'){
                this.storedValue = this.value;
                this.searchBarShow = false;
            }
            else{
                this.storedvalue = '';
            }
        },
    },
    }
</script>