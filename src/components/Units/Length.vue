<template>
  <v-card class="px-5" flat >
    <v-container class="container" fluid>
    <h1 class="text-center py-10 ">Length</h1>
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
        <v-text-field outlined v-model="nanometerResult" :value="convertLength" label="Nanometer(nm)"></v-text-field>
        </v-col>
        <v-col
        xl="4" lg="4" sm="4"
        >
        <v-text-field outlined v-model="micrometerResult" :value="convertLength" label="Micrometer(μm) "></v-text-field>
        </v-col>
        </v-row>
        <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="milimeterResult" :value="convertLength"
        label="Milimeter(mm) "></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="centimeterResult" :value="convertLength" label="Centimeter(cm)"></v-text-field>
        </v-col>
    </v-row>
        <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="decimeterResult" :value="convertLength"
        label="Decimeter(dm) "></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="meterResult" :value="convertLength" label="Meter(m)"></v-text-field>
        </v-col>
    </v-row>
        <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="kilometerResult" :value="convertLength"
        label="Kilometer(km) "></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="inchResult" :value="convertLength"
        label="Inch(in)"></v-text-field>
        </v-col>
    </v-row>
    <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="feetResault" :value="convertLength"
        label="Feet(ft) "></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="yardResult" :value="convertLength"
        label="Yard(yd)"></v-text-field>
        </v-col>
    </v-row>
    <v-row justify="center">
        <v-col xl="4" lg="4" sm="4" class="d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex" >
        <v-text-field outlined v-model="mileResult" :value="convertLength" label="Mile(mi)"></v-text-field>
        </v-col>
        <v-col cols="5" class="d-flex d-sm-none">
        <v-text-field outlined v-model="mileResult" :value="convertLength" label="Mile(mi)"></v-text-field>
        </v-col>
    </v-row>
    </v-container>
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
      inputNum: '',
      itemsIn: ['Nanometer(nm)', 'Micrometer(μm)', 'Milimeter(mm)', 'Centimeter(cm)', 'Decimeter(dm)', 'Meter(m)', 'Kilometer(km)', 'Inch(in)', 'Feet(ft)', 'Yard(yd)', 'Mile(mi)'],
      valueIn: '',
      userPow: '',
      milimeterResult: '',
      centimeterResult: '',
      decimeterResult: '',
      meterResult: '',
      kilometerResult: '',
      inchResult: '',
      feetResault: '',
      yardResult: '',
      mileResult: '',
      micrometerResult: '',
      nanometerResult: '',
    }
  },
  computed: {
    convertLength(){
      if (this.inputNum === ''){
        this.milimeterResult = '';
        this.centimeterResult =  '';
        this.decimeterResult =  '';
        this.meterResult =  '';
        this.kilometerResult = '';
        this.inchResult = '';
        this.feetResault = '';
        this.yardResult = '';
        this.mileResult = '';
        this.micrometerResult =  '';
        this.nanometerResult =  '';
    }
      else if (this.valueIn === 'Nanometer(nm)') {
        if (this.userPow != ''){
        this.meterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000000001;
        this.kilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000000000001;
        this.decimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00000001;
        this.centimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000001;
        this.milimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000001;
        this.micrometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
        this.nanometerResult = parseFloat(Math.pow(this.inputNum, this.userPow));
        this.mileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00000000000062137;
        this.yardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000000010936133;
        this.feetResault = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000000032808399;
        this.inchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00000003937007874;
        }
        else{
            this.meterResult = parseFloat(this.inputNum) * 0.000000001;
            this.kilometerResult = parseFloat(this.inputNum) * 0.000000000001;
            this.decimeterResult = parseFloat(this.inputNum) * 0.00000001;
            this.centimeterResult = parseFloat(this.inputNum) * 0.0000001;
            this.milimeterResult = parseFloat(this.inputNum) * 0.000001;
            this.micrometerResult = parseFloat(this.inputNum) * 0.001;
            this.nanometerResult = parseFloat(this.inputNum);
            this.mileResult = parseFloat(this.inputNum) * 0.00000000000062137;
            this.yardResult = parseFloat(this.inputNum) * 0.0000000010936133;
            this.feetResault = parseFloat(this.inputNum) * 0.0000000032808399;
            this.inchResult = parseFloat(this.inputNum) * 0.00000003937007874;
        }
      }
      else if (this.valueIn === 'Micrometer(μm)') {
        if (this.userPow != ''){
        this.meterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000001;
        this.kilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000000001;
        this.decimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00001;
        this.centimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0001;
        this.milimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
        this.micrometerResult = parseFloat(Math.pow(this.inputNum, this.userPow));
        this.nanometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
        this.mileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00000000062137;
        this.yardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000010936133;
        this.feetResault = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000032808399;
        this.inchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00003937007874;
        }
        else{
            this.meterResult = parseFloat(this.inputNum) * 0.000001;
            this.kilometerResult = parseFloat(this.inputNum) * 0.000000001;
            this.decimeterResult = parseFloat(this.inputNum) * 0.00001;
            this.centimeterResult = parseFloat(this.inputNum) * 0.0001;
            this.milimeterResult = parseFloat(this.inputNum) * 0.001;
            this.micrometerResult = parseFloat(this.inputNum);
            this.nanometerResult = parseFloat(this.inputNum) * 1000;
            this.mileResult = parseFloat(this.inputNum) * 0.00000000062137;
            this.yardResult = parseFloat(this.inputNum) * 0.0000010936133;
            this.feetResault = parseFloat(this.inputNum) * 0.0000032808399;
            this.inchResult = parseFloat(this.inputNum) * 0.00003937007874;
        }
      }
      else if (this.valueIn === 'Milimeter(mm)') {
        if (this.userPow != ''){
        this.meterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
        this.kilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000001;
        this.decimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
        this.centimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.1;
        this.milimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow));
        this.micrometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
        this.nanometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
        this.mileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00000062137;
        this.yardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0010936133;
        this.feetResault = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0032808399;
        this.inchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.03937007874;
        }
        else{
            this.meterResult = parseFloat(this.inputNum) * 0.001;
            this.kilometerResult = parseFloat(this.inputNum) * 0.000001;
            this.decimeterResult = parseFloat(this.inputNum) * 0.01;
            this.centimeterResult = parseFloat(this.inputNum) * 0.1;
            this.milimeterResult = parseFloat(this.inputNum);
            this.micrometerResult = parseFloat(this.inputNum) * 1000;
            this.nanometerResult = parseFloat(this.inputNum) * 1000000;
            this.mileResult = parseFloat(this.inputNum) * 0.00000062137;
            this.yardResult = parseFloat(this.inputNum) * 0.0010936133;
            this.feetResault = parseFloat(this.inputNum) * 0.0032808399;
            this.inchResult = parseFloat(this.inputNum) * 0.03937007874;
        }
      }
      else if (this.valueIn === 'Centimeter(cm)') {
        if (this.userPow != ''){
        this.meterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
        this.kilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00001;
        this.decimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.1;
        this.centimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow));
        this.milimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10;
        this.micrometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000;
        this.nanometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000000;
        this.mileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000062137;
        this.yardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.010936133;
        this.feetResault = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.032808399;
        this.inchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.3937007874;
        }
        else{
            this.meterResult = parseFloat(this.inputNum) * 0.01;
            this.kilometerResult = parseFloat(this.inputNum) * 0.00001;
            this.decimeterResult = parseFloat(this.inputNum) * 0.1;
            this.centimeterResult = parseFloat(this.inputNum);
            this.milimeterResult = parseFloat(this.inputNum) * 10;
            this.micrometerResult = parseFloat(this.inputNum) * 10000;
            this.nanometerResult = parseFloat(this.inputNum) * 10000000;
            this.mileResult = parseFloat(this.inputNum) * 0.0000062137;
            this.yardResult = parseFloat(this.inputNum) * 0.010936133;
            this.feetResault = parseFloat(this.inputNum) * 0.032808399;
            this.inchResult = parseFloat(this.inputNum) * 0.3937007874;
        }
      }
      else if (this.valueIn === 'Decimeter(dm)') {
        if (this.userPow != ''){
        this.meterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.1;
        this.kilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0001;
        this.decimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow));
        this.centimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10;
        this.milimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
        this.micrometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100000;
        this.nanometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100000000;
        this.mileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000621371;
        this.yardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.1093613298;
        this.feetResault = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.3280839895;
        this.inchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.937007874;
        }
        else{
            this.meterResult = parseFloat(this.inputNum) * 0.1;
            this.kilometerResult = parseFloat(this.inputNum) * 0.0001;
            this.decimeterResult = parseFloat(this.inputNum);
            this.centimeterResult = parseFloat(this.inputNum) * 10;
            this.milimeterResult = parseFloat(this.inputNum) * 100;
            this.micrometerResult = parseFloat(this.inputNum) * 100000;
            this.nanometerResult = parseFloat(this.inputNum) * 100000000;
            this.mileResult = parseFloat(this.inputNum) * 0.0000621371;
            this.yardResult = parseFloat(this.inputNum) * 0.1093613298;
            this.feetResault = parseFloat(this.inputNum) * 0.3280839895;
            this.inchResult = parseFloat(this.inputNum) * 0.937007874;
        }
      }
      else if (this.valueIn === 'Meter(m)') {
        if (this.userPow != ''){
        this.meterResult = parseFloat(Math.pow(this.inputNum, this.userPow));
        this.kilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
        this.decimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10;
        this.centimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
        this.milimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
        this.micrometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
        this.nanometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000000;
        this.mileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0006213712;
        this.yardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1.0936132983;
        this.feetResault = parseFloat(Math.pow(this.inputNum, this.userPow)) * 3.280839895;
        this.inchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 39.37007874;
        }
        else{
            this.meterResult = parseFloat(this.inputNum);
            this.kilometerResult = parseFloat(this.inputNum) * 0.001;
            this.decimeterResult = parseFloat(this.inputNum) * 10;
            this.centimeterResult = parseFloat(this.inputNum) * 100;
            this.milimeterResult = parseFloat(this.inputNum) * 1000;
            this.micrometerResult = parseFloat(this.inputNum) * 1000000;
            this.nanometerResult = parseFloat(this.inputNum) * 1000000000;
            this.mileResult = parseFloat(this.inputNum) * 0.0006213712;
            this.yardResult = parseFloat(this.inputNum) * 1.0936132983;
            this.feetResault = parseFloat(this.inputNum) * 3.280839895;
            this.inchResult = parseFloat(this.inputNum) * 39.37007874;
        }
      }
      else if (this.valueIn === 'Kilometer(km)') {
        if (this.userPow != ''){
        this.meterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
        this.kilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow));
        this.decimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000;
        this.centimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100000;
        this.milimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
        this.micrometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000000;
        this.nanometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000000000;
        this.mileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.6213711922;
        this.yardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1093.6132983;
        this.feetResault = parseFloat(Math.pow(this.inputNum, this.userPow)) * 3280.839895;
        this.inchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 39370.07874;
        }
        else{
            this.meterResult = parseFloat(this.inputNum) * 1000;
            this.kilometerResult = parseFloat(this.inputNum);
            this.decimeterResult = parseFloat(this.inputNum) * 10000;
            this.centimeterResult = parseFloat(this.inputNum) * 100000;
            this.milimeterResult = parseFloat(this.inputNum) * 1000000;
            this.micrometerResult = parseFloat(this.inputNum) * 1000000000;
            this.nanometerResult = parseFloat(this.inputNum) * 1000000000000;
            this.mileResult = parseFloat(this.inputNum) * 0.6213711922;
            this.yardResult = parseFloat(this.inputNum) * 1093.6132983;
            this.feetResault = parseFloat(this.inputNum) * 3280.839895;
            this.inchResult = parseFloat(this.inputNum) * 39370.07874;
        }
      }
      else if (this.valueIn === 'Inch(in)') {
        if (this.userPow != ''){
        this.meterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0254;
        this.kilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000254;
        this.decimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.254;
        this.centimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 2.54;
        this.milimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 25.4;
        this.micrometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 25400;
        this.nanometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 25400000;
        this.mileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000157828;
        this.yardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0277777778;
        this.feetResault = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0833333333;
        this.inchResult = parseFloat(Math.pow(this.inputNum, this.userPow));
        }
        else{
            this.meterResult = parseFloat(this.inputNum) * 0.0254;
            this.kilometerResult = parseFloat(this.inputNum) * 0.0000254;
            this.decimeterResult = parseFloat(this.inputNum) * 0.254;
            this.centimeterResult = parseFloat(this.inputNum) * 2.54;
            this.milimeterResult = parseFloat(this.inputNum) * 25.4;
            this.micrometerResult = parseFloat(this.inputNum) * 25400;
            this.nanometerResult = parseFloat(this.inputNum) * 25400000;
            this.mileResult = parseFloat(this.inputNum) * 0.0000157828;
            this.yardResult = parseFloat(this.inputNum) * 0.0277777778;
            this.feetResault = parseFloat(this.inputNum) * 0.0833333333;
            this.inchResult = parseFloat(this.inputNum);
        }
      }
      else if (this.valueIn === 'Feet(ft)') {
        if (this.userPow != ''){
        this.meterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.3048;
        this.kilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0003048;
        this.decimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 3.048;
        this.centimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 30.48;
        this.milimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 304.8;
        this.micrometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 304800;
        this.nanometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 304800000;
        this.mileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0001893939;
        this.yardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.3333333333;
        this.feetResault = parseFloat(Math.pow(this.inputNum, this.userPow));
        this.inchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 12;
        }
        else{
            this.meterResult = parseFloat(this.inputNum) * 0.3048;
            this.kilometerResult = parseFloat(this.inputNum) * 0.0003048;
            this.decimeterResult = parseFloat(this.inputNum) * 3.048;
            this.centimeterResult = parseFloat(this.inputNum) * 30.48;
            this.milimeterResult = parseFloat(this.inputNum) * 304.8;
            this.micrometerResult = parseFloat(this.inputNum) * 304800;
            this.nanometerResult = parseFloat(this.inputNum) * 304800000;
            this.mileResult = parseFloat(this.inputNum) * 0.0001893939;
            this.yardResult = parseFloat(this.inputNum) * 0.3333333333;
            this.feetResault = parseFloat(this.inputNum);
            this.inchResult = parseFloat(this.inputNum) * 12;
        }
      }
      else if (this.valueIn === 'Yard(yd)') {
        if (this.userPow != ''){
        this.meterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.9144;
        this.kilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0009144;
        this.decimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 9.144;
        this.centimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 91.44;
        this.milimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 914.4;
        this.micrometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 914400;
        this.nanometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 914400000;
        this.mileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0005681818;
        this.yardResult = parseFloat(Math.pow(this.inputNum, this.userPow));
        this.feetResault = parseFloat(Math.pow(this.inputNum, this.userPow)) * 3;
        this.inchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 36;
        }
        else{
            this.meterResult = parseFloat(this.inputNum) * 0.9144;
            this.kilometerResult = parseFloat(this.inputNum) * 0.0009144;
            this.decimeterResult = parseFloat(this.inputNum) * 9.144;
            this.centimeterResult = parseFloat(this.inputNum) * 91.44;
            this.milimeterResult = parseFloat(this.inputNum) * 914.4;
            this.micrometerResult = parseFloat(this.inputNum) * 914400;
            this.nanometerResult = parseFloat(this.inputNum) * 914400000;
            this.mileResult = parseFloat(this.inputNum) * 0.0005681818;
            this.yardResult = parseFloat(this.inputNum);
            this.feetResault = parseFloat(this.inputNum) * 3;
            this.inchResult = parseFloat(this.inputNum) * 36;
        }
      }
      else if (this.valueIn === 'Mile(mi)') {
        if (this.userPow != ''){
        this.meterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1609.344;
        this.kilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1.609344;
        this.decimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 16093.44;
        this.centimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 160934.4;
        this.milimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1609344;
        this.micrometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1609344000;
        this.nanometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1609344000000;
        this.mileResult = parseFloat(Math.pow(this.inputNum, this.userPow));
        this.yardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1760;
        this.feetResault = parseFloat(Math.pow(this.inputNum, this.userPow)) * 5280;
        this.inchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 5280;
        }
        else{
            this.meterResult = parseFloat(this.inputNum) * 1609.344;
            this.kilometerResult = parseFloat(this.inputNum) * 1.609344;
            this.decimeterResult = parseFloat(this.inputNum) * 16093.44;
            this.centimeterResult = parseFloat(this.inputNum) * 160934.4;
            this.milimeterResult = parseFloat(this.inputNum) * 1609344;
            this.micrometerResult = parseFloat(this.inputNum) * 1609344000;
            this.nanometerResult = parseFloat(this.inputNum) * 1609344000000;
            this.mileResult = parseFloat(this.inputNum);
            this.yardResult = parseFloat(this.inputNum) * 1760;
            this.feetResault = parseFloat(this.inputNum) * 5280;
            this.inchResult = parseFloat(this.inputNum) * 5280;
        }
      }

      else {
        this.milimeterResult = '';
        this.centimeterResult =  '';
        this.decimeterResult =  '';
        this.meterResult =  '';
        this.kilometerResult = '';
        this.inchResult = '';
        this.feetResault = '';
        this.yardResult = '';
        this.mileResult = '';
        this.micrometerResult =  '';
        this.nanometerResult =  '';
      }
    }
  }
}
</script>

