import { Component, Vue } from 'vue-property-decorator';
import Dialog from './index';
import Button from '../Button/';

@Component
export default class DialogDemo extends Vue {
  render() {
    return (
      <div class="demo-container">
        <Button.Group inline>
          <Button
            onClick={() =>
              Dialog.confirm({
                title: '确认提示框',
                content: '确认要取消了?'
              })
            }
          >
            show dialog confirm
          </Button>
          <Button
            type="primary"
            onClick={() =>
              Dialog.succeed({
                title: '确认提示框',
                content: '确认要取消了?'
              })
            }
          >
            show dialog success
          </Button>
          <Button
            type="primary"
            onClick={() =>
              Dialog.failed({
                title: '确认提示框',
                content: '确认要取消了?'
              })
            }
          >
            show dialog fail
          </Button>
          <Button
            type="warn"
            onClick={() =>
              Dialog.warn({
                title: '确认提示框',
                content: '确认要取消了?'
              })
            }
          >
            show dialog alert
          </Button>
        </Button.Group>
      </div>
    );
  }
}
