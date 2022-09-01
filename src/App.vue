<template>
  <div id="app">
    <NintiumHeader/>
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
#app {
  font-family: 'Libre Baskerville',serif;
  font-style: normal;
}

body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
