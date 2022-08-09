<template>
<v-card class="px-5" flat >
    <v-container class="container" fluid v-if="removeComponent">
    <h1 class="text-center py-10">Volume</h1>
    <v-row
        align="center"
        justify="center"
        class="pt-10"
        
    >
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined label="Your Number" hint="Number only" placeholder="120" v-model="inputNum" :value="convertVolume"></v-text-field>
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
        <v-text-field outlined v-model="cubicMilimeterResult" :value="convertVolume" label="Cubic Milimeter(mm3) "></v-text-field>
        </v-col>
        <v-col
        xl="4" lg="4" sm="4"
        >
        <v-text-field outlined v-model="cubicCentimeterResult" :value="convertVolume" label="Cubic Centimeter(cm3) "></v-text-field>
        </v-col>
        </v-row>
        <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="cubicDecimeterResult" :value="convertVolume"
        label="Cubic Decimeter(dm3) "></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="cubicMeterResult" :value="convertVolume" label="Cubic Meter(m3)"></v-text-field>
        </v-col>
    </v-row>
        <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="cubicKilometerResult" :value="convertVolume"
        label="Cubic Kilometer(km3) "></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="mililiterResult" :value="convertVolume" label="Mililiter(ml))"></v-text-field>
        </v-col>
    </v-row>
        <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="literResult" :value="convertVolume"
        label="Liter(l) "></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="deciliterResult" :value="convertVolume" label="Deciliter(dl)"></v-text-field>
        </v-col>
    </v-row>
    <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="cubicMeterResult" :value="convertVolume"
        label="Cubic Meter(m3)"></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="cupUsResult" :value="convertVolume" label="Cup US"></v-text-field>
        </v-col>
    </v-row>
        <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="gallonUsResult" :value="convertVolume"
        label="Gallon US(gal) "></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="teaspoonResult" :value="convertVolume" label="Teaspoon US"></v-text-field>
        </v-col>
    </v-row>
    <v-row justify="center">
        <v-col xl="4" lg="4" sm="4" class="d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex" >
        <v-text-field outlined v-model="tablespoonResult" :value="convertTemp" label="Tablespoon US"></v-text-field>
        </v-col>
        <v-col cols="5" class="d-flex d-sm-none">
        <v-text-field outlined v-model="tablespoonResult" :value="convertTemp" label="Tablespoon US"></v-text-field>
        </v-col>
    </v-row>
    </v-container>
</v-card>
</template>




<script>

export default {
    data() {
        return {
        inputNum: '' ,
        itemsIn: [ 'Cubic Milimeter(mm3)', 'Cubic Centimeter(cm3)', 'Cubic Meter(m3)', 'Cubic Decimeter(dm3)', 'Cubic Kilometer(km3)', 'Mililiter(ml)', 'Liter(l)', 'Deciliter(dl)', 'Cup US', 'Gallon US(gal)', 'Teaspoon US', 'Tablespoon US'  ],
        valueIn: '',
        userPow: '',
        removeComponent: true,
        addComponent: true,
        cubicMilimeterResult: '',
        cubicCentimeterResult: '',
        cubicDecimeterResult: '',
        cubicMeterResult: '',
        cubicKilometerResult: '',
        mililiterResult: '',
        literResult: '',
        deciliterResult: '',
        cupUsResult: '',
        gallonUsResult: '',
        teaspoonResult: '',
        tablespoonResult: '',
        }
    },
    computed: {
        convertVolume(){
            if(this.inputNum === ''){
            this.cubicKilometerResult =  '';
                this.cubicDecimeterResult = '';
                this.cubicCentimeterResult =  '';
                this.cubicMilimeterResult =  '';
                this.literResult =  '';
                this.deciliterResult =  '';
                this.mililiterResult =  '';
                this.cubicMeterResult =  '';
                this.cupUsResult =  '';
                this.gallonUsResult =  '';
                this.teaspoonResult =  '';
                this.tablespoonResult =  '';
            }

            else if (this.valueIn === 'Cubic Milimeter(mm3)') {
                if (this.userPow != ''){
                    this.cubicMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000000001;
                this.cubicKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000000000000000001;
                this.cubicDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000001;
                this.cubicCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
                this.cubicMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                this.literResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000001;
                this.deciliterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00001;
                this.mililiterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
                this.gallonUsResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000002641722;
                this.cupUsResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000042268;
                this.tablespoonResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000067628;
                this.teaspoonResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0002028841;
                }
                else{
                    this.cubicMeterResult = parseFloat(this.inputNum) * 0.000000001;
                    this.cubicKilometerResult = parseFloat(this.inputNum) * 0.000000000000000001;
                    this.cubicDecimeterResult = parseFloat(this.inputNum) * 0.000001;
                    this.cubicCentimeterResult = parseFloat(this.inputNum) * 0.001;
                    this.cubicMilimeterResult = parseFloat(this.inputNum);
                    this.literResult = parseFloat(this.inputNum) * 0.000001;
                    this.deciliterResult = parseFloat(this.inputNum) * 0.00001;
                    this.mililiterResult = parseFloat(this.inputNum) * 0.001;
                    this.gallonUsResult = parseFloat(this.inputNum) * 0.0000002641722;
                    this.cupUsResult = parseFloat(this.inputNum) * 0.0000042268;
                    this.tablespoonResult = parseFloat(this.inputNum) * 0.000067628;
                    this.teaspoonResult = parseFloat(this.inputNum) * 0.0002028841;
                }
            }
            else if (this.valueIn === 'Cubic Centimeter(cm3)') {
                if (this.userPow != ''){
                    this.cubicMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000001;
                this.cubicKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000000000000001;
                this.cubicDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
                this.cubicCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                this.cubicMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
                this.literResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
                this.deciliterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
                this.mililiterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1;
                this.gallonUsResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0002641721;
                this.cupUsResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0042267528;
                this.tablespoonResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0676280454;
                this.teaspoonResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.2028841362;
                }
                else{
                    this.cubicMeterResult = parseFloat(this.inputNum) * 0.000001;
                    this.cubicKilometerResult = parseFloat(this.inputNum) * 0.000000000000001;
                    this.cubicDecimeterResult = parseFloat(this.inputNum) * 0.001;
                    this.cubicCentimeterResult = parseFloat(this.inputNum);
                    this.cubicMilimeterResult = parseFloat(this.inputNum) * 1000;
                    this.literResult = parseFloat(this.inputNum) * 0.001;
                    this.deciliterResult = parseFloat(this.inputNum) * 0.01;
                    this.mililiterResult = parseFloat(this.inputNum) * 1;
                    this.gallonUsResult = parseFloat(this.inputNum) * 0.0002641721;
                    this.cupUsResult = parseFloat(this.inputNum) * 0.0042267528;
                    this.tablespoonResult = parseFloat(this.inputNum) * 0.0676280454;
                    this.teaspoonResult = parseFloat(this.inputNum) * 0.2028841362;
                }
            }
            else if (this.valueIn === 'Cubic Meter(m3)') {
                if (this.userPow != ''){
                    this.cubicMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                this.cubicKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000000001;
                this.cubicDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
                this.cubicCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
                this.cubicMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000000;
                this.literResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
                this.deciliterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000;
                this.mililiterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
                this.gallonUsResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 264.17205236;
                this.cupUsResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 4226.7528377;
                this.tablespoonResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 67628.045404;
                this.teaspoonResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 202884.13621;
                }
                else{
                    this.cubicMeterResult = parseFloat(this.inputNum);
                    this.cubicKilometerResult = parseFloat(this.inputNum) * 0.000000001;
                    this.cubicDecimeterResult = parseFloat(this.inputNum) * 1000;
                    this.cubicCentimeterResult = parseFloat(this.inputNum) * 1000000;
                    this.cubicMilimeterResult = parseFloat(this.inputNum) * 1000000000;
                    this.literResult = parseFloat(this.inputNum) * 1000;
                    this.deciliterResult = parseFloat(this.inputNum) * 10000;
                    this.mililiterResult = parseFloat(this.inputNum) * 1000000;
                    this.gallonUsResult = parseFloat(this.inputNum) * 264.17205236;
                    this.cupUsResult = parseFloat(this.inputNum) * 4226.7528377;
                    this.tablespoonResult = parseFloat(this.inputNum) * 67628.045404;
                    this.teaspoonResult = parseFloat(this.inputNum) * 202884.13621;
                }
            }
            else if (this.valueIn === 'Cubic Decimeter(dm3)') {
                if (this.userPow != ''){
                    this.cubicMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
                this.cubicKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000000000001;
                this.cubicDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                this.cubicCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
                this.cubicMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
                this.literResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1;
                this.deciliterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10;
                this.mililiterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
                this.gallonUsResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.2641720524;
                this.cupUsResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 4.2267528377;
                this.tablespoonResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 67.628045404;
                this.teaspoonResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 202.88413621;
                }
                else{
                    this.cubicMeterResult = parseFloat(this.inputNum) * 0.001;
                    this.cubicKilometerResult = parseFloat(this.inputNum) * 0.000000000001;
                    this.cubicDecimeterResult = parseFloat(this.inputNum);
                    this.cubicCentimeterResult = parseFloat(this.inputNum) * 1000;
                    this.cubicMilimeterResult = parseFloat(this.inputNum) * 1000000;
                    this.literResult = parseFloat(this.inputNum) * 1;
                    this.deciliterResult = parseFloat(this.inputNum) * 10;
                    this.mililiterResult = parseFloat(this.inputNum) * 1000;
                    this.gallonUsResult = parseFloat(this.inputNum) * 0.2641720524;
                    this.cupUsResult = parseFloat(this.inputNum) * 4.2267528377;
                    this.tablespoonResult = parseFloat(this.inputNum) * 67.628045404;
                    this.teaspoonResult = parseFloat(this.inputNum) * 202.88413621;
                }
            }
            else if (this.valueIn === 'Cubic Kilometer(km3)') {
                if (this.userPow != ''){
                    this.cubicMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000000;
                this.cubicKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                this.cubicDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000000000;
                this.cubicCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000000000000;
                this.cubicMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000000000000000;
                this.literResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000000000;
                this.deciliterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000000000000;
                this.mililiterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000000000000;
                this.gallonUsResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 264172052358;
                this.cupUsResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 4226752837730;
                this.tablespoonResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 4226752837730;
                this.teaspoonResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 202.88413621;
                }
                else{
                    this.cubicMeterResult = parseFloat(this.inputNum) * 1000000000;
                    this.cubicKilometerResult = parseFloat(this.inputNum);
                    this.cubicDecimeterResult = parseFloat(this.inputNum) * 1000000000000;
                    this.cubicCentimeterResult = parseFloat(this.inputNum) * 1000000000000000;
                    this.cubicMilimeterResult = parseFloat(this.inputNum) * 1000000000000000000;
                    this.literResult = parseFloat(this.inputNum) * 1000000000000;
                    this.deciliterResult = parseFloat(this.inputNum) * 10000000000000;
                    this.mililiterResult = parseFloat(this.inputNum) * 1000000000000000;
                    this.gallonUsResult = parseFloat(this.inputNum) * 264172052358;
                    this.cupUsResult = parseFloat(this.inputNum) * 4226752837730;
                    this.teaspoonResult = parseFloat(this.inputNum) * 4226752837730;
                    this.tablespoonResult = parseFloat(this.inputNum) * 202.88413621;
                }
            }
            else if (this.valueIn === 'Mililiter(ml)') {
                if (this.userPow != ''){
                    this.cubicMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000001;
                this.cubicKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000000000000001;
                this.cubicDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
                this.cubicCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1;
                this.cubicMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
                this.literResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
                this.deciliterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
                this.mililiterResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                this.gallonUsResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0002641721;
                this.cupUsResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0042267528
                this.tablespoonResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0676280454;
                this.teaspoonResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.2028841362;
                }
                else{
                    this.cubicMeterResult = parseFloat(this.inputNum) * 0.000001;
                    this.cubicKilometerResult = parseFloat(this.inputNum) * 0.0000000000000001;
                    this.cubicDecimeterResult = parseFloat(this.inputNum) * 0.001;
                    this.cubicCentimeterResult = parseFloat(this.inputNum) * 1;
                    this.cubicMilimeterResult = parseFloat(this.inputNum) * 1000;
                    this.literResult = parseFloat(this.inputNum) * 0.001;
                    this.deciliterResult = parseFloat(this.inputNum) * 0.01;
                    this.mililiterResult = parseFloat(this.inputNum);
                    this.gallonUsResult = parseFloat(this.inputNum) * 0.0002641721;
                    this.cupUsResult = parseFloat(this.inputNum) * 0.0042267528
                    this.tablespoonResult = parseFloat(this.inputNum) * 0.0676280454;
                    this.teaspoonResult = parseFloat(this.inputNum) * 0.2028841362;
                }
            }
            else if (this.valueIn === 'Liter(l)') {
                if (this.userPow != ''){
                    this.cubicMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
                this.cubicKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000000000001;
                this.cubicDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1;
                this.cubicCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
                this.cubicMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
                this.literResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                this.deciliterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10;
                this.mililiterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
                this.gallonUsResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.2641720524;
                this.cupUsResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 4.2267528377;
                this.tablespoonResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 67.628045404;
                this.teaspoonResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 202.88413621;
                }
                else{
                    this.cubicMeterResult = parseFloat(this.inputNum) * 0.001;
                    this.cubicKilometerResult = parseFloat(this.inputNum) * 0.000000000001;
                    this.cubicDecimeterResult = parseFloat(this.inputNum) * 1;
                    this.cubicCentimeterResult = parseFloat(this.inputNum) * 1000;
                    this.cubicMilimeterResult = parseFloat(this.inputNum) * 1000000;
                    this.literResult = parseFloat(this.inputNum);
                    this.deciliterResult = parseFloat(this.inputNum) * 10;
                    this.mililiterResult = parseFloat(this.inputNum) * 1000;
                    this.gallonUsResult = parseFloat(this.inputNum) * 0.2641720524;
                    this.cupUsResult = parseFloat(this.inputNum) * 4.2267528377;
                    this.tablespoonResult = parseFloat(this.inputNum) * 67.628045404;
                    this.teaspoonResult = parseFloat(this.inputNum) * 202.88413621;
                }
            }
            else if (this.valueIn === 'Deciliter(dl)') {
                if (this.userPow != ''){
                    this.cubicMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0001;
                this.cubicKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000000000001;
                this.cubicDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.1;
                this.cubicCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
                this.cubicMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100000;
                this.literResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.1;
                this.deciliterResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                this.mililiterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
                this.gallonUsResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0264172052;
                this.cupUsResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.4226752838;
                this.tablespoonResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 6.7628045404;
                this.teaspoonResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 20.288413621;
                }
                else{
                    this.cubicMeterResult = parseFloat(this.inputNum) * 0.0001;
                    this.cubicKilometerResult = parseFloat(this.inputNum) * 0.0000000000001;
                    this.cubicDecimeterResult = parseFloat(this.inputNum) * 0.1;
                    this.cubicCentimeterResult = parseFloat(this.inputNum) * 100;
                    this.cubicMilimeterResult = parseFloat(this.inputNum) * 100000;
                    this.literResult = parseFloat(this.inputNum) * 0.1;
                    this.deciliterResult = parseFloat(this.inputNum);
                    this.mililiterResult = parseFloat(this.inputNum) * 100;
                    this.gallonUsResult = parseFloat(this.inputNum) * 0.0264172052;
                    this.cupUsResult = parseFloat(this.inputNum) * 0.4226752838;
                    this.tablespoonResult = parseFloat(this.inputNum) * 6.7628045404;
                    this.teaspoonResult = parseFloat(this.inputNum) * 20.288413621;
                }
            }
            else if (this.valueIn === 'Gallon US(gal)') {
                if (this.userPow != ''){
                    this.cubicMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0037854118;
                this.cubicKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000000000037854118;
                this.cubicDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 3.7854118;
                this.cubicCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 3785.4118;
                this.cubicMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 3785411.784;
                this.literResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 3.785411784;
                this.deciliterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 37.85411784;
                this.mililiterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 3785.411784;
                this.gallonUsResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                this.cupUsResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 16;
                this.tablespoonResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 256;
                this.teaspoonResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 768;
                }
                else{
                    this.cubicMeterResult = parseFloat(this.inputNum) * 0.0037854118;
                    this.cubicKilometerResult = parseFloat(this.inputNum) * 0.0000000000037854118;
                    this.cubicDecimeterResult = parseFloat(this.inputNum) * 3.7854118;
                    this.cubicCentimeterResult = parseFloat(this.inputNum) * 3785.4118;
                    this.cubicMilimeterResult = parseFloat(this.inputNum) * 3785411.784;
                    this.literResult = parseFloat(this.inputNum) * 3.785411784;
                    this.deciliterResult = parseFloat(this.inputNum) * 37.85411784;
                    this.mililiterResult = parseFloat(this.inputNum) * 3785.411784;
                    this.gallonUsResult = parseFloat(this.inputNum);
                    this.cupUsResult = parseFloat(this.inputNum) * 16;
                    this.tablespoonResult = parseFloat(this.inputNum) * 256;
                    this.teaspoonResult = parseFloat(this.inputNum) * 768;
                }
            }
            else if (this.valueIn === 'Cup US') {
                if (this.userPow != ''){
                    this.cubicMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0002365882;
                this.cubicKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000000000002365882;
                this.cubicDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.2365882365;
                this.cubicCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 236.5882365;
                this.cubicMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 236588.2365;
                this.literResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.2365882365;
                this.deciliterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 2.365882365;
                this.mililiterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 236.5882365;
                this.gallonUsResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0625;
                this.cupUsResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                this.tablespoonResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 16;
                this.teaspoonResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 48;
                }
                else{
                    this.cubicMeterResult = parseFloat(this.inputNum) * 0.0002365882;
                    this.cubicKilometerResult = parseFloat(this.inputNum) * 0.00000000000023658820001;
                    this.cubicDecimeterResult = parseFloat(this.inputNum) * 0.2365882365;
                    this.cubicCentimeterResult = parseFloat(this.inputNum) * 236.5882365;
                    this.cubicMilimeterResult = parseFloat(this.inputNum) * 236588.2365;
                    this.literResult = parseFloat(this.inputNum) * 0.2365882365;
                    this.deciliterResult = parseFloat(this.inputNum) * 2.365882365;
                    this.mililiterResult = parseFloat(this.inputNum) * 236.5882365;
                    this.gallonUsResult = parseFloat(this.inputNum) * 0.0625;
                    this.cupUsResult = parseFloat(this.inputNum);
                    this.tablespoonResult = parseFloat(this.inputNum) * 16;
                    this.teaspoonResult = parseFloat(this.inputNum) * 48;
                }
            }
            else if (this.valueIn === 'Teaspoon US') {
                if (this.userPow != ''){
                    this.cubicMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000049289;
                this.cubicKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000000000000049289;
                this.cubicDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0049289216;
                this.cubicCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 4.9289215937;
                this.cubicMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 4928.9215937;
                this.literResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0049289216;
                this.deciliterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0492892159;
                this.mililiterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 4.9289215937;
                this.gallonUsResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0013020833;
                this.cupUsResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0208333333;
                this.tablespoonResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 3;
                this.teaspoonResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                }
                else{
                    this.cubicMeterResult = parseFloat(this.inputNum) * 0.0000049289;
                    this.cubicKilometerResult = parseFloat(this.inputNum) * 0.0000000000000049289;
                    this.cubicDecimeterResult = parseFloat(this.inputNum) * 0.0049289216;
                    this.cubicCentimeterResult = parseFloat(this.inputNum) * 4.9289215937;
                    this.cubicMilimeterResult = parseFloat(this.inputNum) * 4928.9215937;
                    this.literResult = parseFloat(this.inputNum) * 0.0049289216;
                    this.deciliterResult = parseFloat(this.inputNum) * 0.0492892159;
                    this.mililiterResult = parseFloat(this.inputNum) * 4.9289215937;
                    this.gallonUsResult = parseFloat(this.inputNum) * 0.0013020833;
                    this.cupUsResult = parseFloat(this.inputNum) * 0.0208333333;
                    this.tablespoonResult = parseFloat(this.inputNum) / 3;
                    this.teaspoonResult = parseFloat(this.inputNum);
                }
            }
            else if (this.valueIn === 'Tablespoon US') {
                if (this.userPow != ''){
                    this.cubicMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000147868;
                this.cubicKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000000000000147868;
                this.cubicDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0147867648;
                this.cubicCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 14.786764781;
                this.cubicMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 14786.764781;
                this.literResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0147867648;
                this.deciliterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.1478676478;
                this.mililiterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 14.786764781;
                this.gallonUsResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00390625;
                this.cupUsResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0625;
                this.tablespoonResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                this.teaspoonResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 3;
                }
                else{
                    this.cubicMeterResult = parseFloat(this.inputNum) * 0.0000147868;
                    this.cubicKilometerResult = parseFloat(this.inputNum) * 0.0000000000000147868;
                    this.cubicDecimeterResult = parseFloat(this.inputNum) * 0.0147867648;
                    this.cubicCentimeterResult = parseFloat(this.inputNum) * 14.786764781;
                    this.cubicMilimeterResult = parseFloat(this.inputNum) * 14786.764781;
                    this.literResult = parseFloat(this.inputNum) * 0.0147867648;
                    this.deciliterResult = parseFloat(this.inputNum) * 0.1478676478;
                    this.mililiterResult = parseFloat(this.inputNum) * 14.786764781;
                    this.gallonUsResult = parseFloat(this.inputNum) * 0.00390625;
                    this.cupUsResult = parseFloat(this.inputNum) * 0.0625;
                    this.tablespoonResult = parseFloat(this.inputNum);
                    this.teaspoonResult = parseFloat(this.inputNum) * 3;
                }
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
