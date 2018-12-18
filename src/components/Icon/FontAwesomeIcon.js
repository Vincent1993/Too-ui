import { Component, Vue } from 'vue-property-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'vue-types';

library.add(fas);
@Component({
  functional: true,
  props: {
    icon: PropTypes.string.isRequired,
    border: PropTypes.bool.def(false),
    size: PropTypes.oneOf([
      'xs',
      'sm',
      'lg',
      '1x',
      '2x',
      '3x',
      '4x',
      '5x',
      '6x',
      '7x',
      '8x',
      '9x',
      '10x'
    ]).def('1x'),
    rotate: PropTypes.number,
    border: PropTypes.bool.def(false),
    animate: PropTypes.oneOf(['spin', 'pulse']),
    pull: PropTypes.oneOf(['left', 'right']),
    mask: PropTypes.array.def([]),
    flip: PropTypes.oneOf(['horizontal', 'vertical', 'both']),
    symbol: PropTypes.oneOfType([Boolean, String])
  }
})
export default class CustomFontAwesomeIcon extends Vue {
  render(createElement, context) {
    const { animate } = context.props;

    return createElement(FontAwesomeIcon, {
      props: {
        ...context.props,
        [animate]: true
      }
    });
  }
}
