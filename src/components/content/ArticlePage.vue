<template>
  <div class="article-container">
    <img :src="require(`../../assets/images/articles/${ article.image }.svg`)" alt="article">
    <h1>{{ article.articleTitle }}</h1>
    <div class="about-article">
      <span>{{ article.aboutArticle.author }}</span>
      <span>{{ article.aboutArticle.date }}</span>
    </div>
    <span class="tag">{{ article.tag }}</span>
    <p>{{ article.articleText }}</p>
    <div class="about-the-author">
      <span>About the author</span>
      <div class="author-profile">
      <img :src="require(`../../assets/images/profile/${ profileData.image }.svg`)"
           alt="profile">
        <div class="author-info">
          <h2>{{ profileData.name }}</h2>
          <span>@{{ profileData.username }}</span>
          <p>{{ profileData.information }}</p>
        </div>
      </div>
    </div>
    <div class="pagination">
      <router-link to="/"><img src="@/assets/images/back_button.svg" alt="back"></router-link>
      <p>Go back: <span>Boom boom pow is et Letstrade.</span></p>
      <p>Next up: <span>Lorem ipsum so Ceat Riak</span></p>
      <router-link to="/"><img src="@/assets/images/next_button.svg" alt="next"></router-link>
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

<style lang="scss" scoped>
.article-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 62px;

  img {
    width: 1316px;
    height: 592px;
  }

  h1 {
    font-family: 'Libre Baskerville',serif;
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    margin: 54px 0 17px 0;
  }

  .tag {
    font-family: 'Open Sans',serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-top: 0.9rem;
    color: rgba(28, 28, 28, 0.5);
  }
  p {
    width: 652px;
  }
}

.about-article {
  display: flex;
  flex-direction: row;
  height: content-box;
  font-family: 'Open Sans',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  span {
    color: rgba(28, 28, 28, 0.5);
    margin-left: 10px;

    &:not(:first-child) {
      margin-left: 10px;
    }

    &:first-child::after {
      content: '•';
      margin-left: 10px;
    }
  }
}

.about-the-author {
  display: flex;
  flex-direction: column;
  width: 718px;
  height: 200px;
  margin-top: 75px;

  span {
    font-family: 'Open Sans',serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: rgba(28, 28, 28, 0.5);
    text-transform: uppercase;
    margin-bottom: 15px;
  }
}

.author-profile {
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 11.8rem;
    height: 11.8rem;
    border-radius: 50%;
  }
}

.author-info {
  margin-left: 75px;

  h2 {
    font-family: 'Libre Baskerville',serif;
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    margin: 0 ;
  }

  span {
    font-family: 'Open Sans',serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-transform: none !important;
    color: rgba(28, 28, 28, 0.5);
    margin: 5px 0 8px 0;
  }

  p {
    font-family: 'Open Sans',serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    color: #1C1C1C;
    width: 27rem;
  }
}

.pagination {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 163px;

  a {
    img {
      width: 150px;
      height: 150px;
    }
  }

  p, p  span {
    font-family: 'Libre Baskerville',serif;
    font-style: normal;
    font-size: 20px;
  }
  p {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 400;

    span {
      font-weight: 700;
    }
  }
}

</style>
