<template>
  <div class="article-container" :style="{
    backgroundImage: 'url(' + require(`../../assets/articles/${ image }.svg`) + ')'}">
    <div class="article-content">
      <span>{{ tag }}</span>
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
  // TODO: Перевести data на пропсы
  name: 'FeaturedArticle',
  props: {
    tag: String,
    articleTitle: String,
    aboutArticle: Object,
    articleText: String,
    image: String,
  },
};
</script>

<style lang="scss" scoped>
.article-container {
  display: flex;
  width: 1316px;
  height: 592px;
  margin: 50px auto;
}

.article-content {
  background: white;
  display: flex;
  flex-direction: column;
  width: 509px;
  height: 483px;
  margin: 0 0 109px 45px;

  span {
    font-family: 'Open Sans',serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: rgba(28, 28, 28, 0.5);
    margin: 76px 0 0 39px;
    text-transform: uppercase;
  }

  h2 {
    font-family: 'Libre Baskerville',serif;
    font-style: normal;
    font-weight: 700;
    font-size: 33px;
    color: black;
    margin: 0 40px 12px 40px;
  }

  p {
    font-family: 'Open Sans',serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin: 14px 40px;
  }
}

.about-article {
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  font-family: 'Open Sans',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  h4 {
    color: rgba(28, 28, 28, 0.5);
    margin-left: 10px;
  }
}

.dot {
  width: 3px;
  height: 3px;
  background: rgba(28, 28, 28, 0.5);;
  border-radius: 50%;
  margin: auto 10px;
}
</style>
