import { Component, Vue, Watch } from 'vue-property-decorator';
import className from 'classnames';
import PropTypes from 'vue-types';

@Component({
  props: {
    prefixCls: PropTypes.string.def('to-modal'),
    visible: PropTypes.bool.def(false),
    closable: PropTypes.bool.def(true),
    maskClosable: PropTypes.bool.def(true),
    transitionName: PropTypes.string.def(''),
    animated: PropTypes.bool.def(true),
    wrapStyle: PropTypes.object,
    contentStyle: PropTypes.object,
    maskStyle: PropTypes.object,
    transparent: PropTypes.bool.def(false),
    destroyOnClose: PropTypes.bool.def(false),
    position: PropTypes.oneOf(['center', 'left', 'right', 'bottom', 'top']).def(
      'center'
    )
  }
})
export default class Modal extends Vue {
  modalShow = false;
  modalContentShow = false;

  get popupAttributes() {
    const { modalShow, wrapStyle, prefixCls, position } = this;
    return {
      style: {
        display: modalShow ? 'flex' : 'none',
        ...wrapStyle
      },
      class: className(prefixCls, {
        [`${prefixCls}--${position}`]: true
      })
    };
  }

  get maskAttributes() {
    const { prefixCls, maskStyle, transparent } = this;

    return {
      style: { display: transparent ? 'none' : 'block', ...maskStyle },
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
  afterModalContentClose() {
    this.$emit('update:visible', false);
    this.$emit('input', false);
    this.$emit('hide');

    this.modalShow = false;
  }
  closeModal() {
    this.modalContentShow = false;
  }

  maskClickHandler() {
    if (this.maskClosable) {
      this.closeModal();
    }
  }
  showModal() {
    this.modalShow = true;

    this.$nextTick(() => {
      this.modalContentShow = true;
      this.$emit('show');
    });
  }
  @Watch('visible', { immediate: true })
  modalShowHandler(show) {
    if (show) {
      if (this.animated) {
        setTimeout(() => {
          this.showModal();
        }, 50);
      } else {
        this.showModal();
      }
    } else {
      this.closeModal();
    }
  }

  render() {
    return (
      <div {...this.popupAttributes}>
        <transition name="to-fade">
          {this.modalContentShow ? (
            <div {...this.maskAttributes} onClick={this.maskClickHandler} />
          ) : null}
        </transition>

        <transition
          name={this.animateType}
          onAfterLeave={this.afterModalContentClose}
        >
          {this.modalContentShow ? (
            <div {...this.contentAttributes}>{this.$slots.default}</div>
          ) : null}
        </transition>
      </div>
    );
  }
}
