import { Component, Vue } from 'vue-property-decorator';
import { Button, Toast } from 'components';

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
                icon: 'circle',
                position: 'top',
                content: '这是一条通知',
                duration: 0,
                manualClose: true,
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
                  <Button type="primary" size="small">
                    botto
                  </Button>
                </div>,
              )
            }
          >
            loading
          </Button>
        </Button.Group>
      </div>
    );
  }
}
