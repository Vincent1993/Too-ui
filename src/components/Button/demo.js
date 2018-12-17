import { Component, Vue } from 'vue-property-decorator';
import { Button } from './index';

@Component
export default class ButtonDemo extends Vue {
  render() {
    return (
      <div class="demo-container">
        <Button.Group>
          <Button>default</Button>
          <Button type="primary">primary</Button>
          <Button type="warn">warn</Button>
        </Button.Group>
        <Button.Group>
          <Button round>default round</Button>
          <Button round type="primary">
            primary round
          </Button>
          <Button round type="warn">
            warn
          </Button>
        </Button.Group>
        <Button.Group>
          <Button disabled>default disabled</Button>
          <Button disabled type="primary">
            primary disabled
          </Button>
        </Button.Group>
        <Button.Group inline>
          <Button>default inline</Button>
          <Button type="primary">primary inline</Button>
          <Button type="warn">warn inline</Button>
        </Button.Group>
        <Button.Group inline>
          <Button size="small">inline small</Button>
          <Button type="primary" size="small">
            inline small
          </Button>
          <Button type="warn" size="small">
            inline small
          </Button>
        </Button.Group>
        <Button sticky type="primary">
          Sticky
        </Button>
      </div>
    );
  }
}
