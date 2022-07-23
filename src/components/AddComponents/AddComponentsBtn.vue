<template>
    <v-container>
        <v-row>
            <v-col class="d-flex justify-center">
                <v-btn rounded @click="showBtn">Add Another Component</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <add-search-bar v-if="show"></add-search-bar>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data(){
        return {
            show: false,
        }
    },
    methods: {
        showBtn() {
            this.show = !this.show;
        }
    }
}
</script>