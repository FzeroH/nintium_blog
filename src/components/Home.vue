<template>
  <div>
     <router-link
       :to="{ name:'article',
         params: {
            article: featuredArticle,
          },
          query: { 'id': '14513451345' }}">
       <featured-article :article="featuredArticle"/>
     </router-link>
    <editors-picks />
    <router-link :to="{ name:'article',
         params: {
            article: articleInterior,
          },
          query: { 'id': '12351' }}">
      <featured-article :article="articleInterior" :position="'right'"/>
    </router-link>
    <div class="recent-posts">
      <recent-post/>
      <ul>
        <li>tags.</li>
        <li v-for="(tag, index) in tags" :key="index">{{ tag }}</li>
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
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;

  >a {
    align-self: center;
    margin: 3rem 0;
  }

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
      }
    }
  }
}

</style>
