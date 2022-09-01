<template>
  <div>
    <FeaturedArticle/>
    <EditorsPicks />
    <FeaturedArticle/>
    <div class="footer">
      <RecentPost/>
      <ul>
        <p>tags.</p>
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
    const tags = ['Technology', 'Open Source', 'JavaScript', 'Minimalism', 'Self-help', 'Animals',
      'Herbivores', 'HTML', 'CSS', 'PHP', 'Web Technologies', 'Career', 'Life', 'Spirituality',
      'Food', 'Cooking', 'Sports', 'Racing', 'Mountain Hiking', 'Cruising'];
    return { tags };
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.footer > ul {
  margin-top: 94px;
}

.footer > ul > p {
  font-family: 'Open Sans',serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #1C1C1C;
  margin-bottom: 10px;
}

.footer > ul > li {
  list-style: none;
  margin-top: 10px;
}

.footer > ul > li:hover {
  cursor: pointer;
}
</style>
