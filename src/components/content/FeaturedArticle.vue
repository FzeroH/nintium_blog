<template>
  <div class="article-container">
    <div class="article-content">
      <!--TODO: Разобраться, как добавить в background-image значение из переменной!-->
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
  // TODO: Перевести data на пропсы
  name: 'FeaturedArticle',
  data() {
    const tag = 'Featured Article';
    const articleTitle = 'World’s Most Dangerous Technology Ever Made.';
    const articleText = 'Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.';
    const aboutArticle = { author: 'Ralph Hawkins', date: 'May 7, 2019 (10 mins read)' };
    return {
      tag, articleTitle, articleText, aboutArticle,
    };
  },
};
</script>

<style scoped>
.article-container {
  display: flex;
  background-image: url("@/assets/articles/first_article_image.svg");
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
}

.article-content > h3 {
  font-family: 'Open Sans',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: rgba(28, 28, 28, 0.5);
  margin: 76px 0 0 39px;
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
</style>
