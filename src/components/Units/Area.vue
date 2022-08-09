<template>
<v-card class="px-5" flat >
    <v-container class="container" fluid v-if="removeComponent">
    <h1 class="text-center py-10">Area</h1>
    <v-row
        align="center"
        justify="center"
        class="pt-10"
        
    >
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined label="Your Number" hint="Number only" placeholder="120" v-model="inputNum" :value="convertArea"></v-text-field>
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
                placeholder="Joule(J)"
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
        <v-text-field outlined v-model="squareMilimeterResult" :value="convertArea" label="Square Milimeter(mm2)"></v-text-field>
        </v-col>
        <v-col
        xl="4" lg="4" sm="4"
        >
        <v-text-field outlined v-model="squareCentimeterResult" :value="convertArea" label="Square Centimeter(cm2)"></v-text-field>
        </v-col>
        </v-row>
        <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="squareDecimeterResult" :value="convertArea"
        label="Square Decimeter(dm2)"></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="squareMeterResult" :value="convertArea" label="Square Meter(m2)"></v-text-field>
        </v-col>
    </v-row>
    <v-row justify="center">
    <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="hectareResult" :value="convertArea" label="Hectar(ha)"></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="squareKilometerResult" :value="convertArea" label="Square Kilometer(km2)"></v-text-field>
        </v-col>
    </v-row>
    <v-row justify="center">
    <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="acreResult" :value="convertArea" label="Acre"></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="areResult" :value="convertArea" label="Are"></v-text-field>
        </v-col>
    </v-row>
    <v-row justify="center">
    <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="squareInchResult" :value="convertArea" label="Squere Inch(in2)"></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="squareFeetResult" :value="convertArea" label="Square Feet(ft2)"></v-text-field>
        </v-col>
    </v-row>
    <v-row justify="center">
    <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="squareYardResult" :value="convertArea" label="Square Yard(yd2)"></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="squareMileResult" :value="convertArea" label="Square Mile(mi2)"></v-text-field>
        </v-col>
    </v-row>
    </v-container>
    <v-btn @click="top">Top</v-btn>
</v-card>
</template>




<script>

export default {
    data() {
        return {
        inputNum: '' ,
        itemsIn: [ 'Square Milimeter(mm2)', 'Square Centimeter(cm2)', 'Square Decimeter(dm2)', 'Square Meter(m2)' ,'Hectar(ha)', 'Square Kilometer(km2)', 'Acre', 'Are', 'Squere Inch(in2)', 'Square Feet(ft2)', 'Square Yard(yd2)', 'Square Mile(mi2)' ],
        valueIn: '',
        userPow: '',
        removeComponent: true,
        addComponent: true,
        squareKilometerResult: '',
        squareDecimeterResult: '',
        squareCentimeterResult: '',
        squareMilimeterResult: '',
        hectareResult: '',
        acreResult: '',
        areResult: '',
        squareMileResult: '',
        squareYardResult: '',
        squareFeetResult: '',
        squareInchResult: '',
        squareMeterResult: '',
        }
    },
    methods:{
        top(){
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
                });
            }
        },
    computed: {
        convertArea(){
            if (this.inputNum === ''){
                this.squareKilometerResult = '';
                this.squareMeterResult =  '';
                this.squareDecimeterResult =  '';
                this.squareCentimeterResult =  '';
                this.squareMilimeterResult = '';
                this.hectareResult = '';
                this.acreResult = '';
                this.areResult = '';
                this.squareMileResult = '';
                this.squareYardResult =  '';
                this.squareFeetResult =  '';
                this.squareInchResult = '';
            }

            else if (this.valueIn === 'Square Milimeter(mm2)') {
                if (this.userPow != ''){
                this.squareKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000000000001;
                this.squareMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000001;
                this.squareDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow))* 0.0001;
                this.squareCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
                this.squareMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                this.hectareResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
                this.acreResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00000000024711;
                this.areResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00000001;
                this.squareMileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 2589988110336;
                this.squareYardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000011959900463;
                this.squareFeetResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00001076391042;
                this.squareInchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0015500031;
            }
            else{
                this.squareKilometerResult = parseFloat(this.inputNum) * 0.000000000001;
                this.squareMeterResult = parseFloat(this.inputNum) * 0.000001;
                this.squareDecimeterResult = parseFloat(this.inputNum)* 0.0001;
                this.squareCentimeterResult = parseFloat(this.inputNum) * 0.01;
                this.squareMilimeterResult = parseFloat(this.inputNum);
                this.hectareResult = parseFloat(this.inputNum) * 0.01;
                this.acreResult = parseFloat(this.inputNum) * 0.00000000024711;
                this.areResult = parseFloat(this.inputNum) * 0.00000001;
                this.squareMileResult = parseFloat(this.inputNum) / 2589988110336;
                this.squareYardResult = parseFloat(this.inputNum) * 0.0000011959900463;
                this.squareFeetResult = parseFloat(this.inputNum) * 0.00001076391042;
                this.squareInchResult = parseFloat(this.inputNum) * 0.0015500031;
            }
        }
        else if (this.valueIn === 'Square Centimeter(cm2)') {
                if (this.userPow != ''){
                this.squareKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000000001;
                this.squareMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0001;
                this.squareDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow))* 0.01;
                this.squareCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                this.squareMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
                this.hectareResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00000001;
                this.acreResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000000024711;
                this.areResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000001;
                this.squareMileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 25899881103;
                this.squareYardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00011959900463;
                this.squareFeetResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001076391042;
                this.squareInchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.15500031;
            }
            else{
                this.squareKilometerResult = parseFloat(this.inputNum) * 0.0000000001;
                this.squareMeterResult = parseFloat(this.inputNum) * 0.0001;
                this.squareDecimeterResult = parseFloat(this.inputNum)* 0.01;
                this.squareCentimeterResult = parseFloat(this.inputNum);
                this.squareMilimeterResult = parseFloat(this.inputNum) * 100;
                this.hectareResult = parseFloat(this.inputNum) * 0.00000001;
                this.acreResult = parseFloat(this.inputNum) * 0.000000024711;
                this.areResult = parseFloat(this.inputNum) * 0.000001;
                this.squareMileResult = parseFloat(this.inputNum) / 25899881103;
                this.squareYardResult = parseFloat(this.inputNum) * 0.00011959900463;
                this.squareFeetResult = parseFloat(this.inputNum) * 0.001076391042;
                this.squareInchResult = parseFloat(this.inputNum) * 0.15500031;
            }
        }

        else if (this.valueIn === 'Square Decimeter(dm2)') {
                if (this.userPow != ''){
                this.squareKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00000001;
                this.squareMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
                this.squareDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                this.squareCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
                this.squareMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000;
                this.hectareResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000001;
                this.acreResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000024711;
                this.areResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0001;
                this.squareMileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 258998811.03;
                this.squareYardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.011959900463;
                this.squareFeetResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.1076391042;
                this.squareInchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 15.500031;
            }
            else{
                this.squareKilometerResult = parseFloat(this.inputNum) * 0.00000001;
                this.squareMeterResult = parseFloat(this.inputNum) * 0.01;
                this.squareDecimeterResult = parseFloat(this.inputNum);
                this.squareCentimeterResult = parseFloat(this.inputNum) * 100;
                this.squareMilimeterResult = parseFloat(this.inputNum) * 10000;
                this.hectareResult = parseFloat(this.inputNum) * 0.000001;
                this.acreResult = parseFloat(this.inputNum) * 0.0000024711;
                this.areResult = parseFloat(this.inputNum) * 0.0001;
                this.squareMileResult = parseFloat(this.inputNum) / 258998811.03;
                this.squareYardResult = parseFloat(this.inputNum) * 0.011959900463;
                this.squareFeetResult = parseFloat(this.inputNum) * 0.1076391042;
                this.squareInchResult = parseFloat(this.inputNum) * 15.500031;
            }
        }
        else if (this.valueIn === 'Square Meter(m2)') {
                if (this.userPow != ''){
                this.squareKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000001;
                this.squareMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                this.squareDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
                this.squareCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000;
                this.squareMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
                this.hectareResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0001;
                this.acreResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0002471054;
                this.areResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
                this.squareMileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 2589988.1103;
                this.squareYardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1.1959900463;
                this.squareFeetResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10.763910417;
                this.squareInchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1550.0031;
            }
            else{
                this.squareKilometerResult = parseFloat(this.inputNum) * 0.000001;
                this.squareMeterResult = parseFloat(this.inputNum);
                this.squareDecimeterResult = parseFloat(this.inputNum) * 100;
                this.squareCentimeterResult = parseFloat(this.inputNum) * 10000;
                this.squareMilimeterResult = parseFloat(this.inputNum) * 1000000;
                this.hectareResult = parseFloat(this.inputNum) * 0.0001;
                this.acreResult = parseFloat(this.inputNum) * 0.0002471054;
                this.areResult = parseFloat(this.inputNum) * 0.01;
                this.squareMileResult = parseFloat(this.inputNum) / 2589988.1103;
                this.squareYardResult = parseFloat(this.inputNum) * 1.1959900463;
                this.squareFeetResult = parseFloat(this.inputNum) * 10.763910417;
                this.squareInchResult = parseFloat(this.inputNum) * 1550.0031;
            }
        }
        else if (this.valueIn === 'Hectar(ha)') {
                if (this.userPow != ''){
                this.squareKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
                this.squareMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000;
                this.squareDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
                this.squareCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100000000;
                this.squareMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000000000;
                this.hectareResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                this.acreResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 2.4710538147;
                this.areResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
                this.squareMileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0038610216;
                this.squareYardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 11959.900463;
                this.squareFeetResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 107639.10417;
                this.squareInchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 15500031;
            }
            else{
                this.squareKilometerResult = parseFloat(this.inputNum) * 0.01;
                this.squareMeterResult = parseFloat(this.inputNum) * 10000;
                this.squareDecimeterResult = parseFloat(this.inputNum) * 1000000;
                this.squareCentimeterResult = parseFloat(this.inputNum) * 100000000;
                this.squareMilimeterResult = parseFloat(this.inputNum) * 10000000000;
                this.hectareResult = parseFloat(this.inputNum);
                this.acreResult = parseFloat(this.inputNum) * 2.4710538147;
                this.areResult = parseFloat(this.inputNum) * 100;
                this.squareMileResult = parseFloat(this.inputNum) * 0.0038610216;
                this.squareYardResult = parseFloat(this.inputNum) * 11959.900463;
                this.squareFeetResult = parseFloat(this.inputNum) * 107639.10417;
                this.squareInchResult = parseFloat(this.inputNum) * 15500031;
            }
        }
        else if (this.valueIn === 'Square Kilometer(km2)') {
                if (this.userPow != ''){
                this.squareKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                this.squareMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
                this.squareDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100000000;
                this.squareCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000000000;
                this.squareMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000000000;
                this.hectareResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
                this.acreResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 247.10538147;
                this.areResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000;
                this.squareMileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.3861021585;
                this.squareYardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1195990.0463;
                this.squareFeetResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10763910.417;
                this.squareInchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1550003100;
            }
            else{
                this.squareKilometerResult = parseFloat(this.inputNum);
                this.squareMeterResult = parseFloat(this.inputNum) * 1000000;
                this.squareDecimeterResult = parseFloat(this.inputNum) * 100000000;
                this.squareCentimeterResult = parseFloat(this.inputNum) * 10000000000;
                this.squareMilimeterResult = parseFloat(this.inputNum) * 1000000000000;
                this.hectareResult = parseFloat(this.inputNum) * 100;
                this.acreResult = parseFloat(this.inputNum) * 247.10538147;
                this.areResult = parseFloat(this.inputNum) * 10000;
                this.squareMileResult = parseFloat(this.inputNum) * 0.3861021585;
                this.squareYardResult = parseFloat(this.inputNum) * 1195990.0463;
                this.squareFeetResult = parseFloat(this.inputNum) * 10763910.417;
                this.squareInchResult = parseFloat(this.inputNum) * 1550003100;
            }
        }
        else if (this.valueIn === 'Acre') {
                if (this.userPow != ''){
                this.squareKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0040468564;
                this.squareMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 4046.8564224;
                this.squareDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 404685.64224;
                this.squareCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 40468564.224;
                this.squareMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 4046856422.4;
                this.hectareResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.4046856422;
                this.acreResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                this.areResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 40.468564224;
                this.squareMileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0015625;
                this.squareYardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 4840;
                this.squareFeetResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 43560;
                this.squareInchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 6272640;
            }
            else{
                this.squareKilometerResult = parseFloat(this.inputNum) * 0.0040468564;
                this.squareMeterResult = parseFloat(this.inputNum) * 4046.8564224;
                this.squareDecimeterResult = parseFloat(this.inputNum) * 404685.64224;
                this.squareCentimeterResult = parseFloat(this.inputNum) * 40468564.224;
                this.squareMilimeterResult = parseFloat(this.inputNum) * 4046856422.4;
                this.hectareResult = parseFloat(this.inputNum) * 0.4046856422;
                this.acreResult = parseFloat(this.inputNum);
                this.areResult = parseFloat(this.inputNum) * 40.468564224;
                this.squareMileResult = parseFloat(this.inputNum) * 0.0015625;
                this.squareYardResult = parseFloat(this.inputNum) * 4840;
                this.squareFeetResult = parseFloat(this.inputNum) * 43560;
                this.squareInchResult = parseFloat(this.inputNum) * 6272640;
            }
        }
        else if (this.valueIn === 'Are') {
                if (this.userPow != ''){
                this.squareKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0001;
                this.squareMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
                this.squareDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000;
                this.squareCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
                this.squareMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100000000;
                this.hectareResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
                this.acreResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0247105381;
                this.areResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                this.squareMileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000386102;
                this.squareYardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 119.59900463;
                this.squareFeetResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1076.3910417;
                this.squareInchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 155000.31;
            }
            else{
                this.squareKilometerResult = parseFloat(this.inputNum) * 0.0001;
                this.squareMeterResult = parseFloat(this.inputNum) * 100;
                this.squareDecimeterResult = parseFloat(this.inputNum) * 10000;
                this.squareCentimeterResult = parseFloat(this.inputNum) * 1000000;
                this.squareMilimeterResult = parseFloat(this.inputNum) * 100000000;
                this.hectareResult = parseFloat(this.inputNum) * 0.01;
                this.acreResult = parseFloat(this.inputNum) * 0.0247105381;
                this.areResult = parseFloat(this.inputNum);
                this.squareMileResult = parseFloat(this.inputNum) * 0.0000386102;
                this.squareYardResult = parseFloat(this.inputNum) * 119.59900463;
                this.squareFeetResult = parseFloat(this.inputNum) * 1076.3910417;
                this.squareInchResult = parseFloat(this.inputNum) * 155000.31;
            }
        }
        else if (this.valueIn === 'Squere Inch(in2)') {
                if (this.userPow != ''){
                this.squareKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00000000064516;
                this.squareMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00064516;
                this.squareDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.064516;
                this.squareCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 6.4516;
                this.squareMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 645.16;
                this.hectareResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000000064516;
                this.acreResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 6272640;
                this.areResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000064516;
                this.squareMileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 4014505658;
                this.squareYardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0007716049;
                this.squareFeetResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 144;
                this.squareInchResult = parseFloat(Math.pow(this.inputNum, this.userPow));
            }
            else{
                this.squareKilometerResult = parseFloat(this.inputNum) * 0.00000000064516;
                this.squareMeterResult = parseFloat(this.inputNum) * 0.00064516;
                this.squareDecimeterResult = parseFloat(this.inputNum) * 0.064516;
                this.squareCentimeterResult = parseFloat(this.inputNum) * 6.4516;
                this.squareMilimeterResult = parseFloat(this.inputNum) * 645.16;
                this.hectareResult = parseFloat(this.inputNum) * 0.000000064516;
                this.acreResult = parseFloat(this.inputNum) / 6272640;
                this.areResult = parseFloat(this.inputNum) * 0.0000064516;
                this.squareMileResult = parseFloat(this.inputNum) / 4014505658;
                this.squareYardResult = parseFloat(this.inputNum) * 0.0007716049;
                this.squareFeetResult = parseFloat(this.inputNum) / 144;
                this.squareInchResult = parseFloat(this.inputNum);
            }
        }
        else if (this.valueIn === 'Square Feet(ft2)') {
                if (this.userPow != ''){
                this.squareKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00000009290304;
                this.squareMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.09290304;
                this.squareDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 9.290304;
                this.squareCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 929.0304;
                this.squareMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 92903.04;
                this.hectareResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000092903;
                this.acreResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000229568;
                this.areResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0009290304;
                this.squareMileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 27878511.514;
                this.squareYardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 9;
                this.squareFeetResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                this.squareInchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 144;
            }
            else{
                this.squareKilometerResult = parseFloat(this.inputNum) * 0.00000009290304;
                this.squareMeterResult = parseFloat(this.inputNum) * 0.09290304;
                this.squareDecimeterResult = parseFloat(this.inputNum) * 9.290304;
                this.squareCentimeterResult = parseFloat(this.inputNum) * 929.0304;
                this.squareMilimeterResult = parseFloat(this.inputNum) * 92903.04;
                this.hectareResult = parseFloat(this.inputNum) * 0.0000092903;
                this.acreResult = parseFloat(this.inputNum) * 0.0000229568;
                this.areResult = parseFloat(this.inputNum) * 0.0009290304;
                this.squareMileResult = parseFloat(this.inputNum) / 27878511.514;
                this.squareYardResult = parseFloat(this.inputNum) / 9;
                this.squareFeetResult = parseFloat(this.inputNum);
                this.squareInchResult = parseFloat(this.inputNum) * 144;
            }
        }
        else if (this.valueIn === 'Square Yard(yd2)') {
                if (this.userPow != ''){
                this.squareKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000008361273599;
                this.squareMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.83612736;
                this.squareDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 83.612736;
                this.squareCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 8361.2736;
                this.squareMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 836127.36;
                this.hectareResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000836127;
                this.acreResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0002066116;
                this.areResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0083612736;
                this.squareMileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 3097600;
                this.squareYardResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                this.squareFeetResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 9;
                this.squareInchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1296;
            }
            else{
                this.squareKilometerResult = parseFloat(this.inputNum) * 0.0000008361273599;
                this.squareMeterResult = parseFloat(this.inputNum) * 0.83612736;
                this.squareDecimeterResult = parseFloat(this.inputNum) * 83.612736;
                this.squareCentimeterResult = parseFloat(this.inputNum) * 8361.2736;
                this.squareMilimeterResult = parseFloat(this.inputNum) * 836127.36;
                this.hectareResult = parseFloat(this.inputNum) * 0.0000836127;
                this.acreResult = parseFloat(this.inputNum) * 0.0002066116;
                this.areResult = parseFloat(this.inputNum) * 0.0083612736;
                this.squareMileResult = parseFloat(this.inputNum) / 3097600;
                this.squareYardResult = parseFloat(this.inputNum);
                this.squareFeetResult = parseFloat(this.inputNum) * 9;
                this.squareInchResult = parseFloat(this.inputNum) * 1296;
            }
        }
        else if (this.valueIn === 'Square Mile(mi2)') {
                if (this.userPow != ''){
                this.squareKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 2.5899881103;
                this.squareMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 2589988.1103;
                this.squareDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 258998811.03;
                this.squareCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 25899881103;
                this.squareMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 2589988110336;
                this.hectareResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 258.99881103;
                this.acreResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 640;
                this.areResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 25899.881103;
                this.squareMileResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                this.squareYardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 3097600;
                this.squareFeetResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 27878400;
                this.squareInchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 4014489600;
            }
            else{
                this.squareKilometerResult = parseFloat(this.inputNum) * 2.5899881103;
                this.squareMeterResult = parseFloat(this.inputNum) * 2589988.1103;
                this.squareDecimeterResult = parseFloat(this.inputNum) * 258998811.03;
                this.squareCentimeterResult = parseFloat(this.inputNum) * 25899881103;
                this.squareMilimeterResult = parseFloat(this.inputNum) * 2589988110336;
                this.hectareResult = parseFloat(this.inputNum) * 258.99881103;
                this.acreResult = parseFloat(this.inputNum) * 640;
                this.areResult = parseFloat(this.inputNum) * 25899.881103;
                this.squareMileResult = parseFloat(this.inputNum);
                this.squareYardResult = parseFloat(this.inputNum) * 3097600;
                this.squareFeetResult = parseFloat(this.inputNum) * 27878400;
                this.squareInchResult = parseFloat(this.inputNum) * 4014489600;
            }
        }
        
            
            else {
                this.squareKilometerResult = '';
                this.squareMeterResult =  '';
                this.squareDecimeterResult =  '';
                this.squareCentimeterResult =  '';
                this.squareMilimeterResult = '';
                this.hectareResult = '';
                this.acreResult = '';
                this.areResult = '';
                this.squareMileResult = '';
                this.squareYardResult =  '';
                this.squareFeetResult =  '';
                this.squareInchResult = '';
            }
        }

    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Uchen&display=swap');
    
    h1, .v-text-field, .v-autocomplete{
        font-family: 'Uchen', serif;
    }
</style>
