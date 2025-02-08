import { createApp } from 'vue'
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

import './style.css'
import './assets/tailwind.css'
import App from './App.vue'

const app = createApp(App);

app.component("dotlottie-vue", DotLottieVue);

app.mount("#app");
