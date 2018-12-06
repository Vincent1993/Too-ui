import { Component, Vue } from 'vue-property-decorator';
import PropTypes from 'vue-types';

@Component({
  props: {
    sticky: PropTypes.bool.def(false),
    inline: PropTypes.bool.def(false),
    addons: PropTypes.bool.def(false)
  }
})
class ButtonGroup extends Vue {
  get classes() {
    return {
      'button-group': true,
      sticky: this.sticky,
      inline: this.inline,
      addons: this.addons
    };
  }
  render() {
    return <div class={this.classes}>{this.$slots.default}</div>;
  }
}

export default ButtonGroup;
