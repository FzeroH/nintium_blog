<template>
  <div id="app">
    <nintium-header/>
    <router-view v-if="!isLoading"/>
  </div>
</template>

<script>
import NintiumHeader from '@/components/header/NintiumHeader.vue';

export default {
  components: { NintiumHeader },
  data() {
    return {
      isLoading: true,
    };
  },

  async created() {
    await this.$store.dispatch('loadArticleList');
    this.isLoading = false;
  },

};
</script>

<style lang="scss">

</style>
