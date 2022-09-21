<template>
  <section class="header-section" v-if="$route.path !== '/screenlock'">
    <form action="" v-if="this.$route.name !== 'tags'"
          :class="{ 'search-active': isActiveSearch === true }">
      <!--eslint-disable-next-line-->
      <input type="text"  @keydown.enter.p.prevent="searchByTag(articleTag)" v-model="articleTag" />
      <button @click.prevent="isActiveSearch = !isActiveSearch">
        <img src="@/assets/images/search.svg" alt="search"/>
      </button>
      <!--eslint-disable-next-line-->
      <img src="@/assets/images/search.svg" alt="search"
            @click="isActiveSearch = !isActiveSearch"/>
    </form>
    <router-link to="/login" class="login"  v-if="!isAuth">
      Login
    </router-link>
    <!--eslint-disable-next-line-->
    <img src="@/assets/images/profile/profile_picture.svg"
         alt="profile"
         class="profile-img"
         v-if="isAuth">
    <div class="profile-menu">
      <p>Arthur Black</p>
      <span>@arthurblack</span>
      <ul>
        <!--eslint-disable-next-line-->
        <li @click="goTo(index)" v-for="(menuItem, index) in menuItems" :key="index">
          {{ menuItem }}
        </li>
        <!--eslint-disable-next-line-->
        <li @click="signOut">Sign out</li>
      </ul>
    </div>
  </section>
</template>

<script>

export default {
  name: 'isAuthSection',
  props: {
    isAuth: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      menuItems: ['Dashboard', 'Write a post', 'Settings', 'Help'],
      articleTag: null,
      isActiveSearch: false,
    };
  },
  methods: {
    goTo(index) {
      const menuItems = this.menuItems.map((elem) => elem.replaceAll(' ', '-'));
      const menuItem = menuItems[index].toLowerCase();
      this.$router.push({ path: `/${menuItem}` });
    },
    signOut() {
      this.$props.isAuth = false;
      this.$router.push({ name: 'login' });
    },
    searchByTag(articleTag) {
      this.$router.push({ name: 'tags', params: { tag: articleTag } });
      this.articleTag = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.header-section {
  align-self: end;
  justify-content: center;
}

form {
  position: relative;
  right: 10.6rem;
  width: 22.7rem;
  height: 2.9rem;
  margin-right: -4.7rem;
  margin-top: 2.19rem;
  background: none;
  box-sizing: border-box;

  input {
    width: 22.7rem;
    height: 2.9rem;
    outline: none;
    font-size: 1rem;
    border: 0.125rem solid #1C1C1C;
    border-radius: 0.6rem;
    padding: 0 3.13rem 0 1.25rem;
    visibility: hidden;
  }

  button {
    position: absolute;
    box-sizing: border-box;
    background: #fff;
    float: right;
    width: 1.9rem;
    height: 1.9rem;
    top: 0.6rem;
    right: -3.5rem;
    border-radius: 50%;
    border: none;
    visibility: hidden;
  }

  >img {
    position: absolute;
    width: 1.875rem;
    height: 1.875rem;
    top: 0.68rem;
    right: -3.5rem;

    &:hover {
      cursor: pointer;
    }
  }
}

.search-active {

  input {
    visibility: visible;
  }
  button {
    visibility: visible;

    img {
      width: 1.875rem;
      height: 1.875rem;
    }
  }
  >img {
    display: none;
  }
}

.login {
  background: white;
  color: black;
  padding: 0.75rem 4.2rem;
  margin: 2.2rem 1.6rem 0 0.6rem !important;
  border: 0.125rem solid #1C1C1C;
  border-radius: 0.6rem;
  font-size: 1.25rem;
}

.profile-img {
  width: 3.75rem;
  height: 3.75rem;
  margin: 1.81rem 1.56rem 0 0;
  cursor: pointer;

  &:hover +.profile-menu {
    position: absolute;
    top: 6.2rem;
    right: 1.6rem;
    transform: translateY(0%);
    visibility: visible;
    opacity: 1;
  }
}

.profile-menu {
  position: absolute;
  background: white;
  width: 10.6rem;
  height: 13.9rem;
  top: 6.2rem;
  right: 1.6rem;
  border-radius: 0.95rem;
  transform: translateY(20%);
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease;

  &:hover {
    position: absolute;
    top: 6.2rem;
    right: 1.6rem;
    transform: translateY(0%);
    visibility: visible;
    opacity: 1;
  }

  p {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.4rem;
    color: #1C1C1C;
    margin: 1rem 2.8rem 0.25rem 1.4rem;
  }

  span {
    font-size: 0.9rem;
    line-height: 1.2rem;
    color: rgba(28, 28, 28, 0.8);
    margin: 0 3.7rem 0 1.4rem;
  }

  ul {
    margin-top: 0.5rem;
    padding: 0 3.1rem 0 1.4rem;
    border-top: 1px solid rgba(28, 28, 28, 0.1);
    width: 98px;
    height: 8.1rem;

    li {
      height: 1.4rem;
      margin: 0.3rem 0;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

@media (min-width: 1441px) and (max-width: 2560px) {
  form {
    >img {
      top: 0.6rem;
      right: -3.8rem;
    }
  }

}

@media (min-width: 992px) and (max-width: 1199px) {
  form {
    >img {
      top: 0.6rem;
      right: -3.5rem;
      width: 1.875rem;
      height: 1.875rem;
    }
    button {
      top: 0.5rem;
      right: -2.9rem;
      img {
        width: 1.875rem;
        height: 1.875rem;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 993px) {
  form {
    >img {
      top: 0.6rem;
      right: -3.8rem;
      width: 1.875rem;
      height: 1.875rem;
    }
    button {
      top: 0.5rem;
      right: -2.9rem;
      img {
        width: 1.875rem;
        height: 1.875rem;
      }
    }
  }
}

@media (max-width: 767px) {
  form {
    width: 100%;
    >img {
      top: 0.6rem;
      right: -3.8rem;
      width: 1.875rem;
      height: 1.875rem;
    }
    button {
      top: 0.5rem;
      right: -2.9rem;
      img {
        width: 1.875rem;
        height: 1.875rem;
      }
    }
  }
}

</style>
