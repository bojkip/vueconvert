<template>
    <v-card class="pa-5" flat>
        <v-container fluid v-for="item in items" :key="item.name">
            <v-row>
                <h1>Search Bar</h1>
            </v-row>
            <v-row
                align="center">
                <v-col cols="12">
                <v-autocomplete
                    v-model="value"
                    :items="item.name"
                    dense
                    filled
                    label="Filled"
                ></v-autocomplete>
                </v-col>
            </v-row>
            <v-row>
                <v-btn @click="btnStore" >Search</v-btn>
                <p>{{value}} - {{inputName}}</p>
                <hello-world v-if="item.name === item.value"></hello-world>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
import HelloWorld from '../Units/Length.vue'

    export default {
    components: {
        HelloWorld,
    },
    methods: {
        btnStore(){
            return this.inputName = this.value;
        }
    },
    computed: {
        inputs(){
            if (this.imputName) {
                this.filter(m => m.gender === this.genderQuery)
            }
        }
    },
    data: () => ({
        items: [
            {
            name: 'Length',
            }
        ],
        values: ['foo', 'bar'],
        value: null,
        inputName: '',
    }),
    }
</script>