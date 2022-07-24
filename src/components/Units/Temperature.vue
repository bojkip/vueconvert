<template>
<v-card flat>
    <v-container class="container" fluid>
    <h1 class="text-center pt-7">Temperature</h1>
    <v-row class="row d-flex justify-center py-7" cols="2">
        <v-col cols="3">
        <v-text-field class="text-center result-field" clearable :messages="`${valueOut}`"  v-model="resultOutput" :vlaue="setResult" label="Result "></v-text-field>
        <!-- {{probaV}} {{inputNum}} -->
        <v-tooltip bottom> 
            <template v-slot:activator="{ on, attrs }">
            <v-btn icon @click="copyBtn" v-bind="attrs"
        v-on="on">
            <v-icon >mdi-clipboard-multiple-outline</v-icon>
            </v-btn>
            </template>
            <span>Copy Result</span>
        </v-tooltip>
        <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
            <v-btn icon @click="resetInput" v-bind="attrs"
            v-on="on">
            <v-icon>mdi-close</v-icon>
            </v-btn>
        </template>
        <span>Reset All</span>
        </v-tooltip>

        </v-col>
    </v-row>
    <v-row
        align="center"
    >
        <v-col>
        <v-text-field outlined clearable label="Your Number" hint="Number only" placeholder="e.g 120" v-model="inputNum"></v-text-field>
        </v-col>
        <v-col>
        <v-autocomplete
            v-model="valueIn"
            :items="itemsIn"
            dense
            filled
            label="From Unit"
            placeholder="e.g. Celsius or C"
            clearable
        ></v-autocomplete>
        </v-col>
        <v-col>
        <v-autocomplete
            v-model="valueOut"
            :items="itemsOut"
            dense
            filled
            label="To Unit"
            placeholder="e.g. Fahrenheit or F"
            clearable
        ></v-autocomplete>
        </v-col>
    </v-row>
    </v-container>
    <add-components-btn class="mt-5"></add-components-btn>
</v-card>
</template>




<script>
import AddComponentsBtn from '../AddComponents/AddComponentsBtn.vue';

export default {
    components: {
    AddComponentsBtn,
    },
    data() {
        return {
        inputNum: '' ,
        itemsIn: [ 'Celsius(C)', 'Fahrenheit(F)', 'Kelvin(K)'],
        valuesIn: ['foo', 'bar'],
        valueIn: '',
        itemsOut: ['Celsius(C)', 'Fahrenheit(F)', 'Kelvin(K)'],
        valuesOut: ['foo', 'bar'],
        valueOut: '',
        inputPow: '',
        show: false,
        result: '',
        resultOutput: '',
        }
    },
    methods: {
        resetInput(){
        this.inputNum = '' ;
        this.itemIn = '',
        this.itemOut = '' ;
        this.inputPow = '' ;
        this.probaN = '' ;
        this.valueOut = '' ;
        this.valueIn = '' ;
        this.resultOutput = '' ;
        },
        copyBtn(){
        navigator.clipboard.writeText(this.resultOutput);
        },
        showF() {
        this.show = !this.show;
        }
    },
    computed: {
        setResult(){
            this.resultOutput = this.convertTemp;
            },
        exponent(){
            if (this.inputPow > 0) {
                return 'expo:' + ' ' + this.inputPow;
            }
            else {
                return '';
            }
        },
        convertTemp(){
            if (this.valueIn === 'Celsius(C)' && this.valueOut === 'Fahrenheit(F)') {
                return parseFloat(this.inputNum) * 33.8;
            }
            else if (this.valueIn === 'Celsius(C)' && this.valueOut === 'Kelvin(K)') {
                return parseFloat(this.inputNum) * 274.15;
            }
            else if (this.valueIn === 'Fahrenheit(F)' && this.valueOut === 'Celsius(C)') {
                return parseFloat(this.inputNum) * (-17.2222222);
            }
            else if (this.valueIn === 'Fahrenheit(F)' && this.valueOut === 'Kelvin(K)') {
                return parseFloat(this.inputNum) * 255.927778;
            }
            else if (this.valueIn === 'Kelvin(K)' && this.valueOut === 'Celsius(C)') {
            return parseFloat(this.inputNum) * (-272.15);
            }
            else if (this.valueIn === 'Kelvin(K)' && this.valueOut === 'Fahrenheit(F)') {
            return parseFloat(this.inputNum) * (-457.87);
            }
            else{
                return '';
            }
        }

    }
}

</script>


