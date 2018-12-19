import { Component, Vue } from 'vue-property-decorator';
import Button from '../Button/';
import Toast from './toast';

@Component
export default class ToastDemo extends Vue {
  render() {
    return (
      <div class="demo-container">
        <Button.Group>
          <Button
            type="primary"
            onClick={() =>
              Toast({
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
            onClick={() =>
              Toast.loading(
                <div>
                  这是一条通知222<Button type="primary" size="small">
                    botto
                  </Button>
                </div>
              )
            }
          >
            bottom
          </Button>
        </Button.Group>
      </div>
    );
  }
}
