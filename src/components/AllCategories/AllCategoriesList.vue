<template>
<v-container class="background">
    <v-row class="pt-15" flat>
    <v-col
        v-for="link in links"
        :key="link.name"
        cols="12"
        sm="4"
        class="col"
    >
        <v-card
        class="pa-2"
        flat
        >
        <a class="headline" color="success" :href="link.route">{{link.name}}</a>
        </v-card>
    </v-col>
    </v-row>
    <hr>
</v-container>
</template>

<script>
export default{
    data(){
        return{
            links: [
                {
                    name: 'Length', route: '/'
                },
                {
                    name: 'NNN', route: '/about',
                }
            ]
        }
    }
}
</script>

<style>
a {
    text-decoration: none;
}

</style>