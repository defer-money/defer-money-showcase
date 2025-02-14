import { createApp } from 'vue'
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import router from './router'
import VueFeather from 'vue-feather';

import './style.css'
import './tailwind.css'
import App from './App.vue'

const app = createApp(App);

app.component("dotlottie-vue", DotLottieVue);
app.component(VueFeather.name!, VueFeather);

app.use(router);

app.mount("#app");
