<template>
<v-card class="px-5" flat >
    <v-container class="container" fluid v-if="removeComponent">
    <h1 class="text-center py-10 ">Time</h1>
    <v-row
        align="center"
        justify="center"
        class="pt-10"
    >
        <v-col xl="4" lg="4" sm="4">
        <v-text-field autofocus outlined label="Your Number" hint="Number only" placeholder="120" v-model="inputNum" :value="convertTime"></v-text-field>
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
                placeholder="Centimeter or cm"
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
        <v-text-field outlined v-model="microsecondResult" :value="convertTime" label="Microsecond(μs) "></v-text-field>
        </v-col>
        <v-col
        xl="4" lg="4" sm="4"
        >
        <v-text-field outlined v-model="millisecondResult" :value="convertTime" label="Millisecond(ms)"></v-text-field>
        </v-col>
        </v-row>
        <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="secondResult" :value="convertTime"
        label="Second(s)"></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="mimuteResult" :value="convertTime" label="Mimute(min)"></v-text-field>
        </v-col>
    </v-row>
    <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="hourdResult" :value="convertTime"
        label="Hour(h)"></v-text-field>
        </v-col>
        <v-col xl="4" lg="4" sm="4">
        <v-text-field outlined v-model="dayResult" :value="convertTime" label="Day"></v-text-field>
        </v-col>
    </v-row>
    <v-row justify="center">
        <v-col xl="4" lg="4" sm="4" class="d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex" >
        <v-text-field outlined v-model="weekResult" :value="convertTime" label="Week"></v-text-field>
        </v-col>
        <v-col cols="5" class="d-flex d-sm-none">
        <v-text-field outlined v-model="weekResult" :value="convertTime" label="Week"></v-text-field>
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
        itemsIn: [ 'Microsecond(μs)', 'Millisecond(ms)', 'Second(s)', 'Mimute(min)', 'Hour(h)', 'Day', 'Week'],
        valueIn: '',
        userPow: '',
        removeComponent: true,
        addComponent: true,
        microsecondResult: '',
        millisecondResult: '',
        mimuteResult: '',
        secondResult: '',
        hourdResult: '',
        dayResult: '',
        weekResult: '',
        }
    },
    computed: {
        convertTime(){
            if (this.valueIn === 'Microsecond(μs)') {
                if (this.userPow != ''){
                    this.microsecondResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                    this.millisecondResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 1000000;
                    this.mimuteResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 60000000;
                    this.secondResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
                    this.hourdResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 3600000000;
                    this.dayResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 86400000000;
                    this.weekResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 604800000000;
                }
                else {
                    this.microsecondResult = parseFloat(this.inputNum);
                    this.millisecondResult = parseFloat(this.inputNum) / 1000000;
                    this.secondResult = parseFloat(this.inputNum) * 1000;
                    this.mimuteResult = parseFloat(this.inputNum) / 60000000;
                    this.hourdResult = parseFloat(this.inputNum) / 3600000000;
                    this.dayResult = parseFloat(this.inputNum) / 86400000000;
                    this.weekResult = parseFloat(this.inputNum) / 604800000000;
                }
            }

            else if (this.valueIn === 'Millisecond(ms)') {
                if (this.userPow != ''){
                    this.microsecondResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
                    this.millisecondResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                    this.mimuteResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 60000;
                    this.secondResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 1000;
                    this.hourdResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 3600000;
                    this.dayResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 86400000;
                    this.weekResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 604800000;
                }
                else {
                    this.microsecondResult = parseFloat(this.inputNum) * 1000;
                    this.millisecondResult = parseFloat(this.inputNum);
                    this.mimuteResult = parseFloat(this.inputNum) / 60000;
                    this.secondResult = parseFloat(this.inputNum) / 1000;
                    this.hourdResult = parseFloat(this.inputNum) / 3600000;
                    this.dayResult = parseFloat(this.inputNum) / 86400000;
                    this.weekResult = parseFloat(this.inputNum) / 604800000;
                    
                }
            }

            else if (this.valueIn === 'Second(s)') {
                if (this.userPow != ''){
                    this.microsecondResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
                    this.millisecondResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000;
                    this.mimuteResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 60;
                    this.secondResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                    this.hourdResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 3600;
                    this.dayResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 86400;
                    this.weekResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 604800;
                }
                else {
                    this.microsecondResult = parseFloat(this.inputNum) * 1000000;
                    this.millisecondResult = parseFloat(this.inputNum) * 1000;
                    this.mimuteResult = parseFloat(this.inputNum) / 60;
                    this.secondResult = parseFloat(this.inputNum);
                    this.hourdResult = parseFloat(this.inputNum) / 3600;
                    this.dayResult = parseFloat(this.inputNum) / 86400;
                    this.weekResult = parseFloat(this.inputNum) / 604800;
                    
                }
            }
            else if (this.valueIn === 'Mimute(min)') {
                if (this.userPow != ''){
                    this.microsecondResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 60000000;
                    this.millisecondResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 60000;
                    this.mimuteResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                    this.secondResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 60;
                    this.hourdResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 60;
                    this.dayResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 1440;
                    this.weekResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 10080;
                }
                else {
                    this.microsecondResult = parseFloat(this.inputNum) * 60000000;
                    this.millisecondResult = parseFloat(this.inputNum) * 60000;
                    this.mimuteResult = parseFloat(this.inputNum);
                    this.secondResult = parseFloat(this.inputNum) * 60;
                    this.hourdResult = parseFloat(this.inputNum) / 60;
                    this.dayResult = parseFloat(this.inputNum) / 1440;
                    this.weekResult = parseFloat(this.inputNum) / 10080;
                    
                }
            }
            else if (this.valueIn === 'Hour(h)') {
                if (this.userPow != ''){
                    this.microsecondResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 3600000000;
                    this.millisecondResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 3600000;
                    this.mimuteResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 60;
                    this.secondResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 3600;
                    this.hourdResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                    this.dayResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 24;
                    this.weekResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 168;
                }
                else {
                    this.microsecondResult = parseFloat(this.inputNum) * 3600000000;
                    this.millisecondResult = parseFloat(this.inputNum) * 3600000;
                    this.mimuteResult = parseFloat(this.inputNum) * 60;
                    this.secondResult = parseFloat(this.inputNum) * 3600;
                    this.hourdResult = parseFloat(this.inputNum);
                    this.dayResult = parseFloat(this.inputNum) / 24;
                    this.weekResult = parseFloat(this.inputNum) / 168;
                    
                }
            }

            else if (this.valueIn === 'Day') {
                if (this.userPow != ''){
                    this.microsecondResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 86400000000;
                    this.millisecondResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 86400000;
                    this.mimuteResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1440;
                    this.secondResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 86400;
                    this.hourdResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 24;
                    this.dayResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                    this.weekResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 7;
                }
                else {
                    this.microsecondResult = parseFloat(this.inputNum) * 86400000000;
                    this.millisecondResult = parseFloat(this.inputNum) * 86400000;
                    this.mimuteResult = parseFloat(this.inputNum) * 1440;
                    this.secondResult = parseFloat(this.inputNum) * 86400;
                    this.hourdResult = parseFloat(this.inputNum) * 24;
                    this.dayResult = parseFloat(this.inputNum);
                    this.weekResult = parseFloat(this.inputNum) / 7;
                    
                }
            }

            else if (this.valueIn === 'Week') {
                if (this.userPow != ''){
                    this.microsecondResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 604800000000;
                    this.millisecondResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 604800000;
                    this.mimuteResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10080;
                    this.secondResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 604800;
                    this.hourdResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 168;
                    this.dayResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 7;
                    this.weekResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                }
                else {
                    this.microsecondResult = parseFloat(this.inputNum) * 604800000000;
                    this.millisecondResult = parseFloat(this.inputNum) * 604800000;
                    this.mimuteResult = parseFloat(this.inputNum) * 10080;
                    this.secondResult = parseFloat(this.inputNum) * 604800;
                    this.hourdResult = parseFloat(this.inputNum) * 168;
                    this.dayResult = parseFloat(this.inputNum) * 7;
                    this.weekResult = parseFloat(this.inputNum);
                    
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



