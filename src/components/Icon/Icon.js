import { Component, Vue } from 'vue-property-decorator';
import PropTypes from 'vue-types';
import IconFont from './IconFont';

@Component({
  functional: true,
  props: {
    prefixCls: PropTypes.string.def('to-icon'),
    type: PropTypes.string.isRequired,
    className: PropTypes.string.def(''),
    spin: PropTypes.bool.def(false),
    style: PropTypes.oneOfType([Object, String]).def({}),
    fill: PropTypes.string.def('currentColor'),
    size: PropTypes.oneOfType([String, Number]).def(30),
    scriptUrl: PropTypes.string,
  },
})
export default class Icon extends Vue {
  render(_, context) {
    const {
      className,
      prefixCls,
      spin,
      style,
      scriptUrl,
      type,
      size,
      ...restProps
    } = context.props;

    const computedClassName = {
      [prefixCls]: true,
      [className]: !!className,
      spin: spin,
    };
    return (
      <i {...context.data} class={computedClassName} style={{ ...style, fontSize: `${size}px` }}>
        <IconFont scriptUrl={scriptUrl} type={type} {...{ attrs: restProps }} />
      </i>
    );
  }
}
