<template>
  <div class="profile-container">
    <div class="author">
      <img :src="require(`../assets/profile/${profileData.image}.svg`)" alt="profile_picture">
      <div class="author-info">
        <h2>{{ profileData.name }}</h2>
        <span>@{{ profileData.username }}</span>
        <p>{{ profileData.information }}</p>
        <div class="social-networks">
          <div class="website">
            <img src="@/assets/profile/link.svg" alt="web-site" class="link">
            <a :href="`http://${profileData.website}`" target="_blank">{{ profileData.website }}</a>
          </div>
          <a :href="`${profileData.linkedin}`" target="_blank">
            <img src="@/assets/profile/linkedin.svg" alt="linkedin">
          </a>
          <a :href="`${profileData.instagram}`" target="_blank">
            <img src="@/assets/profile/instagram.svg" alt="instagram">
          </a>
          <a :href="`${profileData.twitter}`" target="_blank">
            <img src="@/assets/profile/twitter.svg" alt="twitter">
          </a>
        </div>
      </div>
    </div>
    <FeaturedArticle
              :tag="featuredArticle.tag"
              :article-title="featuredArticle.articleTitle"
              :about-article="featuredArticle.aboutArticle"
              :article-text="featuredArticle.articleText"
              :image="featuredArticle.image"/>
    <RpArticle v-for="(article, index) in articles" :key="index"
               :tag="article.tag"
               :article-title="article.articleTitle"
               :about-article="article.aboutArticle"
               :article-text="article.articleText"
               :image="article.image"/>
  </div>
</template>

<script>
import FeaturedArticle from '@/components/content/FeaturedArticle.vue';
import RpArticle from '@/components/content/RpArticle.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Profile',
  components: { FeaturedArticle, RpArticle },

  data() {
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
    const featuredArticle = {
      tag: 'Featured Article',
      articleTitle: 'World’s Most Dangerous Technology Ever Made.',
      articleText: 'Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.',
      aboutArticle: { author: 'Ralph Hawkins', date: 'May 7, 2019 (10 mins read)' },
      image: 'first_article_image',
    };
    const articles = [
      {
        tag: 'Nature',
        articleTitle: 'Tempor deserunt Sunt Qui',
        aboutArticle: { author: 'Connie Robertson', date: 'November 3, 2012' },
        articleText: 'Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla tempor aute reprehenderit ut dolore mollit nisi consequat excepteur ex officia pariatur irure.',
        image: 'nature',
      },
      {
        tag: 'Plants',
        articleTitle: 'Occaecat Anim eu Qui',
        aboutArticle: { author: 'Eleanor Williamson', date: 'September 28, 2014' },
        articleText: 'Qui ipsum consectetur ad incididunt et aliquip exercitation laboris nisi reprehenderit. Et excepteur commodo esse enim ea aliqua officia reprehenderit.',
        image: 'plants',
      },
      {
        tag: 'Food',
        articleTitle: 'Fugiat Incididunt Voluptate Consequat',
        aboutArticle: { author: 'Bessie Watson', date: 'June 13, 2012' },
        articleText: 'Mollit ea culpa ipsum pariatur eiusmod. Irure et.',
        image: 'food',
      },
      {
        tag: 'Colorful',
        articleTitle: 'Occaecat Anim eu Qui',
        aboutArticle: { author: 'Ted Simmmons', date: 'June 21, 2015' },
        articleText: 'Amet ipsum occaecat aliqua aute nisi laboris nostrud culpa est do. Aliqua esse velit in excepteur esse qui voluptate laboris adipisicing qui irure elit amet excepteur.',
        image: 'colorful',
      },
    ];
    return { profileData, articles, featuredArticle };
  },
};
</script>

<style lang="scss" scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.author {
  display: flex;
  flex-direction: row;
  width: 718px;
  height: 200px;
  margin-top: 174px;

  img {
    width: 200px;
    height: 200px;
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
    color: rgba(28, 28, 28, 0.5);
    margin: 5px 0 8px 0;
  }

  p {
    font-family: 'Open Sans',serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #1C1C1C;
  }
}

.social-networks {
  display: flex;
  flex-direction: row;

  a {
    img {
      width: 24px;
      height: 24px;
    }
  }
}

.website {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 177px;

  img {
    width: 24px;
    height: 24px;
  }

  a {
    text-decoration: none;
    font-family: 'Open Sans',serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: black;
  }
}
</style>
