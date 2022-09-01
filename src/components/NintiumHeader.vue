<template>
  <header :class="{ screenlock: $route.path === '/screenlock'}">
    <img src="@/assets/logo.svg" alt="logo">
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
    <div class="search-container" v-if="$route.path !== '/screenlock'">
          <!--TODO: Добавить скрывашку и раскрывашку для поиска! Создать div position relative. -->
    <!-- eslint-disable-next-line -->
      <input type="text" id="search"/>
      <img src="@/assets/search.svg" alt="">
    </div>
    <router-link to="/login" class="login" v-if="$route.path !== '/screenlock'">Login</router-link>
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

<style scoped>
header{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.screenlock {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}

header > img {
  width: 178px;
  height: 57px;
  margin-top: 31px;
  margin-left: 25px;
}

header > a {
  font-weight: 400;
  font-size: 20px;
  color: black;
  margin: 49px 0 0 31px;
  text-align: center;
  height: fit-content;
  text-decoration: none;
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
  position: relative;
  margin-top: 35px;
  margin-left: 344px;
}

.search-container > input {
  outline: none;
  width: 100%;
  height: 46px;
  font-size: 20px;
  border: solid 2px #1C1C1C;
  border-radius: 10px;
}

.search-container > img {
  position: absolute;
  left: 218px;
  top: 11px;
}

header > .login {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: black;
  width: 135px;
  height: 46px;
  margin: 35px 0 0 25px;
  border: solid 2px #1C1C1C;
  border-radius: 10px;
  font-weight: 400;
  font-size: 20px;
}
</style>
