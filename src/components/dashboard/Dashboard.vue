<template>
  <div class="menu-container">
    <nav>
      <router-link to="/" class="logo">
        <img src="@/assets/images/dashboard-nav/dashboard-logo.svg" alt="logo">
      </router-link>
      <ul>
        <li>
          <img src="@/assets/images/dashboard-nav/grid.svg" alt="dashboard">
          <span>Dashboard</span>
        </li>
        <li>
          <img src="@/assets/images/dashboard-nav/user.svg" alt="profile">
          <span>Profile</span>
        </li>
        <li>
          <img src="@/assets/images/dashboard-nav/edit.svg" alt="write a post">
          <span>Write a Post</span>
        </li>
        <li>
          <img src="@/assets/images/dashboard-nav/book-open.svg" alt="all posts">
          <span>All posts</span>
        </li>
        <li>
          <img src="@/assets/images/dashboard-nav/box.svg" alt="resources">
          <span>Resources</span>
        </li>
        <li>
          <img src="@/assets/images/dashboard-nav/settings.svg" alt="settings">
          <span>Settings</span>
        </li>
        <li>
          <img src="@/assets/images/dashboard-nav/help-circle.svg" alt="help">
          <span>Help</span>
        </li>
      </ul>
    </nav>
    <div class="dashboard">
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
            :count="'214'"/>
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
          :count="'113K'"/>
        </router-link>
        <stat-cards
          :card-name="'Most Viewed Article'"
          :count="'The Most Awesome Article Man Has Ever Written'"/>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import StatCards from '@/components/dashboard/StatCards.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Dashboard',
  components: { StatCards },
  data() {
    return {
      dataPosts: [200, 119, 50, 40, 164, 33, 98, 40, 164, 33, 98, 500],
      dataViews: [100, 20, 90, 112, 666, 76, 29, 34, 55, 58, 12, 700],
    };
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
        margin: 2rem 1.6rem 3rem 1.6rem;
      }

      ul {
        li {
          display: flex;
          align-items: center;
          padding: 1rem 4.2rem 0.75rem 1.6rem;

          &:first-child {
            margin-top: 3.2rem;
          }

          &:nth-child(3) {
            padding-right: 3.9rem;
          }

          &:hover {
            background: #545A61;
          }

          span {
            font-family: 'Open Sans',serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            color: white;
            margin-left: 0.9rem;
          }

          img {
            width: 30px;
            height: 30px;
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
        margin-top: 107px;

        h2 {
          font-size: 1.6rem;
          font-weight: 400;
          line-height: 2rem;
          margin: 1.2rem 2.6rem !important;
        }

        button {
          border: 2px solid #1C1C1C;
          border-radius: 5px;
          padding: 0.5rem 0.6rem;
          background: white;
          width: 7rem;
          height: 2.6rem;
          margin: 1.2rem 3rem;
          font-family: 'Open Sans', serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
        }

      }

      .stat-cards {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    }
  }
</style>
