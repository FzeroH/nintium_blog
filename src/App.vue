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

<style>
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
