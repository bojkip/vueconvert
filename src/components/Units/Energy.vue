<template>
<v-card class="px-5" flat >
    <v-container class="container" fluid v-if="removeComponent">
    <h1 class="text-center py-10">Energy</h1>
    <v-row
        align="center"
        justify="center"
        class="pt-10"
        
    >
        <v-col xl="4" lg="4" sm="4">
        <v-text-field autofocus color="#008585" outlined label="Your Number" hint="Number only" placeholder="120" v-model="inputNum" :value="convertEnergy"></v-text-field>
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
        <v-text-field outlined color="#008585" v-model="jouleResult" :value="convertEnergy" label="Joule(J) "></v-text-field>
        </v-col>
        <v-col
        xl="4" lg="4" sm="4"
        >
        <v-text-field outlined color="#008585" v-model="kilojuleResult" :value="convertEnergy" label="Kilojule(kJ) "></v-text-field>
        </v-col>
        </v-row>
        <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined color="#008585" v-model="kilowattHourResult" :value="convertEnergy"
        label="Kilowatt-hour(kWh) "></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined color="#008585" v-model="wattHourResult" :value="convertEnergy" label="Watt-hour(Wh)"></v-text-field>
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
        itemsIn: [ 'Joule(J)', 'Kilojule(kJ)', 'Kilowatt-hour(kWh)', 'Watt-hour(Wh)'],
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
        convertEnergy(){
            if(this.inputNum === ''){
                this.kilojuleResult = '' ;
                this.kilowattHourResult = '' ;
                this.wattHourResult = '' ;
                this.jouleResult = '' ;
            }
            else if (this.valueIn === 'Joule(J)') {
                if (this.userPow != ''){
                   this.kilojuleResult =  parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
                    this.kilowattHourResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 3600000;
                    this.wattHourResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0002777778;
                    this.jouleResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                }
                else {
                    this.kilojuleResult =  parseFloat(this.inputNum) * 0.001;
                    this.kilowattHourResult = parseFloat(this.inputNum) / 3600000;
                    this.wattHourResult = parseFloat(this.inputNum) * 0.0002777778;
                    this.jouleResult = parseFloat(this.inputNum);
                }
            }

            else if (this.valueIn === 'Kilojule(kJ)') {
                if (this.userPow != ''){
                    this.kilojuleResult =  parseFloat(Math.pow(this.inputNum, this.userPow));
                    this.kilowattHourResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0002777778;
                    this.wattHourResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.2777777778;
                    this.jouleResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
                }
                else {
                    this.kilojuleResult =  parseFloat(this.inputNum);
                    this.kilowattHourResult = parseFloat(this.inputNum) * 0.0002777778;
                    this.wattHourResult = parseFloat(this.inputNum) * 0.2777777778;
                    this.jouleResult = parseFloat(this.inputNum) * 1000;
                }
            }

            else if (this.valueIn === 'Kilowatt-hour(kWh)') {
                if (this.userPow != ''){
                    this.kilojuleResult =  parseFloat(Math.pow(this.inputNum, this.userPow)) * 3600;
                    this.kilowattHourResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                    this.wattHourResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
                    this.jouleResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 3600000;
                }
                else {
                    this.kilojuleResult =  parseFloat(this.inputNum) * 3600;
                    this.kilowattHourResult = parseFloat(this.inputNum);
                    this.wattHourResult = parseFloat(this.inputNum) * 1000;
                    this.jouleResult = parseFloat(this.inputNum) * 3600000;
                }
            }

            else if (this.valueIn === 'Watt-hour(Wh)') {
                if (this.userPow != ''){
                    this.kilojuleResult =  parseFloat(Math.pow(this.inputNum, this.userPow)) * 3.6;
                    this.kilowattHourResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001;
                    this.wattHourResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                    this.jouleResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 3600;
                }
                else {
                    this.kilojuleResult =  parseFloat(this.inputNum) * 3.6;
                    this.kilowattHourResult = parseFloat(this.inputNum) * 0.001;
                    this.wattHourResult = parseFloat(this.inputNum);
                    this.jouleResult = parseFloat(this.inputNum) * 3600;
                }
            }

            else{
                this.kilojuleResult = '' ;
                this.kilowattHourResult = '' ;
                this.wattHourResult = '' ;
                this.jouleResult = '' ;
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


