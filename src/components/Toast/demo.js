import { Component, Vue } from 'vue-property-decorator';
import Button from '../Button/';
import Toast from './index';

@Component
export default class ToastDemo extends Vue {
  showToast(options) {
    Toast.loading(options);
  }
  render() {
    return (
      <div class="demo-container">
        <Button.Group>
          <Button
            type="primary"
            onClick={() =>
              this.showToast({
                icon: 'spinner',
                position: 'top',
                content: '这是一条通知'
              })
            }
          >
            top
          </Button>
          <Button
            type="primary"
            onClick={() => this.showToast('这是一条通知222')}
          >
            bottom
          </Button>
          <Button
            type="primary"
            onClick={() =>
              this.showToast({
                position: 'center',
                content: '这是一条通知'
              })
            }
          >
            default
          </Button>
        </Button.Group>
      </div>
    );
  }
}
