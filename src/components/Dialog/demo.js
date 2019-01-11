import { Component, Vue } from 'vue-property-decorator';
import Button from '@/components/Button/index.js';
import '@/components/Button/styles/index.js';
import Dialog from './index.js';
import './styles/index.js';

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
            type="error"
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
            show dialog warn
          </Button>
        </Button.Group>
      </div>
    );
  }
}
