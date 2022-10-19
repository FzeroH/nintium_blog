<template>
  <!-- eslint-disable-next-line -->
  <div class="article-container" @click="openTheArticle">
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
  methods: {
    openTheArticle() {
      this.$emit('open-the-article');
    },
  },
};
</script>

<style lang="scss" scoped>
.article-container {
  display: flex;
  flex-direction: row;
  margin: 3.125rem 1.56rem;
  width: 53.6rem;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 23rem;
    height: 18.75rem;
  }
}

.article-content {

  .tag {
    font-size: 1.25rem;
    color: rgba(28, 28, 28, 0.5);
    margin-left: 4.44rem;
    text-transform: uppercase;
  }

  h2 {
    font-size: 2.1rem;
    color: black;
    margin: 0 4.44rem;
    line-height: 2.56rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0.9rem 0 0 4.44rem;
    color: black;
  }

}

.about-article-container {
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

@media (max-width: 767px) {
  .article-container {
    flex-direction: column;
    width: 100%;
    text-align: center;
    img {
      margin: 0.8rem auto;
    }
    .tag {
      margin-left: 0;
    }
  }
  .article-content {
    >p {
      margin: 0;
      text-align: center;
    }
  }
}
</style>
