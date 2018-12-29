import { Component, Vue } from 'vue-property-decorator';
import PropTypes from 'vue-types';

@Component({
  props: {
    prefixCls: PropTypes.string.def('to-switch'),
    value: PropTypes.bool.def(false),
    disabled: PropTypes.bool.def(false)
  }
})
export default class ToSwitch extends Vue {
  onChange(e) {
    if (this.disabled) return;
    this.$emit('input', !this.value);
    this.$emit('change', e, this);
  }
  render() {
    return (
      <div
        class={{ [this.prefixCls]: true, active: this.value }}
        disabled={this.disabled}
        onClick={this.onChange}
      />
    );
  }
}
