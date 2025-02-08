import { createApp } from 'vue'
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import router from './router'

import './style.css'
import './assets/tailwind.css'
import App from './App.vue'

const app = createApp(App);

app.component("dotlottie-vue", DotLottieVue);

app.use(router);

app.mount("#app");
