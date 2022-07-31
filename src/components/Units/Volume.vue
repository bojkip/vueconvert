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
        <v-text-field autofocus color="#008585" outlined label="Your Number" hint="Number only" placeholder="120" v-model="inputNum" :value="convertVolume"></v-text-field>
        </v-col>
        <v-col
        xl="4" lg="4" sm="4"
        >
        <v-text-field outlined color="#008585" label="Your Exponent" placeholder="2" hint="If your number has no exponent, skip this field" v-model="userPow">
        </v-text-field>
        </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col xl="5" lg="5" sm="5">
            <v-autocomplete
                v-model="valueIn"
                :items="itemsIn"
                color="#008585"
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
        <v-text-field outlined color="#008585" v-model="jouleResult" :value="convertVolume" label="Joule(J) "></v-text-field>
        </v-col>
        <v-col
        xl="4" lg="4" sm="4"
        >
        <v-text-field outlined color="#008585" v-model="kilojuleResult" :value="convertVolume" label="Kilojule(kJ) "></v-text-field>
        </v-col>
        </v-row>
        <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined color="#008585" v-model="kilowattHourResult" :value="convertVolume"
        label="Kilowatt-hour(kWh) "></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined color="#008585" v-model="wattHourResult" :value="convertVolume" label="Watt-hour(Wh)"></v-text-field>
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
        inputNum: '' ,
        itemsIn: [ 'Cubic Milimeter(mm3)', 'Cubic Centimeter(cm3)', 'Cubic Decimeter(dm3)', 'Cubic Meter(m3)', 'Cubic Kilometer(km3)', 'Mililiter(ml)', 'Liter(l)', 'Deciliter(dl)', 'Cup US', 'Gallon US(gal)', 'Teaspoon US', 'Tablespoon US'  ],
        valueIn: '',
        userPow: '',
        removeComponent: true,
        addComponent: true,
        jouleResult: '',
        kilojuleResult: '',
        kilowattHourResult: '',
        wattHourResult: '',
        }
    },
    computed: {
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