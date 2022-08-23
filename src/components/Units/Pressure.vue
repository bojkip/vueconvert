<template>
<v-card class="px-5" flat >
    <v-container class="container" fluid>
    <h1 class="text-center py-10 ">Pressure</h1>
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
        <v-text-field outlined v-model="atmTechResult" :value="convertPress" label="AtmosphereTechnical(at)"></v-text-field>
        </v-col>
        <v-col
        xl="4" lg="4" sm="4"
        >
        <v-text-field outlined v-model="staAtmResult" :value="convertPress" label="StandardAtmosphere(atm)"></v-text-field>
        </v-col>
        </v-row>
        <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="barResult" :value="convertPress"
        label="Bar(bar)"></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="miliWaterResult" :value="convertPress"
        label="MillimeterWater(mmH2O)"></v-text-field>
        </v-col>
    </v-row>
        <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="miliMercyResult" :value="convertPress"
        label="MillimeterMercury(mmHg)
"></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="pascalResult" :value="convertPress"
        label="Pascal(Pa)"></v-text-field>
        </v-col>
    </v-row>
    <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="kiloPascalResult" :value="convertPress"
        label="Kilopascal(kPa)"></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="heactResult" :value="convertPress"
        label="Hectopascal(hPa)"></v-text-field>
        </v-col>
    </v-row>
    <v-row justify="center">
        <v-col xl="4" lg="4" sm="4" class="d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex">
        <v-text-field outlined v-model="newtSquaResult" :value="convertPress"
        label="NewtonSquaremeter (N/m2)"></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4" class="d-flex d-sm-none">
        <v-text-field outlined v-model="newtSquaResult" :value="convertPress"
        label="NewtonSquaremeter (N/m2)"></v-text-field>
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
    itemsIn: ['AtmosphereTechnical(at)', 'StandardAtmosphere(atm)', 'Bar(bar)', 'MillimeterWater(mmH2O)', 'MillimeterMercury(mmHg)', 'Pascal(Pa)', 'Kilopascal(kPa)', 'Hectopascal(hPa)', 'NewtonSquaremeter N/m2)'],
    valueIn: '',
    userPow: '',
    atmTechResult: '',
    staAtmResult: '',
    barResult: '',
    miliWaterResult: '',
    miliMercyResult: '',
    pascalResult: '',
    newtSquaResult: '',
    kiloPascalResult: '',
    heactResult:'',
    }
},
computed: {
    convertPress(){
        if (this.inputNum === ''){
            this.atmTechResult = '';
            this.staAtmResult =  '';
            this.barResult =  '';
            this.miliWaterResult =  '';
            this.miliMercyResult = '';
            this.pascalResult = '';
            this.newtSquaResult = '';
            this.kiloPascalResult = '';
            this.heactResult = '';
        }
        else if (this.valueIn === 'AtmosphereTechnical(at)') {
            if (this.userPow != ''){
            this.pascalResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 98066.5;
            this.kiloPascalResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 98.0665;
            this.heactResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 980.665;
            this.barResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.980665;
            this.newtSquaResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 98066.5;
            this.staAtmResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.9678411054;
            this.atmTechResult = parseFloat(Math.pow(this.inputNum, this.userPow));
            this.miliMercyResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 735.56127271;
            this.miliWaterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000.275331;
            }
            else{
                this.pascalResult = parseFloat(this.inputNum) * 98066.5;
                this.kiloPascalResult = parseFloat(this.inputNum) * 98.0665;
                this.heactResult = parseFloat(this.inputNum) * 980.665;
                this.barResult = parseFloat(this.inputNum) * 0.980665;
                this.newtSquaResult = parseFloat(this.inputNum) * 98066.5;
                this.staAtmResult = parseFloat(this.inputNum) * 0.9678411054;
                this.atmTechResult = parseFloat(this.inputNum);
                this.miliMercyResult = parseFloat(this.inputNum) * 735.56127271;
                this.miliWaterResult = parseFloat(this.inputNum) * 10000.275331;
            }
        }
        else if (this.valueIn === 'StandardAtmosphere(atm)') {
            if (this.userPow != ''){
            this.pascalResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 101325;
            this.kiloPascalResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 101.325;
            this.heactResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1013.25;
            this.barResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1.01325;
            this.newtSquaResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 101325;
            this.staAtmResult = parseFloat(Math.pow(this.inputNum, this.userPow));
            this.atmTechResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1.0332274528;
            this.miliMercyResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 760.00210018;
            this.miliWaterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10332.559008;
            }
            else{
                this.pascalResult = parseFloat(this.inputNum) * 101325;
                this.kiloPascalResult = parseFloat(this.inputNum) * 101.325;
                this.heactResult = parseFloat(this.inputNum) * 1013.25;
                this.barResult = parseFloat(this.inputNum) * 1.01325;
                this.newtSquaResult = parseFloat(this.inputNum) * 101325;
                this.staAtmResult = parseFloat(this.inputNum);
                this.atmTechResult = parseFloat(this.inputNum) * 1.0332274528;
                this.miliMercyResult = parseFloat(this.inputNum) * 760.00210018;
                this.miliWaterResult = parseFloat(this.inputNum) * 10332.559008;
            }
        }
        else if (this.valueIn === 'Bar(bar)') {
            if (this.userPow != ''){
            this.pascalResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100000;
            this.kiloPascalResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
            this.heactResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
            this.barResult = parseFloat(Math.pow(this.inputNum, this.userPow));
            this.newtSquaResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100000;
            this.staAtmResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.9869232667;
            this.atmTechResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1.019716213;
            this.miliMercyResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 750.06375542;
            this.miliWaterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10197.442889;
            }
            else{
                this.pascalResult = parseFloat(this.inputNum) * 100000;
                this.kiloPascalResult = parseFloat(this.inputNum) * 100;
                this.heactResult = parseFloat(this.inputNum) * 1000;
                this.barResult = parseFloat(this.inputNum);
                this.newtSquaResult = parseFloat(this.inputNum) * 100000;
                this.staAtmResult = parseFloat(this.inputNum) * 0.9869232667;
                this.atmTechResult = parseFloat(this.inputNum) * 1.019716213;
                this.miliMercyResult = parseFloat(this.inputNum) * 750.06375542;
                this.miliWaterResult = parseFloat(this.inputNum) * 10197.442889;
            }
        }
        else if (this.valueIn === 'MillimeterWater(mmH2O)') {
            if (this.userPow != ''){
            this.pascalResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 9.80638;
            this.kiloPascalResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00980638;
            this.heactResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0980638;
            this.barResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000980638;
            this.newtSquaResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 9.80638;
            this.staAtmResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000967814;
            this.atmTechResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000999972;
            this.miliMercyResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0735541021;
            this.miliWaterResult = parseFloat(Math.pow(this.inputNum, this.userPow));
            }
            else{
                this.pascalResult = parseFloat(this.inputNum) * 9.80638;
                this.kiloPascalResult = parseFloat(this.inputNum) * 0.00980638;
                this.heactResult = parseFloat(this.inputNum) * 0.0980638;
                this.barResult = parseFloat(this.inputNum) * 0.0000980638;
                this.newtSquaResult = parseFloat(this.inputNum) * 9.80638;
                this.staAtmResult = parseFloat(this.inputNum) * 0.0000967814;
                this.atmTechResult = parseFloat(this.inputNum) * 0.0000999972;
                this.miliMercyResult = parseFloat(this.inputNum) * 0.0735541021;
                this.miliWaterResult = parseFloat(this.inputNum);
            }
        }
        else if (this.valueIn === 'MillimeterMercury(mmHg)') {
            if (this.userPow != ''){
            this.pascalResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 133.322;
            this.kiloPascalResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.133322;
            this.heactResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1.33322;
            this.barResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00133322;
            this.newtSquaResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 133.322;
            this.staAtmResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0013157858;
            this.atmTechResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 13.595434809;
            this.miliMercyResult = parseFloat(Math.pow(this.inputNum, this.userPow));
            this.miliWaterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000.275331;
            }
            else{
                this.pascalResult = parseFloat(this.inputNum) * 133.322;
                this.kiloPascalResult = parseFloat(this.inputNum) * 0.133322;
                this.heactResult = parseFloat(this.inputNum) * 1.33322;
                this.barResult = parseFloat(this.inputNum) * 0.00133322;
                this.newtSquaResult = parseFloat(this.inputNum) * 133.322;
                this.staAtmResult = parseFloat(this.inputNum) * 0.0013157858;
                this.atmTechResult = parseFloat(this.inputNum) * 13.595434809;
                this.miliMercyResult = parseFloat(this.inputNum);
                this.miliWaterResult = parseFloat(this.inputNum) * 10000.275331;
            }
        }
        else if (this.valueIn === 'Pascal(Pa)') {
            if (this.userPow != ''){
            this.pascalResult = parseFloat(Math.pow(this.inputNum, this.userPow));
            this.kiloPascalResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
            this.heactResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
            this.barResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00001;
            this.newtSquaResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1;
            this.staAtmResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000098692;
            this.atmTechResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000101972;
            this.miliMercyResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0075006376;
            this.miliWaterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.1019744289;
            }
            else{
                this.pascalResult = parseFloat(this.inputNum);
                this.kiloPascalResult = parseFloat(this.inputNum) * 0.001;
                this.heactResult = parseFloat(this.inputNum) * 0.01;
                this.barResult = parseFloat(this.inputNum) * 0.00001;
                this.newtSquaResult = parseFloat(this.inputNum) * 1;
                this.staAtmResult = parseFloat(this.inputNum) * 0.0000098692;
                this.atmTechResult = parseFloat(this.inputNum) * 0.0000101972;
                this.miliMercyResult = parseFloat(this.inputNum) * 0.0075006376;
                this.miliWaterResult = parseFloat(this.inputNum) * 0.1019744289;
            }
        }
        else if (this.valueIn === 'Kilopascal(kPa)') {
            if (this.userPow != ''){
            this.pascalResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
            this.kiloPascalResult = parseFloat(Math.pow(this.inputNum, this.userPow));
            this.heactResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10;
            this.barResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
            this.newtSquaResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
            this.staAtmResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0098692327;
            this.atmTechResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0101971621;
            this.miliMercyResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 7.5006375542;
            this.miliWaterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 101.97442889;
            }
            else{
                this.pascalResult = parseFloat(this.inputNum) * 1000;
                this.kiloPascalResult = parseFloat(this.inputNum);
                this.heactResult = parseFloat(this.inputNum) * 10;
                this.barResult = parseFloat(this.inputNum) * 0.01;
                this.newtSquaResult = parseFloat(this.inputNum) * 1000;
                this.staAtmResult = parseFloat(this.inputNum) * 0.0098692327;
                this.atmTechResult = parseFloat(this.inputNum) * 0.0101971621;
                this.miliMercyResult = parseFloat(this.inputNum) * 7.5006375542;
                this.miliWaterResult = parseFloat(this.inputNum) * 101.97442889;
            }
        }

        else if (this.valueIn === 'Hectopascal(hPa)') {
            if (this.userPow != ''){
            this.pascalResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
            this.kiloPascalResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.1;
            this.heactResult = parseFloat(Math.pow(this.inputNum, this.userPow));
            this.barResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
            this.newtSquaResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
            this.staAtmResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0009869233;
            this.atmTechResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0010197162;
            this.miliMercyResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.7500637554;
            this.miliWaterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10.197442889;
            }
            else{
                this.pascalResult = parseFloat(this.inputNum) * 100;
                this.kiloPascalResult = parseFloat(this.inputNum) * 0.1;
                this.heactResult = parseFloat(this.inputNum);
                this.barResult = parseFloat(this.inputNum) * 0.001;
                this.newtSquaResult = parseFloat(this.inputNum) * 100;
                this.staAtmResult = parseFloat(this.inputNum) * 0.0009869233;
                this.atmTechResult = parseFloat(this.inputNum) * 0.0010197162;
                this.miliMercyResult = parseFloat(this.inputNum) * 0.7500637554;
                this.miliWaterResult = parseFloat(this.inputNum) * 10.197442889;
            }
        }

        else if (this.valueIn === 'NewtonSquaremeter N/m2)') {
            if (this.userPow != ''){
            this.pascalResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1;
            this.kiloPascalResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
            this.heactResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
            this.barResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00001;
            this.newtSquaResult = parseFloat(Math.pow(this.inputNum, this.userPow));
            this.staAtmResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000098692;
            this.atmTechResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000101972;
            this.miliMercyResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0075006376;
            this.miliWaterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.1019744289;
            }
            else{
                this.pascalResult = parseFloat(this.inputNum) * 1;
                this.kiloPascalResult = parseFloat(this.inputNum) * 0.001;
                this.heactResult = parseFloat(this.inputNum) * 0.01;
                this.barResult = parseFloat(this.inputNum) * 0.00001;
                this.newtSquaResult = parseFloat(this.inputNum);
                this.staAtmResult = parseFloat(this.inputNum) * 0.0000098692;
                this.atmTechResult = parseFloat(this.inputNum) * 0.0000101972;
                this.miliMercyResult = parseFloat(this.inputNum) * 0.0075006376;
                this.miliWaterResult = parseFloat(this.inputNum) * 0.1019744289;
            }
        }

        else {
            this.atmTechResult = '';
            this.staAtmResult =  '';
            this.barResult =  '';
            this.miliWaterResult =  '';
            this.miliMercyResult = '';
            this.pascalResult = '';
            this.newtSquaResult = '';
            }
        }
    }
}
</script>

