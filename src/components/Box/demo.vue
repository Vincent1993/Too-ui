<template>
  <div class="demo-container">
    <Box>
      default
    </Box>
    <Box fullWidth>
      fullWidth
    </Box>
    <Box fullHeight>
      <div>fullHeight</div>
    </Box>
    <Box noGutter>
      noGutter
    </Box>
    <Box noBorder>
      noBorder
    </Box>
    <Box boxColor="#ddd">
      custom background
    </Box>
  </div>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
import Box from "./index";

@Component({
  components: {
    Box
  }
})
export default class BoxDemo extends Vue {}
</script>
