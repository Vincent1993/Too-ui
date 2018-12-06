import { Component, Vue } from 'vue-property-decorator';
import className from 'classnames';
import PropTypes from 'vue-types';
import './box.scss';

@Component({
  props: {
    prefixCls: PropTypes.string.def('to-box'),
    boxColor: PropTypes.string.def('#ffffff'),
    noGutter: PropTypes.bool.def(false),
    noBorder: PropTypes.bool.def(false),
    fullWidth: PropTypes.bool.def(false),
    gutter: PropTypes.oneOfType([Number, Array]).def([9, 12])
  }
})
export default class Box extends Vue {
  get boxAttributes() {
    return {
      style: {
        backgroundColor: this.boxColor,
        padding:
          typeof this.gutter === 'number'
            ? this.gutter
            : this.gutter.map(value => `${value}px`).join(' ')
      },
      class: className([this.prefixCls], {
        fullWidth: this.fullWidth,
        noGutter: this.noGutter,
        noBorder: this.noBorder
      })
    };
  }
  render() {
    return <div {...this.boxAttributes}>{this.$slots.default}</div>;
  }
}
