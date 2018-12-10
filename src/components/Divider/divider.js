import { Component, Vue } from 'vue-property-decorator';
import PropTypes from 'vue-types';
import classNames from 'classnames';

@Component({
  props: {
    prefixCls: PropTypes.string.def('to-divider'),
    text: PropTypes.string,
    type: PropTypes.oneOf(['line', 'dot', 'none']).def('none'),
    textBackground: PropTypes.string.def('#F5F5F9')
  },
  functional: true
})
export default class Divider extends Vue {
  render(createElement, context) {
    return (
      <div class={context.props.prefixCls}>
        {createElement(
          'span',
          {
            staticClass: classNames({
              [`${context.props.prefixCls}__inner`]: true,
              [context.props.type]: context.props.type !== 'none'
            }),
            style: {
              background: context.props.textBackground
            }
          },
          context.children && !!context.children.length
            ? context.children
            : context.props.text
        )}
      </div>
    );
  }
}
