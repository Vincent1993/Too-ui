import { Component, Vue } from 'vue-property-decorator';
import { Switch } from 'components';

@Component
export default class SwitchDemo extends Vue {
  switch1 = true;
  switch2 = false;
  switch3 = true;
  switch4 = false;
  render() {
    return (
      <div class="demo-container">
        <Switch v-model={this.switch1} />
        <Switch v-model={this.switch2} />
        <Switch v-model={this.switch3} disabled />
        <Switch v-model={this.switch4} disabled />
      </div>
    );
  }
}
