<template>
  <v-card  class="px-5" flat>
    <v-container class="container" fluid>
      <h1 class="text-center pt-7">Length</h1>
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
      >
        <v-col>
          <v-text-field outlined label="Your Number" hint="Number only" placeholder="120" v-model="inputNum"></v-text-field>
        </v-col>
        <v-col 
        >
          <v-text-field outlined label="Your Exponent" placeholder="2" hint="If your number has no exponent, skip this field" v-model="userPow">
          </v-text-field>
        </v-col>
        <v-col 
        >
          <v-text-field outlined :disabled="disUnitPow" label="Unit Exponent" placeholder="2" hint="If  unit has no exponent, skip this field" v-model="unitPow"></v-text-field>
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
    <v-container class="" fluid>
      <v-row justify="center">
        <v-col  xl="4" lg="4" sm="4">
          <v-switch
            v-model="showAreaUnits"
            inset
            label="Area"
            @changed="SetAreaItems"
            :disabled="disAreaBtn"
          ></v-switch>
        </v-col>
        <v-col  xl="2" lg="2" sm="2">
          <v-switch
            v-model="showVolumeUnits"
            inset
            label="Volume"
            @changed="SetVolumeItems"
            :disabled="disVolumeBtn"
          ></v-switch>
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
      inputNum: '',
      itemsIn: [ 'Milimeter(mm)', 'Centimeter(cm)', 'Decimeter(dm)', 'Meter(m)', 'Kilometer(km)', 'Inch(in)', 'Feet(ft)', 'Yard(yd)', 'Mile(mi)', 'description', 'bla'],
      valuesIn: ['foo', 'bar'],
      valueIn: '',
      itemsOut: ['Milimeter(mm)', 'Centimeter(cm)', 'Decimeter(dm)', 'Meter(m)', 'Kilometer(km)', 'Inch(in)', 'Feet(ft)', 'Yard(yd)', 'Mile(mi)'],

      valuesOut: ['foo', 'bar'],
      valueOut: '',
      userPow: '',
      unitPow: '',
      show: false,
      result: '',
      resultOutput: '',
      AreaBtn: false,
      ppp: '',
      showAreaUnits: false,
      showVolumeUnits: false,
      disUnitPow: false,
      resultFocus: false,
      disAreaBtn: false,
      disVolumeBtn: false,
    }
  },
  methods: {
    resetInput(){
      this.inputNum = '' ;
      this.itemIn = '',
      this.itemOut = '' ;
      this.userPow = '' ;
      this.unitPow = '';
      this.probaN = '' ;
      this.valueOut = '' ;
      this.valueIn = '' ;
      this.resultOutput = '' ;
    },
    copyBtn(){
      navigator.clipboard.writeText(this.resultOutput);
    },

  },
  computed: {
    setResultFocus(){
      if(this.resultOutput ){
        return true;
      }
      else{
        return false;
      }
    },
    SetAreaItems(){
      if (this.showAreaUnits === true) {
        this.itemsIn = [ 'Milimeter(mm)', 'Centimeter(cm)', 'Decimeter(dm)', 'Hectare(ha)', 'Meter(m)', 'Kilometer(km)', 'Acre(ac)', 'Are', 'Inch(in)', 'Feet(ft)', 'Yard(yd)', 'Mile(mi)' ];
        this.itemsOut = [ 'Milimeter(mm)', 'Centimeter(cm)', 'Decimeter(dm)', 'Hectare(ha)', 'Meter(m)', 'Kilometer(km)', 'Acre(ac)', 'Are', 'Inch(in)', 'Feet(ft)', 'Yard(yd)', ' Mile(mi)' ];
        this.disUnitPow = true;
        this.disVolumeBtn = true,
        this.unitPow = 2;
      }
      else {
        this.itemsIn = [ 'Milimeter(mm)', 'Centimeter(cm)', 'Decimeter(dm)', 'Meter(m)', 'Kilometer(km)', 'Inch(in)', 'Feet(ft)', 'Yard(yd)', 'Mile(mi)'];
        this.itemsOut = ['Milimeter(mm)', 'Centimeter(cm)', 'Decimeter(dm)', 'Meter(m)', 'Kilometer(km)', 'Inch(in)', 'Feet(ft)', 'Yard(yd)', 'Mile(mi)'];
        this.disUnitPow = false;
        this.disVolumeBtn = false,
        this.unitPow = '';
      }
    },
    SetVolumeItems(){
            if (this.showVolumeUnits === true) {
                this.itemsIn = [ 'Milimeter(mm)', 'Centimeter(cm)', 'Decimeter(dm)', 'Meter(m)', 'Kilometer(km)', 'Mililiter(ml)', 'Liter(l)', 'Deciliter(dl)', 'Cup US', 'Gallon US (gal)', 'Teaspoon US', 'Tablespoon US'  ],
                this.itemsOut = [ 'Milimeter(mm)', 'Centimeter(cm)', 'Decimeter(dm)', 'Meter(m)', 'Kilometer(km)', 'Mililiter(ml)', 'Liter(l)', 'Deciliter(dl)', 'Cup US', 'Gallon US (gal)', 'Teaspoon US', 'Tablespoon US'  ],
                this.disUnitPow = true;
                this.disAreaBtn = true;
                this.unitPow = 3;
            }
            else {
                this.itemsIn = [ 'Milimeter(mm)', 'Centimeter(cm)', 'Decimeter(dm)', 'Meter(m)', 'Kilometer(km)', 'Inch(in)', 'Feet(ft)', 'Yard(yd)', 'Mile(mi)'];
                this.itemsOut = ['Milimeter(mm)', 'Centimeter(cm)', 'Decimeter(dm)', 'Meter(m)', 'Kilometer(km)', 'Inch(in)', 'Feet(ft)', 'Yard(yd)', 'Mile(mi)'];
                this.disUnitPow = false;
                this.disAreaBtn = false;
                this.unitPow = '';
            }
        },
    setResult(){
      this.resultOutput = this.probaN;
      
    },
    exponent(){
      if (this.unitPow != '' || this.userPow != ''){
        return `Unit Exponent ${this.unitPow} | User Exponent: ${this.userPow}`;
      }
      else {
        return '';
      }
    },


    probaN(){
      if (this.valueIn === 'Milimeter(mm)' && this.valueOut === 'Centimeter(cm)') {
        if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.1, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.1;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.1, this.unitPow) ;
        }
        else {
          return parseFloat(this.inputNum) * 0.1;
        }
      }
      else if (this.valueIn === 'Milimeter(mm)' && this.valueOut === 'Decimeter(dm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.01, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.01, this.unitPow) ;
        }
          else {
            return parseFloat(this.inputNum) * 0.01;
        }
      }
      else if (this.valueIn === 'Milimeter(mm)' && this.valueOut === 'Hectaree(ha)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0000000001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000000001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0000000001, this.unitPow) ;
        }
          else {
            return parseFloat(this.inputNum) * 0.0000000001;
        }
      }
      else if (this.valueIn === 'Milimeter(mm)' && this.valueOut === 'Meter(m)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.001, this.unitPow) ;
        }
          else {
            return parseFloat(this.inputNum) * 0.001;
        }
      }
      else if (this.valueIn === 'Milimeter(mm)' && this.valueOut === 'Kilometer(km)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.000001, this.unitPow) ;
          } 
          else {
            return parseFloat(this.inputNum) * 0.000001;
        }
      }
      else if (this.valueIn === 'Milimeter(mm)' && this.valueOut === 'Acre(ac)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.00000000024711, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00000000024711;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.00000000024711, this.unitPow) ;
        }
          else {
            return parseFloat(this.inputNum) * 0.00000000024711;
        }
      }
      else if (this.valueIn === 'Milimeter(mm)' && this.valueOut === 'Are') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.00000001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00000001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.00000001, this.unitPow) ;
        }
          else {
            return parseFloat(this.inputNum) * 0.00000001;
        }
      }
      else if (this.valueIn === 'Milimeter(mm)' && this.valueOut === 'Inch(in)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.03937007874, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.03937007874;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.03937007874, this.unitPow) ;
        }
          else {
            return parseFloat(this.inputNum) * 0.03937007874;
        }
      }
      else if (this.valueIn === 'Milimeter(mm)' && this.valueOut === 'Feet(ft)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0032808399, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0032808399;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0032808399, this.unitPow) ;
        }
          else {
            return parseFloat(this.inputNum) * 0.0032808399;
        }
      }
      else if (this.valueIn === 'Milimeter(mm)' && this.valueOut === 'Yard(yd)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0010936133, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0010936133;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0010936133, this.unitPow) ;
        }
          else {
            return parseFloat(this.inputNum) * 0.0010936133;
        }
      }
      else if (this.valueIn === 'Milimeter(mm)' && this.valueOut === 'Mile(mi)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.00000062137, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00000062137;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.00000062137, this.unitPow) ;
        }
          else {
            return parseFloat(this.inputNum) * 0.00000062137;
        }
      }

      else if (this.valueIn === 'Centimeter(cm)' && this.valueOut === 'Milimeter(mm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(10, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 10;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(10, this.unitPow) ;
        }
          else {
            return parseFloat(this.inputNum) * 10;
        }
      }
      else if (this.valueIn === 'Centimeter(cm)' && this.valueOut === 'Decimeter(dm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.1, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.1;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.1, this.unitPow) ;
        }
          else {
            return parseFloat(this.inputNum) * 0.1;
        }
      }
      else if (this.valueIn === 'Centimeter(cm)' && this.valueOut === 'Hectare(ha)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.00000001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00000001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.00000001, this.unitPow) ;
        }
          else {
            return parseFloat(this.inputNum) * 0.00000001;
        }
      }
      else if (this.valueIn === 'Centimeter(cm)' && this.valueOut === 'Meter(m)') {
          if (this.unitPow != '' && this.userPow != '') {
            return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.01, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.01, this.unitPow) ;
        }
          else {
            return parseFloat(this.inputNum) * 0.01;
        }
      }
      else if (this.valueIn === 'Centimeter(cm)' && this.valueOut === 'Kilometer(km)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.00001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.00001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.00001;
        }
      }
      else if (this.valueIn === 'Centimeter(cm)' && this.valueOut === 'Acre(ac)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.000000024711, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000000024711;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.000000024711, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.000000024711;
        }
      }
      else if (this.valueIn === 'Centimeter(cm)' && this.valueOut === 'Are') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.000001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.000001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.000001;
        }
      }
      else if (this.valueIn === 'Centimeter(cm)' && this.valueOut === 'Inch(in)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.3937007874, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.3937007874;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.3937007874, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.3937007874;
        }
      }
      else if (this.valueIn === 'Centimeter(cm)' && this.valueOut === 'Feet(ft)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.032808399, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.032808399;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.032808399, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.032808399;
        }
      }
      else if (this.valueIn === 'Centimeter(cm)' && this.valueOut === 'Yard(yd)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.010936133, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.010936133;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.010936133, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.010936133;
        }
      }
      else if (this.valueIn === 'Centimeter(cm)' && this.valueOut === 'Mile(mi)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0000062137, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000062137;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0000062137, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0000062137;
        }
      }

      else if (this.valueIn === 'Decimeter(dm)' && this.valueOut === 'Milimeter(mm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(100, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(100, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 100;
        }
      }
      else if (this.valueIn === 'Decimeter(dm)' && this.valueOut === 'Centimeter(cm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(10, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 10;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(10, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 10;
        }
      }
      else if (this.valueIn === 'Decimeter(dm)' && this.valueOut === 'Hectare(ha)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.000001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.000001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.000001;
        }
      }
      else if (this.valueIn === 'Decimeter(dm)' && this.valueOut === 'Meter(m)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.1, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.1;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.1, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.1;
        }
      }
      else if (this.valueIn === 'Decimeter(dm)' && this.valueOut === 'Kilometer(km)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0001;
        }
      }
      else if (this.valueIn === 'Decimeter(dm)' && this.valueOut === 'Acre(ac)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0000024711, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000024711;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0000024711, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0000024711;
        }
      }
      else if (this.valueIn === 'Decimeter(dm)' && this.valueOut === 'Are') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0001;
        }
      }
      else if (this.valueIn === 'Decimeter(dm)' && this.valueOut === 'Inch(in)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(3.937007874, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 3.937007874;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(3.937007874, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 3.937007874;
        }
      }
      else if (this.valueIn === 'Decimeter(dm)' && this.valueOut === 'Feet(ft)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.3280839895, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.3280839895;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.3280839895, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.3280839895;
        }
      }
      else if (this.valueIn === 'Decimeter(dm)' && this.valueOut === 'Yard(yd)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.1093613298, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.1093613298;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.1093613298, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.1093613298;
        }
      }
      else if (this.valueIn === 'Decimeter(dm)' && this.valueOut === 'Mile(mi)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0000621371, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000621371;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0000621371, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0000621371;
        }
      }
      else if (this.valueIn === 'Meter(m)' && this.valueOut === 'Milimeter(mm)') {
        if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1000;
        }
      }
      else if (this.valueIn === 'Meter(m)' && this.valueOut === 'Centimeter(cm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(100, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(100, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 100;
        }
      }
      else if (this.valueIn === 'Meter(m)' && this.valueOut === 'Decimeter(dm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(10, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 10;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(10, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 10;
        }
      }
      else if (this.valueIn === 'Meter(m)' && this.valueOut === 'Hectare(ha)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0001;
        }
      }
      else if (this.valueIn === 'Meter(m)' && this.valueOut === 'Kilometer(km)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.001;
        }
      }
      else if (this.valueIn === 'Meter(m)' && this.valueOut === 'Acre(ac)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0002471054, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0002471054;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0002471054, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0002471054;
        }
      }
      else if (this.valueIn === 'Meter(m)' && this.valueOut === 'Are') {
        if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.01, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.01, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.01;
        }
      }
      else if (this.valueIn === 'Meter(m)' && this.valueOut === 'Inch(in)') {
        if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(39.37007874, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 39.37007874;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(39.37007874, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 39.37007874;
        }
      }
      else if (this.valueIn === 'Meter(m)' && this.valueOut === 'Feet(ft)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(3.280839895, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 3.280839895;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(3.280839895, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 3.280839895;
        }
      }
      else if (this.valueIn === 'Meter(m)' && this.valueOut === 'Yard(yd)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1.0936132983, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1.0936132983;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1.0936132983, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1.0936132983;
        }
      }
      else if (this.valueIn === 'Meter(m)' && this.valueOut === 'Mile(mi)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0006213712, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0006213712;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0006213712, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0006213712;
        }
      }

      else if (this.valueIn === 'Kilometer(km)' && this.valueOut === 'Milimeter(mm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1000000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1000000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1000000;
        }
      }
      else if (this.valueIn === 'Kilometer(km)' && this.valueOut === 'Centimeter(cm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(100000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 100000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(100000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 100000;
        }
      }
      else if (this.valueIn === 'Kilometer(km)' && this.valueOut === 'Decimeter(dm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(10000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(10000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 10000;
        }
      }
      else if (this.valueIn === 'Kilometer(km)' && this.valueOut === 'Hectare(ha)') {
        if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(100, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(100, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 100;
        }
      }
      else if (this.valueIn === 'Kilometer(km)' && this.valueOut === 'Meter(m)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1000;
        }
      }
      else if (this.valueIn === 'Kilometer(km)' && this.valueOut === 'Acre(ac)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(247.10538147, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 247.10538147;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(247.10538147, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 247.10538147;
        }
      }
      else if (this.valueIn === 'Kilometer(km)' && this.valueOut === 'Are') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(10000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(10000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 10000;
        }
      }
      else if (this.valueIn === 'Kilometer(km)' && this.valueOut === 'Inch(in)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(39370.07874, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 39370.07874;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(39370.07874, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 39370.07874;
        }
      }
      else if (this.valueIn === 'Kilometer(km)' && this.valueOut === 'Feet(ft)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(3280.839895, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 3280.839895;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(3280.839895, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 3280.839895;
        }
      }
      else if (this.valueIn === 'Kilometer(km)' && this.valueOut === 'Yard(yd)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1093.6132983, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1093.6132983;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1093.6132983, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1093.6132983;
        }
      }
      else if (this.valueIn === 'Kilometer(km)' && this.valueOut === 'Mile(mi)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.6213711922, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.6213711922;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.6213711922, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.6213711922;
        }
      }

      else if (this.valueIn === 'Inch(in)' && this.valueOut === 'Milimeter(mm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(25.4, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 25.4;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(25.4, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 25.4;
        }
      }
      else if (this.valueIn === 'Inch(in)' && this.valueOut === 'Centimeter(cm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(2.54, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 2.54;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(2.54, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 2.54;
        }
      }
      else if (this.valueIn === 'Inch(in)' && this.valueOut === 'Decimeter(dm)') {
        if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.254, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.254;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.254, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.254;
        }
      }
      else if (this.valueIn === 'Inch(in)' && this.valueOut === 'Hectare(ha)') {
        if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.000000064516, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000000064516;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.000000064516, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.000000064516;
        }
      }
      else if (this.valueIn === 'Inch(in)' && this.valueOut === 'Meter(m)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0254, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0254;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0254, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0254;
        }
      }
      else if (this.valueIn === 'Inch(in)' && this.valueOut === 'Kilometer(km)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0000254, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000254;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0000254, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0000254;
        }
      }
      else if (this.valueIn === 'Inch(in)' && this.valueOut === 'Acre(ac)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) / Math.pow(6272640, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) / 6272640;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) / Math.pow(6272640, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) / 6272640;
        }
      }
      else if (this.valueIn === 'Inch(in)' && this.valueOut === 'Are') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0000064516, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000064516;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0000064516, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0000064516;
        }
      }
      else if (this.valueIn === 'Inch(in)' && this.valueOut === 'Feet(ft)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.0833333333, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.0833333333;
        }
      }
      else if (this.valueIn === 'Inch(in)' && this.valueOut === 'Yard(yd)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0277777778, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0277777778;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0277777778, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0277777778;
        }
      }
      else if (this.valueIn === 'Inch(in)' && this.valueOut === 'Mile(mi)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0000157828, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000157828;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0000157828, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0000157828;
        }
      }

      else if (this.valueIn === 'Feet(ft)' && this.valueOut === 'Milimeter(mm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(304.8, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 304.8;
        }
      }
      else if (this.valueIn === 'Feet(ft)' && this.valueOut === 'Centimeter(cm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(30.48, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 30.48;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(30.48, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 30.48;
        }
      }
      else if (this.valueIn === 'Feet(ft)' && this.valueOut === 'Decimeter(dm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(3.048, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 3.048;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(3.048, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 3.048;
        }
      }
      else if (this.valueIn === 'Feet(ft)' && this.valueOut === 'Hectare(he)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0000092903, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000092903;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0000092903, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0000092903;
        }
      }
      else if (this.valueIn === 'Feet(ft)' && this.valueOut === 'Meter(m)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.3048, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.3048;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.3048, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.3048;
        }
      }
      else if (this.valueIn === 'Feet(ft)' && this.valueOut === 'Kilometer(km)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0003048, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0003048;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0003048, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0003048;
        }
      }
      else if (this.valueIn === 'Feet(ft)' && this.valueOut === 'Acre(ac)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0000229568, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000229568;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0000229568, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0000229568 ;
        }
      }
      else if (this.valueIn === 'Feet(ft)' && this.valueOut === 'Are') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 0.0009290304 ;
          
          } else {
          return parseFloat(this.inputNum) * 0.0009290304 ;
        }
      }
      else if (this.valueIn === 'Feet(ft)' && this.valueOut === 'Inch(in)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(12, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 12;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(12, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 12;
        }
      }
      else if (this.valueIn === 'Feet(ft)' && this.valueOut === 'Yard(yd)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.3333333333, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.3333333333;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.3333333333, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.3333333333;
        }
      }
      else if (this.valueIn === 'Feet(ft)' && this.valueOut === 'Mile(mi)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0001893939, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0001893939;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0001893939, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0001893939;
        }
      }

      else if (this.valueIn === 'Yard(yd)' && this.valueOut === 'Milimeter(mm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(914.4, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 914.4;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(914.4, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 914.4;
        }
      }
      else if (this.valueIn === 'Yard(yd)' && this.valueOut === 'Centimeter(cm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(91.44, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 91.44;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(91.44, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 91.44;
        }
      }
      else if (this.valueIn === 'Yard(yd)' && this.valueOut === 'Decimeter(dm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(9.144, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 9.144;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(9.144, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 9.144;
        }
      }
      else if (this.valueIn === 'Yard(yd)' && this.valueOut === 'Hectare(ha)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0000836127, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000836127;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0000836127, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0000836127 ;
        }
      }
      else if (this.valueIn === 'Yard(yd)' && this.valueOut === 'Meter(m)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.9144, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.9144;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.9144, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.9144;
        }
      }
      else if (this.valueIn === 'Yard(yd)' && this.valueOut === 'Kilometer(km)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0009144, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0009144;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0009144, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0009144;
        }
      }
      else if (this.valueIn === 'Yard(yd)' && this.valueOut === 'Acre(ac)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0002066116, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0002066116;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0002066116, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0002066116 ;
        }
      }
      else if (this.valueIn === 'Yard(yd)' && this.valueOut === 'Are') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0083612736, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0083612736;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0083612736, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0083612736 ;
        }
      }
      else if (this.valueIn === 'Yard(yd)' && this.valueOut === 'Inch(in)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(36, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 36;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(36, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 36;
        }
      }
      else if (this.valueIn === 'Yard(yd)' && this.valueOut === 'Feet(ft)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(3, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 3;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(3, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 3;
        }
      }
      else if (this.valueIn === 'Yard(yd)' && this.valueOut === 'Mile(mi)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0005681818, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0005681818;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0005681818, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0005681818;
        }
      }

      else if (this.valueIn === 'Mile(mi)' && this.valueOut === 'Milimeter(mm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1609344, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1609344;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1609344, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1609344;
        }
      }
      else if (this.valueIn === 'Mile(mi)' && this.valueOut === 'Centimeter(cm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(160934.4, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 160934.4;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(160934.4, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 160934.4;
        }
      }
      else if (this.valueIn === 'Mile(mi)' && this.valueOut === 'Decimeter(dm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(16093.44, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 16093.44;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(16093.44, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 16093.44;
        }
      }
      else if (this.valueIn === 'Mile(mi)' && this.valueOut === 'Hectare(ha)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(258.99881103, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 258.99881103;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(258.99881103, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 258.99881103;
        }
      }
      else if (this.valueIn === 'Mile(mi)' && this.valueOut === 'Meter(m)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1609.344, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1609.344;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1609.344, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1609.344;
        }
      }
      else if (this.valueIn === 'Mile(mi)' && this.valueOut === 'Kilometer(km)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1.609344, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1.609344;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1.609344, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1.609344;
        }
      }
      else if (this.valueIn === 'Mile(mi)' && this.valueOut === 'Acre(ac)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(640, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 640;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(640, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 640 ;
        }
      }
      else if (this.valueIn === 'Mile(mi)' && this.valueOut === 'Are') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(25899.881103, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 25899.881103;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(25899.881103, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 25899.881103 ;
        }
      }
      else if (this.valueIn === 'Mile(mi)' && this.valueOut === 'Inch(in)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(63360, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 63360;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(63360, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 63360;
        }
      }
      else if (this.valueIn === 'Mile(mi)' && this.valueOut === 'Feet(ft)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(5280, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 5280;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(5280, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 5280;
        }
      }
      else if (this.valueIn === 'Mile(mi)' && this.valueOut === 'Yard(yd)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1760, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1760;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1760, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1760;
        }
      }

      else if (this.valueIn === 'Hectare(ha)' && this.valueOut === 'Milimeter(mm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(10000000000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000000000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(10000000000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 10000000000;
        }
      }
      else if (this.valueIn === 'Hectare(ha)' && this.valueOut === 'Centimeter(cm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(100000000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 100000000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(100000000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 100000000 ;
        }
      }
      else if (this.valueIn === 'Hectare(ha)' && this.valueOut === 'Decimeter(dm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1000000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1000000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1000000;
        }
      }
      else if (this.valueIn === 'Hectare(ha)' && this.valueOut === 'Mile(Mi)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0038610216, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0038610216;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0038610216, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0038610216;
        }
      }
      else if (this.valueIn === 'Hectare(ha)' && this.valueOut === 'Meter(m)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(10000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(10000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 10000 ;
        }
      }
      else if (this.valueIn === 'Hectare(ha)' && this.valueOut === 'Kilometer(km)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.01, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.01, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.01 ;
        }
      }
      else if (this.valueIn === 'Hectare(ha)' && this.valueOut === 'Acre(ac)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(2.4710538147, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 2.4710538147;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(2.4710538147, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 2.4710538147 ;
        }
      }
      else if (this.valueIn === 'Hectare(ha)' && this.valueOut === 'Are') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(100, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(100, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 100 ;
        }
      }
      else if (this.valueIn === 'Hectare(ha)' && this.valueOut === 'Inch(in)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(15500031, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 15500031;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(15500031, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 15500031;
        }
      }
      else if (this.valueIn === 'Hectare(ha)' && this.valueOut === 'Feet(ft)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(107639.10417, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 107639.10417;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(107639.10417, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 107639.10417;
        }
      }
      else if (this.valueIn === 'Hectare(ha)' && this.valueOut === 'Yard(yd)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(11959.900463, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 11959.900463;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(11959.900463, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 11959.900463;
        }
      }

      else if (this.valueIn === 'Acre(ac)' && this.valueOut === 'Milimeter(mm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(4046856422.4, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 4046856422.4;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(4046856422.4, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 4046856422.4;
        }
      }
      else if (this.valueIn === 'Acre(ac)' && this.valueOut === 'Centimeter(cm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(40468564.224, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 40468564.224;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(40468564.224, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 40468564.224 ;
        }
      }
      else if (this.valueIn === 'Acre(ac)' && this.valueOut === 'Decimeter(dm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(404685.64224, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 404685.64224;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(404685.64224, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 404685.64224;
        }
      }
      else if (this.valueIn === 'Acre(ac)' && this.valueOut === 'Mile(Mi)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0015625, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0015625;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0015625, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0015625;
        }
      }
      else if (this.valueIn === 'Acre(ac)' && this.valueOut === 'Meter(m)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(4046.8564224, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 4046.8564224;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(4046.8564224, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 4046.8564224 ;
        }
      }
      else if (this.valueIn === 'Acre(ac)' && this.valueOut === 'Kilometer(km)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow( 0.0040468564, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) *  0.0040468564;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow( 0.0040468564, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0040468564 ;
        }
      }
      else if (this.valueIn === 'Acre(ac)' && this.valueOut === 'Hectare(ha)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.4046856422, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.4046856422;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.4046856422, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.4046856422 ;
        }
      }
      else if (this.valueIn === 'Acre(ac)' && this.valueOut === 'Inch(in)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(6272640, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 6272640;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(6272640, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 6272640;
        }
      }
      else if (this.valueIn === 'Acre(ac)' && this.valueOut === 'Feet(ft)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(43560, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 43560;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(43560, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 43560;
        }
      }
      else if (this.valueIn === 'Acre(ac)' && this.valueOut === 'Yard(yd)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(4840, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 4840;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(4840, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 4840;
        }
      }

      else if (this.valueIn === 'Are' && this.valueOut === 'Milimeter(mm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(100000000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 100000000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(100000000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 100000000 ;
        }
      }
      else if (this.valueIn === 'Are' && this.valueOut === 'Centimeter(cm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1000000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1000000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1000000 ;
        }
      }
      else if (this.valueIn === 'Are' && this.valueOut === 'Decimeter(dm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(10000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(10000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 10000;
        }
      }
      else if (this.valueIn === 'Are' && this.valueOut === 'Mile(Mi)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0000386102, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000386102;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0000386102, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0000386102;
        }
      }
      else if (this.valueIn === 'Are' && this.valueOut === 'Meter(m)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(100, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(100, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 100 ;
        }
      }
      else if (this.valueIn === 'Are' && this.valueOut === 'Kilometer(km)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0001 ;
        }
      }
      else if (this.valueIn === 'Are' && this.valueOut === 'Acre(ac)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0247105381, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0247105381;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0247105381, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0247105381 ;
        }
      }
      else if (this.valueIn === 'Are' && this.valueOut === 'Hectare(ha)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.01, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.01, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.01 ;
        }
      }
      else if (this.valueIn === 'Are' && this.valueOut === 'Inch(in)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(155000.31, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 155000.31;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(155000.31, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 155000.31;
        }
      }
      else if (this.valueIn === 'Are' && this.valueOut === 'Feet(ft)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1076.3910417, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1076.3910417;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1076.3910417, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1076.3910417;
        }
      }
      else if (this.valueIn === 'Are' && this.valueOut === 'Yard(yd)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(119.59900463, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 119.59900463;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(119.59900463, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 119.59900463;
        }
      }

      else if (this.valueIn === ' Milimeter(mm)' && this.valueOut === ' Centimeter(cm)') {
          if (this.unitPow != '' && this.userPow != '') {
            return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.001, this.unitPow) ;
          }
          else if (this.userPow != ''){
            return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
          }
          else if (this.unitPow != ''){
            return parseFloat(this.inputNum) * Math.pow(0.001, this.unitPow) ;
          } else {
            return parseFloat(this.inputNum) * 0.001;
          }
        }
      else if (this.valueIn === ' Milimeter(mm)' && this.valueOut === ' Decimeter(dm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.000001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.000001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.000001;
        }
      }
      else if (this.valueIn === ' Milimeter(mm)' && this.valueOut === ' Meter(m)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.000000001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000000001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.000000001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.000000001;
        }
      }
      else if (this.valueIn === ' Milimeter(mm)' && this.valueOut === ' Kilometer(km)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.000000000000000001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000000000000000001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.000000000000000001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.000000000000000001;
        }
      }
      else if (this.valueIn === ' Milimeter(mm)' && this.valueOut === 'Mililiter(ml)') {
        if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow( 0.001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) *  0.001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow( 0.001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) *  0.001;
        }
      }
      else if (this.valueIn === ' Milimeter(mm)' && this.valueOut === 'Liter(l)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.000001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.000001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.000001;
        }
      }
      else if (this.valueIn === ' Milimeter(mm)' && this.valueOut === 'Deciliter(dl)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.00001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.00001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.00001;
        }
      }
      else if (this.valueIn === ' Milimeter(mm)' && this.valueOut === 'Cup US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0000042268, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000042268;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0000042268, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0000042268;
        }
      }
      else if (this.valueIn === ' Milimeter(mm)' && this.valueOut === 'Gallon US (gal)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0000002641722, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000002641722;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0000002641722, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0000002641722;
        }
      }
      else if (this.valueIn === ' Milimeter(mm)' && this.valueOut === 'Teaspoon US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0002028841, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0002028841;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0002028841, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0002028841;
        }
      }
      else if (this.valueIn === ' Milimeter(mm)' && this.valueOut === 'Tablespoon US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.000067628, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000067628;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.000067628, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.000067628;
        }
      }
      
      else if (this.valueIn === ' Centimeter(cm)' && this.valueOut === ' Milimeter(mm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1000;
        }
      }
      else if (this.valueIn === ' Centimeter(cm)' && this.valueOut === ' Decimeter(dm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.001;
        }
      }
      else if (this.valueIn === ' Centimeter(cm)' && this.valueOut === ' Meter(m)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.000001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.000001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.000001;
        }
      }
      else if (this.valueIn === ' Milimeter(mm)' && this.valueOut === ' Kilometer(km)') {
        if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.000000000000001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000000000000001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.000000000000001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.000000000000001;
        }
      }
      else if (this.valueIn === ' Centimeter(cm)' && this.valueOut === 'Mililiter(ml)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1;
        }
          }
      else if (this.valueIn === ' Centimeter(cm)' && this.valueOut === 'Liter(l)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.001;
        }
      }
      else if (this.valueIn === ' Centimeter(cm)' && this.valueOut === 'Deciliter(dl)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.01, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.01, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.01;
        }
      }
      else if (this.valueIn === ' Centimeter(cm)' && this.valueOut === 'Cup US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0042267528, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0042267528;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0042267528, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0042267528;
        }
      }
      else if (this.valueIn === ' Centimeter(cm)' && this.valueOut === 'Gallon US (gal)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0002641721, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0002641721;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0002641721, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0002641721;
        }
      }
      else if (this.valueIn === ' Centimeter(cm)' && this.valueOut === 'Teaspoon US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.2028841362, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.2028841362;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.2028841362, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.2028841362;
        }
      }
      else if (this.valueIn === ' Centimeter(cm)' && this.valueOut === 'Tablespoon US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0676280454, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0676280454;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0676280454, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0676280454;
        }
      }

      else if (this.valueIn === ' Decimeter(dm)' && this.valueOut === ' Milimeter(mm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1000000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1000000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1000000;
        }
      }
      else if (this.valueIn === ' Decimeter(dm)' && this.valueOut === ' Centimeter(cm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1000;
        }
ž      }
      else if (this.valueIn === ' Decimeter(dm)' && this.valueOut === ' Meter(m)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.001;
        }
      }
      else if (this.valueIn === ' Decimeter(dm)' && this.valueOut === ' Kilometer(km)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.000000000001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000000000001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.000000000001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.000000000001;
        }
      }
      else if (this.valueIn === ' Decimeter(dm)' && this.valueOut === 'Mililiter(ml)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1000;
        }
          }
      else if (this.valueIn === ' Decimeter(dm)' && this.valueOut === 'Liter(l)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1;
        }
      }
      else if (this.valueIn === ' Decimeter(dm)' && this.valueOut === 'Deciliter(dl)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(10, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 10;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(10, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 10;
        }
      }
      else if (this.valueIn === ' Decimeter(dm)' && this.valueOut === 'Cup US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(4.2267528377, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 4.2267528377;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(4.2267528377, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 4.2267528377;
        }
      }
      else if (this.valueIn === ' Decimeter(dm)' && this.valueOut === 'Gallon US (gal)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.2641720524, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.2641720524;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.2641720524, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.2641720524;
        }
      }
      else if (this.valueIn === ' Decimeter(dm)' && this.valueOut === 'Teaspoon US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(202.88413621, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 202.88413621;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(202.88413621, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 202.88413621;
        }
      }
      else if (this.valueIn === ' Decimeter(dm)' && this.valueOut === 'Tablespoon US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(67.628045404, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 67.628045404;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(67.628045404, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 67.628045404;
        }
      }

      else if (this.valueIn === ' Meter(m)' && this.valueOut === ' Milimeter(mm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1000000000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1000000000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1000000000;
        }
      }
      else if (this.valueIn === ' Meter(m)' && this.valueOut === ' Centimeter(cm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1000000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1000000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1000000;
        }
      }
      else if (this.valueIn === ' Meter(m)' && this.valueOut === ' Decimeter(dm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1000;
        }
      }
      else if (this.valueIn === ' Meter(m)' && this.valueOut === ' Kilometer(km)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.000000001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000000001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.000000001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.000000001;
        }
      }
      else if (this.valueIn === ' Meter(m)' && this.valueOut === 'Mililiter(ml)') {
          if (this.unitPow != '' && this.userPow != '') {
            return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1000000, this.unitPow) ;
          }
          else if (this.userPow != ''){
            return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
          }
          else if (this.unitPow != ''){
            return parseFloat(this.inputNum) * Math.pow(1000000, this.unitPow) ;
          } else {
            return parseFloat(this.inputNum) * 1000000;
          }
        }
      else if (this.valueIn === ' Meter(m)' && this.valueOut === 'Liter(l)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1000;
        }
      }
      else if (this.valueIn === ' Meter(m)' && this.valueOut === 'Deciliter(dl)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(10000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(10000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 10000;
        }
      }
      else if (this.valueIn === ' Meter(m)' && this.valueOut === 'Cup US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(4226.7528377, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 4226.7528377;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(4226.7528377, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 4226.7528377;
        }
      }
      else if (this.valueIn === ' Meter(m)' && this.valueOut === 'Gallon US (gal)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(264.17205236, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 264.17205236;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(264.17205236, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 264.17205236;
        }
      }
      else if (this.valueIn === ' Meter(m)' && this.valueOut === 'Teaspoon US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(202884.13621, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 202884.13621;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(202884.13621, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 202884.13621;
        }
      }
      else if (this.valueIn === ' Meter(m)' && this.valueOut === 'Tablespoon US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(67628.045404, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 67628.045404;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(67628.045404, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 67628.045404;
        }
      }

      else if (this.valueIn === ' Kilometer(km)' && this.valueOut === ' Milimeter(mm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1000000000000000000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000000000000000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1000000000000000000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1000000000000000000;
        }
      }
      else if (this.valueIn === ' Kilometer(km)' && this.valueOut === ' Centimeter(cm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1000000000000000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000000000000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1000000000000000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1000000000000000;
        }
      }
      else if (this.valueIn === ' Kilometer(km)' && this.valueOut === ' Decimeter(dm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1000000000000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000000000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1000000000000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1000000000000;
        }
      }
      else if (this.valueIn === ' Kilometer(km)' && this.valueOut === ' Meter(m)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1000000000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1000000000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1000000000;
        }
      }
      else if (this.valueIn === ' Kilometer(km)' && this.valueOut === 'Mililiter(ml)') {
          if (this.unitPow != '' && this.userPow != '') {
            return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1000000000000000, this.unitPow) ;
          }
          else if (this.userPow != ''){
            return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000000000000;
          }
          else if (this.unitPow != ''){
            return parseFloat(this.inputNum) * Math.pow(1000000000000000, this.unitPow) ;
          } else {
            return parseFloat(this.inputNum) * 1000000000000000;
          }
        }
      else if (this.valueIn === ' Kilometer(km)' && this.valueOut === 'Liter(l)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1000000000000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000000000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1000000000000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1000000000000;
        }
      }
      else if (this.valueIn === ' Kilometer(km)' && this.valueOut === 'Deciliter(dl)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(10000000000000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000000000000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(10000000000000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 10000000000000;
        }
      }
      else if (this.valueIn === ' Kilometer(km)' && this.valueOut === 'Cup US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(4226752837730, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 4226752837730;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(4226752837730, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 4226752837730;
        }
      }
      else if (this.valueIn === ' Kilometer(km)' && this.valueOut === 'Gallon US (gal)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(264172052358, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 264172052358;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(264172052358, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 264172052358;
        }
      }
      else if (this.valueIn === ' Kilometer(km)' && this.valueOut === 'Teaspoon US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(202884136211060, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 202884136211060;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(202884136211060, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 202884136211060;
        }
      }
      else if (this.valueIn === ' Kilometer(km)' && this.valueOut === 'Tablespoon US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(67628045403686, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 67628045403686;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(67628045403686, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 67628045403686;
        }
      }

      else if (this.valueIn === 'Mililiter(ml)' && this.valueOut === ' Milimeter(mm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1000;
        }
      }
      else if (this.valueIn === 'Mililiter(ml)' && this.valueOut === ' Centimeter(cm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1;
        }
      }
      else if (this.valueIn === 'Mililiter(ml)' && this.valueOut === ' Decimeter(dm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.001;
        }
      }
      else if (this.valueIn === 'Mililiter(ml)' && this.valueOut === ' Meter(m)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.000001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.000001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.000001;
        }
      }
      else if (this.valueIn === 'Mililiter(ml)' && this.valueOut === ' Kilometer(km)') {
          if (this.unitPow != '' && this.userPow != '') {
            return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0000000000000001, this.unitPow) ;
          }
          else if (this.userPow != ''){
            return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000000000000001;
          }
          else if (this.unitPow != ''){
            return parseFloat(this.inputNum) * Math.pow(0.0000000000000001, this.unitPow) ;
          } else {
            return parseFloat(this.inputNum) * 0.0000000000000001;
          }
        }
      else if (this.valueIn === 'Mililiter(ml)' && this.valueOut === 'Liter(l)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.001;
        }
      }
      else if (this.valueIn === 'Mililiter(ml)' && this.valueOut === 'Deciliter(dl)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.01, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.01, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.01;
        }
      }
      else if (this.valueIn === 'Mililiter(ml)' && this.valueOut === 'Cup US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0042267528, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0042267528;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0042267528, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0042267528;
        }
      }
      else if (this.valueIn === 'Mililiter(ml)' && this.valueOut === 'Gallon US (gal)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0002641721, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0002641721;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0002641721, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0002641721;
        }
      }
      else if (this.valueIn === 'Mililiter(ml)' && this.valueOut === 'Teaspoon US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.2028841362, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.2028841362;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.2028841362, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.2028841362;
        }
      }
      else if (this.valueIn === 'Mililiter(ml)' && this.valueOut === 'Tablespoon US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0676280454, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0676280454;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0676280454, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0676280454;
        }
      }

      else if (this.valueIn === 'Liter(l)' && this.valueOut === ' Milimeter(mm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1000000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1000000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1000000;
        }
      }
      else if (this.valueIn === 'Liter(l)' && this.valueOut === ' Centimeter(cm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1000000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1000000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1000000;
        }
      }
      else if (this.valueIn === 'Liter(l)' && this.valueOut === ' Decimeter(dm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1;
        }
      }
      else if (this.valueIn === 'Liter(l)' && this.valueOut === ' Meter(m)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.001;
        }
      }
      else if (this.valueIn === 'Liter(l)' && this.valueOut === ' Kilometer(km)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.000000000001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000000000001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.000000000001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.000000000001;
        }
          }
      else if (this.valueIn === 'Liter(l)' && this.valueOut === 'Mililiter(ml)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(1000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(1000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 1000;
        }
      }
      else if (this.valueIn === 'Liter(l)' && this.valueOut === 'Deciliter(dl)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(10, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 10;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(10, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 10;
        }
      }
      else if (this.valueIn === 'Liter(l)' && this.valueOut === 'Cup US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(4.2267528377, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 4.2267528377;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(4.2267528377, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 4.2267528377;
        }
      }
      else if (this.valueIn === 'Liter(l)' && this.valueOut === 'Gallon US (gal)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.2641720524, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.2641720524;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.2641720524, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.2641720524;
        }
      }
      else if (this.valueIn === 'Liter(l)' && this.valueOut === 'Teaspoon US') {
        if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(202.88413621, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 202.88413621;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(202.88413621, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 202.88413621;
        }
      }
      else if (this.valueIn === 'Liter(l)' && this.valueOut === 'Tablespoon US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(67.628045404, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 67.628045404;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(67.628045404, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 67.628045404;
        }
      }

      else if (this.valueIn === 'Deciliter(dl)' && this.valueOut === ' Milimeter(mm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(100000, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 100000;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(100000, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 100000;
        }
      }
      else if (this.valueIn === 'Deciliter(dl)' && this.valueOut === ' Centimeter(cm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(100, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(100, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 100;
        }
      }
      else if (this.valueIn === 'Deciliter(dl)' && this.valueOut === ' Decimeter(dm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.1, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.1;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.1, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.1;
        }
      }
      else if (this.valueIn === 'Deciliter(dl)' && this.valueOut === ' Meter(m)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0001;
        }
      }
      else if (this.valueIn === 'Deciliter(dl)' && this.valueOut === ' Kilometer(km)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0000000000001, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000000000001;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0000000000001, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0000000000001;
        }
          }
      else if (this.valueIn === 'Deciliter(dl)' && this.valueOut === 'Mililiter(ml)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(100, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(100, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 100;
        }
      }
      else if (this.valueIn === 'Deciliter(dl)' && this.valueOut === 'Liter(l)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.1, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.1;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.1, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.1;
        }
      }
      else if (this.valueIn === 'Deciliter(dl)' && this.valueOut === 'Cup US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.4226752838, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.4226752838;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.4226752838, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.4226752838;
        }
      }
      else if (this.valueIn === 'Deciliter(dl)' && this.valueOut === 'Gallon US (gal)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0264172052, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0264172052;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0264172052, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0264172052;
        }
      }
      else if (this.valueIn === 'Deciliter(dl)' && this.valueOut === 'Teaspoon US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(20.288413621, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 20.288413621;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(20.288413621, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 20.288413621;
        }
      }
      else if (this.valueIn === 'Deciliter(dl)' && this.valueOut === 'Tablespoon US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(6.7628045404, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 6.7628045404;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(6.7628045404, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 6.7628045404;
        }
      }
      else if (this.valueIn === 'Cup US' && this.valueOut === ' Milimeter(mm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(236588.2365, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 236588.2365;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(236588.2365, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 236588.2365;
        }
      }
      else if (this.valueIn === 'Cup US' && this.valueOut === ' Centimeter(cm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(236.5882365, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 236.5882365;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(236.5882365, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 236.5882365;
        }
      }
      else if (this.valueIn === 'Cup US' && this.valueOut === ' Decimeter(dm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.2365882365, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.2365882365;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.2365882365, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.2365882365;
        }
      }
      else if (this.valueIn === 'Cup US' && this.valueOut === ' Meter(m)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0002365882, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0002365882;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0002365882, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0002365882;
        }
      }
      else if (this.valueIn === 'Cup US' && this.valueOut === ' Kilometer(km)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0000000000002365882, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000000000002365882;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0000000000002365882, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0000000000002365882;
        }
          return parseFloat(this.inputNum) * 0.0000000000002365882;
          }
      else if (this.valueIn === 'Cup US' && this.valueOut === 'Mililiter(ml)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(236.5882365, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 236.5882365;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(236.5882365, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 236.5882365;
        }
      }
      else if (this.valueIn === 'Cup US' && this.valueOut === 'Liter(l)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.2365882365, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.2365882365;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.2365882365, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.2365882365;
        }
      }
      else if (this.valueIn === 'Cup US' && this.valueOut === 'Deciliter(dl)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(2.365882365, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 2.365882365;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(2.365882365, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 2.365882365;
        }
      }
      else if (this.valueIn === 'Cup US' && this.valueOut === 'Gallon US (gal)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0625, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0625;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0625, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0625;
        }
      }
      else if (this.valueIn === 'Cup US' && this.valueOut === 'Teaspoon US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(48, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 48;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(48, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 48;
        }
      }
      else if (this.valueIn === 'Cup US' && this.valueOut === 'Tablespoon US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(16, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 16;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(16, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 16;
        }
      }
      
      else if (this.valueIn === 'Gallon US (gal)' && this.valueOut === ' Milimeter(mm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(3785411.784, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 3785411.784;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(3785411.784, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 3785411.784;
        }
      }
      else if (this.valueIn === 'Gallon US (gal)' && this.valueOut === ' Centimeter(cm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(3785.4118, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 3785.4118;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(3785.4118, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 3785.4118;
        }
      }
      else if (this.valueIn === 'Gallon US (gal)' && this.valueOut === ' Decimeter(dm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(3.7854118, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 3.7854118;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(3.7854118, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 3.7854118;
        }
      }
      else if (this.valueIn === 'Gallon US (gal)' && this.valueOut === ' Meter(m)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0037854118, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0037854118;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0037854118, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0037854118;
        }
      }
      else if (this.valueIn === 'Gallon US (gal)' && this.valueOut === ' Kilometer(km)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0000000000037854118, this.unitPow) ;
          }
          else if (this.userPow != ''){
            return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000000000037854118;
          }
          else if (this.unitPow != ''){
            return parseFloat(this.inputNum) * Math.pow(0.0000000000037854118, this.unitPow) ;
          } else {
            return parseFloat(this.inputNum) * 0.0000000000037854118;
          }
        }
      else if (this.valueIn === 'Gallon US (gal)' && this.valueOut === 'Mililiter(ml)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(3785.411784, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 3785.411784;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(3785.411784, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 3785.411784;
        }
      }
      else if (this.valueIn === 'Gallon US (gal)' && this.valueOut === 'Liter(l)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(3.785411784, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 3.785411784;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(3.785411784, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 3.785411784;
        }
      }
      else if (this.valueIn === 'Gallon US (gal)' && this.valueOut === 'Deciliter(dl)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(37.85411784, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 37.85411784;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(37.85411784, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 37.85411784;
        }
      }
      else if (this.valueIn === 'Gallon US (gal)' && this.valueOut === 'Cup US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(16, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 16;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(16, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 16;
        }
      }
      else if (this.valueIn === 'Gallon US (gal)' && this.valueOut === 'Teaspoon US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(768, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 768;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(768, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 768;
        }
      }
      else if (this.valueIn === 'Gallon US (gal)' && this.valueOut === 'Tablespoon US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(256, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 256;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(256, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 256;
        }
      }

      else if (this.valueIn === 'Teaspoon US' && this.valueOut === ' Milimeter(mm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(4928.9215937, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 4928.9215937;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(4928.9215937, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 4928.9215937;
        }
      }
      else if (this.valueIn === 'Teaspoon US' && this.valueOut === ' Centimeter(cm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(4.9289215937, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 4.9289215937;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(4.9289215937, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 4.9289215937;
        }
      }
      else if (this.valueIn === 'Teaspoon US' && this.valueOut === ' Decimeter(dm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0049289216, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0049289216;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0049289216, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0049289216;
        }
      }
      else if (this.valueIn === 'Teaspoon US' && this.valueOut === ' Meter(m)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.000004928, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000004928;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.000004928, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.000004928;
        }
      }
      else if (this.valueIn === 'Teaspoon US' && this.valueOut === ' Kilometer(km)') {
          if (this.unitPow != '' && this.userPow != '') {
            return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0000000000000049289, this.unitPow) ;
          }
          else if (this.userPow != ''){
            return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000000000000049289;
          }
          else if (this.unitPow != ''){
            return parseFloat(this.inputNum) * Math.pow(0.0000000000000049289, this.unitPow) ;
          } else {
            return parseFloat(this.inputNum) * 0.0000000000000049289;
          }
        }
      else if (this.valueIn === 'Teaspoon US' && this.valueOut === 'Mililiter(ml)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(4.9289215937, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 4.9289215937;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(4.9289215937, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 4.9289215937;
        }
      }
      else if (this.valueIn === 'Teaspoon US' && this.valueOut === 'Liter(l)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0049289216, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0049289216;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0049289216, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0049289216;
        }
      }
      else if (this.valueIn === 'Teaspoon US' && this.valueOut === 'Deciliter(dl)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0492892159, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0492892159;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0492892159, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0492892159;
        }
      }
      else if (this.valueIn === 'Teaspoon US' && this.valueOut === 'Cup US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0208333333, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0208333333;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0208333333, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0208333333;
        }
      }
      else if (this.valueIn === 'Teaspoon US' && this.valueOut === 'Gallon US (gal)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0013020833, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0013020833;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0013020833, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0013020833;
        }
      }
      else if (this.valueIn === 'Teaspoon US' && this.valueOut === 'Tablespoon US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) / Math.pow(3, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) / 3;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) / Math.pow(3, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) / 3;
        }
      }

      else if (this.valueIn === 'Tablespoon US' && this.valueOut === ' Milimeter(mm)') {
        if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(14786.764781, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 14786.764781;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(14786.764781, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 14786.764781;
        }
      }
      else if (this.valueIn === 'Tablespoon US' && this.valueOut === ' Centimeter(cm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(14.786764781, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 14.786764781;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(14.786764781, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 14.786764781;
        }
      }
      else if (this.valueIn === 'Tablespoon US' && this.valueOut === ' Decimeter(dm)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow( 0.0147867648, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) *  0.0147867648;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow( 0.0147867648, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) *  0.0147867648;
        }
      }
      else if (this.valueIn === 'Tablespoon US' && this.valueOut === ' Meter(m)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0000147868, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000147868;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0000147868, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0000147868;
        }
      }
      else if (this.valueIn === 'Tablespoon US' && this.valueOut === ' Kilometer(km)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0000000000000147868, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000000000000147868;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0000000000000147868, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0000000000000147868;
        }
          }
      else if (this.valueIn === 'Tablespoon US' && this.valueOut === 'Mililiter(ml)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(14786.764781, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 14786.764781;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(14786.764781, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 14786.764781;
        }
      }
      else if (this.valueIn === 'Tablespoon US' && this.valueOut === 'Liter(l)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0147867648, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0147867648;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0147867648, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0147867648;
        }
      }
      else if (this.valueIn === 'Tablespoon US' && this.valueOut === 'Deciliter(dl)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.1478676478, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.1478676478;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.1478676478, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.1478676478;
        }
      }
      else if (this.valueIn === 'Tablespoon US' && this.valueOut === 'Cup US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.0625, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0625;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.0625, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.0625;
        }
      }
      else if (this.valueIn === 'Tablespoon US' && this.valueOut === 'Gallon US (gal)') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(0.00390625, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00390625;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(0.00390625, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 0.00390625;
        }
      }
      else if (this.valueIn === 'Tablespoon US' && this.valueOut === 'Teaspoon US') {
          if (this.unitPow != '' && this.userPow != '') {
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * Math.pow(3, this.unitPow) ;
        }
        else if (this.userPow != ''){
          return parseFloat(Math.pow(this.inputNum, this.userPow)) * 3;
        }
        else if (this.unitPow != ''){
          return parseFloat(this.inputNum) * Math.pow(3, this.unitPow) ;
        } else {
          return parseFloat(this.inputNum) * 3;
        }
      }

      else {
        return ''
      }
    }
  }
}
</script>