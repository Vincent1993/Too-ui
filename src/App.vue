<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/elements/button">Button</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  background-color: #f5f5f9;
}
#app {
  padding: 10px;

  text-align: center;

  color: #2c3e50;

  font-family: "Avenir", Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.home {
   padding: 10px 0;
 }
#nav {
  padding: 30px;
  a {
    color: #2c3e50;

    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
