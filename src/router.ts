import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ButtonDemo from '../src/components/Button/demo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/elements/button',
      name: 'elements.button',
      component: ButtonDemo,
    },
  ],
})