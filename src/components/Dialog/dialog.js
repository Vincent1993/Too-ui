import { Component, Watch, Emit } from 'vue-property-decorator';
import PropTypes from 'vue-types';
import Modal from '../Modal';
import Button from '../Button';
import { Icon } from '../Icon';
import omit from '../_util/omit';

@Component({
  props: {
    prefixCls: PropTypes.string.def('to-dialog'),
    value: PropTypes.bool.def(false),
    title: PropTypes.string.def(''),
    icon: PropTypes.oneOfType([String, Object]).def(''),
    content: PropTypes.oneOfType([String, Object]).def(''),
    buttons: PropTypes.array.isRequired,
    closable: PropTypes.bool.def(true)
  }
})
export default class Dialog extends Modal {
  dialogShow = this.value;

  handleDialogHide() {
    this.$emit('hide');
  }
  hide() {
    this.dialogShow = false;
  }
  render() {
    return (
      <div class={this.prefixCls}>
        <Modal
          onInput={() => this.$emit('input', false)}
          onShow={() => this.$emit('show')}
          onHide={this.handleDialogHide}
          {...{
            props: {
              ...omit(this.$props, [
                'prefixCls',
                'title',
                'value',
                'buttons',
                'icon',
                'content'
              ]),
              maskClosable: false,
              visible: this.dialogShow
            }
          }}
        >
          <div class={`${this.prefixCls}-content`}>
            <div class={`${this.prefixCls}-body`}>
              {this.icon ? (
                <span class={[`${this.prefixCls}-icon`]}>
                  <Icon
                    scriptUrl="http://at.alicdn.com/t/font_1011143_puq4gu7a03s.js"
                    type={this.icon}
                    {...{ props: this.icon }}
                  />
                </span>
              ) : null}
              <h2 class={`${this.prefixCls}-title`}>
                {this.title || this.$slots.title}
              </h2>
              <div class={`${this.prefixCls}-text`}>
                {this.content || this.$slots.default}
              </div>
            </div>
            <footer class={`${this.prefixCls}-footer`}>
              <Button.Group addons>
                {this.buttons.map(buttonProps => (
                  <Button
                    {...{ props: buttonProps }}
                    block
                    onClick={() => {
                      buttonProps.handler && buttonProps.handler();
                      this.hide();
                    }}
                  >
                    {buttonProps.content}
                  </Button>
                ))}
              </Button.Group>
            </footer>
          </div>
        </Modal>
      </div>
    );
  }
}
