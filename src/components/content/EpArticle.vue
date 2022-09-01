<template>
  <div class="article-container">
    <img :src="require(`../../assets/articles/${ image }.svg`)" alt="">
    <div class="article-content">
      <h3>{{ tag }}</h3>
      <h2> {{ articleTitle }}</h2>
      <div class="about-article">
        <h4>{{ aboutArticle.author }}</h4>
        <div class="dot"></div>
        <h4>{{ aboutArticle.date }}</h4>
      </div>
      <p>{{ articleText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EpArticle',
  props: {
    tag: String,
    articleTitle: String,
    aboutArticle: Object,
    articleText: String,
    image: String,
  },
};
</script>

<style scoped>
.article-container {
  display: flex;
  flex-direction: row;
  margin: 50px 25px;
  width: 100%;
}

.article-container > img {
  width: 370px;
  height: 300px;
  margin-top: 54px;
}

.article-content {
  display: flex;
  flex-direction: column;
  width: 856px;
  height: 311px;
  margin: 54px 0;
}

.article-content > h3 {
  font-family: 'Open Sans',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: rgba(28, 28, 28, 0.5);
  margin-left: 39px;
  text-transform: uppercase;
}

.article-content > h2 {
  font-family: 'Libre Baskerville',serif;
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  color: black;
  margin: 0 40px 12px 40px;
}

.about-article {
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  font-family: 'Open Sans',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}

.about-article > h4 {
  color: rgba(28, 28, 28, 0.5);
  margin-left: 10px;
}

.article-content > p {
  font-family: 'Open Sans',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin: 14px 40px;
}

.dot {
  width: 3px;
  height: 3px;
  background: rgba(28, 28, 28, 0.5);;
  border-radius: 50%;
  margin: auto 10px;
}
</style>
