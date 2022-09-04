<template>
  <div class="article-container" :style="{
   backgroundImage: 'url(' + require(`../../assets/images/articles/${ article.image }.svg`) + ')'}">
    <div class="article-content">
      <span class="tag">{{ article.tag }}</span>
      <h2> {{ article.articleTitle }}</h2>
      <div class="about-article-container">
        <span class="about-article">{{ article.aboutArticle.author }}</span>
        <span class="about-article">{{ article.aboutArticle.date }}</span>
      </div>
      <p>{{ article.articleText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturedArticle',
  props: {
    article: Object,
  },
};
</script>

<style lang="scss" scoped>
.article-container {
  display: flex;
  width: 1316px;
  height: 592px;
}

.article-content {
  background: white;
  display: flex;
  flex-direction: column;
  width: 509px;
  height: 483px;
  margin: 0 0 109px 45px;

  .tag {
    font-family: 'Open Sans',serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: rgba(28, 28, 28, 0.5);
    margin: 76px 0 0 39px;
    text-transform: uppercase;
  }

  h2 {
    font-family: 'Libre Baskerville',serif;
    font-style: normal;
    font-weight: 700;
    font-size: 33px;
    color: black;
    margin: 0 40px 12px 40px;
  }

  p {
    font-family: 'Open Sans',serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin: 14px 40px;
    color: black;
  }
}

.about-article-container{
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  font-family: 'Open Sans',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  .about-article {
    color: rgba(28, 28, 28, 0.5);
    margin-left: 10px;

    &:not(:first-child) {
      margin-left: 10px;
    }

    &:first-child::after {
      content: '•';
      margin-left: 10px;
    }
  }
}

</style>
