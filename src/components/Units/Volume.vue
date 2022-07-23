<template>
<v-card flat>
    <v-container class="container" fluid>
    <h1 class="text-center pt-7">Volume</h1>
    <v-row class="row d-flex justify-center py-7" cols="2">
        <v-col cols="3">
        <v-text-field class="text-center result-field" clearable :messages="`${valueOut}`"  v-model="resultOutput" :vlaue="setResult" label="Result "></v-text-field>
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
        <v-text-field outlined clearable label="Your Number" hint="Number only" placeholder="e.g 120" v-model="inputNum"></v-text-field>
        </v-col>
        <v-col>
        <v-autocomplete
            v-model="valueIn"
            :items="itemsIn"
            dense
            filled
            label="From Unit"
            placeholder="e.g. celsius or c"
            clearable
        ></v-autocomplete>
        </v-col>
        <v-col>
        <v-autocomplete
            v-model="valueOut"
            :items="itemsOut"
            dense
            filled
            label="To Unit"
            placeholder="e.g. fahrenheit or f"
            clearable
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
        itemsIn: [ 'Cubic Milimeter(mm3)', 'Cubic Centimeter(cm3)', 'Cubic Decimeter(dm3)', 'Cubic Meter(m3)', 'Cubic Kilometer(km3)', 'Mililiter(ml)', 'Liter(l)', 'Deciliter(dl)', 'Cup US', 'Gallon US (gal)', 'Teaspoon US', 'Tablespoon US'  ],
        valuesIn: ['foo', 'bar'],
        valueIn: '',
        itemsOut:  [ 'Cubic Milimeter(mm3)', 'Cubic Centimeter(cm3)', 'Cubic Decimeter(dm3)', 'Cubic Meter(m3)', 'Cubic Kilometer(km3)', 'Mililiter(ml)', 'Liter(l)', 'Deciliter(dl)', 'Cup US', 'Gallon US (gal)', 'Teaspoon US', 'Tablespoon US'  ],
        valuesOut: ['foo', 'bar'],
        valueOut: '',
        inputPow: '3',
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
            this.resultOutput = this.convertVolume;
            },
        convertVolume(){
            if (this.valueIn === 'Cubic Milimeter(mm3)' && this.valueOut === 'Cubic Centimeter(cm3)') {
                return parseFloat(this.inputNum) * 0.001;
            }
            else if (this.valueIn === 'Cubic Milimeter(mm3)' && this.valueOut === 'Cubic Decimeter(dm3)') {
                return parseFloat(this.inputNum) * 0.000001;
            }
            else if (this.valueIn === 'Cubic Milimeter(mm3)' && this.valueOut === 'Cubic Meter(m3)') {
                return parseFloat(this.inputNum) * 0.000000001;
            }
            else if (this.valueIn === 'Cubic Milimeter(mm3)' && this.valueOut === 'Cubic Kilometer(km3)') {
                return parseFloat(this.inputNum) * 0.000000000000000001;
            }
            else if (this.valueIn === 'Cubic Milimeter(mm3)' && this.valueOut === 'Mililiter(ml)') {
                return parseFloat(this.inputNum) * 0.001;
            }
            else if (this.valueIn === 'Cubic Milimeter(mm3)' && this.valueOut === 'Liter(l)') {
                return parseFloat(this.inputNum) * 0.000001;
            }
            else if (this.valueIn === 'Cubic Milimeter(mm3)' && this.valueOut === 'Deciliter(dl)') {
                return parseFloat(this.inputNum) * 0.00001;
            }
            else if (this.valueIn === 'Cubic Milimeter(mm3)' && this.valueOut === 'Cup US') {
                return parseFloat(this.inputNum) * 0.0000042268;
            }
            else if (this.valueIn === 'Cubic Milimeter(mm3)' && this.valueOut === 'Gallon US (gal)') {
                return parseFloat(this.inputNum) * 0.0000002641722;
            }
            else if (this.valueIn === 'Cubic Milimeter(mm3)' && this.valueOut === 'Teaspoon US') {
                return parseFloat(this.inputNum) * 0.0002028841;
            }
            else if (this.valueIn === 'Cubic Milimeter(mm3)' && this.valueOut === 'Tablespoon US') {
                return parseFloat(this.inputNum) * 0.000067628;
            }
            
            else if (this.valueIn === 'Cubic Centimeter(cm3)' && this.valueOut === 'Cubic Milimeter(mm3)') {
                return parseFloat(this.inputNum) * 1000;
            }
            else if (this.valueIn === 'Cubic Centimeter(cm3)' && this.valueOut === 'Cubic Decimeter(dm3)') {
                return parseFloat(this.inputNum) * 0.001;
            }
            else if (this.valueIn === 'Cubic Centimeter(cm3)' && this.valueOut === 'Cubic Meter(m3)') {
                return parseFloat(this.inputNum) * 0.000001;
            }
            else if (this.valueIn === 'Cubic Milimeter(mm3)' && this.valueOut === 'Cubic Kilometer(km3)') {
                return parseFloat(this.inputNum) * 0.000000000000001;
            }
            else if (this.valueIn === 'Cubic Centimeter(cm3)' && this.valueOut === 'Mililiter(ml)') {
                return parseFloat(this.inputNum) * 1;
                }
            else if (this.valueIn === 'Cubic Centimeter(cm3)' && this.valueOut === 'Liter(l)') {
                return parseFloat(this.inputNum) * 0.001;
            }
            else if (this.valueIn === 'Cubic Centimeter(cm3)' && this.valueOut === 'Deciliter(dl)') {
                return parseFloat(this.inputNum) * 0.01;
            }
            else if (this.valueIn === 'Cubic Centimeter(cm3)' && this.valueOut === 'Cup US') {
                return parseFloat(this.inputNum) * 0.0042267528;
            }
            else if (this.valueIn === 'Cubic Centimeter(cm3)' && this.valueOut === 'Gallon US (gal)') {
                return parseFloat(this.inputNum) * 0.0002641721;
            }
            else if (this.valueIn === 'Cubic Centimeter(cm3)' && this.valueOut === 'Teaspoon US') {
                return parseFloat(this.inputNum) * 0.2028841362;
            }
            else if (this.valueIn === 'Cubic Centimeter(cm3)' && this.valueOut === 'Tablespoon US') {
                return parseFloat(this.inputNum) * 0.0676280454;
            }

            else if (this.valueIn === 'Cubic Decimeter(dm3)' && this.valueOut === 'Cubic Milimeter(mm3)') {
                return parseFloat(this.inputNum) * 1000000;
            }
            else if (this.valueIn === 'Cubic Decimeter(dm3)' && this.valueOut === 'Cubic Centimeter(cm3)') {
                return parseFloat(this.inputNum) * 1000;
            }
            else if (this.valueIn === 'Cubic Decimeter(dm3)' && this.valueOut === 'Cubic Meter(m3)') {
                return parseFloat(this.inputNum) * 0.001;
            }
            else if (this.valueIn === 'Cubic Decimeter(dm3)' && this.valueOut === 'Cubic Kilometer(km3)') {
                return parseFloat(this.inputNum) * 0.000000000001;
            }
            else if (this.valueIn === 'Cubic Decimeter(dm3)' && this.valueOut === 'Mililiter(ml)') {
                return parseFloat(this.inputNum) * 1000;
                }
            else if (this.valueIn === 'Cubic Decimeter(dm3)' && this.valueOut === 'Liter(l)') {
                return parseFloat(this.inputNum) * 1;
            }
            else if (this.valueIn === 'Cubic Decimeter(dm3)' && this.valueOut === 'Deciliter(dl)') {
                return parseFloat(this.inputNum) * 10;
            }
            else if (this.valueIn === 'Cubic Decimeter(dm3)' && this.valueOut === 'Cup US') {
                return parseFloat(this.inputNum) * 4.2267528377;
            }
            else if (this.valueIn === 'Cubic Decimeter(dm3)' && this.valueOut === 'Gallon US (gal)') {
                return parseFloat(this.inputNum) * 0.2641720524;
            }
            else if (this.valueIn === 'Cubic Decimeter(dm3)' && this.valueOut === 'Teaspoon US') {
                return parseFloat(this.inputNum) * 202.88413621;
            }
            else if (this.valueIn === 'Cubic Decimeter(dm3)' && this.valueOut === 'Tablespoon US') {
                return parseFloat(this.inputNum) * 67.628045404;
            }

            else if (this.valueIn === 'Cubic Meter(m3)' && this.valueOut === 'Cubic Milimeter(mm3)') {
                return parseFloat(this.inputNum) * 1000000000;
            }
            else if (this.valueIn === 'Cubic Meter(m3)' && this.valueOut === 'Cubic Centimeter(cm3)') {
                return parseFloat(this.inputNum) * 1000000;
            }
            else if (this.valueIn === 'Cubic Meter(m3)' && this.valueOut === 'Cubic Decimeter(dm3)') {
                return parseFloat(this.inputNum) * 1000;
            }
            else if (this.valueIn === 'Cubic Meter(m3)' && this.valueOut === 'Cubic Kilometer(km3)') {
                return parseFloat(this.inputNum) * 0.000000001;
            }
            else if (this.valueIn === 'Cubic Meter(m3)' && this.valueOut === 'Mililiter(ml)') {
                return parseFloat(this.inputNum) * 1000000;
                }
            else if (this.valueIn === 'Cubic Meter(m3)' && this.valueOut === 'Liter(l)') {
                return parseFloat(this.inputNum) * 1000;
            }
            else if (this.valueIn === 'Cubic Meter(m3)' && this.valueOut === 'Deciliter(dl)') {
                return parseFloat(this.inputNum) * 10000;
            }
            else if (this.valueIn === 'Cubic Meter(m3)' && this.valueOut === 'Cup US') {
                return parseFloat(this.inputNum) * 4226.7528377;
            }
            else if (this.valueIn === 'Cubic Meter(m3)' && this.valueOut === 'Gallon US (gal)') {
                return parseFloat(this.inputNum) * 264.17205236;
            }
            else if (this.valueIn === 'Cubic Meter(m3)' && this.valueOut === 'Teaspoon US') {
                return parseFloat(this.inputNum) * 202884.13621;
            }
            else if (this.valueIn === 'Cubic Meter(m3)' && this.valueOut === 'Tablespoon US') {
                return parseFloat(this.inputNum) * 67628.045404;
            }

            else if (this.valueIn === 'Cubic Kilometer(km3)' && this.valueOut === 'Cubic Milimeter(mm3)') {
                return parseFloat(this.inputNum) * 1000000000000000000;
            }
            else if (this.valueIn === 'Cubic Kilometer(km3)' && this.valueOut === 'Cubic Centimeter(cm3)') {
                return parseFloat(this.inputNum) * 1000000000000000;
            }
            else if (this.valueIn === 'Cubic Kilometer(km3)' && this.valueOut === 'Cubic Decimeter(dm3)') {
                return parseFloat(this.inputNum) * 1000000000000;
            }
            else if (this.valueIn === 'Cubic Kilometer(km3)' && this.valueOut === 'Cubic Meter(m3)') {
                return parseFloat(this.inputNum) * 1000000000;
            }
            else if (this.valueIn === 'Cubic Kilometer(km3)' && this.valueOut === 'Mililiter(ml)') {
                return parseFloat(this.inputNum) * 1000000000000000;
                }
            else if (this.valueIn === 'Cubic Kilometer(km3)' && this.valueOut === 'Liter(l)') {
                return parseFloat(this.inputNum) * 1000000000000;
            }
            else if (this.valueIn === 'Cubic Kilometer(km3)' && this.valueOut === 'Deciliter(dl)') {
                return parseFloat(this.inputNum) * 10000000000000;
            }
            else if (this.valueIn === 'Cubic Kilometer(km3)' && this.valueOut === 'Cup US') {
                return parseFloat(this.inputNum) * 4226752837730;
            }
            else if (this.valueIn === 'Cubic Kilometer(km3)' && this.valueOut === 'Gallon US (gal)') {
                return parseFloat(this.inputNum) * 264172052358;
            }
            else if (this.valueIn === 'Cubic Kilometer(km3)' && this.valueOut === 'Teaspoon US') {
                return parseFloat(this.inputNum) * 202884136211060;
            }
            else if (this.valueIn === 'Cubic Kilometer(km3)' && this.valueOut === 'Tablespoon US') {
                return parseFloat(this.inputNum) * 67628045403686;
            }

            else if (this.valueIn === 'Mililiter(ml)' && this.valueOut === 'Cubic Milimeter(mm3)') {
                return parseFloat(this.inputNum) * 1000;
            }
            else if (this.valueIn === 'Mililiter(ml)' && this.valueOut === 'Cubic Centimeter(cm3)') {
                return parseFloat(this.inputNum) * 1;
            }
            else if (this.valueIn === 'Mililiter(ml)' && this.valueOut === 'Cubic Decimeter(dm3)') {
                return parseFloat(this.inputNum) * 0.001;
            }
            else if (this.valueIn === 'Mililiter(ml)' && this.valueOut === 'Cubic Meter(m3)') {
                return parseFloat(this.inputNum) * 0.000001;
            }
            else if (this.valueIn === 'Mililiter(ml)' && this.valueOut === 'Cubic Kilometer(km3)') {
                return parseFloat(this.inputNum) * 0.0000000000000001;
                }
            else if (this.valueIn === 'Mililiter(ml)' && this.valueOut === 'Liter(l)') {
                return parseFloat(this.inputNum) * 0.001;
            }
            else if (this.valueIn === 'Mililiter(ml)' && this.valueOut === 'Deciliter(dl)') {
                return parseFloat(this.inputNum) * 0.01;
            }
            else if (this.valueIn === 'Mililiter(ml)' && this.valueOut === 'Cup US') {
                return parseFloat(this.inputNum) * 0.0042267528;
            }
            else if (this.valueIn === 'Mililiter(ml)' && this.valueOut === 'Gallon US (gal)') {
                return parseFloat(this.inputNum) * 0.0002641721;
            }
            else if (this.valueIn === 'Mililiter(ml)' && this.valueOut === 'Teaspoon US') {
                return parseFloat(this.inputNum) * 0.2028841362;
            }
            else if (this.valueIn === 'Mililiter(ml)' && this.valueOut === 'Tablespoon US') {
                return parseFloat(this.inputNum) * 0.0676280454;
            }

            else if (this.valueIn === 'Liter(l)' && this.valueOut === 'Cubic Milimeter(mm3)') {
                return parseFloat(this.inputNum) * 1000000;
            }
            else if (this.valueIn === 'Liter(l)' && this.valueOut === 'Cubic Centimeter(cm3)') {
                return parseFloat(this.inputNum) * 1000000;
            }
            else if (this.valueIn === 'Liter(l)' && this.valueOut === 'Cubic Decimeter(dm3)') {
                return parseFloat(this.inputNum) * 1;
            }
            else if (this.valueIn === 'Liter(l)' && this.valueOut === 'Cubic Meter(m3)') {
                return parseFloat(this.inputNum) * 0.001;
            }
            else if (this.valueIn === 'Liter(l)' && this.valueOut === 'Cubic Kilometer(km3)') {
                return parseFloat(this.inputNum) * 0.000000000001;
                }
            else if (this.valueIn === 'Liter(l)' && this.valueOut === 'Mililiter(ml)') {
                return parseFloat(this.inputNum) * 1000;
            }
            else if (this.valueIn === 'Liter(l)' && this.valueOut === 'Deciliter(dl)') {
                return parseFloat(this.inputNum) * 10;
            }
            else if (this.valueIn === 'Liter(l)' && this.valueOut === 'Cup US') {
                return parseFloat(this.inputNum) * 4.2267528377;
            }
            else if (this.valueIn === 'Liter(l)' && this.valueOut === 'Gallon US (gal)') {
                return parseFloat(this.inputNum) * 0.2641720524;
            }
            else if (this.valueIn === 'Liter(l)' && this.valueOut === 'Teaspoon US') {
                return parseFloat(this.inputNum) * 202.88413621;
            }
            else if (this.valueIn === 'Liter(l)' && this.valueOut === 'Tablespoon US') {
                return parseFloat(this.inputNum) * 67.628045404;
            }

            else if (this.valueIn === 'Deciliter(dl)' && this.valueOut === 'Cubic Milimeter(mm3)') {
                return parseFloat(this.inputNum) * 100000;
            }
            else if (this.valueIn === 'Deciliter(dl)' && this.valueOut === 'Cubic Centimeter(cm3)') {
                return parseFloat(this.inputNum) * 100;
            }
            else if (this.valueIn === 'Deciliter(dl)' && this.valueOut === 'Cubic Decimeter(dm3)') {
                return parseFloat(this.inputNum) * 0.1;
            }
            else if (this.valueIn === 'Deciliter(dl)' && this.valueOut === 'Cubic Meter(m3)') {
                return parseFloat(this.inputNum) * 0.0001;
            }
            else if (this.valueIn === 'Deciliter(dl)' && this.valueOut === 'Cubic Kilometer(km3)') {
                return parseFloat(this.inputNum) * 0.0000000000001;
                }
            else if (this.valueIn === 'Deciliter(dl)' && this.valueOut === 'Mililiter(ml)') {
                return parseFloat(this.inputNum) * 100;
            }
            else if (this.valueIn === 'Deciliter(dl)' && this.valueOut === 'Liter(l)') {
                return parseFloat(this.inputNum) * 0.1;
            }
            else if (this.valueIn === 'Deciliter(dl)' && this.valueOut === 'Cup US') {
                return parseFloat(this.inputNum) * 0.4226752838;
            }
            else if (this.valueIn === 'Deciliter(dl)' && this.valueOut === 'Gallon US (gal)') {
                return parseFloat(this.inputNum) * 0.0264172052;
            }
            else if (this.valueIn === 'Deciliter(dl)' && this.valueOut === 'Teaspoon US') {
                return parseFloat(this.inputNum) * 20.288413621;
            }
            else if (this.valueIn === 'Deciliter(dl)' && this.valueOut === 'Tablespoon US') {
                return parseFloat(this.inputNum) * 6.7628045404;
            }

            else if (this.valueIn === 'Cup US' && this.valueOut === 'Cubic Milimeter(mm3)') {
                return parseFloat(this.inputNum) * 236588.2365;
            }
            else if (this.valueIn === 'Cup US' && this.valueOut === 'Cubic Centimeter(cm3)') {
                return parseFloat(this.inputNum) * 236.5882365;
            }
            else if (this.valueIn === 'Cup US' && this.valueOut === 'Cubic Decimeter(dm3)') {
                return parseFloat(this.inputNum) * 0.2365882365;
            }
            else if (this.valueIn === 'Cup US' && this.valueOut === 'Cubic Meter(m3)') {
                return parseFloat(this.inputNum) * 0.0002365882;
            }
            else if (this.valueIn === 'Cup US' && this.valueOut === 'Cubic Kilometer(km3)') {
                return parseFloat(this.inputNum) * 0.0000000000002365882;
                }
            else if (this.valueIn === 'Cup US' && this.valueOut === 'Mililiter(ml)') {
                return parseFloat(this.inputNum) * 236.5882365;
            }
            else if (this.valueIn === 'Cup US' && this.valueOut === 'Liter(l)') {
                return parseFloat(this.inputNum) * 0.2365882365;
            }
            else if (this.valueIn === 'Cup US' && this.valueOut === 'Deciliter(dl)') {
                return parseFloat(this.inputNum) * 2.365882365;
            }
            else if (this.valueIn === 'Cup US' && this.valueOut === 'Gallon US (gal)') {
                return parseFloat(this.inputNum) * 0.0625;
            }
            else if (this.valueIn === 'Cup US' && this.valueOut === 'Teaspoon US') {
                return parseFloat(this.inputNum) * 48;
            }
            else if (this.valueIn === 'Cup US' && this.valueOut === 'Tablespoon US') {
                return parseFloat(this.inputNum) * 16;
            }
            
            else if (this.valueIn === 'Gallon US (gal)' && this.valueOut === 'Cubic Milimeter(mm3)') {
                return parseFloat(this.inputNum) * 3785411.784;
            }
            else if (this.valueIn === 'Gallon US (gal)' && this.valueOut === 'Cubic Centimeter(cm3)') {
                return parseFloat(this.inputNum) * 3785.4118;
            }
            else if (this.valueIn === 'Gallon US (gal)' && this.valueOut === 'Cubic Decimeter(dm3)') {
                return parseFloat(this.inputNum) * 3.7854118;
            }
            else if (this.valueIn === 'Gallon US (gal)' && this.valueOut === 'Cubic Meter(m3)') {
                return parseFloat(this.inputNum) * 0.0037854118;
            }
            else if (this.valueIn === 'Gallon US (gal)' && this.valueOut === 'Cubic Kilometer(km3)') {
                return parseFloat(this.inputNum) * 0.0000000000037854118;
                }
            else if (this.valueIn === 'Gallon US (gal)' && this.valueOut === 'Mililiter(ml)') {
                return parseFloat(this.inputNum) * 3785.411784;
            }
            else if (this.valueIn === 'Gallon US (gal)' && this.valueOut === 'Liter(l)') {
                return parseFloat(this.inputNum) * 3.785411784;
            }
            else if (this.valueIn === 'Gallon US (gal)' && this.valueOut === 'Deciliter(dl)') {
                return parseFloat(this.inputNum) * 37.85411784;
            }
            else if (this.valueIn === 'Gallon US (gal)' && this.valueOut === 'Cup US') {
                return parseFloat(this.inputNum) * 16;
            }
            else if (this.valueIn === 'Gallon US (gal)' && this.valueOut === 'Teaspoon US') {
                return parseFloat(this.inputNum) * 768;
            }
            else if (this.valueIn === 'Gallon US (gal)' && this.valueOut === 'Tablespoon US') {
                return parseFloat(this.inputNum) * 256;
            }

            else if (this.valueIn === 'Teaspoon US' && this.valueOut === 'Cubic Milimeter(mm3)') {
                return parseFloat(this.inputNum) * 4928.9215937;
            }
            else if (this.valueIn === 'Teaspoon US' && this.valueOut === 'Cubic Centimeter(cm3)') {
                return parseFloat(this.inputNum) * 4.9289215937;
            }
            else if (this.valueIn === 'Teaspoon US' && this.valueOut === 'Cubic Decimeter(dm3)') {
                return parseFloat(this.inputNum) * 0.0049289216;
            }
            else if (this.valueIn === 'Teaspoon US' && this.valueOut === 'Cubic Meter(m3)') {
                return parseFloat(this.inputNum) * 0.000004928;
            }
            else if (this.valueIn === 'Teaspoon US' && this.valueOut === 'Cubic Kilometer(km3)') {
                return parseFloat(this.inputNum) * 0.0000000000000049289;
                }
            else if (this.valueIn === 'Teaspoon US' && this.valueOut === 'Mililiter(ml)') {
                return parseFloat(this.inputNum) * 4.9289215937;
            }
            else if (this.valueIn === 'Teaspoon US' && this.valueOut === 'Liter(l)') {
                return parseFloat(this.inputNum) * 0.0049289216;
            }
            else if (this.valueIn === 'Teaspoon US' && this.valueOut === 'Deciliter(dl)') {
                return parseFloat(this.inputNum) * 0.0492892159;
            }
            else if (this.valueIn === 'Teaspoon US' && this.valueOut === 'Cup US') {
                return parseFloat(this.inputNum) * 0.0208333333;
            }
            else if (this.valueIn === 'Teaspoon US' && this.valueOut === 'Gallon US (gal)') {
                return parseFloat(this.inputNum) * 0.0013020833;
            }
            else if (this.valueIn === 'Teaspoon US' && this.valueOut === 'Tablespoon US') {
                return parseFloat(this.inputNum) / 3;
            }

            else if (this.valueIn === 'Tablespoon US' && this.valueOut === 'Cubic Milimeter(mm3)') {
                return parseFloat(this.inputNum) * 14786.764781;
            }
            else if (this.valueIn === 'Tablespoon US' && this.valueOut === 'Cubic Centimeter(cm3)') {
                return parseFloat(this.inputNum) * 14.786764781;
            }
            else if (this.valueIn === 'Tablespoon US' && this.valueOut === 'Cubic Decimeter(dm3)') {
                return parseFloat(this.inputNum) * 0.0147867648;
            }
            else if (this.valueIn === 'Tablespoon US' && this.valueOut === 'Cubic Meter(m3)') {
                return parseFloat(this.inputNum) * 0.0000147868;
            }
            else if (this.valueIn === 'Tablespoon US' && this.valueOut === 'Cubic Kilometer(km3)') {
                return parseFloat(this.inputNum) * 0.0000000000000147868;
                }
            else if (this.valueIn === 'Tablespoon US' && this.valueOut === 'Mililiter(ml)') {
                return parseFloat(this.inputNum) * 14786.764781;
            }
            else if (this.valueIn === 'Tablespoon US' && this.valueOut === 'Liter(l)') {
                return parseFloat(this.inputNum) * 0.0147867648;
            }
            else if (this.valueIn === 'Tablespoon US' && this.valueOut === 'Deciliter(dl)') {
                return parseFloat(this.inputNum) * 0.1478676478;
            }
            else if (this.valueIn === 'Tablespoon US' && this.valueOut === 'Cup US') {
                return parseFloat(this.inputNum) * 0.0625;
            }
            else if (this.valueIn === 'Tablespoon US' && this.valueOut === 'Gallon US (gal)') {
                return parseFloat(this.inputNum) * 0.00390625;
            }
            else if (this.valueIn === 'Tablespoon US' && this.valueOut === 'Teaspoon US') {
                return parseFloat(this.inputNum) * 3;
            }

            else {
                return '';
            }
        }

    }
}
</script>