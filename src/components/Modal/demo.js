import { Component, Vue } from 'vue-property-decorator';
import { Modal, Button } from 'components'
@Component
export default class ModalDemo extends Vue {
  showModal1 = false;
  showModal2 = false;
  showModal3 = false;
  showModal4 = false;
  showModal5 = false;
  render() {
    return (
      <div class="demo-container">
        <Button.Group>
          <Button type="primary" onClick={() => (this.showModal1 = true)}>
            top
          </Button>
          <Button type="primary" onClick={() => (this.showModal2 = true)}>
            center
          </Button>
          <Button type="primary" onClick={() => (this.showModal3 = true)}>
            bottom
          </Button>
          <Button type="primary" onClick={() => (this.showModal4 = true)}>
            left
          </Button>
          <Button type="primary" onClick={() => (this.showModal5 = true)}>
            right
          </Button>
        </Button.Group>

        <Modal
          visible={this.showModal1}
          v-model={this.showModal1}
          position="top"
        >
          content
        </Modal>
        <Modal
          visible={this.showModal2}
          v-model={this.showModal2}
          position="center"
        >
          content
        </Modal>
        <Modal
          visible={this.showModal3}
          v-model={this.showModal3}
          position="bottom"
        >
          content
        </Modal>
        <Modal
          visible={this.showModal4}
          v-model={this.showModal4}
          position="left"
        >
          content
        </Modal>
        <Modal
          visible={this.showModal5}
          v-model={this.showModal5}
          position="right"
        >
          content
        </Modal>
      </div>
    );
  }
}
