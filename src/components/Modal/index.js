import { Component, Vue, Emit, Watch } from 'vue-property-decorator';
import className from 'classnames';
import PropTypes from 'vue-types';

import './modal.scss';

@Component({
  props: {
    prefixCls: PropTypes.string.def('to-modal'),
    visible: PropTypes.bool.def(false),
    afterClose: PropTypes.func.def(() => {}),
    closable: PropTypes.bool.def(true),
    maskClosable: PropTypes.bool.def(true),
    transitionName: PropTypes.string.def(''),
    animated: PropTypes.bool.def(true),
    wrapStyle: PropTypes.object,
    contentStyle: PropTypes.object,
    maskStyle: PropTypes.object,
    transparent: PropTypes.bool.def(false),
    position: PropTypes.oneOf(['center', 'left', 'right', 'bottom', 'top']).def(
      'center'
    ),
    title: PropTypes.oneOfType(['object', 'string']),
    content: PropTypes.oneOfType(['object', 'string']),
    footer: PropTypes.oneOfType(['object', 'string'])
  }
})
export default class Modal extends Vue {
  contentShow = false;

  get modalAttributes() {
    const { visible, wrapStyle, prefixCls, position } = this;
    return {
      style: {
        display: visible ? 'flex' : 'none',
        ...wrapStyle
      },
      class: className(prefixCls, {
        [`${prefixCls}--${position}`]: true
      })
    };
  }

  get maskAttributes() {
    const { prefixCls, maskStyle } = this;
    return {
      style: { ...maskStyle },
      class: className({
        [`${prefixCls}-mask`]: true
      })
    };
  }

  get contentAttributes() {
    const { prefixCls, contentStyle } = this;
    return {
      style: { ...contentStyle },
      class: className({
        [`${prefixCls}-content`]: true
      })
    };
  }

  get animateType() {
    const { animated, transitionName, position } = this;
    if (!animated) {
      return '';
    }
    if (transitionName) {
      return transitionName;
    }
    switch (position) {
      case 'center':
        return 'to-zoom';
      case 'top':
        return 'to-slide-down';
      case 'bottom':
        return 'to-slide-up';
      case 'left':
        return 'to-slide-right';
      case 'right':
        return 'to-slide-left';
      default:
        return '';
    }
  }
  @Emit('onClose')
  closeModal() {
    this.$emit('update:visible', false);
    this.afterClose();

    if (this.destroyOnClose) {
      this.$destroy();
    }
  }

  maskClickHandler() {
    if (this.maskClosable) {
      this.contentShow = false;
    }
  }

  @Watch('visible', { immediate: true })
  modalShowHandler(show) {
    if (show) {
      this.contentShow = true;
    }
  }

  render() {
    return (
      <div {...this.modalAttributes}>
        <transition name="to-fade">
          {this.contentShow && !this.transparent ? (
            <div {...this.maskAttributes} onClick={this.maskClickHandler} />
          ) : null}
        </transition>

        <transition name={this.animateType} onAfterLeave={this.closeModal}>
          {this.contentShow ? (
            <div {...this.contentAttributes}>
              {this.title ? (
                <div class={`${this.prefixCls}-title`}>{this.title}</div>
              ) : null}
              {this.content || this.$slots.default}
              {this.footer ? (
                <div class={`${this.prefixCls}-footer`}>{this.footer}</div>
              ) : null}
            </div>
          ) : null}
        </transition>
      </div>
    );
  }
}
