import { createApp } from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store/index'
import anime from 'animejs';

createApp(App)
.use(routes)
.use(store)
.use(anime)
.mount('#app')