<template>
  <div>
    <div id="title">
      <h2>
        {{ title }}
      </h2>
    </div>
    <div id="item-detail">更新时间： {{ detail }}</div>
  </div>
</template>

<script>
export default {
  props: ['title', 'detail'],
};
</script>

<style scoped lang="scss">
#title {
  text-align: left;
  h2 {
    margin: 3px 0px;
  }
}
#item-detail {
  text-align: right;
}
</style>
