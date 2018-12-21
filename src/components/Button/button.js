import { Component, Vue } from 'vue-property-decorator';
import PropTypes from 'vue-types';
import './button.scss';

@Component({
  props: {
    type: PropTypes.oneOf(['primary', 'warn', 'error', 'default']).def(
      'default'
    ),
    prefixCls: PropTypes.string.def('to-button'),
    size: PropTypes.oneOf(['small', 'medium']).def('medium'),
    icon: PropTypes.any,
    disabled: PropTypes.bool.def(false),
    inline: PropTypes.bool.def(false),
    outline: PropTypes.bool.def(false),
    sticky: PropTypes.bool.def(false),
    round: PropTypes.bool.def(false),
    loading: PropTypes.bool.def(false),
    block: PropTypes.bool.def(false)
  }
})
class Button extends Vue {
  get classes() {
    return {
      [this.prefixCls]: true,
      [`${this.prefixCls}-${this.size}`]: true,
      [`${this.prefixCls}-${this.type}`]: true,
      outline: this.outline,
      inline: this.inline || this.$parent.inline || this.$parent.addons,
      disabled: this.disabled,
      sticky: this.sticky,
      round: this.round,
      loading: this.loading,
      block: this.block
    };
  }

  get iconRender() {
    return this.icon || this.$slots.icon ? (
      <span class={`${this.prefixCls}-icon`}>
        {this.icon || this.$slots.icon}
      </span>
    ) : null;
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
        class={this.classes}
        onClick={this.clickHandler.bind(this)}
        aria-disabled={this.disabled}
      >
        {this.iconRender}
        {this.$slots.default}
      </a>
    );
  }
}

export default Button;
