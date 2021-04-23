<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/Navbar.vue';
export default {
  data: function () {
    return {
      match: '',
    };
  },
  components: {
    'nav-bar': navbar,
  },
};
</script>

<style lang="scss">
body {
  margin: 0px auto;
  padding: 0px auto;
  border: 0px;
}
#app {
  margin: 0px;
  display: flex;
  flex-direction: column;
}
</style>
