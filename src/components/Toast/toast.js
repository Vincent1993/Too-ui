import { Component } from 'vue-property-decorator';
import PropTypes from 'vue-types';
import Modal from '../Modal/';
import { Icon } from '../Icon/';

@Component({
  props: {
    duration: PropTypes.integer.def(3000),
    icon: PropTypes.oneOfType([Object, String]).def(''),
    content: PropTypes.oneOfType([String, Object]),
    transparent: PropTypes.bool.def(true),
    onClose: PropTypes.func.def(() => {}),
    uid: PropTypes.number.def(Date.now()),
    animate: PropTypes.oneOf(['spin', 'pulse']),
    manualClose: PropTypes.bool.def(false)
  }
})
export default class Toast extends Modal {
  toastVisible = false;
  handleModalHide() {
    this.toastVisible = false;
    if (this.destroyOnClose) {
      this.$destroy();
      document.body.removeChild(this.$el);
    }
    if (this.onClose && this.duration) {
      this.onClose();
    }
  }

  hide() {
    this.toastVisible = false;
  }

  fire() {
    if (this.$_timer) {
      clearTimeout(this.$_timer);
    }
    if (this.toastVisible && this.duration && !this.manualClose) {
      this.$_timer = setTimeout(() => {
        this.hide();
      }, this.duration);
    }
  }

  beforeDestroy() {
    if (this.$_timer) {
      clearTimeout(this.$_timer);
    }
  }
  render() {
    return (
      <div class={[this.prefixCls, [this.position]]} id={this.uid}>
        <Modal
          ref="modal"
          visible={this.toastVisible}
          onHide={this.handleModalHide}
          transparent={this.transparent}
          unclosableAnimated={false}
          closable={false}
          maskClosable={false}
          destroyOnClose
          position={this.position}
          contentStyle={this.contentStyle}
        >
          {this.icon ? (
            <div class={`${this.prefixCls}-icon`}>
              <Icon
                scriptUrl="http://at.alicdn.com/t/font_1011143_vmdzjzjf0q.js"
                type={this.icon}
                {...{ props: this.icon }}
              />
            </div>
          ) : null}
          <div class={`${this.prefixCls}-text`}>{this.content}</div>
          {this.manualClose ? (
            <div class={`${this.prefixCls}-close`} onClick={this.hide}>
              <Icon
                scriptUrl="http://at.alicdn.com/t/font_1011143_vmdzjzjf0q.js"
                type="close-circle"
                fill="#fff"
                size="20"
              />
            </div>
          ) : null}
        </Modal>
      </div>
    );
  }
}
