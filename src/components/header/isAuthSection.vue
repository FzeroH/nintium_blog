<template>
  <section class="header-section" v-if="$route.path !== '/screenlock'">
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
  transform: translate(0, 20%);
  transition: all 1s;
  right: 3.75rem;
  width: 1.9rem;
  height: 1.9rem;
  margin-right: 1.3rem;
  background: none;
  box-sizing: border-box;
  border-radius: 1.6rem;
  border: 0.25rem solid white;

  input {
    position: relative;
    display: none;
    float: left;
    top: 0;
    left: 0;
    width: 100%;
    height: 2.9rem;
    outline: none;
    border: none;
    font-size: 1rem;
    border-radius: 0.6rem;
    padding: 0 3.13rem 0 1.25rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    float: right;
    width: 1.9rem;
    height: 1.9rem;
    position: absolute;
    top: 0.5rem;
    right: -3.75rem;
    border-radius: 50%;
    border: none;
    text-align: center;
    transition: all 1s;
  }

  &:hover {
    width: 12.5rem;
    cursor: pointer;
  }

  &:hover input {
    display: block;
    border: 0.125rem solid #1C1C1C;
  }

  &:hover img {
    color: white;
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
</style>
