<template>
    <v-card flat width="100em">
        <v-toolbar class="white--text pt-1" flat>
            <v-toolbar-title>Search</v-toolbar-title>
                    <v-autocomplete
                        v-model="value"
                        :items="items"
                        dense
                        color="#008585"
                        label="Search"
                        placeholder="Volume or Temperature"
                        class="pt-5"
                    ></v-autocomplete>
        </v-toolbar>
        <div class="px-14 pt-4 pb-7">
                        <v-btn small elevation="0"  rounded @click="searchBtn">
                            <v-icon left>mdi-magnify</v-icon>
                            <span>Search</span>
                        </v-btn>
                    </div>
    </v-card>
</template>

<script>
    export default {
    data: () => ({
        items: [
            'Area', 'Energy', 'Length', 'Temperature', 'Time', 'Volume',
        ],
        value: '',
    }),
    methods: {
        searchBtn(){
            if(this.value === 'Energy'){
                return this.$router.push('/energy');
            }
            else if(this.value === 'Length'){
                return this.$router.push('/length');
            }
            else if(this.value === 'Temperature'){
                return this.$router.push('/temperature');
            }
            else if(this.value === 'Time'){
                return this.$router.push('/time');
            }
            else if(this.value === 'Area'){
                return this.$router.push('/area');
            }
            else if(this.value === 'Volume'){
                return this.$router.push('/volume');
            }
        },
    }
    }
</script>

<style scoped>
    .v-btn:hover{
        color: #008585;
    }
    .v-autocomplete, .v-toolbar{
        color: #008585;
    }
</style>