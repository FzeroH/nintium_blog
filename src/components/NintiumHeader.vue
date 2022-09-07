<template>
  <header :class="{ 'screenlock-header': $route.path === '/screenlock'}"
          v-if="$route.path !== '/dashboard'">
    <div class="header-section">
      <router-link to="/" class="logo" v-if="$route.path !== '/dashboard'">
        <img src="@/assets/images/logo.svg" alt="logo" class="logo">
      </router-link>
      <!--TODO: Доделать header для всех страниц-->
      <router-link to="/"
                   :class="{ active: $route.path  === '/'}"
                   v-if="$route.path !== '/screenlock'">
        Home
      </router-link>
      <router-link to="/tags"
                   :class="{ active: $route.path === '/tags'}"
                   v-if="$route.path !== '/screenlock'">
        Tags
      </router-link>
      <router-link to="/about"
                   :class="{ active: $route.path === '/about'}"
                   v-if="$route.path !== '/screenlock'">
        About
      </router-link>
    </div>
    <div class="header-section">
      <div class="search-container" v-if="$route.path !== '/screenlock'">
        <!-- eslint-disable-next-line -->
        <input type="text" id="search"/>
        <button type="submit">
          <img src="@/assets/images/search.svg" alt="search"/>
        </button>
      </div>
      <router-link to="/login" class="login" v-if="$route.path !== '/screenlock'">
        Login
      </router-link>
    </div>
  </header>
</template>

<script>
import { useRoute } from 'vue-router/composables';

export default {
  name: 'NintiumHeader',
  data() {
    return { path: String };
  },
  mounted() {
    const route = useRoute();
    this.path = route.path;
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .header-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;

    .logo {
      width: 178px;
      height: 57px;
      margin-top: 31px;
      margin-left: 25px;

      img {
        margin: 0;
      }
    }

    a {
      font-size: 20px;
      color: black;
      margin: 49px 0 0 31px;
      text-align: center;
    }
  }
}

.screenlock-header {
  justify-content: flex-start;
}

.active {
  font-weight: 700;
  font-size: 20px;
  color: black;
  margin: 49px 0 0 31px;
  padding: 0;
  text-align: center;
  text-decoration: none;
}

.search-container {
  display: flex;
  flex-direction: row;
  position: relative;
  width: fit-content;
  margin-top: 35px;
  border: none;
  border-radius: 10px;
  transition: linear;

  &:hover {
    border: solid 2px #1C1C1C;
    width: 21.4rem;
  }

  &:focus {
    border: solid 2px #1C1C1C;
    width: 21.4rem;
  }

  &:hover input {
    width: 100%;
    right: 0;
    transform: translateX(0);
  }

  &:hover button {
    position: absolute;
    right: 0;
    transform: translateX(0);
  }

  input {
    position: relative;
    right: -100%;
    outline: none;
    border: none;
    width: 1.5rem;
    height: 46px;
    border-radius: 10px;
    font-size: 20px;
    padding-left: 0.5rem;
    //background: orangered;
    transform: translateX(-100%);
    transition: 0.2s linear;

    &:focus {
      width: 100%;
      right: 0;
      transform: translateX(0);
      & + button {
        position: static;
        transform: translateX(0);
      }
    }

  }

  button {
    position: absolute;
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    margin-top: 0.5rem;
    margin-right: 0.8rem;
    top: 0;
    right: 0;
  }
}

.login {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: black;
  width: 135px;
  height: 46px;
  margin: 35px 25px 0 9px !important;
  border: solid 2px #1C1C1C;
  border-radius: 10px;
  font-size: 20px;
}
</style>
