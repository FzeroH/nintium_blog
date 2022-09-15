<template>
  <div class="menu-container">
    <nav>
      <router-link to="/" class="logo">
        <img src="@/assets/images/dashboard-nav/dashboard-logo.svg" alt="logo">
      </router-link>
      <ul v-for="(navItem, index) in navigationItems" :key="index">
        <!-- eslint-disable-next-line -->
        <li @click="goTo(index)">
          <img
            :src="require(`../../assets/images/dashboard-nav/${navItem.image}.svg`)"
            alt="navigation">
          <span>{{ navItem.name }}</span>
        </li>
      </ul>
    </nav>
    <div class="dashboard">
      <is-auth-section />
      <div class="dashboard-title">
        <h2>Dashboard</h2>
        <button>Customize</button>
      </div>
      <div class="stat-cards">
        <router-link :to="{
          name: 'chart',
          params: {
            chartName: 'Total Posts',
            'user-data': dataPosts,
          },
          query: { name: 'total-posts' }
        }">
          <stat-cards
            ref="totalPosts"
            :card-name="'Total Posts'"
            :image="'total-posts'"
            :count="'214'"
            :class="{ 'active-card': $route.query.name === 'total-posts' }"/>
        </router-link>
        <router-link :to="{
          name: 'chart',
          params: {
            chartName: 'Total Views',
            'user-data': dataViews,
          },
          query: { name: 'total-views' }
        }">
        <stat-cards
          :card-name="'Total Views'"
          :image="'total-views'"
          :count="'113K'"
          :class="{ 'active-card': $route.query.name === 'total-views' }"/>
        </router-link>
        <stat-cards
          :card-name="'Most Viewed Article'"
          :count="'The Most Awesome Article Man Has Ever Written'"/>
      </div>
      <router-view :user-data="dataPosts" :chartName="'Total Posts'" />
    </div>
  </div>
</template>

<script>
import StatCards from '@/components/dashboard/StatCards.vue';
import IsAuthSection from '@/components/header/isAuthSection.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Dashboard',
  components: { IsAuthSection, StatCards },
  data() {
    return {
      dataPosts: [200, 119, 50, 40, 164, 33, 98, 40, 164, 33, 98, 500],
      dataViews: [100, 20, 90, 112, 666, 76, 29, 34, 55, 58, 12, 700],
      navigationItems: [
        {
          image: 'grid',
          name: 'Dashboard',
        },
        {
          image: 'user',
          name: 'Profile',
        },
        {
          image: 'edit',
          name: 'Write a Post',
        },
        {
          image: 'book-open',
          name: 'All posts',
        },
        {
          image: 'box',
          name: 'Resources',
        },
        {
          image: 'settings',
          name: 'Settings',
        },
        {
          image: 'help-circle',
          name: 'Help',
        },
      ],
      nameItems: [],
    };
  },
  methods: {
    goTo(index) {
      this.navigationItems.map((elem) => this.nameItems.push(elem.name));
      const navItems = this.nameItems.map((elem) => elem.replaceAll(' ', '-'));
      const navItem = navItems[index].toLowerCase();
      this.$router.push({ path: `/${navItem}` });
    },
  },
  mounted() {
    this.$router.push({ name: 'chart', query: { name: 'total-posts' } });
  },
};
</script>

<style lang="scss" scoped>
  .menu-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;

    nav {
      background: #3B3F44;
      width: 14rem;
      height: 100vh;

      .logo {
        width: 11rem;
        height: 3.6rem;
        margin: 2rem 1.6rem;

        img {
          margin-bottom: 3.2rem;
        }
      }

      ul {
        li {
          display: flex;
          align-items: center;
          padding: 1rem 3.9rem 0.75rem 1.6rem;

          &:hover {
            background: #545A61;
          }

          span {
            font-size: 1rem;
            line-height: 1.4rem;
            color: white;
            margin-left: 0.9rem;
          }

          img {
            width: 1.875rem;
            height: 1.875rem;
          }
        }
      }
    }

    .dashboard {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: fit-content;

      .dashboard-title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 1.4rem;

        >h2 {
          font-size: 1.6rem;
          font-weight: 400;
          line-height: 2rem;
          margin: 1.2rem 2.6rem;
        }

        >button {
          border: 0.125rem solid #1C1C1C;
          border-radius: 0.3rem;
          padding: 0.5rem 0.6rem;
          background: white;
          width: 7rem;
          height: 2.6rem;
          margin: 1.2rem 3rem;
          font-family: 'Open Sans', serif;
          line-height: 1.4rem;
        }

      }

      .stat-cards {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    }
  }
  .active-card {
    box-shadow: 0.1rem 0.1rem 1rem #0080ff;
  }
</style>
