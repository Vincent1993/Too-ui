<template>
  <div id="app">
    <div id="nav">
      <router-link
        :key="component.name"
        :to="'/elements/' + component.name"
        v-for="component in components"
      >{{component.fileName}} | </router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import components from "./components/components.json";
export default {
  data() {
    return {
      components
    };
  }
};
</script>

<style lang="scss">
@import '~@/styles/base/index.scss';
@import '~@/styles/utilities/_functions.scss';
.demo-container {
  padding: 10px;
  &.full-width {
    padding: 0;
  }
}
body {
  font-family: $typography-font-family;

  background-color: get-theme-prop('background', 'base');
}
#app {
  color: get-theme-prop('text', 'base');

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
  a {
    color: get-theme-prop('text', 'base');
    &.router-link-exact-active {
      font-weight: bold;

      color: get-theme-prop('text', 'link');
    }
  }
}

</style>
