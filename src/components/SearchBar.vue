<template>
    <v-card flat width="100em">
        <v-toolbar class="white--text pt-1" flat>
            <v-toolbar-title>Search</v-toolbar-title>
                    <v-autocomplete
                        v-model="value"
                        :items="items"
                        dense
                        
                        label="Search"
                        placeholder="Volume or Temperature"
                        class="pt-5"
                    ></v-autocomplete>
                    <div class="pa-5">
                        <v-btn  @click="searchBtn">
                            <v-icon left>mdi-magnify</v-icon>
                            <span>Search</span>
                        </v-btn>
                    </div>
        </v-toolbar>
    </v-card>
</template>

<script>
    export default {
    data: () => ({
        items: [
            'Energy', 'Length', 'Temperature', 'Time',
        ],
        value: '',
    }),
    methods: {
        searchBtn(){
            if(this.value === 'Energy'){
                return this.$router.push('/energy');
            }
            else if(this.value === 'Length'){
                return this.$router.push('/');
            }
            else if(this.value === 'Temperature'){
                return this.$router.push('/temperature');
            }
            else if(this.value === 'Time'){
                return this.$router.push('/time');
            }
        },
    }
    }
</script>