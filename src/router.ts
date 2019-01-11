import Vue from 'vue';
import Router from 'vue-router';
import ButtonDemo from '../src/components/Button/demo.js';
import ModalDemo from './components/Modal/demo.js';
import CellItemDemo from './components/CellItem/demo.js';
import ToastDemo from '@/components/Toast/demo.js';
import DialogDemo from '@/components/Dialog/demo.js';
import FieldDemo from '@/components/Field/demo.js';
import SwitchDemo from '@/components/Switch/demo.js';
import LandscapeDemo from '@/components/Landscape/demo.js';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/elements/button',
      component: ButtonDemo
    },
    {
      path: '/elements/dialog',
      component: DialogDemo
    },
    {
      path: '/elements/toast',
      component: ToastDemo
    },
    {
      path: '/elements/modal',
      component: ModalDemo
    },
    {
      path: '/elements/field',
      component: FieldDemo
    },
    {
      path: '/elements/cell-item',
      component: CellItemDemo
    },
    {
      path: '/elements/switch',
      component: SwitchDemo
    },
    {
      path: '/elements/landscape',
      component: LandscapeDemo
    }
  ]
});
