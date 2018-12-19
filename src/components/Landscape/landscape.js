import { Component, Vue, Watch } from 'vue-property-decorator';
import PropTypes from 'vue-types';
import Modal from '../Modal';
import { FontAwesomeIcon } from '../Icon';

@Component({
  props: {
    prefixCls: PropTypes.string.def('to-landscape'),
    value: PropTypes.bool.def(false),
    maskClosable: PropTypes.bool.def(true),
    transparent: PropTypes.bool.def(false),
    closePosition: PropTypes.oneOf(['bottom', 'top-right', 'top-left']).def(
      'bottom'
    )
  }
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
          onInput={() => this.$emit('input', false)}
          onShow={() => this.$emit('show')}
          onHide={() => this.$emit('hide')}
        >
          <div class={`${this.prefixCls}-body`}>
            <div class={`${this.prefixCls}-content`}>{this.$slots.default}</div>
            <span
              class={[
                `${this.prefixCls}-close`,
                this.closePosition,
                this.transparent ? 'dark' : ''
              ]}
              onClick={this.hide}
            >
              <FontAwesomeIcon icon="times" size="2x" />
            </span>
          </div>
        </Modal>
      </div>
    );
  }
}
