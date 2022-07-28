<template>
<v-card class="px-5" flat>
    <v-container class="container" fluid>
    <h1 class="text-center pt-7">Time</h1>
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
    <div>
        <add-components-btn></add-components-btn>
    </div>
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
        itemsIn: [ 'Microsecond(μs)', 'Millisecond(ms)', 'Second(s)', 'Mimute(min)', 'Hour(h)', 'Day', 'Week'],
        valuesIn: ['foo', 'bar'],
        valueIn: '',
        itemsOut: ['Microsecond(μs)', 'Millisecond(ms)', 'Second(s)', 'Mimute(min)', 'Hour(h)', 'Day', 'Week'],
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
        this.userPow = '';
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
            if (this.valueIn === 'Microsecond(μs)' && this.valueOut === 'Millisecond(ms)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
                }
                else {
                    return parseFloat(this.inputNum) * 0.001;
                }
            }
            else if (this.valueIn === 'Microsecond(μs)' && this.valueOut === 'Second(s)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) / 1000000;
                }
                else {
                    return parseFloat(this.inputNum) / 1000000;
                }
            }
            else if (this.valueIn === 'Microsecond(μs)' && this.valueOut === 'Minute(m)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) / 60000000;
                }
                else {
                    return parseFloat(this.inputNum) / 60000000;
                }
            }
            else if (this.valueIn === 'Microsecond(μs)' && this.valueOut === 'Hour(h)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) / 3600000000;
                }
                else {
                    return parseFloat(this.inputNum) / 3600000000;
                }
            }
            else if (this.valueIn === 'Microsecond(μs)' && this.valueOut === 'Day') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) / 86400000000;
                }
                else {
                    return parseFloat(this.inputNum) / 86400000000;
                }
            }
            else if (this.valueIn === 'Microsecond(μs)' && this.valueOut === 'Week') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) / 604800000000;
                }
                else {
                    return parseFloat(this.inputNum) / 604800000000;
                }
            }

            else if (this.valueIn === 'Millisecond(ms)' && this.valueOut === 'Microsecond(μs)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
                }
                else {
                    return parseFloat(this.inputNum) * 1000;
                }
            }
            else if (this.valueIn === 'Millisecond(ms)' && this.valueOut === 'Second(s)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) / 1000;
                }
                else {
                    return parseFloat(this.inputNum) / 1000;
                }
            }
            else if (this.valueIn === 'Millisecond(ms)' && this.valueOut === 'Minute(m)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) / 60000;
                }
                else {
                    return parseFloat(this.inputNum) / 60000;
                }
            }
            else if (this.valueIn === 'Millisecond(ms)' && this.valueOut === 'Hour(h)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) / 3600000;
                }
                else {
                    return parseFloat(this.inputNum) / 3600000;
                }
            }
            else if (this.valueIn === 'Millisecond(ms)' && this.valueOut === 'Day') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) / 86400000;
                }
                else {
                    return parseFloat(this.inputNum) / 86400000;
                }
            }
            else if (this.valueIn === 'Millisecond(ms)' && this.valueOut === 'Week') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) / 604800000;
                }
                else {
                    return parseFloat(this.inputNum) / 604800000;
                }
            }

            else if (this.valueIn === 'Second(s)' && this.valueOut === 'Microsecond(μs)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
                }
                else {
                    return parseFloat(this.inputNum) * 1000000;
                }
            }
            else if (this.valueIn === 'Second(s)' && this.valueOut === 'Millisecond(ms)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
                }
                else {
                    return parseFloat(this.inputNum) * 1000;
                }
            }
            else if (this.valueIn === 'Second(s)' && this.valueOut === 'Minute(m)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) / 60;
                }
                else {
                    return parseFloat(this.inputNum) / 60;
                }
            }
            else if (this.valueIn === 'Second(s)' && this.valueOut === 'Hour(h)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) / 3600;
                }
                else {
                    return parseFloat(this.inputNum) / 3600;
                }
            }
            else if (this.valueIn === 'Second(s)' && this.valueOut === 'Day') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) / 86400;
                }
                else {
                    return parseFloat(this.inputNum) / 86400;
                }
            }
            else if (this.valueIn === 'Second(s)' && this.valueOut === 'Week') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) / 604800;
                }
                else {
                    return parseFloat(this.inputNum) / 604800;
                }
            }

            else if (this.valueIn === 'Minute(m)' && this.valueOut === 'Microsecond(μs)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 60000000;
                }
                else {
                    return parseFloat(this.inputNum) * 60000000;
                }
            }
            else if (this.valueIn === 'Minute(m)' && this.valueOut === 'Millisecond(ms)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 60000;
                }
                else {
                    return parseFloat(this.inputNum) * 60000;
                }
            }
            else if (this.valueIn === 'Minute(m)' && this.valueOut === 'Second(s)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 60;
                }
                else {
                    return parseFloat(this.inputNum) * 60;
                }
            }
            else if (this.valueIn === 'Minute(m)' && this.valueOut === 'Hour(h)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) / 60;
                }
                else {
                    return parseFloat(this.inputNum) / 60;
                }
            }
            else if (this.valueIn === 'Minute(m)' && this.valueOut === 'Day') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) / 1440;
                }
                else {
                    return parseFloat(this.inputNum) / 1440;
                }
            }
            else if (this.valueIn === 'Minute(m)' && this.valueOut === 'Week') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) / 10080;
                }
                else {
                    return parseFloat(this.inputNum) / 10080;
                }
            }

            else if (this.valueIn === 'Hour(h)' && this.valueOut === 'Microsecond(μs)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 3600000000;
                }
                else {
                    return parseFloat(this.inputNum) * 3600000000;
                }
            }
            else if (this.valueIn === 'Hour(h)' && this.valueOut === 'Millisecond(ms)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 3600000;
                }
                else {
                    return parseFloat(this.inputNum) * 3600000;
                }
            }
            else if (this.valueIn === 'Hour(h)' && this.valueOut === 'Second(s)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 3600;
                }
                else {
                    return parseFloat(this.inputNum) * 3600;
                }
            }
            else if (this.valueIn === 'Hour(h)' && this.valueOut === 'Minute(m)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 60;
                }
                else {
                    return parseFloat(this.inputNum) * 60;
                }
            }
            else if (this.valueIn === 'Hour(h)' && this.valueOut === 'Day') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) / 24;
                }
                else {
                    return parseFloat(this.inputNum) / 24;
                }
            }
            else if (this.valueIn === 'Hour(h)' && this.valueOut === 'Week') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) / 168;
                }
                else {
                    return parseFloat(this.inputNum) / 168;
                }
            }

            else if (this.valueIn === 'Day' && this.valueOut === 'Microsecond(μs)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 86400000000;
                }
                else {
                    return parseFloat(this.inputNum) * 86400000000;
                }
            }
            else if (this.valueIn === 'Day' && this.valueOut === 'Millisecond(ms)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 86400000;
                }
                else {
                    return parseFloat(this.inputNum) * 86400000;
                }
            }
            else if (this.valueIn === 'Day' && this.valueOut === 'Minute(m)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1440;
                }
                else {
                    return parseFloat(this.inputNum) * 1440;
                }
            }
            else if (this.valueIn === 'Day' && this.valueOut === 'Second(s)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 86400;
                }
                else {
                    return parseFloat(this.inputNum) * 86400;
                }
            }
            else if (this.valueIn === 'Day' && this.valueOut === 'Hour(h)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 24;
                }
                else {
                    return parseFloat(this.inputNum) * 24;
                }
            }
            else if (this.valueIn === 'Day' && this.valueOut === 'Week') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) / 7;
                }
                else {
                    return parseFloat(this.inputNum) / 7;
                }
            }

            else if (this.valueIn === 'Week' && this.valueOut === 'Microsecond(μs)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 604800000000;
                }
                else {
                    return parseFloat(this.inputNum) * 604800000000;
                }
            }
            else if (this.valueIn === 'Week' && this.valueOut === 'Millisecond(ms)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 604800000;
                }
                else {
                    return parseFloat(this.inputNum) * 604800000;
                }
            }
            else if (this.valueIn === 'Week' && this.valueOut === 'Minute(m)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 10080;
                }
                else {
                    return parseFloat(this.inputNum) * 10080;
                }
            }
            else if (this.valueIn === 'Week' && this.valueOut === 'Second(s)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 604800;
                }
                else {
                    return parseFloat(this.inputNum) * 604800;
                }
            }
            else if (this.valueIn === 'Week' && this.valueOut === 'Hour(h)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 168;
                }
                else {
                    return parseFloat(this.inputNum) * 168;
                }
            }
            else if (this.valueIn === 'Week' && this.valueOut === 'Day') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 7;
                }
                else {
                    return parseFloat(this.inputNum) * 7;
                }
            }

            else{
                return '';
            }
        }

    }
}

</script>


