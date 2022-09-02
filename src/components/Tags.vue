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
    <RpArticle v-for="(article, index) in filter" :key="index"
               :tag="article.tag"
               :article-title="article.articleTitle"
               :about-article="article.aboutArticle"
               :article-text="article.articleText"
               :image="article.image"
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
    const tags = ['technology', 'lifeandlove', 'essentialism', 'webdevelopment', 'fashion', 'lifestyle',
      'architecture', 'sports', 'entertainment', 'culinaryarts', 'travel', 'worldhistory',
      'aeronautics', 'games', 'minimalism', 'finearts', 'graphicdesign', 'filmmaking',
      'bitcoin', 'computers', 'machinelearning'];
    const articles = [
      {
        tag: 'Nature',
        articleTitle: 'Tempor deserunt Sunt Qui',
        aboutArticle: { author: 'Connie Robertson', date: 'November 3, 2012' },
        articleText: 'Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla tempor aute reprehenderit ut dolore mollit nisi consequat excepteur ex officia pariatur irure.',
        image: 'nature',
      },
      {
        tag: 'Plants',
        articleTitle: 'Occaecat Anim eu Qui',
        aboutArticle: { author: 'Eleanor Williamson', date: 'September 28, 2014' },
        articleText: 'Qui ipsum consectetur ad incididunt et aliquip exercitation laboris nisi reprehenderit. Et excepteur commodo esse enim ea aliqua officia reprehenderit.',
        image: 'plants',
      },
      {
        tag: 'Food',
        articleTitle: 'Fugiat Incididunt Voluptate Consequat',
        aboutArticle: { author: 'Bessie Watson', date: 'June 13, 2012' },
        articleText: 'Mollit ea culpa ipsum pariatur eiusmod. Irure et.',
        image: 'food',
      },
      {
        tag: 'Colorful',
        articleTitle: 'Occaecat Anim eu Qui',
        aboutArticle: { author: 'Ted Simmmons', date: 'June 21, 2015' },
        articleText: 'Amet ipsum occaecat aliqua aute nisi laboris nostrud culpa est do. Aliqua esse velit in excepteur esse qui voluptate laboris adipisicing qui irure elit amet excepteur.',
        image: 'colorful',
      },
    ];
    const articleTag = null;
    return { tags, articleTag, articles };
  },
  methods: {
    clickTag(index) {
      this.articleTag = this.tags[index];
      return this.articleTag;
    },
  },
  computed: {
    filter() {
      if (this.articleTag) {
        return this.articles.filter(
          (article) => article.tag.toLowerCase() === this.articleTag.toLowerCase(),
        );
      }
      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 213px;

  label {
    input {
      outline: none;
      width: 707px;
      height: 60px;
      font-size: 20px;
      border: solid 2px #1C1C1C;
      border-radius: 10px;
      background-image: url("@/assets/search.svg");
      background-repeat: no-repeat;
      background-position: 655px center;
    }
  }
}

.tags-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin:60px 0;

  button {
    border: 1px solid black;
    border-radius: 50px;
    background: white;
    margin-top: 5px;
    margin-left: 16px;
    padding: 11px 15px;
    font-family: 'Libre Baskerville',serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
}
</style>
