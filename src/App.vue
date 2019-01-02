<template>
  <div id="app">
    <div id="nav">
      <router-link to="/elements/cell-item">CellItem</router-link> |
      <router-link to="/elements/dialog">Dialog</router-link> |
      <router-link to="/elements/modal">Modal</router-link> |
      <router-link to="/elements/field">Field</router-link> |
      <router-link to="/elements/landscape">Landscape</router-link> |
      <router-link to="/elements/switch">Switch</router-link> |
      <router-link to="/elements/button">Button</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import '~@/styles/base/index.scss';
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
