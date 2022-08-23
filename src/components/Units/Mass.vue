<template>
<v-card class="px-5" flat >
    <v-container class="container" fluid>
    <h1 class="text-center py-10 ">Mass</h1>
    <v-row
        align="center"
        justify="center"
        class="pt-10"
    >
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined label="Your Number" hint="Number only" placeholder="120" v-model="inputNum" :value="convertTime"></v-text-field>
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
                placeholder="Minute(min)"
            ></v-autocomplete>
            </v-col>
    </v-row>
    </v-container>
    <v-container>
        <v-row
        align="center"
        justify="center">
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="miligramResult" :value="convertLength" label="Miligram(mg)"></v-text-field>
        </v-col>
        <v-col
        xl="4" lg="4" sm="4"
        >
        <v-text-field outlined v-model="gramResult" :value="convertLength" label="Gram(g) "></v-text-field>
        </v-col>
        </v-row>
        <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="dekagramResult" :value="convertLength"
        label="Dekagram(dg) "></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="kilogramResult" :value="convertLength"
        label="Kilogram(kg) "></v-text-field>
        </v-col>
    </v-row>
        <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="onceResult" :value="convertLength"
        label="Once(oz)"></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="poundResult" :value="convertLength"
        label="Pound(lb) "></v-text-field>
        </v-col>
    </v-row>
    <v-row justify="center">
        <v-col xl="4" lg="4" sm="4" class="d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex">
        <v-text-field outlined v-model="tonResault" :value="convertLength"
        label="Ton(t)"></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4" class="d-flex d-sm-none">
        <v-text-field outlined v-model="tonResault" :value="convertLength"
        label="Ton(t)"></v-text-field>
        </v-col>
    </v-row>
    </v-container>
</v-card>
</template>





<script>
export default {
data() {
    return {
    inputNum: '',
    itemsIn: ['Miligram(mg)', 'Gram(g)', 'Dekagram(dag)', 'Kilogram(kg)', 'Once(oz)', 'Pound(lb)', 'Ton(t)'],
    valueIn: '',
    userPow: '',
    miligramResult: '',
    gramResult: '',
    dekagramResult: '',
    kilogramResult: '',
    onceResult: '',
    poundResult: '',
    tonResault: '',
    }
},
computed: {
    convertLength(){
        if (this.inputNum === ''){
            this.miligramResult = '';
            this.gramResult =  '';
            this.dekagramResult =  '';
            this.kilogramResult =  '';
            this.onceResult = '';
            this.poundResult = '';
            this.tonResault = '';
        }
        else if (this.valueIn === 'Miligram(mg)') {
            if (this.userPow != ''){
            this.kilogramResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000001;
            this.gramResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
            this.dekagramResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000;
            this.miligramResult = parseFloat(Math.pow(this.inputNum, this.userPow));
            this.tonResault = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000000001;
            this.poundResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000022046;
            this.onceResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000035274;
            }
            else{
                this.kilogramResult = parseFloat(this.inputNum) * 0.000001;
                this.gramResult = parseFloat(this.inputNum) * 0.001;
                this.dekagramResult = parseFloat(this.inputNum) * 10000;
                this.miligramResult = parseFloat(this.inputNum);
                this.tonResault = parseFloat(this.inputNum) * 0.000000001;
                this.poundResult = parseFloat(this.inputNum) * 0.0000022046;
                this.onceResult = parseFloat(this.inputNum) * 0.000035274;
            }
        }
        else if (this.valueIn === 'Gram(g)') {
            if (this.userPow != ''){
            this.kilogramResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
            this.gramResult = parseFloat(Math.pow(this.inputNum, this.userPow));
            this.dekagramResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.1;
            this.miligramResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
            this.tonResault = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000001;
            this.poundResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0022046226;
            this.onceResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0352739619;
            }
            else{
                this.kilogramResult = parseFloat(this.inputNum) * 0.001;
                this.gramResult = parseFloat(this.inputNum);
                this.dekagramResult = parseFloat(this.inputNum) * 0.1;
                this.miligramResult = parseFloat(this.inputNum) * 1000;
                this.tonResault = parseFloat(this.inputNum) * 0.000001;
                this.poundResult = parseFloat(this.inputNum) * 0.0022046226;
                this.onceResult = parseFloat(this.inputNum) * 0.0352739619;
            }
        }
        else if (this.valueIn === 'Dekagram(dag)') {
            if (this.userPow != ''){
            this.kilogramResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
            this.gramResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10;
            this.dekagramResult = parseFloat(Math.pow(this.inputNum, this.userPow));
            this.miligramResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000;
            this.tonResault = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00001;
            this.poundResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0220462262;
            this.onceResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.3527396195;
            }
            else{
                this.kilogramResult = parseFloat(this.inputNum) * 0.01;
                this.gramResult = parseFloat(this.inputNum) * 10;
                this.dekagramResult = parseFloat(this.inputNum);
                this.miligramResult = parseFloat(this.inputNum) * 10000;
                this.tonResault = parseFloat(this.inputNum) * 0.00001;
                this.poundResult = parseFloat(this.inputNum) * 0.0220462262;
                this.onceResult = parseFloat(this.inputNum) * 0.3527396195;
            }
        }
        else if (this.valueIn === 'Kilogram(kg)') {
            if (this.userPow != ''){
            this.kilogramResult = parseFloat(Math.pow(this.inputNum, this.userPow));
            this.gramResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
            this.dekagramResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
            this.miligramResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
            this.tonResault = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
            this.poundResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 2.2046226218;
            this.onceResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 35.27396195;
            }
            else{
                this.kilogramResult = parseFloat(this.inputNum);
                this.gramResult = parseFloat(this.inputNum) * 1000;
                this.dekagramResult = parseFloat(this.inputNum) * 100;
                this.miligramResult = parseFloat(this.inputNum) * 1000000;
                this.tonResault = parseFloat(this.inputNum) * 0.001;
                this.poundResult = parseFloat(this.inputNum) * 2.2046226218;
                this.onceResult = parseFloat(this.inputNum) * 35.27396195;
            }
        }
        else if (this.valueIn === 'Once(oz)') {
            if (this.userPow != ''){
            this.kilogramResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0283495231;
            this.gramResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 28.349523125;
            this.dekagramResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 2.8349523125;
            this.miligramResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 28349.523125;
            this.tonResault = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000283495;
            this.poundResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0625;
            this.onceResult = parseFloat(Math.pow(this.inputNum, this.userPow));
            }
            else{
                this.kilogramResult = parseFloat(this.inputNum) * 0.0283495231;
                this.gramResult = parseFloat(this.inputNum) * 28.349523125;
                this.dekagramResult = parseFloat(this.inputNum) * 2.8349523125;
                this.miligramResult = parseFloat(this.inputNum) * 28349.523125;
                this.tonResault = parseFloat(this.inputNum) * 0.0000283495;
                this.poundResult = parseFloat(this.inputNum) * 0.0625;
                this.onceResult = parseFloat(this.inputNum);
            }
        }
        else if (this.valueIn === 'Pound(lb)') {
            if (this.userPow != ''){
            this.kilogramResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.45359237;
            this.gramResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 453.59237;
            this.dekagramResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 45.359237;
            this.miligramResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 453592.37;
            this.tonResault = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0004535924;
            this.poundResult = parseFloat(Math.pow(this.inputNum, this.userPow));
            this.onceResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 16;
            }
            else{
                this.kilogramResult = parseFloat(this.inputNum) * 0.45359237;
                this.gramResult = parseFloat(this.inputNum) * 453.59237;
                this.dekagramResult = parseFloat(this.inputNum) * 45.359237;
                this.miligramResult = parseFloat(this.inputNum) * 453592.37;
                this.tonResault = parseFloat(this.inputNum) * 0.0004535924;
                this.poundResult = parseFloat(this.inputNum);
                this.onceResult = parseFloat(this.inputNum) * 16;
            }
        }
        else if (this.valueIn === 'Ton(t)') {
            if (this.userPow != ''){
            this.kilogramResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
            this.gramResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
            this.dekagramResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100000;
            this.miligramResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000000;
            this.tonResault = parseFloat(Math.pow(this.inputNum, this.userPow));
            this.poundResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 2204.6226218;
            this.onceResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 35273.96195;
            }
            else{
                this.kilogramResult = parseFloat(this.inputNum) * 1000;
                this.gramResult = parseFloat(this.inputNum) * 1000000;
                this.dekagramResult = parseFloat(this.inputNum) * 100000;
                this.miligramResult = parseFloat(this.inputNum) * 1000000000;
                this.tonResault = parseFloat(this.inputNum);
                this.poundResult = parseFloat(this.inputNum) * 2204.6226218;
                this.onceResult = parseFloat(this.inputNum) * 35273.96195;
            }
        }

        else {
            this.miligramResult = '';
            this.gramResult =  '';
            this.dekagramResult =  '';
            this.kilogramResult =  '';
            this.onceResult = '';
            this.poundResult = '';
            this.tonResault = '';
            }
        }
    }
}
</script>

