import Vue from 'vue';
import Vuex from 'vuex';
import ArticleService from '@/api/ArticleService';
import createPersistedState from 'vuex-persistedstate';
import SecureLS from 'secure-ls';

const ls = new SecureLS({ isCompression: false });
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
      const article = state.articleList.filter((element) => element.id === payload.id);
      commit('SET_CURRENT_ARTICLE', article);
      // localStorage.setItem('current-article', JSON.stringify(article[0]));
    },
  },
  plugins: [createPersistedState({
    storage: {
      getItem: (key) => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: (key) => ls.remove(key),
      // https://levelup.gitconnected.com/storing-data-with-local-storage-and-vuex-with-the-vuex-persistedstate-library-50492902f0e2
    },
  })],
});
