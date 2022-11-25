<template>
  <div class="article-container" :style="{
   backgroundImage: 'url(' + require(`../../assets/images/articles/${ article.image }.svg`) + ')',
   backgroundRepeat: 'no-repeat', backgroundSize: '100%'}">
    <!-- eslint-disable-next-line -->
    <div class="article-content"
         :class="{ 'article-content-right': position==='right' }"
         @click="openTheArticle">
      <span class="tag">{{ article.tag }}</span>
      <h2> {{ article.articleTitle }}</h2>
      <div class="about-article-container">
        <span class="about-article">{{ article.aboutArticle.author }}</span>
        <span class="about-article">{{ article.aboutArticle.date }}</span>
      </div>
      <p>{{ article.articleText }}</p>
      <button class="update-file" @click="updatePost" v-if="$route.path=== '/profile'"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturedArticle',
  props: {
    article: {
      type: Object,
      default: () => {},
    },
    position: {
      type: String,
      default: 'left',
    },
  },
  methods: {
    openTheArticle() {
      this.$emit('open-the-article');
    },
    updatePost() {
      this.$router.push({
        path: '/write-a-post',
        query: { update: this.article.id },
      });
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
  align-self: center;
  margin: 3rem 0;
}

.article-content {
  position: relative;
  background: white;
  display: flex;
  flex-direction: column;
  width: 31.8rem;
  height: 30.2rem;
  margin: 0 0 6.8rem 2.8rem;

  &:hover {
    cursor: pointer;
  }

  .tag {
    font-size: 1.25rem;
    color: rgba(28, 28, 28, 0.5);
    margin: 4.75rem 0 0 2.4rem;
    text-transform: uppercase;
  }

  h2 {
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
  margin-left: 2.5rem;
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
.update-file {
  position: absolute;
  right: 0.8rem;
  top: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  background-color: rgba(255,255,255,0);
  background-image: url("/src/assets/images/settings.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 50%;
}

@media (min-width: 769px) and (max-width: 1023px) {
  .article-container {
    margin: 3rem auto;
    width: 73rem;
    background-size: auto !important;
  }
}
@media (max-width: 768px) {
  .article-container {
    margin: 3rem auto;
    width: 100%;
    background-size: auto !important;
  }
  .article-content-right {
    position: static;
  }
}
@media (max-width: 428px) {
  .article-container {
    background-position: center center;
  }
  .article-content {
    margin: auto;
    width: auto;
  }
}

</style>
