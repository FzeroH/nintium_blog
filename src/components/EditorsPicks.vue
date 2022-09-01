<template>
<div class="ep-container">
  <div class="ep-title">
    <h2>Editor's Picks</h2>
    <hr>
    <EpArticle v-for="(article, index) in articles" :key="index"
      :tag="article.tag"
      :article-title="article.articleTitle"
      :about-article="article.aboutArticle"
      :article-text="article.articleText"
      :image="article.image"
    />
  </div>
</div>
</template>

<script>
import EpArticle from '@/components/content/EpArticle.vue';

export default {
  name: 'EditorsPicks',
  components: { EpArticle },
  data() {
    const articles = [
      {
        tag: 'Minimalism',
        articleTitle: 'Culpa sit Laboris Exercitation ea Fugiat',
        aboutArticle: { author: 'Leslie Pena', date: 'April 25, 2012 (6 mins read)' },
        articleText: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.',
        image: 'minimalism',
      },
      {
        tag: 'Technology',
        articleTitle: 'Amet non Ex Officia nulla Cupidatat',
        aboutArticle: { author: 'Jacob Henry', date: 'September 27, 2017 (8 mins read)' },
        articleText: 'Sint anim Lorem aute duis Lorem incididunt. Nulla nostrud irure id ipsum aute excepteur duis sint. Do occaecat sit dolor magna esse. Mollit incididunt cillum consectetur fugiat adipisicing dolor est id minim amet cillum esse Lorem. Deserunt non duis excepteur aliqua duis eu reprehenderit.',
        image: 'technology',
      },
      {
        tag: 'Minimalism',
        articleTitle: 'Culpa sit Laboris Exercitation ea Fugiat',
        aboutArticle: { author: 'Leslie Pena', date: 'April 25, 2012 (6 mins read)' },
        articleText: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.',
        image: 'article',
      },
    ];
    return { articles };
  },
};
</script>

<style scoped>
.ep-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.ep-title > h2 {
  font-family: 'Open Sans',serif;
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  color: black;
  margin: 50px 0 17px 0;
  text-align: center;
}

.ep-title > hr {
  width: 190px;
  height: 0;
  border: 5px solid #1C1C1C;
}
</style>
