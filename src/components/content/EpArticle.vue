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
    width: 23rem;
    height: 18.75rem;
  }
}

.article-content {
  display: flex;
  flex-direction: column;
  width: 53.5rem;
  height: 19.4rem;

  .tag {
    font-size: 1.25rem;
    color: rgba(28, 28, 28, 0.5);
    margin-left: 4.44rem;
    text-transform: uppercase;
  }

  h2 {
    font-weight: 700;
    font-size: 2.1rem;
    color: black;
    margin: 0 4.44rem;
    line-height: 2.56rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0.9rem 3.44rem;
    color: black;
  }

}

.about-article-container {
  display: flex;
  flex-direction: row;
  margin: 12px 0 14px 4.44rem;
  font-size: 1rem;

  .about-article {
    color: rgba(28, 28, 28, 0.5);

    &:not(:first-child) {
      margin-left: 0.6rem;
    }

    &:first-child::after {
      content: '•';
      margin-left: 0.6rem;
    }
  }
}
</style>
