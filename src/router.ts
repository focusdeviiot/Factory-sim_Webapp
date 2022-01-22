import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Main from './components/HelloWorld.vue'
import About from './views/About.vue'
const routes = [
{
  path: '/',
  name: 'HelloWorld',
  component: Home
},
{
  path: '/main',
  name: 'Main',
  component: Main
},
{
    path: '/about',
    name: 'About',
    component: About
}
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
export default router