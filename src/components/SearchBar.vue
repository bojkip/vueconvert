<template>
    <v-card flat width="100em">
        <v-toolbar class="white--text pt-1" flat v-for="item in items" :key="item.name">
            <v-toolbar-title>Search</v-toolbar-title>
                    <v-autocomplete
                        v-model="value"
                        :items="item.name"
                        dense
                        
                        label="Search"
                        placeholder="e.g. Volume or Temperature"
                        class="pt-5"
                    ></v-autocomplete>
                    <div class="pa-5">
                        <v-btn  @click="$router.push({ path: item.route })">
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
            {
                name: 'Neko ime', route: '/about',
            },
        ],
        values: ['foo', 'bar'],
        value: null,
    }),
    }
</script>