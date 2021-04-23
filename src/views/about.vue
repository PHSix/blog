<template>
  <div>
    <img :src="header" alt="">
    <a href="https://github.com/phsix">我的Github</a>
  </div>
</template>
<script>
import header from '../assets/header.jpeg'
export default {
  data: function(){
    return {
      header
    }
  }
}
</script>
