import Vue from 'vue';
import Vuex from 'vuex';
import ArticleService from '@/api/ArticleService';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    articleList: [],
    currentArticle: {},
  },

  getters: {
    getArticleList(state) {
      return state.articleList;
    },
    getCurrentArticle(state) {
      return state.currentArticle[0];
    },
  },

  mutations: {
    SET_ARTICLE_LIST(state, payload) {
      state.articleList = payload;
    },
    SET_CURRENT_ARTICLE(state, payload) {
      state.currentArticle = payload;
    },
  },

  actions: {
    async loadArticleList({ commit }) {
      try {
        const articleList = await ArticleService.getArticleList();
        commit('SET_ARTICLE_LIST', articleList);
      } catch (e) {
        console.error(e);
      }
    },
    addCurrentArticle({ commit, state }, payload) {
      const article = state.articleList.filter((element) => element.id === payload);
      commit('SET_CURRENT_ARTICLE', article);
    },
  },
});
