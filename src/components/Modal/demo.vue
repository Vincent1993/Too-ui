<template>
  <div class="demo-container">
    <Modal :visible.sync="showModal2" position="bottom">
      <div style="background-color: #fff;">bottom</div>
    </Modal>
    <Modal :visible.sync="showModal3" position="top" content="123">
      <div style="background-color: #fff;">top</div>
    </Modal>
    <Modal :visible.sync="showModal1" position="left" content="123">
      <div style="background-color: #fff;">left</div>
    </Modal>
    <Modal :visible.sync="showModal4" position="right" content="123">
      <div style="background-color: #fff;">right</div>
    </Modal>
    <Modal :visible.sync="showModal5" position="center" content="123">
      <div style="background-color: #fff;">center</div>
    </Modal>

    <ButtonGroup inline>
      <Button size="small" type="primary" @click.native="() => toggleModal(2)">bottom</Button>
      <Button size="small" type="primary" @click.native="() => toggleModal(3)">top</Button>
      <Button size="small" type="primary" @click.native="() => toggleModal(4)">right</Button>
      <Button size="small" type="primary" @click.native="() => toggleModal(1)">left</Button>
      <Button size="small" type="primary" @click.native="() => toggleModal(5)">center</Button>
    </ButtonGroup>

  </div>
</template>
<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator';
import Modal from './index';
import { Button, ButtonGroup } from '../Button/';

@Component({
  components: {
    Button,
    ButtonGroup,
    Modal
  }
})
export default class ModalDemo extends Vue {
  showModal1: boolean = false;
  showModal2: boolean = false;
  showModal3: boolean = false;
  showModal4: boolean = false;
  showModal5: boolean = false;

  toggleModal(key: number): void {
    this[`showModal${key}`] = !this[`showModal${key}`];
  }
}
</script>
