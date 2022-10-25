<template>
  <div class="rp-container">
      <rp-article
        :article="article"
        v-for="(article, index) in articles"
        :key="index"
        @open-the-article="openTheArticle(article.id)"/>
  </div>
</template>

<script>
import RpArticle from '@/components/content/RpArticle.vue';

export default {
  name: 'RecentPost',
  components: { RpArticle },
  computed: {
    articles() {
      return this.$store.getters.getArticleList.filter((el) => el.recommend === 'recent');
    },
  },

  methods: {
    openTheArticle(id) {
      this.$router.push({
        name: 'article',
        query: { id },
      });
    }, // openTheArticle
  },
};
</script>

<style lang="scss" scoped>

</style>
