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
    width: 14.8rem;
    height: 11.1rem;
  }
}

.article-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 53.5rem;
  margin: 0 0 0 2.3rem;

  .tag {
    font-size: 1.25rem;
    color: rgba(28, 28, 28, 0.5);
    text-transform: uppercase;
    margin: 0 2.3rem;
  }

  h2 {
    font-weight: 700;
    font-size: 2.1rem;
    color: black;
    margin: 0.25rem 2.5rem 0.2rem 2.3rem;
  }

  p {
    font-size: 1rem;
    margin: 14px 2.5rem;
    color: black;
  }
}

.about-article-container {
  display: flex;
  flex-direction: row;
  margin-left: 2.3rem;
  font-size: 1rem;

  .about-article {
    color: rgba(28, 28, 28, 0.5);
    margin: 0;

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
