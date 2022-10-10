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
  props: {
    article: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      profileData: {
        image: 'profile_picture',
        name: 'Arthur Black',
        information: 'Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.',
        username: 'arhur_black',
        website: 'arthurblack.com',
        linkedin: '',
        instagram: '',
        twitter: '',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.article-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3.875rem;

  img {
    width: 82.25rem;
    height: 37rem;
  }

  h1 {
    font-weight: 700;
    font-size: 2.6rem;
    margin: 3.4rem 0 1.1rem 0;
    text-align: center;
  }

  .tag {
    font-size: 1rem;
    margin-top: 0.9rem;
    color: rgba(28, 28, 28, 0.5);
  }
  p {
    width: 40.75rem;
  }
}

.about-article {
  display: flex;
  flex-direction: row;
  height: content-box;
  font-size: 1rem;

  span {
    color: rgba(28, 28, 28, 0.5);
    margin-left: 0.6rem;

    &:not(:first-child) {
      margin-left: 0.6rem;
    }

    &:first-child::after {
      content: '•';
      margin-left: 0.6rem;
    }
  }
}

.about-the-author {
  display: flex;
  flex-direction: column;
  width: 44.9rem;
  height: 12.5rem;
  margin-top: 4.7rem;

  span {
    font-size: 1.25rem;
    color: rgba(28, 28, 28, 0.5);
    text-transform: uppercase;
    margin-bottom: 0.9rem;
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
  margin-left: 4.7rem;

  h2 {
    font-size: 2.6rem;
    margin: 0 ;
  }

  span {
    font-size: 1rem;
    text-transform: none !important;
    color: rgba(28, 28, 28, 0.5);
    margin: 0.3rem 0 0.5rem 0;
  }

  p {
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
  margin-top: 10.2rem;

  a {
    img {
      width: 9.4rem;
      height: 9.4rem;
    }
  }

  p, p  span {
    font-family: 'Libre Baskerville',serif;
    font-style: normal;
    font-size: 1.25rem;
  }
  p {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    span {
      font-weight: 700;
    }
  }
}

@media (max-width: 767px) {
  .article-container {
    >img {
      width: 41.25rem;
    }
  }
  .about-the-author {
    >span {
      padding-left: 2rem;
    }
  }
  .pagination {
    p {
      margin-left: 1rem;
    }
    >a {
      img {
        width: 4rem;
        height: 4rem;
      }
    }
  }
}
</style>
