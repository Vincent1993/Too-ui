import components from './components/'

const install = function(Vue) {
  if (install.installed) {
    return;
  }
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
};

// auto install by cdn
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
};
