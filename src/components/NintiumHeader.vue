<template>
  <header :class="{ 'screenlock-header': $route.path === '/screenlock'}"
          v-if="$route.path !== '/dashboard' && $route.path !== '/dashboard/chart'">
    <div class="header-section">
      <router-link to="/" class="logo">
        <img src="@/assets/images/logo.svg" alt="logo" class="logo">
      </router-link>
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
    <div class="header-section" v-if="$route.path !== '/screenlock'">
      <form action="">
        <!--eslint-disable-next-line-->
        <input type="text"/>
        <button type="submit">
          <img src="@/assets/images/search.svg" alt="search"/>
        </button>
      </form>
      <router-link to="/login" class="login"  v-if="!isAuth">
        Login
      </router-link>
      <img src="@/assets/images/notification.svg"
           alt="notification"
           class="notification-img"
           v-if="isAuth">
      <!--eslint-disable-next-line-->
      <img src="@/assets/images/profile/profile_picture.svg"
           alt="profile"
           class="profile-img"
           v-if="isAuth"
           @click="isVisible">
    </div>
    <div class="profile-menu" :class="{ 'profile-menu-active': isVisibleMenu === true }">
      <p>Arthur Black</p>
      <span>@arthurblack</span>
      <hr/>
      <ul>
        <!--eslint-disable-next-line-->
        <li @click="isVisible">
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
        <!--eslint-disable-next-line-->
        <li @click="isVisible">
          <router-link to="/">Write a post</router-link>
        </li>
        <!--eslint-disable-next-line-->
        <li @click="isVisible">
          <router-link to="/">Settings</router-link>
        </li>
        <!--eslint-disable-next-line-->
        <li @click="isVisible">
          <router-link to="/">Help</router-link>
        </li>
        <!--eslint-disable-next-line-->
        <li @click="isAuthorithation">
          <router-link to="/login">Sign out</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>

export default {
  name: 'NintiumHeader',
  props: {
    isAuth: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    // eslint-disable-next-line
    let isVisibleMenu = false;
    return { isVisibleMenu };
  },
  methods: {
    isVisible() {
      this.isVisibleMenu = !this.isVisibleMenu;
    },
    isAuthorithation() {
      this.isVisibleMenu = !this.isVisibleMenu;
      this.$props.isAuth = false;
    },
  },
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

  .header-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;

    .logo {
      width: 11rem;
      height: 3.6rem;
      margin-top: 1.94rem;
      margin-left: 1.6rem;

      img {
        margin: 0;
      }
    }

    a {
      font-size: 1.25rem;
      color: black;
      margin: 3rem 0 0 1.9rem;
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

form {
  position: relative;
  transform: translate(0, 20%);
  transition: all 1s;
  right: 60px;
  width: 30px;
  height: 30px;
  margin-right: 21px;
  background: none;
  box-sizing: border-box;
  border-radius: 25px;
  border: 4px solid white;

  input {
    position: relative;
    display: none;
    float: left;
    top: 0;
    left: 0;
    width: 100%;
    height: 46px;
    outline: none;
    border: none;
    font-size: 16px;
    border-radius: 10px;
    padding: 0 50px 0 20px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    float: right;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 8px;
    right: -60px;
    border-radius: 50%;
    border: none;
    text-align: center;
    transition: all 1s;
    ;
  }

  &:hover {
    width: 200px;
    cursor: pointer;
  }

  &:hover input {
    display: block;
    border: 2px solid #1C1C1C;
  }

  &:hover img {
    color: white;
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

.notification-img {
  margin: 2.57rem 2.19rem 0 2.75rem;
  cursor: pointer;
  width: 1.87rem;
  height: 1.87rem;
}

.profile-img {
  width: 3.75rem;
  height: 3.75rem;
  margin: 1.81rem 1.56rem 0 0;
  cursor: pointer;
}

.profile-menu {
  position: absolute;
  background: white;
  width: 10.6rem;
  height: 13.9rem;
  top: 99px;
  right: 25px;
  border-radius: 0.95rem;
  transform: translateY(20%);
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease;

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
    margin-left: 1.4rem;
    margin-right: 3.7rem;
  }

  hr {
    margin: 0.45rem 0;
    width: 1px;
    color: rgba(28, 28, 28, 0.1);
  }

  ul {
    margin-left: 1.4rem;
    margin-right: 3.1rem;
    width: 98px;
    height: 130px;

    li {
      height: 1.4rem;
      margin: 5px 0;
      a {
        font-family: 'Open Sans',serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.4rem;
        color: #1C1C1C;
      }

    }

  }
}

.profile-menu-active {
  position: absolute;
  background: white;
  width: 10.6rem;
  height: 13.9rem;
  top: 99px;
  right: 25px;
  display: block;
  border-radius: 0.95rem;
  transform: translateY(0%);
  visibility: visible;
  opacity: 1;
  transition: all 0.5s ease;
}
</style>
