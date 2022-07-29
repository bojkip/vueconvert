<template>
<v-card class="px-5" flat >
    <v-container class="container" fluid v-if="removeComponent">
    <h1 class="text-center py-10 ">Energy</h1>
    <v-row
        align="center"
        justify="center"
        class="pt-10"
        
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
        <v-row class="d-flex justify-center">
            <v-col xl="5" lg="5" sm="5">
            <v-autocomplete
                v-model="valueIn"
                :items="itemsIn"
                
                filled
                label="Your Unit"
                placeholder="Centimeter or cm"
            ></v-autocomplete>
            </v-col>
    </v-row>
    </v-container>
    <v-container>
            <v-row
        align="center"
        justify="center"
        
    >
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined :messages="`${valueOut} ${exponent}`"  v-model="jouleResult" :value="convertTemp" label="Joule(J) "></v-text-field>
        </v-col>
        <v-col
        xl="4" lg="4" sm="4"
        >
        <v-text-field outlined :messages="`${valueOut} ${exponent}`"  v-model="kilojuleResult" :value="convertTemp" label="Kilojule(kJ) "></v-text-field>
        </v-col>
        </v-row>
        <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined :messages="`${valueOut} ${exponent}`"  v-model="kilowattHourResult" :value="convertTemp"
        label="Kilowatt-hour(kWh) "></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined :messages="`${valueOut} ${exponent}`"  v-model="wattHourResult" :value="convertTemp" label="Watt-hour(Wh)"></v-text-field>
        </v-col>
    </v-row>
    </v-container>
</v-card>
</template>




<script>
import AddComponentsBtn from '../AddComponents/AddComponentsBtn.vue';
import AddSearchBar from '../AddComponents/AddSearchBar.vue';

export default {
    components: {
    AddComponentsBtn,
    AddSearchBar,
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
        removeComponent: true,
        addComponent: true,
        resultOutput1: '',
        jouleResult: '',
        kilojuleResult: '',
        kilowattHourResult: '',
        wattHourResult: '',
        
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
            this.kilowattHourResult = this.convertTemp;


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
            if (this.valueIn === 'Joule(J)') {
                if (this.userPow != ''){
                   this.kilojuleResult =  parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
                    this.kilowattHourResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 3600000;
                    this.wattHourResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0002777778;
                    this.jouleResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                }
                else {
                    this.kilojuleResult =  parseFloat(this.inputNum) * 0.001;
                    this.kilowattHourResult = parseFloat(this.inputNum) / 3600000;
                    this.wattHourResult = parseFloat(this.inputNum) * 0.0002777778;
                    this.jouleResult = parseFloat(this.inputNum);
                }
            }

            else if (this.valueIn === 'Kilojule(kJ)') {
                if (this.userPow != ''){
                    this.kilojuleResult =  parseFloat(Math.pow(this.inputNum, this.userPow));
                    this.kilowattHourResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0002777778;
                    this.wattHourResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.2777777778;
                    this.jouleResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
                }
                else {
                    this.kilojuleResult =  parseFloat(this.inputNum);
                    this.kilowattHourResult = parseFloat(this.inputNum) * 0.0002777778;
                    this.wattHourResult = parseFloat(this.inputNum) * 0.2777777778;
                    this.jouleResult = parseFloat(this.inputNum) * 1000;
                }
            }

            else if (this.valueIn === 'Kilowatt-hour(kWh)') {
                if (this.userPow != ''){
                    this.kilojuleResult =  parseFloat(Math.pow(this.inputNum, this.userPow)) * 3600;
                    this.kilowattHourResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                    this.wattHourResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
                    this.jouleResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 3600000;
                }
                else {
                    this.kilojuleResult =  parseFloat(this.inputNum) * 3600;
                    this.kilowattHourResult = parseFloat(this.inputNum);
                    this.wattHourResult = parseFloat(this.inputNum) * 1000;
                    this.jouleResult = parseFloat(this.inputNum) * 3600000;
                }
            }

            else if (this.valueIn === 'Watt-hour(Wh)') {
                if (this.userPow != ''){
                    this.kilojuleResult =  parseFloat(Math.pow(this.inputNum, this.userPow)) * 3.6;
                    this.kilowattHourResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
                    this.wattHourResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                    this.jouleResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 3600;
                }
                else {
                    this.kilojuleResult =  parseFloat(this.inputNum) * 3.6;
                    this.kilowattHourResult = parseFloat(this.inputNum) * 0.001;
                    this.wattHourResult = parseFloat(this.inputNum);
                    this.jouleResult = parseFloat(this.inputNum) * 3600;
                }
            }
            else{
                return '';
            }
        }

    }
}

</script>


