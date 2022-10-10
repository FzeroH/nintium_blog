<template>
  <div class="profile-container">
    <div class="author">
      <img :src="require(`../../src/assets/images/profile/${profileData.image}.svg`)" alt="profile">
      <div class="author-info">
        <h2>{{ profileData.name }}</h2>
        <span>@{{ profileData.username }}</span>
        <p>{{ profileData.information }}</p>
        <div class="social-networks">
          <div class="website">
            <img src="@/assets/images/profile/link.svg" alt="web-site" class="link">
            <a :href="`http://${profileData.website}`" target="_blank">{{ profileData.website }}</a>
          </div>
          <a :href="`${profileData.linkedin}`" target="_blank">
            <img src="@/assets/images/profile/linkedin.svg" alt="linkedin">
          </a>
          <a :href="`${profileData.instagram}`" target="_blank">
            <img src="@/assets/images/profile/instagram.svg" alt="instagram">
          </a>
          <a :href="`${profileData.twitter}`" target="_blank">
            <img src="@/assets/images/profile/twitter.svg" alt="twitter">
          </a>
        </div>
      </div>
    </div>
    <router-link :to="{
         name:'article',
         params: {
            article: featuredArticle,
          },
          query: { 'id': `1241242` }}" class="articles">
      <featured-article :article="featuredArticle"/>
    </router-link>
    <router-link :to="{ name:'article',
         params: {
            article: article,
          },
          query: { 'id': `${ index }3` }}"
                 v-for="(article, index) in articles"
                 :key="index"
                 class="articles">
      <rp-article :article="article"/>
    </router-link>
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
      articles: [
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
      ],
      featuredArticle: {
        tag: 'Featured Article',
        articleTitle: 'World’s Most Dangerous Technology Ever Made.',
        articleText: 'Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.',
        aboutArticle: { author: 'Ralph Hawkins', date: 'May 7, 2019 (10 mins read)' },
        image: 'first_article_image',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .author {
    display: flex;
    flex-direction: row;
    width: 44.875rem;
    height: 12.5rem;
    margin-top: 10.875rem;

    >img {
      width: 12.5rem;
      height: 12.5rem;
      border-radius: 50%;
    }

    .author-info {
      margin-left: 4.7rem;

      >span {
        color: rgba(28, 28, 28, 0.5);
        font-size: 1rem;
        line-height: 1.375rem;
      }

      h2 {
        font-weight: 700;
        font-size: 2.6rem;
      }

      p {
        font-size: 1rem;
        color: #1C1C1C;
      }

      .social-networks {
        display: flex;
        flex-direction: row;

        a {
          margin-right: 1rem;
          img {
            width: 1.5rem;
            height: 1.5rem;
          }
        }
      }

      .website {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 11.1rem;

        img {
          width: 1.5rem;
          height: 1.5rem;
        }
        a {
          text-decoration: none;
          font-family: 'Open Sans',serif;
          font-size: 1rem;
          color: black;
        }
      }
    }
  }

  .articles {
    margin-top: 3.9rem;
    &:last-child {
      margin-bottom: 4.5rem;
    }
  }

}

@media (max-width: 767px) {
  .author {
    width: 35.875rem !important;
  }
  .author-info {
    margin-left: 0 !important;
  }
  .website {
    margin-right: 1.1rem !important;
  }
}

</style>
