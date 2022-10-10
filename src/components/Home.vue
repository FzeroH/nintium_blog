<template>
  <div>
    <featured-article
      :article="featuredArticle"
      @open-the-article="openTheArticle(1, featuredArticle)"/>
    <editors-picks />
    <featured-article
      :article="articleInterior"
      :position="'right'"
      @open-the-article="openTheArticle(3, articleInterior)"/>
    <div class="recent-posts">
      <recent-post/>
      <ul>
        <li>tags:</li>
        <!--eslint-disable-next-line-->
        <li v-for="(tag, index) in tags" :key="index" @click="searchByTag(index)">{{ tag }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import FeaturedArticle from '@/components/content/FeaturedArticle.vue';
import EditorsPicks from '@/components/EditorsPicks.vue';
import RecentPost from '@/components/RecentPosts.vue';

export default {
  name: 'MainPage',
  components: { RecentPost, FeaturedArticle, EditorsPicks },
  data() {
    return {
      tags: ['Technology', 'Open Source', 'JavaScript', 'Minimalism', 'Self-help', 'Animals',
        'Herbivores', 'HTML', 'CSS', 'PHP', 'Web Technologies', 'Career', 'Life', 'Spirituality',
        'Food', 'Cooking', 'Sports', 'Racing', 'Mountain Hiking', 'Cruising'],
      featuredArticle: {
        tag: 'Featured Article',
        articleTitle: 'World’s Most Dangerous Technology Ever Made.',
        articleText: 'Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.',
        aboutArticle: { author: 'Ralph Hawkins', date: 'May 7, 2019 (10 mins read)' },
        image: 'first_article_image',
      },
      articleInterior: {
        tag: 'Interior',
        articleTitle: 'Laborum Ullamco Sunt id ut Sunt',
        articleText: 'Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.',
        aboutArticle: { author: 'Bessie Hawkins', date: 'May 7, 2019 (10 mins read)' },
        image: 'interior',
      },
    };
  },
  methods: {
    searchByTag(index) {
      this.$router.push({ name: 'tags', params: { tag: this.tags[index] } });
    },
    openTheArticle(id, article) {
      this.$router.push({
        name: 'article',
        params: {
          article,
        },
        query: { id },
      });
    }, // openTheArticle
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .recent-posts {
    display: flex;
    flex-direction: row;
    justify-content: center;

    ul {
      margin-top: 5.875rem;

      li {
        margin-top: 0.6rem;
      }

      li:nth-child(1) {
        font-weight: 700;
        font-size: 1.25rem;
        color: #1C1C1C;
        margin-bottom: 0.6rem;
      }

      li:not(:first-child):hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
}

@media (max-width: 767px) {
  .recent-posts {
    flex-direction: column !important;
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      border-top: 0.01rem solid #1c1c1c;
      margin-bottom:0.5rem;
      li {
        margin-left: 1rem;
      }
    }
  }
}

</style>
