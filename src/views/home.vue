<template>
  <div id="home">
    <aside></aside>
    <ul>
      <li v-for="data in bloglist" :key="data.url">
        <router-link :to="{ path: '/detail', query: { id: data.number } }">
          <list-item :title="data.title" :detail="data.updated_at"></list-item>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import listItem from '../components/ListItem.vue';
export default {
  components: {
    'list-item': listItem,
  },
  data: function () {
    return {};
  },
  computed: {
    bloglist: function () {
      let arr = [];
      if (!this.$store.state.blogdata.data) {
        return arr;
      }
      for (let i = 0; i < this.$store.state.blogdata.data.length; i++) {
        if (
          this.$store.state.blogdata.data[i].title.match(
            this.$store.state.match
          )
        ) {
          arr.push(this.$store.state.blogdata.data[i]);
        }
      }
      return arr;
    },
  },
  created: function () {
    axios
      .get('https://api.github.com/repos/phsix/blog/issues')
      .then((content) => {
        // console.log('获取到github issues 数据列表');
        // for (let i = 0; i < content.data.length; i++) {
        //   console.log(content.data[i]);
        // }
        // console.log(content)
        this.$store.commit('ChangeBlogData', content);
      });
  },
};
</script>

<style scoped lang="scss">
aside{
  border-right: 3px solid #00000030;
  width: 250px;
}
ul {
  padding: 0;
  display: flex;
  margin: 0px 10%;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  li {
    /*height: 100px;*/
    padding: 10px 0px;
    list-style: none;
    a {
      text-decoration: none;
    }
    div {
      padding: 0 10px;
      border-width: 2px;
      border-radius: 3px;
      border-style: solid;
      border-color: #00000060;
      box-shadow: 0px 0px 5px #00000060;
      color: black;
    }
  }
}
#home {
  border-radius: 10px;
  display: flex;
}
</style>
