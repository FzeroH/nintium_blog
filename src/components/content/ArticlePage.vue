<template>
  <div class="article-container">
    <img :src="require(`../../assets/articles/${ article.image }.svg`)" alt="article">
    <h1>{{ article.articleTitle }}</h1>
    <div class="about-article">
      <h4>{{ article.aboutArticle.author }}</h4>
      <div class="dot"></div>
      <h4>{{ article.aboutArticle.date }}</h4>
    </div>
    <h3>{{ article.tag }}</h3>
    <p>{{ article.articleText }}</p>
    <div class="about-the-author">
      <h2>About the author</h2>
      <div class="author">
      <img :src="require(`../../assets/profile/${ profileData.image }.svg`)" alt="profile">
        <div class="author-info">
          <h2>{{ profileData.name }}</h2>
          <span>@{{ profileData.username }}</span>
          <p>{{ profileData.information }}</p>
        </div>
      </div>
    </div>
    <div class="pagination">
      <router-link to="/"><img src="@/assets/back_button.svg" alt="back"></router-link>
      <span>Go back: <h6>Boom boom pow is et Letstrade.</h6></span>
      <span>Next up: <h6>Lorem ipsum so Ceat Riak</h6></span>
      <router-link to="/"><img src="@/assets/next_button.svg" alt="back"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticlePage',
  data() {
    const article = {
      tag: '#technology #tech #career',
      articleTitle: 'The World’s Most Dangerous Technology Ever Made.',
      articleText: 'Commodo labore ut nisi laborum amet eu qui magna ullamco ut labore. Aliquip consectetur labore consectetur dolor exercitation est minim quis. Magna non irure qui ex est laborum nulla excepteur qui. Anim Lorem dolore cupidatat pariatur ex tempor. Duis ea excepteur proident ex commodo irure est.\n'
        + '\n'
        + 'Nisi commodo qui pariatur enim sint laborum consequat enim in officia. Officia fugiat incididunt commodo et mollit aliqua non aute. Enim dolor eiusmod aliqua amet ipsum in enim eiusmod. Quis exercitation sit velit duis.\n'
        + '\n'
        + 'Est Lorem labore consectetur minim sit eu eiusmod mollit velit. Consectetur voluptate ex amet id eiusmod laborum irure. Aliquip ad qui id exercitation irure amet commodo nisi quis. Occaecat minim incididunt eiusmod nostrud veniam quis culpa.\n'
        + 'Nisi ipsum et consequat id deserunt excepteur. Cillum non pariatur culpa ut occaecat laboris eu. Ullamco ad Lorem et elit laboris eu qui irure nulla qui culpa et. Cupidatat sunt ipsum proident aute exercitation do tempor aliqua cupidatat quis non exercitation. Adipisicing do minim dolore nulla mollit. Adipisicing incididunt irure ipsum et in esse ipsum elit tempor.\n'
        + '\n'
        + 'Aliquip mollit sunt qui irure. Irure ullamco Lorem excepteur dolor qui ea ad quis. Enim fugiat cillum enim ad occaecat sint qui elit labore mollit sunt laborum fugiat consequat. Voluptate labore sunt duis eu deserunt. Occaecat do ut ut labore cillum enim dolore ad enim enim id. Aliquip do veniam ad excepteur ad cillum qui deserunt nostrud sunt aliqua duis sunt occaecat. Laborum incididunt commodo ullamco proident quis.',
      aboutArticle: { author: 'Ralph Hawkins', date: 'May 7, 2019 (10 mins read)' },
      image: 'first_article_image',
    };
    const profileData = {
      image: 'profile_picture',
      name: 'Arthur Black',
      information: 'Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.',
      username: 'arhur_black',
      website: 'arthurblack.com',
      linkedin: '',
      instagram: '',
      twitter: '',
    };
    return { article, profileData };
  },
};
</script>

<style scoped>
.article-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 62px;
}

.article-container > img {
  width: 1316px;
  height: 592px;
}

.article-container > h1 {
  font-family: 'Libre Baskerville',serif;
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  margin: 54px 0 17px 0;
}

.article-container > h3 {
  font-family: 'Open Sans',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin-top: 0;
  color: rgba(28, 28, 28, 0.5);
}

.article-container > p {
  width: 652px;
}

.about-article {
  display: flex;
  flex-direction: row;
  height: content-box;
  font-family: 'Open Sans',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}

.about-article > h4 {
  color: rgba(28, 28, 28, 0.5);
  margin-left: 10px;
}

.dot {
  width: 3px;
  height: 3px;
  background: rgba(28, 28, 28, 0.5);;
  border-radius: 50%;
  margin: auto 10px;
}

.about-the-author {
  display: flex;
  flex-direction: column;
  width: 718px;
  height: 200px;
}

.about-the-author > h2 {
  font-family: 'Open Sans',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: rgba(28, 28, 28, 0.5);
  text-transform: uppercase;
  margin-bottom: 15px;
}

.author {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.author > img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.author-info {
  margin-left: 75px;
}

.author-info > h2 {
  font-family: 'Libre Baskerville',serif;
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  margin: 0 ;
}

.author-info > span {
  font-family: 'Open Sans',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: rgba(28, 28, 28, 0.5);
  margin: 5px 0 8px 0;
}

.author-info > p {
  font-family: 'Open Sans',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #1C1C1C;
}

.pagination {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 163px;
}

.pagination > a >img {
  width: 150px;
  height: 150px;
}

.pagination > span, .pagination > span >h6 {
  font-family: 'Libre Baskerville',serif;
  font-style: normal;
  font-size: 20px;
}

.pagination > span {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 400;
}

.pagination > h6 {
  font-weight: 700;
}
</style>
