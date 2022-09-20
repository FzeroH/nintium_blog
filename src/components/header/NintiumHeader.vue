<template>
  <header :class="{ 'screenlock-header': $route.path === '/screenlock'}"
          v-if="$route.path !== '/dashboard' && $route.path !== '/dashboard/chart'">
    <section class="header-section">
      <router-link to="/" class="logo">
        <img src="@/assets/images/logo.svg" alt="logo" class="logo">
      </router-link>
      <nav v-if="$route.path !== '/screenlock'">
        <router-link to="/" exact>Home</router-link>
        <router-link to="/tags">Tags</router-link>
        <router-link to="/about">About</router-link>
      </nav>
<!--      <slide noOverlay :width="200">-->
<!--        <router-link to="/" class="logo">-->
<!--          <img src="@/assets/images/logo.svg" alt="logo" class="logo">-->
<!--        </router-link>-->
<!--        <router-link to="/" exact class="burger-item">Home</router-link>-->
<!--        <router-link to="/tags" class="burger-item">Tags</router-link>-->
<!--        <router-link to="/about" class="burger-item">About</router-link>-->
<!--      </slide>-->
    </section>
    <is-auth-section />
  </header>
</template>

<script>
import IsAuthSection from '@/components/header/isAuthSection.vue';
// import { Slide } from 'vue-burger-menu';

export default {
  name: 'NintiumHeader',
  components: { IsAuthSection },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 5;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5rem;

  .header-section {

    .logo {
      width: 11rem;
      height: 3.6rem;
      margin-top: 1.94rem;
      margin-left: 1.6rem;

      img {
        margin: 0;
      }
    }

    nav {
      margin-top: 3rem;

      a {
        font-size: 1.25rem;
        color: black;
        margin-left: 1.9rem;
        text-align: center;
      }
    }
  }
}

.router-link-active {
  font-weight: 700;
  font-size: 1.25rem;
  color: black;
  margin: 3rem 0 0 1.9rem;
  padding: 0;
  text-align: center;
  text-decoration: none;
}

 div .bm-menu {
   background-color: white !important;

  nav {
    padding:0;
    * {
      color: white !important;
    }
  }
}

//.burger-item {
//  color: white !important;
//  margin: 0;
//
//  &:active {
//    margin: 0;
//  }
//}
</style>
