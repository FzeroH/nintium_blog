import Vue from 'vue';
import Vuex from 'vuex';
import ArticleService from '@/api/ArticleService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articleList: Array,
  },
  getters: {
    getArticleList(state) {
      return state.articleList;
    },
  },
  mutations: {
    SET_ARTICLE_LIST(state, payload) {
      state.articleList = payload;
    },
  },
  actions: {
    async loadArticleList({ commit }) {
      try {
        const articleList = await ArticleService.getArticleList();
        commit('SET_ARTICLE_LIST', articleList);
        console.log(articleList);
      } catch (e) {
        console.error(e);
      }
    },
  },
});
