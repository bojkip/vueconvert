<template>
<v-container>
    <v-row class="pt-15 d-flex d-flex d-sm-none" flat>
    <v-expansion-panels flat>
    <v-expansion-panel
    v-for="link in links"
    :key="link.name"
    >
    <v-expansion-panel-header>
        <p class="panel-name d-flex justify-center">{{link.name}}</p>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
        <v-btn class="d-flex justify-center" flat small elevation="0" rounded :href="link.route">Click Here</v-btn>
    </v-expansion-panel-content>
    </v-expansion-panel>
</v-expansion-panels>
    </v-row>
    <v-row class="pt-15 d-flex justify-center" flat>
    <v-col
        v-for="link in links"
        :key="link.name"
        cols="12"
        sm="4"
        class="col"
    >
        <v-card
        class="pa-2 justify-center d-none d-sm-flex"
        flat
        >
        <a :href="link.route">{{link.name}}</a>
        </v-card>
    </v-col>
    </v-row>
</v-container>
</template>

<script>
export default{
    data(){
        return{
            links: [
                {
                    name: 'Area', route: '/area'
                },
                {
                    name: 'Energy', route: '/energy',
                },
                {
                    name: 'Length', route: '/length',
                },
                {
                    name: 'Mass', route: '/mass',
                },
                {
                    name: 'Temperature', route: '/temperature',
                },
                {
                    name: 'Time', route: '/time',
                },
                {
                    name: 'Volume', route: '/volume',
                },
            ]
        }
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Uchen&display=swap');
    
    a{
        font-family: 'Uchen', serif;
        font-size: 2em;
        text-decoration: none;
    }
    a:hover{
        color: #008585;
    }
    .panel-name{
        font-family: 'Uchen', serif;
        font-size: 1.5em;
    }
    /*
    a{
animation:blinking 1.2s infinite;
}
@keyframes blinking{
0%{   color: black;   }
30%{  color: #008585;   }
}
*/

</style>