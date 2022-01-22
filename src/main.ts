import { createApp } from 'vue'
import App from './App.vue'
import routes from './router'
import anime from 'animejs';

createApp(App)
.use(routes)
.mount('#app')

