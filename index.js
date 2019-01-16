/* eslint-disable */
import './src/styles/index.scss';

import Button from './src/components/Button/';

export const components = {
  Button,
};

const install = Vue => {
  if (!Vue || install.installed) {
    return;
  }
  const componentsNames = Object.keys(components);
  componentsNames.forEach(name => {
    const component = components[name];
    component.name && Vue.component(component.name, component);
  });
};

export { Button };

export default {
  install,
};
