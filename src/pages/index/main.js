import Vue from 'vue'
import App from './index'


import Atmui from '@/lib/index.js';
console.log( Atmui )
Vue.use( Atmui );

const app = new Vue(App)
app.$mount()
