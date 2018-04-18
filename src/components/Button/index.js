import { Component, Vue } from 'vue-property-decorator'
import PropTypes from 'vue-types'
import './button.scss'

@Component({
  props: {
    type: PropTypes.oneOf(['primary', 'warn', 'danger', 'default']).def(
      'default'
    ),
    prefixCls: PropTypes.string.def('to-button'),
    size: PropTypes.oneOf(['small', 'default']).def('default'),
    icon: PropTypes.any,
    disabled: PropTypes.bool.def(false),
    inline: PropTypes.bool.def(false),
    outlined: PropTypes.bool.def(false),
    sticky: PropTypes.bool.def(false),
    loading: PropTypes.bool.def(false),
  },
})
class Button extends Vue {
  get classes() {
    return {
      [this.prefixCls]: true,
      [`${this.prefixCls}-${this.size}`]: true,
      [`${this.prefixCls}-${this.type}`]: true,
      [`${this.prefixCls}--outlined`]: this.outlined,
      [`${this.prefixCls}--inline`]:
        this.inline || this.$parent.inline || this.$parent.addons,
      [`${this.prefixCls}--disabled`]: this.disabled,
      [`${this.prefixCls}--sticky`]: this.sticky,
      [`${this.prefixCls}--loading`]: this.loading,
    }
  }

  get iconRender() {
    return this.icon || this.$slots.icon ? (
      <span class={`${this.prefixCls}-icon`}>
        {this.icon || this.$slots.icon}
      </span>
    ) : null
  }
  clickHandler(e) {
    e.preventDefault()
    e.stopPropagation()
    if (this.disabled) return
    this.$emit('to-button:click', e)
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
        {this.loading ? null : this.$slots.default}
      </a>
    )
  }
}

@Component({
  props: {
    sticky: PropTypes.bool.def(false),
    inline: PropTypes.bool.def(false),
    addons: PropTypes.bool.def(false),
  },
})
class ButtonGroup extends Vue {
  get classes() {
    return {
      'button-group': true,
      'button-group--sticky': this.sticky,
      'button-group--inline': this.inline,
      'button-group--addons': this.addons,
    }
  }
  render() {
    return <div class={this.classes}>{this.$slots.default}</div>
  }
}

export { Button, ButtonGroup }
