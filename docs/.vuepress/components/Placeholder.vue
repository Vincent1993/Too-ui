<template>
  <span :class="['placeholder', shape]" />
</template>
<script>
export default {
  props: {
    shape: {
      type: String,
      default: 'round',
    },
  },
};
</script>
<style lang="scss">
.placeholder {
  display: block;

  width: 48px;
  height: 48px;

  background: #ddd;

  &.round {
    border-radius: 100%;
  }

  &.square {
    border-radius: 5px;
  }
}
</style>
