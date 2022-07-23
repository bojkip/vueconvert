<template>
<v-card flat>
    <v-container class="container" fluid>
    <h1 class="text-center pt-7">Area</h1>
    <v-row class="row d-flex justify-center py-7" cols="2">
        <v-col cols="2">
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
        itemsIn: [ 'Square Milimeter(mm2)', 'Square Centimeter(cm2)', 'Square Decimeter(dm2)', 'Hectar(ha)', 'Square Kilometer(km2)', 'Acre(ml)', 'Are', 'Squere Inch(in2)', 'Square Feet(ft2)', 'Square Yard(yd2)', 'Square Mile(mi2)' ],
        valuesIn: ['foo', 'bar'],
        valueIn: '',
        itemsOut:  [ 'Square Milimeter(mm2)', 'Square Centimeter(cm2)', 'Square Decimeter(dm2)', 'Hectar(ha)', 'Square Kilometer(km2)', 'Acre(ml)', 'Are', 'Squere Inch(in2)', 'Square Feet(ft2)', 'Square Yard(yd2)', 'Square Mile(mi2)' ],
        valuesOut: ['foo', 'bar'],
        valueOut: '',
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
            if (this.valueIn === 'Square Milimeter(mm2)' && this.valueOut === 'Square Centimeter(cm2)') {
                return parseFloat(this.inputNum) * 0.01;
            }
            

            else {
                return '';
            }
        }

    }
}
</script>