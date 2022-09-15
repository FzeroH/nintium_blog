<template>
  <div id="app">
    <nintium-header/>
    <router-view/>
  </div>
</template>

<script>
import NintiumHeader from '@/components/header/NintiumHeader.vue';

export default {

  components: { NintiumHeader },

};
</script>

<style lang="scss">

</style>
