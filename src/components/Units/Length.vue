<template>
  <v-card flat>
    <v-container class="container" fluid>
      <h1 class="text-center pt-7">Length</h1>
      <v-row class="row d-flex justify-center py-7" cols="2">
        <v-col xl="5" lg="5" sm="6" >
          <v-text-field  class="text-center result-field" :messages="`${valueOut} ${exponent}`"  v-model="resultOutput" :vlaue="setResult" label="Result "></v-text-field>
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
          <v-text-field outlined label="Your Number" hint="Number only" placeholder="e.g 120" v-model="inputNum"></v-text-field>
        </v-col>
        <v-col 
        >
          <v-text-field outlined disabled label="Your Number Exponent" placeholder="e.g. 2" hint="If your number has no exponent, skip this field" v-model="userPow">
          </v-text-field>
        </v-col>
        <v-col 
        >
          <v-text-field outlined :disabled="disUnitPow" label="Unit Exponent" placeholder="e.g. 2" hint="If  unit has no exponent, skip this field" v-model="unitPow"></v-text-field>
        </v-col>
        </v-row>
        <v-row>
        <v-col>
          <v-autocomplete
            v-model="valueIn"
            :items="itemsIn"
            dense
            filled
            label="From Unit"
            placeholder="e.g. Centimeter or cm"
          
          ></v-autocomplete>
        </v-col>
        <v-col>
          <v-autocomplete
            v-model="valueOut"
            :items="itemsOut"
            dense
            filled
            label="To Unit"
            placeholder="e.g. Milimeter or mm"
          
          ></v-autocomplete>
        </v-col>
      </v-row>
      </v-container>
    <v-container>
        <v-col>
          <v-switch
            v-model="showAreaUnits"
            inset
            label="Area"
            @changed="SetAreaItems"
          ></v-switch>
        </v-col>
        <p>{{ppp}}</p>
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
      disUnitPow: false,
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
    SetAreaItems(){
      if (this.showAreaUnits === true) {
        this.itemsIn = [ 'Milimeter(mm)', 'Centimeter(cm)', 'Decimeter(dm)', 'Hectare(ha)', 'Meter(m)', 'Kilometer(km)', 'Acre(ac)', 'Are', 'Inch(in)', 'Feet(ft)', 'Yard(yd)', 'Mile(mi)' ];
        this.itemsOut = [ 'Milimeter(mm)', 'Centimeter(cm)', 'Decimeter(dm)', 'Hectare(ha)', 'Meter(m)', 'Kilometer(km)', 'Acre(ac)', 'Are', 'Inch(in)', 'Feet(ft)', 'Yard(yd)', 'Mile(mi)' ];
        this.disUnitPow = true;
        this.unitPow = 2;
      }
      else {
        this.itemsIn = [ 'Milimeter(mm)', 'Centimeter(cm)', 'Decimeter(dm)', 'Meter(m)', 'Kilometer(km)', 'Inch(in)', 'Feet(ft)', 'Yard(yd)', 'Mile(mi)'];
        this.itemsOut = ['Milimeter(mm)', 'Centimeter(cm)', 'Decimeter(dm)', 'Meter(m)', 'Kilometer(km)', 'Inch(in)', 'Feet(ft)', 'Yard(yd)', 'Mile(mi)'];
        this.disUnitPow = false;
        this.unitPow = '';
      }
    },
    setResult(){
      this.resultOutput = this.probaN
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
        if (this.unitPow > 0) {
          return parseFloat(this.inputNum) * Math.pow(0.1, this.unitPow) ;
        }
        else {
          return parseFloat(this.inputNum) * 0.1;
        }
      }
      else if (this.valueIn === 'Milimeter(mm)' && this.valueOut === 'Decimeter(dm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.01, this.unitPow) ;
          } 
          else {
            return parseFloat(this.inputNum) * 0.01;
        }
      }
      else if (this.valueIn === 'Milimeter(mm)' && this.valueOut === 'Hectaree(ha)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.0000000001, this.unitPow) ;
          } 
          else {
            return parseFloat(this.inputNum) * 0.0000000001;
        }
      }
      else if (this.valueIn === 'Milimeter(mm)' && this.valueOut === 'Meter(m)') {
          if (this.unitPow > 0) {
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
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.00000000024711, this.unitPow) ;
          } 
          else {
            return parseFloat(this.inputNum) * 0.00000000024711;
        }
      }
      else if (this.valueIn === 'Milimeter(mm)' && this.valueOut === 'Are') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.00000001, this.unitPow) ;
          } 
          else {
            return parseFloat(this.inputNum) * 0.00000001;
        }
      }
      else if (this.valueIn === 'Milimeter(mm)' && this.valueOut === 'Inch(in)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.03937007874, this.unitPow) ;
            } 
          else {
            return parseFloat(this.inputNum) * 0.03937007874
        }
      }
      else if (this.valueIn === 'Milimeter(mm)' && this.valueOut === 'Feet(ft)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.0032808399, this.unitPow) ;
          } 
          else {
            return parseFloat(this.inputNum) * 0.0032808399;
        }
      }
      else if (this.valueIn === 'Milimeter(mm)' && this.valueOut === 'Yard(yd)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.0010936133, this.unitPow) ;
          } 
          else {
            return parseFloat(this.inputNum) * 0.0010936133;
        }
      }
      else if (this.valueIn === 'Milimeter(mm)' && this.valueOut === 'Mile(mi)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.00000062137, this.unitPow)  ;
          } 
          else {
            return parseFloat(this.inputNum) * 0.00000062137;
        }
      }

      else if (this.valueIn === 'Centimeter(cm)' && this.valueOut === 'Milimeter(mm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(10, this.unitPow) ;
          } 
          else {
            return parseFloat(this.inputNum) * 10;
        }
      }
      else if (this.valueIn === 'Centimeter(cm)' && this.valueOut === 'Decimeter(dm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.1, this.unitPow) ;
          } 
          else {
            return parseFloat(this.inputNum) * 0.1;
        }
      }
      else if (this.valueIn === 'Centimeter(cm)' && this.valueOut === 'Hectare(ha)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.00000001, this.unitPow) ;
          } 
          else {
            return parseFloat(this.inputNum) * 0.00000001;
        }
      }
      else if (this.valueIn === 'Centimeter(cm)' && this.valueOut === 'Meter(m)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.01, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.01;
        }
      }
      else if (this.valueIn === 'Centimeter(cm)' && this.valueOut === 'Kilometer(km)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.00001, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.00001;
        }
      }
      else if (this.valueIn === 'Centimeter(cm)' && this.valueOut === 'Acre(ac)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.000000024711, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.000000024711;
        }
      }
      else if (this.valueIn === 'Centimeter(cm)' && this.valueOut === 'Are') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.000001, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.000001;
        }
      }
      else if (this.valueIn === 'Centimeter(cm)' && this.valueOut === 'Inch(in)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.3937007874, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.3937007874;
        }
      }
      else if (this.valueIn === 'Centimeter(cm)' && this.valueOut === 'Feet(ft)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.032808399, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.032808399;
        }
      }
      else if (this.valueIn === 'Centimeter(cm)' && this.valueOut === 'Yard(yd)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.010936133, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.010936133;
        }
      }
      else if (this.valueIn === 'Centimeter(cm)' && this.valueOut === 'Mile(mi)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.0000062137, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.0000062137;
        }
      }

      else if (this.valueIn === 'Decimeter(dm)' && this.valueOut === 'Milimeter(mm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(100, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 100;
        }
      }
      else if (this.valueIn === 'Decimeter(dm)' && this.valueOut === 'Centimeter(cm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(10, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 10;
        }
      }
      else if (this.valueIn === 'Decimeter(dm)' && this.valueOut === 'Hectare(ha)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.000001, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.000001;
        }
      }
      else if (this.valueIn === 'Decimeter(dm)' && this.valueOut === 'Meter(m)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.1, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.1;
        }
      }
      else if (this.valueIn === 'Decimeter(dm)' && this.valueOut === 'Kilometer(km)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.0001, this.unitPow);
          
          } else {
          return parseFloat(this.inputNum) * 0.0001;
        }
      }
      else if (this.valueIn === 'Decimeter(dm)' && this.valueOut === 'Acre(ac)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.0000024711, this.unitPow);
          
          } else {
          return parseFloat(this.inputNum) * 0.0000024711;
        }
      }
      else if (this.valueIn === 'Decimeter(dm)' && this.valueOut === 'Are') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.0001, this.unitPow);
          
          } else {
          return parseFloat(this.inputNum) * 0.0001;
        }
      }
      else if (this.valueIn === 'Decimeter(dm)' && this.valueOut === 'Inch(in)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(3.937007874, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 3.937007874
        }
      }
      else if (this.valueIn === 'Decimeter(dm)' && this.valueOut === 'Feet(ft)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.3280839895, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.3280839895;
        }
      }
      else if (this.valueIn === 'Decimeter(dm)' && this.valueOut === 'Yard(yd)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.1093613298, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.1093613298;
        }
      }
      else if (this.valueIn === 'Decimeter(dm)' && this.valueOut === 'Mile(mi)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.0000621371, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.0000621371;
        }
      }
      else if (this.valueIn === 'Meter(m)' && this.valueOut === 'Milimeter(mm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(1000, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 1000;
        }
      }
      else if (this.valueIn === 'Meter(m)' && this.valueOut === 'Centimeter(cm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(100, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 100;
        }
      }
      else if (this.valueIn === 'Meter(m)' && this.valueOut === 'Decimeter(dm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(10, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 10;
        }
      }
      else if (this.valueIn === 'Meter(m)' && this.valueOut === 'Hectare(ha)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.0001, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.0001;
        }
      }
      else if (this.valueIn === 'Meter(m)' && this.valueOut === 'Kilometer(km)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.001, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.001;
        }
      }
      else if (this.valueIn === 'Meter(m)' && this.valueOut === 'Acre(ac)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.0002471054, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.0002471054;
        }
      }
      else if (this.valueIn === 'Meter(m)' && this.valueOut === 'Are') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.01, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.01;
        }
      }
      else if (this.valueIn === 'Meter(m)' && this.valueOut === 'Inch(in)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(39.37007874, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 39.37007874;
        }
      }
      else if (this.valueIn === 'Meter(m)' && this.valueOut === 'Feet(ft)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(3.280839895, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 3.280839895;
        }
      }
      else if (this.valueIn === 'Meter(m)' && this.valueOut === 'Yard(yd)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(1.0936132983, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 1.0936132983;
        }
      }
      else if (this.valueIn === 'Meter(m)' && this.valueOut === 'Mile(mi)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.0006213712, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.0006213712;
        }
      }

      else if (this.valueIn === 'Kilometer(km)' && this.valueOut === 'Milimeter(mm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(1000000, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 1000000;
        }
      }
      else if (this.valueIn === 'Kilometer(km)' && this.valueOut === 'Centimeter(cm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(100000, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 100000;
        }
      }
      else if (this.valueIn === 'Kilometer(km)' && this.valueOut === 'Decimeter(dm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(10000, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 10000;
        }
      }
      else if (this.valueIn === 'Kilometer(km)' && this.valueOut === 'Hectare(ha)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(100, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 100;
        }
      }
      else if (this.valueIn === 'Kilometer(km)' && this.valueOut === 'Meter(m)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(1000, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 1000;
        }
      }
      else if (this.valueIn === 'Kilometer(km)' && this.valueOut === 'Acre(ac)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(247.10538147, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 247.10538147;
        }
      }
      else if (this.valueIn === 'Kilometer(km)' && this.valueOut === 'Are') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(10000, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 10000;
        }
      }
      else if (this.valueIn === 'Kilometer(km)' && this.valueOut === 'Inch(in)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(39370.07874, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 39370.07874;
        }
      }
      else if (this.valueIn === 'Kilometer(km)' && this.valueOut === 'Feet(ft)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(3280.839895, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 3280.839895;
        }
      }
      else if (this.valueIn === 'Kilometer(km)' && this.valueOut === 'Yard(yd)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(1093.6132983, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 1093.6132983;
        }
      }
      else if (this.valueIn === 'Kilometer(km)' && this.valueOut === 'Mile(mi)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.6213711922, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.6213711922;
        }
      }

      else if (this.valueIn === 'Inch(in)' && this.valueOut === 'Milimeter(mm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(25.4, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 25.4;
        }
      }
      else if (this.valueIn === 'Inch(in)' && this.valueOut === 'Centimeter(cm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(2.54, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 2.54;
        }
      }
      else if (this.valueIn === 'Inch(in)' && this.valueOut === 'Decimeter(dm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.254, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.254;
        }
      }
      else if (this.valueIn === 'Inch(in)' && this.valueOut === 'Hectare(ha)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.000000064516, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.000000064516;
        }
      }
      else if (this.valueIn === 'Inch(in)' && this.valueOut === 'Meter(m)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.0254, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.0254;
        }
      }
      else if (this.valueIn === 'Inch(in)' && this.valueOut === 'Kilometer(km)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.0000254, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.0000254;
        }
      }
      else if (this.valueIn === 'Inch(in)' && this.valueOut === 'Acre(ac)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) / 6272640 ;
          
          } else {
          return parseFloat(this.inputNum) / 6272640;
        }
      }
      else if (this.valueIn === 'Inch(in)' && this.valueOut === 'Are') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 0.0000064516 ;
          
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
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.0277777778, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.0277777778;
        }
      }
      else if (this.valueIn === 'Inch(in)' && this.valueOut === 'Mile(mi)') {
          if (this.unitPow > 0) {
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
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(30.48, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 30.48;
        }
      }
      else if (this.valueIn === 'Feet(ft)' && this.valueOut === 'Decimeter(dm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(3.048, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 3.048
        }
      }
      else if (this.valueIn === 'Feet(ft)' && this.valueOut === 'Hectare(he)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 0.0000092903 ;
          
          } else {
          return parseFloat(this.inputNum) * 0.0000092903;
        }
      }
      else if (this.valueIn === 'Feet(ft)' && this.valueOut === 'Meter(m)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.3048, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.3048;
        }
      }
      else if (this.valueIn === 'Feet(ft)' && this.valueOut === 'Kilometer(km)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.0003048, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.0003048
        }
      }
      else if (this.valueIn === 'Feet(ft)' && this.valueOut === 'Acre(ac)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 0.0000229568 ;
          
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
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(12, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 12;
        }
      }
      else if (this.valueIn === 'Feet(ft)' && this.valueOut === 'Yard(yd)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.3333333333, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.3333333333;
        }
      }
      else if (this.valueIn === 'Feet(ft)' && this.valueOut === 'Mile(mi)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.0001893939, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.0001893939;
        }
      }

      else if (this.valueIn === 'Yard(yd)' && this.valueOut === 'Milimeter(mm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(914.4, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 914.4;
        }
      }
      else if (this.valueIn === 'Yard(yd)' && this.valueOut === 'Centimeter(cm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(91.44, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 91.44;
        }
      }
      else if (this.valueIn === 'Yard(yd)' && this.valueOut === 'Decimeter(dm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(9.144, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 9.144;
        }
      }
      else if (this.valueIn === 'Yard(yd)' && this.valueOut === 'Hectare(ha)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 0.0000836127 ;
          
          } else {
          return parseFloat(this.inputNum) * 0.0000836127 ;
        }
      }
      else if (this.valueIn === 'Yard(yd)' && this.valueOut === 'Meter(m)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.9144, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.9144;
        }
      }
      else if (this.valueIn === 'Yard(yd)' && this.valueOut === 'Kilometer(km)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.0009144, this.unitPow)  ;
          
          } else {
          return parseFloat(this.inputNum) * 0.0009144;
        }
      }
      else if (this.valueIn === 'Yard(yd)' && this.valueOut === 'Acre(ac)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 0.0002066116 ;
          
          } else {
          return parseFloat(this.inputNum) * 0.0002066116 ;
        }
      }
      else if (this.valueIn === 'Yard(yd)' && this.valueOut === 'Are') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 0.0083612736 ;
          
          } else {
          return parseFloat(this.inputNum) * 0.0083612736 ;
        }
      }
      else if (this.valueIn === 'Yard(yd)' && this.valueOut === 'Inch(in)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(36, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 36;
        }
      }
      else if (this.valueIn === 'Yard(yd)' && this.valueOut === 'Feet(ft)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(3, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 3;
        }
      }
      else if (this.valueIn === 'Yard(yd)' && this.valueOut === 'Mile(mi)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(0.0005681818, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 0.0005681818;
        }
      }

      else if (this.valueIn === 'Mile(mi)' && this.valueOut === 'Milimeter(mm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(1609344, this.unitPow);
          
          } else {
          return parseFloat(this.inputNum) * 1609344;
        }
      }
      else if (this.valueIn === 'Mile(mi)' && this.valueOut === 'Centimeter(cm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(160934.4, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 160934.4;
        }
      }
      else if (this.valueIn === 'Mile(mi)' && this.valueOut === 'Decimeter(dm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(16093.44, this.unitPow);
          
          } else {
          return parseFloat(this.inputNum) * 16093.44;
        }
      }
      else if (this.valueIn === 'Mile(mi)' && this.valueOut === 'Hectare(ha)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 258.99881103;
          
          } else {
          return parseFloat(this.inputNum) * 258.99881103;
        }
      }
      else if (this.valueIn === 'Mile(mi)' && this.valueOut === 'Meter(m)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(1609.344, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 1609.344;
        }
      }
      else if (this.valueIn === 'Mile(mi)' && this.valueOut === 'Kilometer(km)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(609344, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 1.609344;
        }
      }
      else if (this.valueIn === 'Mile(mi)' && this.valueOut === 'Acre(ac)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 640 ;
          
          } else {
          return parseFloat(this.inputNum) * 640 ;
        }
      }
      else if (this.valueIn === 'Mile(mi)' && this.valueOut === 'Are') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 25899.881103 ;
          
          } else {
          return parseFloat(this.inputNum) * 25899.881103 ;
        }
      }
      else if (this.valueIn === 'Mile(mi)' && this.valueOut === 'Inch(in)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(63360, this.unitPow);
          
          } else {
          return parseFloat(this.inputNum) * 63360;
        }
      }
      else if (this.valueIn === 'Mile(mi)' && this.valueOut === 'Feet(ft)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(5280, this.unitPow);
          
          } else {
          return parseFloat(this.inputNum) * 5280;
        }
      }
      else if (this.valueIn === 'Mile(mi)' && this.valueOut === 'Yard(yd)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * Math.pow(1760, this.unitPow) ;
          
          } else {
          return parseFloat(this.inputNum) * 1760;
        }
      }

      else if (this.valueIn === 'Hectare(ha)' && this.valueOut === 'Milimeter(mm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 10000000000 ;
          
          } else {
          return parseFloat(this.inputNum) * 10000000000;
        }
      }
      else if (this.valueIn === 'Hectare(ha)' && this.valueOut === 'Centimeter(cm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 100000000 ;
          
          } else {
          return parseFloat(this.inputNum) * 100000000 ;
        }
      }
      else if (this.valueIn === 'Hectare(ha)' && this.valueOut === 'Decimeter(dm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 1000000;
          
          } else {
          return parseFloat(this.inputNum) * 1000000;
        }
      }
      else if (this.valueIn === 'Hectare(ha)' && this.valueOut === 'Mile(Mi)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 0.0038610216;
          
          } else {
          return parseFloat(this.inputNum) * 0.0038610216;
        }
      }
      else if (this.valueIn === 'Hectare(ha)' && this.valueOut === 'Meter(m)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 10000 ;
          
          } else {
          return parseFloat(this.inputNum) * 10000 ;
        }
      }
      else if (this.valueIn === 'Hectare(ha)' && this.valueOut === 'Kilometer(km)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 0.01 ;
          
          } else {
          return parseFloat(this.inputNum) * 0.01 ;
        }
      }
      else if (this.valueIn === 'Hectare(ha)' && this.valueOut === 'Acre(ac)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 2.4710538147 ;
          
          } else {
          return parseFloat(this.inputNum) * 2.4710538147 ;
        }
      }
      else if (this.valueIn === 'Hectare(ha)' && this.valueOut === 'Are') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 100 ;
          
          } else {
          return parseFloat(this.inputNum) * 100 ;
        }
      }
      else if (this.valueIn === 'Hectare(ha)' && this.valueOut === 'Inch(in)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 15500031;
          
          } else {
          return parseFloat(this.inputNum) * 15500031;
        }
      }
      else if (this.valueIn === 'Hectare(ha)' && this.valueOut === 'Feet(ft)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 107639.10417;
          
          } else {
          return parseFloat(this.inputNum) * 107639.10417;
        }
      }
      else if (this.valueIn === 'Hectare(ha)' && this.valueOut === 'Yard(yd)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 11959.900463 ;
          
          } else {
          return parseFloat(this.inputNum) * 11959.900463;
        }
      }

      else if (this.valueIn === 'Acre(ac)' && this.valueOut === 'Milimeter(mm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 4046856422.4 ;
          
          } else {
          return parseFloat(this.inputNum) * 4046856422.4;
        }
      }
      else if (this.valueIn === 'Acre(ac)' && this.valueOut === 'Centimeter(cm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 40468564.224 ;
          
          } else {
          return parseFloat(this.inputNum) * 40468564.224 ;
        }
      }
      else if (this.valueIn === 'Acre(ac)' && this.valueOut === 'Decimeter(dm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 404685.64224;
          
          } else {
          return parseFloat(this.inputNum) * 404685.64224;
        }
      }
      else if (this.valueIn === 'Acre(ac)' && this.valueOut === 'Mile(Mi)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 0.0015625;
          
          } else {
          return parseFloat(this.inputNum) * 0.0015625;
        }
      }
      else if (this.valueIn === 'Acre(ac)' && this.valueOut === 'Meter(m)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 4046.8564224 ;
          
          } else {
          return parseFloat(this.inputNum) * 4046.8564224 ;
        }
      }
      else if (this.valueIn === 'Acre(ac)' && this.valueOut === 'Kilometer(km)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 0.0040468564 ;
          
          } else {
          return parseFloat(this.inputNum) * 0.0040468564 ;
        }
      }
      else if (this.valueIn === 'Acre(ac)' && this.valueOut === 'Hectare(ha)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 0.4046856422 ;
          
          } else {
          return parseFloat(this.inputNum) * 0.4046856422 ;
        }
      }
      else if (this.valueIn === 'Acre(ac)' && this.valueOut === 'Inch(in)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 6272640;
          
          } else {
          return parseFloat(this.inputNum) * 6272640;
        }
      }
      else if (this.valueIn === 'Acre(ac)' && this.valueOut === 'Feet(ft)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 43560;
          
          } else {
          return parseFloat(this.inputNum) * 43560;
        }
      }
      else if (this.valueIn === 'Acre(ac)' && this.valueOut === 'Yard(yd)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 4840 ;
          
          } else {
          return parseFloat(this.inputNum) * 4840;
        }
      }

      else if (this.valueIn === 'Are' && this.valueOut === 'Milimeter(mm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 100000000 ;
          
          } else {
          return parseFloat(this.inputNum) * 100000000 ;
        }
      }
      else if (this.valueIn === 'Are' && this.valueOut === 'Centimeter(cm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 1000000 ;
          
          } else {
          return parseFloat(this.inputNum) * 1000000 ;
        }
      }
      else if (this.valueIn === 'Are' && this.valueOut === 'Decimeter(dm)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 10000;
          
          } else {
          return parseFloat(this.inputNum) * 10000;
        }
      }
      else if (this.valueIn === 'Are' && this.valueOut === 'Mile(Mi)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 0.0000386102;
          
          } else {
          return parseFloat(this.inputNum) * 0.0000386102;
        }
      }
      else if (this.valueIn === 'Are' && this.valueOut === 'Meter(m)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 100 ;
          
          } else {
          return parseFloat(this.inputNum) * 100 ;
        }
      }
      else if (this.valueIn === 'Are' && this.valueOut === 'Kilometer(km)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 0.0001 ;
          
          } else {
          return parseFloat(this.inputNum) * 0.0001 ;
        }
      }
      else if (this.valueIn === 'Are' && this.valueOut === 'Acre(ac)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 0.0247105381 ;
          
          } else {
          return parseFloat(this.inputNum) * 0.0247105381 ;
        }
      }
      else if (this.valueIn === 'Are' && this.valueOut === 'Hectare(ha)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 0.01 ;
          
          } else {
          return parseFloat(this.inputNum) * 0.01 ;
        }
      }
      else if (this.valueIn === 'Are' && this.valueOut === 'Inch(in)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 155000.31;
          
          } else {
          return parseFloat(this.inputNum) * 155000.31;
        }
      }
      else if (this.valueIn === 'Are' && this.valueOut === 'Feet(ft)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 1076.3910417;
          
          } else {
          return parseFloat(this.inputNum) * 1076.3910417;
        }
      }
      else if (this.valueIn === 'Are' && this.valueOut === 'Yard(yd)') {
          if (this.unitPow > 0) {
            return parseFloat(this.inputNum) * 119.59900463 ;
          
          } else {
          return parseFloat(this.inputNum) * 119.59900463;
        }
      }

      else {
        return ''
      }
    }
  }
}
</script>