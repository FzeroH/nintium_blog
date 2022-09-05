<template>
  <div class="article-container">
    <img :src="require(`../../assets/images/articles/${ article.image }.svg`)" alt="">
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
  name: 'RpArticle',
  props: {
    article: Object,
  },
};
</script>

<style lang="scss" scoped>
.article-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50.75rem;
  height: 11rem;
  margin: 0 !important;

  img {
    width: 237px;
    height: 177px;
  }
}

.article-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 856px;
  margin: 0 0 0 37px;

  .tag {
    font-family: 'Open Sans',serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: rgba(28, 28, 28, 0.5);
    text-transform: uppercase;
    margin: 0 37px;
  }

  h2 {
    font-family: 'Libre Baskerville',serif;
    font-style: normal;
    font-weight: 700;
    font-size: 33px;
    color: black;
    margin: 4px 40px 3px 37px;
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

.about-article-container {
  display: flex;
  flex-direction: row;
  margin-left: 37px;
  font-family: 'Open Sans',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  .about-article {
    color: rgba(28, 28, 28, 0.5);
    margin: 0;

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
