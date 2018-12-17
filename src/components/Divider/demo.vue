<template>
  <div class="demo-container">
    <Didiver>children</Didiver>
    <Didiver type="line">children</Didiver>
    <Didiver type="dot">children</Didiver>
    <Didiver type="loading">loading divider</Didiver>
    <Didiver text="text" />
    <Didiver text="text">overload overloadoverloadoverloadoverloadoverloadoverloadoverloadoverloadoverload</Didiver>
    <Didiver>
      <div>121212<span>23232</span></div>
    </Didiver>
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
