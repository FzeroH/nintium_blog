<template>
  <div class="rp-container">
      <rp-article
        :article="article"
        v-for="(article, index) in articles"
        :key="index"
        @open-the-article="openTheArticle(article.id, article)"/>
  </div>
</template>

<script>
import RpArticle from '@/components/content/RpArticle.vue';

export default {
  name: 'RecentPost',
  components: { RpArticle },
  data() {
    return {
      articles: [
        {
          id: 456,
          tag: 'Nature',
          articleTitle: 'Tempor deserunt Sunt Qui',
          aboutArticle: { author: 'Connie Robertson', date: 'November 3, 2012' },
          articleText: 'Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla tempor aute reprehenderit ut dolore mollit nisi consequat excepteur ex officia pariatur irure.',
          image: 'nature',
        },
        {
          id: 567,
          tag: 'Plants',
          articleTitle: 'Occaecat Anim eu Qui',
          aboutArticle: { author: 'Eleanor Williamson', date: 'September 28, 2014' },
          articleText: 'Qui ipsum consectetur ad incididunt et aliquip exercitation laboris nisi reprehenderit. Et excepteur commodo esse enim ea aliqua officia reprehenderit.',
          image: 'plants',
        },
        {
          id: 789,
          tag: 'Food',
          articleTitle: 'Fugiat Incididunt Voluptate Consequat',
          aboutArticle: { author: 'Bessie Watson', date: 'June 13, 2012' },
          articleText: 'Mollit ea culpa ipsum pariatur eiusmod. Irure et.',
          image: 'food',
        },
        {
          id: 890,
          tag: 'Colorful',
          articleTitle: 'Occaecat Anim eu Qui',
          aboutArticle: { author: 'Ted Simmmons', date: 'June 21, 2015' },
          articleText: 'Amet ipsum occaecat aliqua aute nisi laboris nostrud culpa est do. Aliqua esse velit in excepteur esse qui voluptate laboris adipisicing qui irure elit amet excepteur.',
          image: 'colorful',
        },
      ],
    };
  },
  methods: {
    openTheArticle(id, article) {
      this.$router.push({
        name: 'article',
        params: {
          article,
        },
        query: { id },
      });
    }, // openTheArticle
  },
};
</script>

<style lang="scss" scoped>

</style>
