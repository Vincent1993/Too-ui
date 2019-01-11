import Vue from 'vue';
import Dialog from './dialog';

const noop = () => {};

const dialogInstances = [];

const generate = ({
  title = '',
  icon = '',
  content = '',
  closable = false,
  buttons = [],
  parentNode = document.body,
  destroyOnClose = true
}) => {
  const DialogConstructor = Vue.extend(Dialog);
  const vm = new DialogConstructor({
    propsData: {
      value: true,
      title,
      icon,
      content,
      closable,
      buttons,
      destroyOnClose
    }
  }).$mount();
  if (!vm.$el.parentNode) {
    parentNode.appendChild(vm.$el);
  }
  dialogInstances.push(vm);
  vm.$on('input', val => {
    if (!val) {
      vm.value = false;
    }
  });
  vm.$on('hide', () => {
    const index = dialogInstances.indexOf(vm);
    if (index >= 0) {
      dialogInstances.splice(index, 1);
    }
    vm.$destroy();
    document.body.removeChild(vm.$el);
  });

  return vm;
};

Dialog.confirm = ({
  title = '',
  icon = '',
  content = '',
  cancelText = '取消',
  confirmText = '确定',
  closable = false,
  onConfirm = noop,
  onCancel = noop,
  confirmButtonProps = {},
  cancelButtonProps = {}
}) => {
  const vm = generate({
    title,
    icon,
    content,
    closable,
    buttons: [
      {
        content: cancelText,
        handler: onCancel,
        type: 'secondary',
        outline: true,
        ...cancelButtonProps
      },
      {
        content: confirmText,
        type: 'primary',
        outline: true,
        handler: onConfirm,
        ...confirmButtonProps
      }
    ]
  });

  return vm;
};

Dialog.alert = ({
  title = '',
  icon = '',
  content = '',
  confirmText = '确定',
  closable = false,
  onConfirm = noop,
  confirmButtonProps = {}
}) => {
  const vm = generate({
    title,
    icon,
    content,
    closable,
    buttons: [
      {
        content: confirmText,
        type: 'primary',
        outline: true,
        handler: onConfirm,
        ...confirmButtonProps
      }
    ]
  });

  return vm;
};

Dialog.warn = props => {
  return Dialog.alert({
    ...props,
    icon: 'warn-circle-fill',
    confirmButtonProps: { type: 'default' }
  });
};

Dialog.succeed = props => {
  return Dialog.alert({
    ...props,
    icon: { type: 'success-circle-fill', fill: '#75c940' }
  });
};

Dialog.failed = props => {
  return Dialog.alert({
    ...props,
    icon: {
      type: 'close-cirlce',
      fill: '#ff4f3e'
    },
    confirmButtonProps: { type: 'default' }
  });
};

export default Dialog;
