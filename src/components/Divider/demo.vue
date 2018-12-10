<template>
  <div class="demo-container">
    <Didiver>children</Didiver>
    <Didiver type="line">children</Didiver>
    <Didiver type="dot">children</Didiver>
    <Didiver text="text" />
    <Didiver text="`<div>html text</div>" />
  </div>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
import Didiver from "./index";

@Component({
  components: {
    Didiver
  }
})
export default class DividerDemo extends Vue {}
</script>
