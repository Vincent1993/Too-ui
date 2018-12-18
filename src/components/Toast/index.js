import Vue from 'vue';
import ToastInstance from './toast';
import './toast.scss';

const Toast = ({
  parentNode = document.body,
  prefixCls = 'to-toast',
  destroyOnClose = false,
  ...restOptions
}) => {
  let vm = Toast._instance;

  if (!vm || destroyOnClose) {
    const ToastConstructor = Vue.extend(ToastInstance);

    vm = Toast._instance = new ToastConstructor({
      propsData: {
        prefixCls,
        destroyOnClose,
        ...restOptions
      }
    }).$mount();
  }

  if (!vm.$el.parentNode) {
    parentNode.appendChild(vm.$el);
  }
  Object.entries(restOptions).forEach(([key, value]) => {
    vm[key] = value;
  });
  vm.toastVisible = true;
  vm.fire();

  return vm;
};

Toast._instance = null;

Toast.hide = () => {
  const ToastContructor = Vue.extend(ToastInstance);
  if (Toast._instance instanceof ToastContructor && Toast._instance.visible) {
    Toast._instance.hide();
  }
};

Toast.info = (content = '', duration = 3000, transparent = false) => {
  return Toast({
    icon: '',
    content,
    duration,
    transparent
  });
};

Toast.succeed = (content = '', duration = 3000, transparent = false) => {
  return Toast({
    icon: 'check-circle',
    content,
    duration,
    transparent
  });
};

Toast.fail = (content = '', duration = 3000, transparent = false) => {
  return Toast({
    icon: 'times-circle',
    content,
    duration,
    transparent
  });
};

Toast.loading = (content = '', duration = 3000, transparent = false) => {
  return Toast({
    icon: 'spinner',
    animate: 'spin',
    content,
    duration,
    transparent
  });
};
export { Toast };
export default Toast;
