<template>
    <v-card flat width="100em">
        <v-toolbar class="white--text pt-1" flat>
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
                        <v-btn  @click="searchBtn">
                            <v-icon left>mdi-magnify</v-icon>
                        </v-btn>
                    </div>
        </v-toolbar>
        <v-card flat v-if="this.storedValue === 'Energy'">
            <energy></energy>
        </v-card>
        <v-card flat v-if="this.storedValue === 'Length'">
            <length></length>
        </v-card>
        <v-card flat v-if="this.storedValue === 'Temperature'">
            <temperature></temperature>
        </v-card>
    </v-card>
</template>

<script>
import Energy from './Units/Energy.vue';
import Length from './Units/Length.vue';
import Temperature from './Units/Temperature.vue';


export default {
    components:{
        Energy,
        Length,
        Temperature,
    },
    data: () => ({
        items: [
            'Energy', 'Length', 'Temperature', '',
        ],
        value: '',
        storedValue: '',
    }),
    methods: {
        searchBtn(){
            if(this.value === 'Energy'){
                this.storedValue = this.value;
            }
            else if(this.value === 'Length'){
                this.storedValue = this.value;
            }
            else if(this.value === 'Temperature'){
                this.storedValue = this.value;
            }
            else{
                this.storedvalue = '';
            }
        },
    }
    }
</script>