<template>
  <div id="app">
    <nintium-header/>
    <router-view/>
  </div>
</template>

<script>
import NintiumHeader from '@/components/NintiumHeader.vue';

export default {

  components: { NintiumHeader },

};
</script>

<style lang="scss">

</style>
