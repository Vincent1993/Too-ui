import { Component, Vue, Watch } from 'vue-property-decorator';
import PropTypes from 'vue-types';
import Modal from '../Modal';
import { Icon } from '../Icon';

@Component({
  props: {
    prefixCls: PropTypes.string.def('to-landscape'),
    value: PropTypes.bool.def(false),
    maskClosable: PropTypes.bool.def(true),
    transparent: PropTypes.bool.def(false),
    closePosition: PropTypes.oneOf(['bottom', 'top-right']).def('bottom'),
  },
})
export default class Landscape extends Vue {
  landscapeVisible = this.value;

  hide() {
    this.landscapeVisible = false;
  }

  @Watch('value')
  visibleChange(visible) {
    this.landscapeVisible = visible;
  }
  render() {
    return (
      <div class={this.prefixCls}>
        <Modal
          visible={this.landscapeVisible}
          maskClosable={this.maskClosable}
          transparent={this.transparent}
          unclosableAnimated={false}
          onInput={() => this.$emit('input', false)}
          onShow={() => this.$emit('show')}
          onHide={() => this.$emit('hide')}
        >
          <div class={`${this.prefixCls}-body`}>
            {this.closePosition === 'top-right' ? (
              <Icon
                class={[
                  `${this.prefixCls}-close`,
                  this.closePosition,
                  this.transparent ? 'dark' : '',
                ]}
                scriptUrl="http://at.alicdn.com/t/font_1011143_vmdzjzjf0q.js"
                type="close-circle"
                size="20"
                onClick={this.hide}
              />
            ) : null}
            <div class={`${this.prefixCls}-content`}>{this.$slots.default}</div>
            {this.closePosition === 'bottom' ? (
              <Icon
                class={[
                  `${this.prefixCls}-close`,
                  this.closePosition,
                  this.transparent ? 'dark' : '',
                ]}
                scriptUrl="http://at.alicdn.com/t/font_1011143_vmdzjzjf0q.js"
                type="close-circle"
                size="20"
                onClick={this.hide}
              />
            ) : null}
          </div>
        </Modal>
      </div>
    );
  }
}
