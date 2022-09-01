<template>
  <!--TODO: Поправить все компоненты статей. Добавить классы для содержимого контента!-->
  <!--TODO: Добавить правильные отступы!-->
  <div class="article-container">
    <img :src="require(`../../assets/articles/${ image }.svg`)" alt="">
    <div class="article-content">
      <h3>{{ tag }}</h3>
      <h2> {{ articleTitle }}</h2>
      <div class="about-article">
        <h4>{{ aboutArticle.author }}</h4>
        <!--TODO: Добавить разделитель!-->
        <h4>{{ aboutArticle.date }}</h4>
      </div>
      <p>{{ articleText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RpArticle',
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
  width: 812px;
  height: 177px;
}
.article-container:first-child {
  margin: 104px 0 0 39px;
}

.article-container:not(:first-child){
  margin: 66px 0 0 39px;
}

.article-container > img {
  width: 237px;
  height: 177px;
}

.article-content {
  display: flex;
  flex-direction: column;
  width: 856px;
  height: 311px;
  margin: 0 0 0 37px;
}

.article-content > h3 {
  font-family: 'Open Sans',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: rgba(28, 28, 28, 0.5);
  text-transform: uppercase;
  margin: 0 37px;
}

.article-content > h2 {
  font-family: 'Libre Baskerville',serif;
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  color: black;
  margin: 4px 40px 3px 37px;
}

.about-article {
  display: flex;
  flex-direction: row;
  margin-left: 37px;
  font-family: 'Open Sans',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}

.about-article > h4 {
  color: rgba(28, 28, 28, 0.5);
  margin: 0;
}

.about-article > h4:not(:first-child) {
  margin-left: 37px;
}

.article-content > p {
  font-family: 'Open Sans',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin: 14px 40px;
}
</style>
