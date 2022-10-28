<template>
  <div>
    <label for="search">
      <input type="text" id="search" v-model="articleTag"/>
    </label>
    <div class="tags-container" v-if="!articleTag">
      <button v-for="(tag, index) in tags"
              :key="index" @click="clickTag(`${index}`)">#{{ tag }}
      </button>
    </div>
      <rp-article
      :article="article"
      v-for="(article, index) in filter"
      :key="index"
      @open-the-article="openTheArticle(article.id)"
      />
  </div>
</template>

<script>
import RpArticle from '@/components/content/RpArticle.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Tags',
  components: { RpArticle },

  data() {
    return {
      tags: ['technology', 'lifeandlove', 'essentialism', 'webdevelopment', 'fashion', 'lifestyle',
        'architecture', 'sports', 'entertainment', 'culinaryarts', 'travel', 'worldhistory',
        'aeronautics', 'games', 'minimalism', 'finearts', 'graphicdesign', 'filmmaking',
        'bitcoin', 'computers', 'machinelearning'],
      articleTag: null,
    };
  },
  props: {
    tag: {
      type: String,
      default: '',
    },
  },
  methods: {
    clickTag(index) {
      this.articleTag = this.tags[index];
      return this.articleTag;
    },
    openTheArticle(id) {
      this.$router.push({
        name: 'article',
        params: { id },
      });
    }, // openTheArticle
  },
  computed: {
    articles() {
      return this.$store.getters.getArticleList;
    },
    filter() {
      if (this.articleTag) {
        return this.articles.filter(
          (article) => article.tag.toLowerCase() === this.articleTag.toLowerCase(),
        );
      }
      return null;
    },
  },
  mounted() {
    if (this.$props.tag.length !== 0) {
      this.articleTag = this.$props.tag;
    }
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 13.3rem;

  label {
    input {
      width: 44.2rem;
      height: 3.75rem;
      font-size: 1.25rem;
      padding-right: 2.4rem;
      padding-left: 1.25rem;
      border: 0.125rem solid  #1C1C1C;
      border-radius: 0.6rem;
      background-image: url("@/assets/images/search.svg");
      background-size: 1.875rem 1.875rem;
      background-repeat: no-repeat;
      background-position: 44.3rem center;
    }
    margin-bottom: 1rem;
  }
}

.tags-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 3.75rem 0;

  button {
    border: 1px solid black;
    border-radius: 3rem;
    background: white;
    margin-top: 0.3rem;
    margin-left: 1rem;
    padding: 0.7rem 0.9rem;
  }
}

@media (min-width: 1024px) and (max-width: 2560px) {
  input {
    width: 44.2rem !important;
    padding-right: 3.4rem !important;
    background-position: 45.6rem center !important;
  }
}

@media (max-width: 1023px) {
  input {
    width: 45rem !important;
    padding-right: 3.4rem !important;
    background-position: 46.8rem center !important;
  }
}

@media (max-width: 767px) {
  input {
    width: 25rem !important;
    padding-right: 3.4rem !important;
    background-position: 26.6rem center !important;
  }
}
</style>
