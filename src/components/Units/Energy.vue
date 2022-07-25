<template>
<v-card class="px-5" flat>
    <v-container class="container" fluid>
    <h1 class="text-center pt-7">Energy</h1>
    <v-row class="row d-flex justify-center py-7" cols="2">
        <v-col xl="5" lg="5" sm="6" >
        <v-text-field  class="text-center result-field" :autofocus="resultFocus" :messages="`${valueOut} ${exponent}`"  v-model="resultOutput" :vlaue="setResult" label="Result "></v-text-field>
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
        justify="center"
        
    >
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined label="Your Number" hint="Number only" placeholder="120" v-model="inputNum"></v-text-field>
        </v-col>
        <v-col
        xl="4" lg="4" sm="4"
        >
        <v-text-field outlined label="Your Exponent" placeholder="2" hint="If your number has no exponent, skip this field" v-model="userPow">
        </v-text-field>
        </v-col>
        </v-row>
        <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
        <v-autocomplete
            v-model="valueIn"
            :items="itemsIn"
            
            filled
            label="From Unit"
            placeholder="Centimeter or cm"
        ></v-autocomplete>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-autocomplete
            v-model="valueOut"
            :items="itemsOut"
            filled
            label="To Unit"
            placeholder="Milimeter or mm"
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
        itemsIn: [ 'Joule(J)', 'Kilojule(kJ)', 'Kilowatt-hour(kWh)', 'Watt-hour(Wh)'],
        valuesIn: ['foo', 'bar'],
        valueIn: '',
        itemsOut: ['Joule(J)', 'Kilojule(kJ)', 'Kilowatt-hour(kWh)', 'Watt-hour(Wh)'],
        valuesOut: ['foo', 'bar'],
        valueOut: '',
        userPow: '',
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
            if (this.valueIn === 'Joule(J)' && this.valueOut === 'Kilojule(kJ)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
                }
                else {
                    return parseFloat(this.inputNum) * 0.001;
                }
            }
            else if (this.valueIn === 'Joule(J)' && this.valueOut === 'Kilowatt-hour(kWh)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) / 3600000;
                }
                else {
                    return parseFloat(this.inputNum) / 3600000;
                }
            }
            else if (this.valueIn === 'Joule(J)' && this.valueOut === 'Watt-hour(Wh)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0002777778;
                }
                else {
                    return parseFloat(this.inputNum) * 0.0002777778;
                }
            }

            else if (this.valueIn === 'Kilojule(kJ)' && this.valueOut === 'Joule(J)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
                }
                else {
                    return parseFloat(this.inputNum) * 1000;
                }
            }
            else if (this.valueIn === 'Kilojule(kJ)' && this.valueOut === 'Kilowatt-hour(kWh)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0002777778;
                }
                else {
                    return parseFloat(this.inputNum) * 0.0002777778;
                }
            }
            else if (this.valueIn === 'Kilojule(kJ)' && this.valueOut === 'Watt-hour(Wh)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.2777777778;
                }
                else {
                    return parseFloat(this.inputNum) * 0.2777777778;
                }
            }

            else if (this.valueIn === 'Kilowatt-hour(kWh)' && this.valueOut === 'Joule(J)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 3600000;
                }
                else {
                    return parseFloat(this.inputNum) * 3600000;
                }
            }
            else if (this.valueIn === 'Kilowatt-hour(kWh)' && this.valueOut === 'Kilojule(kJ)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 3600;
                }
                else {
                    return parseFloat(this.inputNum) * 3600 ;
                }
            }
            else if (this.valueIn === 'Kilowatt-hour(kWh)' && this.valueOut === 'Watt-hour(Wh)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
                }
                else {
                    return parseFloat(this.inputNum) * 1000;
                }
            }

            else if (this.valueIn === 'Kilojule(kJ)' && this.valueOut === 'Joule(J)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
                }
                else {
                    return parseFloat(this.inputNum) * 1000;
                }
            }
            else if (this.valueIn === 'Kilojule(kJ)' && this.valueOut === 'Kilowatt-hour(kWh)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0002777778;
                }
                else {
                    return parseFloat(this.inputNum) * 0.0002777778;
                }
            }
            else if (this.valueIn === 'Kilojule(kJ)' && this.valueOut === 'Watt-hour(Wh)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.2777777778;
                }
                else {
                    return parseFloat(this.inputNum) * 0.2777777778;
                }
            }

            else if (this.valueIn === 'Watt-hour(Wh)' && this.valueOut === 'Joule(J)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 3600;
                }
                else {
                    return parseFloat(this.inputNum) * 3600;
                }
            }
            else if (this.valueIn === 'Watt-hour(Wh)' && this.valueOut === 'Kilojule(kJ)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 3.6;
                }
                else {
                    return parseFloat(this.inputNum) * 3.6 ;
                }
            }
            else if (this.valueIn === 'Watt-hour(Wh)' && this.valueOut === 'Kilowatt-hour(kWh)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
                }
                else {
                    return parseFloat(this.inputNum) * 0.001;
                }
            }
            else{
                return '';
            }
        }

    }
}

</script>


