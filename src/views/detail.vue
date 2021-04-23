<template>
  <div id="detail">
    <div v-html="Title" id="title"></div>
    <div id="split"></div>
    <div v-html="Content" id="body"></div>
  </div>
</template>

<script>
import axios from 'axios';
import marked from 'marked';

export default {
  data: function () {
    return {
      Content: '',
      Title: '',
    };
  },
  created: function () {
    axios
      .get(
        'https://api.github.com/repos/phsix/blog/issues/' + this.$route.query.id
      )
      .then((content) => {
        this.Content = marked(content.data.body)
        this.Title = content.data.title;
        this.Title = '<h1>' + this.Title.toUpperCase() + '</h1>';
        console.log(content.data.title);
      });
  },
};
</script>

<style lang="scss">
#detail {
  margin: 0 15%;
  padding: 0px 0px;
  border-left: 3px solid #00000030;
  border-right: 3px solid #00000030;
}
#split {
  height: 5px;

  background: green;
}
#title {
  padding: 10px 10px;
}
#body {
  padding: 10px 10px;
  font-size: 14px;
  h1 {
    color: #0984e3;
  }
  h2 {
    color: #00b894;
  }
  h3 {
    color: #a29bfe;
  }
  h4 {
    color: #ff7675;
  }
}
img {
  max-width: 100%;
}
</style>
