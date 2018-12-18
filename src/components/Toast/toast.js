import { Component } from 'vue-property-decorator';
import PropTypes from 'vue-types';
import classNames from 'classnames';
import Modal from '../Modal/';
import CustomFontAwesomeIcon from '../Icon/FontAwesomeIcon';

@Component({
  props: {
    duration: PropTypes.integer.def(0),
    icon: PropTypes.string.def(''),
    content: PropTypes.oneOfType([String, Object]),
    hasMask: PropTypes.bool.def(false),
    onClose: PropTypes.func.def(() => {}),
    uid: PropTypes.number.def(Date.now()),
    animate: PropTypes.oneOf(['spin', 'pulse'])
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
    if (this.toastVisible && this.duration) {
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
      <div class={classNames(this.prefixCls, [this.position])} id={this.uid}>
        <Modal
          ref="modal"
          visible={this.toastVisible}
          onHide={this.handleModalHide}
          transparent={!this.hasMask}
          closable={false}
          maskClosable={false}
          destroyOnClose
          position={this.position}
          contentStyle={this.contentStyle}
        >
          {this.icon ? (
            <span class={`${this.prefixCls}-icon`}>
              <CustomFontAwesomeIcon icon={this.icon} animate={this.animate} />
            </span>
          ) : null}
          <div class={`${this.prefixCls}-text`}>{this.content}</div>
        </Modal>
      </div>
    );
  }
}
