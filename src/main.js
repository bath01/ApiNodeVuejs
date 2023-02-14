import { createApp } from 'vue'
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "../src/assets/Css/Style.css";
import "vue-jquery/dist/jQuery 3.4.1";

import router from './router';

createApp(App).use(router).mount('#app')
