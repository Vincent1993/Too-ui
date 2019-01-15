import { Component, Vue } from 'vue-property-decorator';
import PropTypes from 'vue-types';

@Component({
  props: {
    type: PropTypes.oneOf(['primary', 'warn', 'error', 'secondary']).def('primary'),
    prefixCls: PropTypes.string.def('to-button'),
    size: PropTypes.oneOf(['small', 'medium']).def('medium'),
    subtle: PropTypes.bool.def(false),
    inactive: PropTypes.bool.def(false),
    disabled: PropTypes.bool.def(false),
    inline: PropTypes.bool.def(false),
    outline: PropTypes.bool.def(false),
    sticky: PropTypes.bool.def(false),
    round: PropTypes.bool.def(false),
    loading: PropTypes.bool.def(false),
    block: PropTypes.bool.def(false),
  },
})
class Button extends Vue {
  get classes() {
    return {
      [this.prefixCls]: true,
      [this.type]: true,
      [this.size]: true,
      subtle: this.subtle,
      outline: this.outline,
      inline: this.inline || this.$parent.inline || this.$parent.addons,
      sticky: this.sticky,
      round: this.round,
      loading: this.loading,
      block: this.block,
      inactive: this.inactive,
      disabled: this.disabled,
    };
  }

  clickHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.disabled || this.loading) return;
    this.$emit('click', e);
  }

  render() {
    return (
      <a
        role="button"
        disabled={this.disabled}
        class={this.classes}
        onClick={this.clickHandler.bind(this)}
        aria-disabled={this.disabled}
      >
        {this.loading ? null : this.$slots.default}
      </a>
    );
  }
}

export default Button;
