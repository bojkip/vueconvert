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
                    <div class="pa-5">
                        <v-btn flat elevation="1" rounded @click="searchBtn">
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
            'All Categories', 'Area', 'Energy', 'Length', 'Temperature', 'Time', 'Volume',
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
            else if(this.value === 'All Categories'){
                return this.$router.push('/');
            }
        },
    }
    }
</script>

<style scoped>
    .v-btn:hover{
        color: #008585;
    }

</style>