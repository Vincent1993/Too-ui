<template>
  <div class="demo-container">
    <ButtonGroup>
      <Button>default</Button>
      <Button disabled>default disabled</Button>
      <Button type="primary">
        <i
          class='fab fa-github-square'
          slot="icon"
        ></i>
        primary</Button>
      <Button
        type="primary"
        disabled
      >primary disabled</Button>
      <Button type="warn">warning</Button>
      <Button
        type="warn"
        disabled
      >warning disabled</Button>
      <Button
        type="primary"
        outline
      >primary outline</Button>
      <Button
        type="primary"
        outline
        disabled
      >primary outline disabled</Button>
      <Button
        type="primary"
        loading
      >loading</Button>
    </ButtonGroup>
    <ButtonGroup inline>
      <Button size="small">small</Button>
      <Button
        type="warn"
        size="small"
      >small</Button>
      <Button
        type="primary"
        size="small"
        loading
      >small</Button>
      <Button
        size="small"
        outline
      >small outline</Button>
      <Button
        type="primary"
        size="small"
        outline
      >small outline</Button>
    </ButtonGroup>
    <ButtonGroup inline>
      <Button type="primary"><i
          class='fab fa-github-square'
          slot="icon"
          type="primary"
        ></i> primary</Button>
      <Button
        type="warn"
        loading
      >primary</Button>
      <Button type="primary">primary</Button>
      <Button type="warn">warn</Button>
      <Button>default</Button>
    </ButtonGroup>

    <ButtonGroup addons>
      <Button type="primary">primary</Button>
      <Button type="warn">primary</Button>
      <Button type="primary">primary</Button>
    </ButtonGroup>
    <ButtonGroup sticky>
      <Button type="primary">primary</Button>
      <Button type="warn">primary</Button>
    </ButtonGroup>
  </div>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
import Button from "./index.js";

@Component({
  components: {
    Button,
    ButtonGroup: Button.Group
  }
})
export default class ButtonDemo extends Vue {}
</script>
