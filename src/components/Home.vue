<template>
  <div>
    <FeaturedArticle
          :article="featuredArticle"/>
    <EditorsPicks />
    <FeaturedArticle
          :article="articleInterior"/>
    <div class="recent-posts">
      <RecentPost/>
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
    const featuredArticle = {
      tag: 'Featured Article',
      articleTitle: 'World’s Most Dangerous Technology Ever Made.',
      articleText: 'Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.',
      aboutArticle: { author: 'Ralph Hawkins', date: 'May 7, 2019 (10 mins read)' },
      image: 'first_article_image',
    };
    const articleInterior = {
      tag: 'Interior',
      articleTitle: 'Laborum Ullamco Sunt id ut Sunt',
      articleText: 'Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.',
      aboutArticle: { author: 'Bessie Hawkins', date: 'May 7, 2019 (10 mins read)' },
      image: 'interior',
    };
    const tags = ['Technology', 'Open Source', 'JavaScript', 'Minimalism', 'Self-help', 'Animals',
      'Herbivores', 'HTML', 'CSS', 'PHP', 'Web Technologies', 'Career', 'Life', 'Spirituality',
      'Food', 'Cooking', 'Sports', 'Racing', 'Mountain Hiking', 'Cruising'];
    return { tags, featuredArticle, articleInterior };
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.recent-posts {
  display: flex;
  flex-direction: row;
  justify-content: center;

  ul {
    margin-top: 94px;

    li {
      list-style: none;
      margin-top: 10px;
    }

    li:nth-child(1) {
      font-family: 'Open Sans',serif;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      color: #1C1C1C;
      margin-bottom: 10px;
    }

    li:not(:first-child):hover {
      cursor: pointer;
    }
  }
}

</style>
