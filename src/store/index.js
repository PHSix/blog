import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    match: '',
    blogdata: {},
  },
  mutations: {
    ChangeMatch(state, match) {
      state.match = match;
    },
    ChangeBlogData(state, newdata) {
      state.blogdata = newdata;
    },
  },
  actions: {},
  modules: {},
});
