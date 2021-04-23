<template>
  <div id="nav">
    <div id="nav-left">
      <span><h1>PHSix's Blog</h1></span>
    </div>
    <div id="nav-center"></div>
    <div id="nav-right">
      <input type="text" v-model="$store.state.match" />
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped lang="scss">
#searchContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
input {
  margin: 0px 10px;
  height: 24px;
  width: 200px;
  top: 1px;
  border-radius: 24px;
  border-width: 2px;
  border-style: solid;
}
#nav {
  position: relative;
  display: flex;
  justify-content: center;
  box-shadow: 0px 5px 4px #00000030;
  border: 0;
}
#nav-left {
  font-size: 10px;
  margin: 0px 0px 0px 20px;
}
#nav-center {
  flex: 1;
}
#nav-right {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 20px 0px 0px;
  a {
    margin: 0px 0px 0px 10px;
    text-decoration: none;
    color: gray;
  }
  a:active {
    color: white;
  }
  a:hover {
    color: black;
  }
}
</style>
