<template>
  <!-- eslint-disable-next-line -->
  <div class="article-container" @click="openTheArticle"
       :class="{'tags-style': $route.path=== '/tags'}">
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
    <button class="update-file" @click="updatePost" v-if="$route.path=== '/profile'"></button>
  </div>
</template>

<script>
export default {
  name: 'RpArticle',
  props: {
    article: Object,
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
  flex-direction: row;
  align-items: center;
  width: 50.75rem;

  &:first-child {
    margin: 6.5rem 0 0 2.4rem;
  }
  &:not(:first-child) {
    margin: 4rem 0 0 2.4rem;
  }

  &:hover {
    cursor: pointer;
  }

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
  padding: 0 2.3rem;

  .tag {
    font-size: 1.25rem;
    color: rgba(28, 28, 28, 0.5);
    text-transform: uppercase;
  }

  h2 {
    font-weight: 700;
    font-size: 2.06rem;
    color: black;
  }

  p {
    font-size: 1rem;
    color: black;
  }
}

.about-article-container {
  font-size: 1rem;
  padding: 0.2rem 0 0.7rem 0;

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

.tags-style {
  margin-top: 10rem !important;
  &:last-child {
    margin-bottom: 5rem;
  }
}

.update-file {
  position: absolute;
  right: 0.5rem;
  top: 0;
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  background-color: rgba(255,255,255,0);
  background-image: url("/src/assets/images/settings.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 50%;
}

@media (max-width: 767px){
  .article-container {
    flex-direction: column;
    margin: 0 !important;
    width: auto;
  }
  .article-content {
    width: auto;
  }
}
@media (max-width: 425px) {
  .article-container {
    flex-direction: column;
    text-align: center;
    margin-top: 2rem !important;
    width: auto;
  }
  .article-content {
    padding: 0;
    width: auto;
    >h {
      padding: 0 1rem;
    }
    >p {
      text-align: center;
      padding: 0 1rem;
    }
  }
}
</style>
