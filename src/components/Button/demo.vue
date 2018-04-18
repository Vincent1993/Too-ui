<template>
    <div>
        <ButtonGroup>
      <Button>default</Button>
      <Button disabled>default disabled</Button>
      <Button type="primary">
        <i class='fab fa-github-square' slot="icon"></i>
        primary</Button>
      <Button type="primary" disabled>primary disabled</Button>
      <Button type="warn">warning</Button>
      <Button type="warn" disabled>warning disabled</Button>
      <Button type="primary" outlined>primary outlined</Button>
      <Button type="primary" loading>loading</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button size="small" inline>small</Button>
    </ButtonGroup>
    <ButtonGroup inline>
      <Button type="primary" >primary</Button>
      <Button type="warn" >primary</Button>
      <Button >primary</Button>
    </ButtonGroup>
    <ButtonGroup inline>
      <Button type="primary" >primary</Button>
      <Button type="warn" >primary</Button>
      <Button >primary</Button>
      <Button type="primary" >primary</Button>
      <Button type="warn" >primary</Button>
      <Button>primary</Button>
    </ButtonGroup>

    <ButtonGroup addons>
      <Button type="primary" >primary</Button>
      <Button type="warn" >primary</Button>
      <Button type="primary">primary</Button>
    </ButtonGroup>
    <ButtonGroup sticky>
      <Button type="primary" >primary</Button>
      <Button type="warn" >primary</Button>
    </ButtonGroup>
    </div>

</template>
<script>
import { Component, Vue } from "vue-property-decorator";
import { Button, ButtonGroup } from './index.js'

@Component({
  components: {
    Button,
    ButtonGroup
  }
})
export default class ButtonDemo extends Vue {}
</script>
