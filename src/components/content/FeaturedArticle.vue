<template>
  <div class="article-container" :style="{
   backgroundImage: 'url(' + require(`../../assets/images/articles/${ article.image }.svg`) + ')'}">
    <div class="article-content" :class="{ 'article-content-right': position==='right' }">
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
    position: {
      type: String,
      default: 'left',
    },
  },
};
</script>

<style lang="scss" scoped>
.article-container {
  display: flex;
  position: relative;
  width: 82.25rem;
  height: 37rem;
}

.article-content {
  background: white;
  display: flex;
  flex-direction: column;
  width: 31.8rem;
  height: 30.2rem;
  margin: 0 0 6.8rem 2.8rem;

  .tag {
    font-size: 1.25rem;
    color: rgba(28, 28, 28, 0.5);
    margin: 4.75rem 0 0 2.4rem;
    text-transform: uppercase;
  }

  h2 {
    font-weight: 700;
    font-size: 2.1rem;
    color: black;
    margin: 0 2.5rem 12px 2.5rem;
  }

  p {
    font-size: 1rem;
    margin: 0.875rem 2.5rem;
    color: black;
  }
}

.article-content-right {
  position: absolute;
  top: 3.4rem;
  right: 4.9rem;
}

.about-article-container{
  display: flex;
  flex-direction: row;
  margin-left: 2.5rem;
  font-size: 1rem;

  .about-article {
    color: rgba(28, 28, 28, 0.5);
    margin-left: 0.6rem;

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
