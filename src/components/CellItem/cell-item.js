import { Component, Vue } from 'vue-property-decorator';
import PropTypes from 'vue-types';

@Component({
  props: {
    prefixCls: PropTypes.string.def('to-cell-item'),
    title: PropTypes.string.def(''),
    brief: PropTypes.string.def(''),
    addon: PropTypes.string.def(''),
    arrow: PropTypes.bool.def(false),
    disabled: PropTypes.bool.def(false),
    noBorder: PropTypes.bool.def(false)
  }
})
export default class CellItem extends Vue {
  get classes() {
    return {
      [this.prefixCls]: true,
      disabled: this.disabled,
      noBorder: this.noBorder
    };
  }

  get prefixRender() {
    return this.$slots.prefix ? (
      <div class={`${this.prefixCls}-prefix`}>{this.$slots.prefix}</div>
    ) : null;
  }
  get briefRender() {
    return this.brief ? (
      <div class={`${this.prefixCls}-brief`} domPropsInnerHTML={this.brief} />
    ) : null;
  }

  get addonRender() {
    return this.addon || this.$slots.right ? (
      <div
        class={`${this.prefixCls}-addon`}
        domPropsInnerHTML={this.addon || this.$slot.right}
      />
    ) : null;
  }
  get mainRender() {
    return this.title || this.briefRender || this.$slots.default ? (
      <div class={[`${this.prefixCls}-content`]}>
        {this.title ? (
          <p class={`${this.prefixCls}-title`} domPropsInnerHTML={this.title} />
        ) : null}
        {this.briefRender}
        {this.$slots.default}
      </div>
    ) : null;
  }

  clickHandler(e) {
    if (this.disabled) return;
    this.$emit('click', e, this);
  }
  render() {
    return (
      <div class={this.classes} onClick={this.clickHandler}>
        <div
          class={{
            [`${this.prefixCls}-body`]: true,
            mutiline: this.briefRender
          }}
        >
          {this.prefixRender}
          {this.mainRender}
          {this.addonRender}
          {this.arrow ? <div class="arrow-right" /> : null}
        </div>

        {this.$slots.extra ? (
          <div class={`${this.prefixCls}-extra`}>{this.$slots.extra}</div>
        ) : null}
      </div>
    );
  }
}
