import Vue from 'vue';
import Router from 'vue-router';
import ButtonDemo from '../src/components/Button/demo.js';
import BoxDemo from './components/Box/demo.vue';
import ModalDemo from './components/Modal/demo.vue';
import DividerDemo from './components/Divider/demo.vue';
import CellItemDemo from './components/CellItem/demo.js';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/elements/button',
      name: 'elements.button',
      component: ButtonDemo
    },
    {
      path: '/elements/box',
      name: 'elements.box',
      component: BoxDemo
    },
    {
      path: '/elements/modal',
      name: 'elements.modal',
      component: ModalDemo
    },
    {
      path: '/elements/divider',
      name: 'element.divider',
      component: DividerDemo
    },
    {
      path: '/elements/cell-item',
      name: 'element.cell.item',
      component: CellItemDemo
    }
  ]
});
