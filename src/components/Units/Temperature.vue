<template>
<v-card class="px-5" flat>
    <v-container class="d-flex justify-end">
        <v-btn icon @click="addComponentBtn">
            <v-icon>mdi-plus-thick</v-icon>
        </v-btn>
    </v-container>
    <v-container>
    </v-container>
    <v-container class="container" v-if="removeComponent" fluid>
    <h1 class="text-center pt-7">Temperature</h1>
    <v-row class="row d-flex justify-center py-7" cols="2">
        <v-col xl="5" lg="5" sm="6">
        <v-text-field class="text-center result-field"  :messages="`${valueOut}`"  v-model="resultOutput" :vlaue="setResult" label="Result "></v-text-field>
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
        <v-text-field outlined  label="Your Number" hint="Number only" placeholder="120" v-model="inputNum"></v-text-field>
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
            dense
            filled
            label="From Unit"
            placeholder="Celsius or C"
        ></v-autocomplete>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-autocomplete
            v-model="valueOut"
            :items="itemsOut"
            dense
            filled
            label="To Unit"
            placeholder="Fahrenheit or F"
        ></v-autocomplete>
        </v-col>
    </v-row>
    <add-search-bar></add-search-bar>
    <search-bar v-if="addComponent"></search-bar>
    </v-container>
</v-card>
</template>




<script>
import AddComponentsBtn from '../AddComponents/AddComponentsBtn.vue';
import SearchBar from '../SearchBar.vue';

export default {
    components: {
    AddComponentsBtn,
    SearchBar,
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
        userPow: '',
        removeComponent: true,
        addComponent: false,
        
        }
    },
    methods: {
        removeComponentBtn(){
            this.removeComponent = false;
        },
        addComponentBtn(){
            this.addComponent = !this.addComponent;
        },
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
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 274.15;
                }
                else {
                    return parseFloat(this.inputNum) * 274.15;
                }
            }
            else if (this.valueIn === 'Celsius(C)' && this.valueOut === 'Kelvin(K)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * 274.15;
                }
                else {
                    return parseFloat(this.inputNum) * 274.15;
                }
            }
            else if (this.valueIn === 'Fahrenheit(F)' && this.valueOut === 'Celsius(C)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow)) * (-17.2222222);
                }
                else {
                    return parseFloat(this.inputNum) * (-17.2222222);
                }
            }
            else if (this.valueIn === 'Fahrenheit(F)' && this.valueOut === 'Kelvin(K)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow))  * 255.927778;
                }
                else {
                    return parseFloat(this.inputNum)  * 255.927778;
                }
            }
            else if (this.valueIn === 'Kelvin(K)' && this.valueOut === 'Celsius(C)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow))  * (-272.15);
                }
                else {
                    return parseFloat(this.inputNum)  * (-272.15);
                }
            }
            else if (this.valueIn === 'Kelvin(K)' && this.valueOut === 'Fahrenheit(F)') {
                if (this.userPow != ''){
                    return parseFloat(Math.pow(this.inputNum, this.userPow))  * (-457.87);
                }
                else {
                    return parseFloat(this.inputNum)  * (-457.87);
                }
            }
            else{
                return '';
            }
        }

    }
}

</script>


