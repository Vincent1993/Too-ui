import { Component, Vue, Watch } from 'vue-property-decorator';
import PropTypes from 'vue-types';
import { addClass, removeClass } from '../_util/dom';
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
    destroyOnClose: PropTypes.bool.def(true),
    position: PropTypes.oneOf(['center', 'left', 'right', 'bottom', 'top']).def('center'),
    unclosableAnimated: PropTypes.bool.def(true),
  },
})
export default class Modal extends Vue {
  modalShow = false;
  modalContentShow = false;

  get modalAttributes() {
    const { modalShow, wrapStyle, prefixCls, position } = this;
    return {
      style: {
        display: modalShow ? 'flex' : 'none',
        ...wrapStyle,
      },
      class: {
        [prefixCls]: true,
        [`${prefixCls}--${position}`]: true,
      },
    };
  }

  get maskAttributes() {
    const { prefixCls, maskStyle, transparent } = this;

    return {
      style: { display: transparent ? 'none' : 'block', ...maskStyle },
      class: { [`${prefixCls}-mask`]: true },
    };
  }

  get contentAttributes() {
    const { prefixCls, contentStyle } = this;
    return {
      style: { ...contentStyle },
      class: { [`${prefixCls}-content`]: true },
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
      return this.closeModal();
    }
    if (this.unclosableAnimated) {
      addClass(this.$el.lastChild, 'shake');

      setTimeout(() => {
        removeClass(this.$el.lastChild, 'shake');
      }, 500);
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
      <div {...this.modalAttributes}>
        <transition name="to-fade">
          {this.modalContentShow ? (
            <div {...this.maskAttributes} onClick={this.maskClickHandler} />
          ) : null}
        </transition>

        <transition name={this.animateType} onAfterLeave={this.afterModalContentClose}>
          {this.modalContentShow ? (
            <div {...this.contentAttributes}>{this.$slots.default}</div>
          ) : null}
        </transition>
      </div>
    );
  }
}
