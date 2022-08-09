import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
            anchor: 'black', // defaults to 'primary', overrided to another color
            primary: '#008585',
            },
        },
        },
});
