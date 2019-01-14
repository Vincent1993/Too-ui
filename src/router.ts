import Vue from 'vue';
import Router from 'vue-router';
import components from './components/components.json';

function routerBuild(component: { name: string; fileName: string }) {
  return {
    path: `/elements/${component.name}`,
    component: () => import(`@/components/${component.fileName}/demo.js`)
  };
}
Vue.use(Router);

const routes = components.map(routerBuild);
export default new Router({
  routes
});
