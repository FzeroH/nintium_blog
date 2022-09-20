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
  data() {
    return {
      articles: [
        {
          id: 123,
          tag: 'Minimalism',
          articleTitle: 'Culpa sit Laboris Exercitation ea Fugiat',
          aboutArticle: { author: 'Leslie Pena', date: 'April 25, 2012 (6 mins read)' },
          articleText: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.',
          image: 'minimalism',
        },
        {
          id: 234,
          tag: 'Technology',
          articleTitle: 'Amet non Ex Officia nulla Cupidatat',
          aboutArticle: { author: 'Jacob Henry', date: 'September 27, 2017 (8 mins read)' },
          articleText: 'Sint anim Lorem aute duis Lorem incididunt. Nulla nostrud irure id ipsum aute excepteur duis sint. Do occaecat sit dolor magna esse. Mollit incididunt cillum consectetur fugiat adipisicing dolor est id minim amet cillum esse Lorem. Deserunt non duis excepteur aliqua duis eu reprehenderit.',
          image: 'technology',
        },
        {
          id: 345,
          tag: 'Minimalism',
          articleTitle: 'Culpa sit Laboris Exercitation ea Fugiat',
          aboutArticle: { author: 'Leslie Pena', date: 'April 25, 2012 (6 mins read)' },
          articleText: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.',
          image: 'article',
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
