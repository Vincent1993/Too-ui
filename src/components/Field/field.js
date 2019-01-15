import { Component, Vue } from 'vue-property-decorator';
import PropTypes from 'vue-types';

@Component({
  props: {
    prefixCls: PropTypes.string.def('to-field'),
    title: PropTypes.oneOfType([Object, String]).def(''),
    brief: PropTypes.oneOfType([Object, String]).def(''),
    footer: PropTypes.oneOfType([Object, String]).def(''),
    disabled: PropTypes.bool.def(false),
    fullWidth: PropTypes.bool.def(false),
  },
})
export default class Field extends Vue {
  get headerRender() {
    const { title, brief } = this.$props;
    const { header } = this.$slots;
    return header || title || brief ? (
      <header class={`${this.prefixCls}-header`} onClick={this.handleClick}>
        {title ? <div class={`${this.prefixCls}-title`}>{title}</div> : null}
        {header}
        {brief ? <div class={`${this.prefixCls}-brief`}>{brief}</div> : null}
      </header>
    ) : null;
  }

  get mainRender() {
    return <main class={`${this.prefixCls}-main`}>{this.$slots.default}</main>;
  }

  // slot's footer weight bigger than props's footer
  get footerRender() {
    return this.$slots.footer || this.$props.footer ? (
      <footer class={`${this.prefixCls}-footer`}>{this.$slots.footer || this.$props.footer}</footer>
    ) : null;
  }

  handleClick(e) {
    if (this.disabled) return;
    this.$emit('click', e, this);
  }
  render() {
    return (
      <div
        class={{ [this.prefixCls]: true, 'full-width': this.fullWidth }}
        disabled={this.disabled}
      >
        {this.headerRender}
        {this.mainRender}
        {this.footerRender}
      </div>
    );
  }
}
