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
  name: 'EpArticle',
  props: {
    article: Object,
  },
};
</script>

<style lang="scss" scoped>
.article-container {
  display: flex;
  flex-direction: row;
  margin: 3.125rem 1.56rem;
  width: 53.6rem;

  img {
    width: 370px;
    height: 300px;
  }
}

.article-content {
  display: flex;
  flex-direction: column;
  width: 856px;
  height: 311px;

  .tag {
    font-family: 'Open Sans',serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: rgba(28, 28, 28, 0.5);
    margin-left: 55px;
    text-transform: uppercase;
  }

  h2 {
    font-family: 'Libre Baskerville',serif;
    font-style: normal;
    font-weight: 700;
    font-size: 33px;
    color: black;
    margin: 0 55px;
    line-height: 41px;
  }

  p {
    font-family: 'Open Sans',serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin: 0.9rem 3.44rem;
    color: black;
  }

}

.about-article-container {
  display: flex;
  flex-direction: row;
  margin: 12px 0 14px 55px;
  font-family: 'Open Sans',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  .about-article {
    color: rgba(28, 28, 28, 0.5);

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
