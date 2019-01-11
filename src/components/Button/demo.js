import { Component, Vue } from 'vue-property-decorator';
import { Button } from 'components';

@Component
export default class ButtonDemo extends Vue {
  render() {
    return (
      <div class="demo-container">
        <Button.Group>
          <Button loading>default</Button>
          <Button type="secondary" block inactive>
            次级按钮
          </Button>
          <Button type="warn" subtle>
            warn subtle
          </Button>
          <Button type="error" disabled>
            error
          </Button>
          <Button type="error" size="small">
            small
          </Button>
        </Button.Group>
        <Button.Group>
          <Button loading>
            <i class="fab fa-github" />
          </Button>
          <Button round type="secondary">
            secondary round
          </Button>
          <Button round type="warn">
            warn
          </Button>
          <Button round type="error">
            error
          </Button>
        </Button.Group>
        <Button.Group addons>
          <Button block>default </Button>
          <Button type="warn" block>
            warn{' '}
          </Button>
          <Button type="secondary" block>
            secondary{' '}
          </Button>
        </Button.Group>
        <Button.Group>
          <Button outline>default outline</Button>
          <Button type="secondary" outline>
            secondary outline
          </Button>
          <Button type="warn" outline>
            warn outline
          </Button>
          <Button type="error" outline>
            error outline
          </Button>
        </Button.Group>
        <Button.Group sticky>
          <Button>Sticky</Button>
          <Button type="warn">Sticky</Button>
        </Button.Group>
      </div>
    );
  }
}
