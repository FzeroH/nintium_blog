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
      <featured-article :article="featuredArticle[0]"
                        @open-the-article="openTheArticle(featuredArticle[0].id)"/>

      <rp-article :article="article"
                  v-for="(article, index) in articles"
                  :key="index"
                  @open-the-article="openTheArticle(article.id)"/>
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
    };
  },
  methods: {
    openTheArticle(id) {
      this.$router.push({
        name: 'article',
        query: { id },
      });
    },
  },
  computed: {
    featuredArticle() {
      return this.$store.getters.getArticleList.filter((el) => el.aboutArticle.author === 'Ralph Hawkins');
    },
    articles() {
      return this.$store.getters.getArticleList.filter((el) => el.aboutArticle.author === 'Leslie Pena');
    },
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
