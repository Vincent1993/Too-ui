<template>
  <div class="demo-container">
    <ToInput id="bbb" v-model="a" :noValidate="true" readonly>
      <!-- <span slot="prepend">prepend</span> -->
    </ToInput>
    <ToInput id="aaa" v-model="a" placeholder="Input">
      <i slot="prepend" class="fab fa-steam"></i>
    </ToInput>
    <ToInput id="ccc" disabled title="diabled" value="input something but disabled" alignText="right1"/>
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator'
import ToInput from './index'

@Component({
  components: {
   ToInput
  },
})
export default class BoxDemo extends Vue {
  a = 'input something'
  log(value) {
    return !!value
  }
}
</script>
