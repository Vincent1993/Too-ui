<template>
  <div id="app">
    <div id="nav">
      <router-link
        :to="'/elements/' + component.name"
        v-for="component in components"
      >{{component.fileName}} | </router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import components from "@/components/components.json";
export default {
  data() {
    return {
      components
    };
  }
};
</script>

<style lang="scss">
@import "~@/styles/base/index.scss";
.demo-container {
  padding: 10px;
  &.full-width {
    padding: 0;
  }
}
body {
  font-family: $family-sans-serif;

  background-color: #f5f5f9;
}
#app {
  color: #2c3e50;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;

    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
