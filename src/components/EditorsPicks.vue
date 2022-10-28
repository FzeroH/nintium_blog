<template>
<div class="ep-container">
  <div class="ep-title">
    <h2>Editor's Picks</h2>
    <hr>
  </div>
    <ep-article
      :article="article"
      v-for="(article, index) in articles"
      :key="index"
      @open-the-article="openTheArticle(article.id, article)"/>
</div>
</template>

<script>
import EpArticle from '@/components/content/EpArticle.vue';

export default {
  name: 'EditorsPicks',
  components: { EpArticle },
  computed: {
    articles() {
      return this.$store.getters.getArticleList.filter((el) => el.recommend === 'editors');
    },
  },

  methods: {
    openTheArticle(id) {
      this.$router.push({
        name: 'article',
        params: { id },
      });
    }, // openTheArticle
  },
};
</script>

<style lang="scss" scoped>
.ep-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .ep-title {

    h2 {
      font-family: 'Open Sans', serif;
      font-size: 2.625rem;
      color: black;
      margin: 3.125rem 0 1.06rem 0;
      text-align: center;
    }

    hr {
      width: 11.875rem;
      height: 0;
      background: #1C1C1C;
      border: 0.3rem solid #1C1C1C;
    }
  }

  a {
    margin: 54px 0;
  }
}
</style>
