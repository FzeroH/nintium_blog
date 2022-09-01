<template>
  <div>
    <label for="search">
      <input type="text" id="search"/>
    </label>
    <div class="tags-container">
      <button v-for="(tag, index) in tags"
              :key="index">#{{ tag }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Tags',
  data() {
    const tags = ['technology', 'lifeandlove', 'essentialism', 'webdevelopment', 'fashion', 'lifestyle',
      'architecture', 'sports', 'entertainment', 'culinaryarts', 'travel', 'worldhistory',
      'aeronautics', 'games', 'minimalism', 'finearts', 'graphicdesign', 'filmmaking',
      'bitcoin', 'computers', 'machinelearning'];
    return { tags };
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 213px;
}

div > label > input {
  outline: none;
  width: 707px;
  height: 60px;
  font-size: 20px;
  border: solid 2px #1C1C1C;
  border-radius: 10px;
  background-image: url("@/assets/search.svg");
  background-repeat: no-repeat;
  background-position: 655px center;
}
.tags-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin:60px 0;
}
.tags-container > button {
  border: 1px solid black;
  border-radius: 50px;
  background: white;
  margin-top: 5px;
  margin-left: 16px;
  padding: 11px 15px;
  font-family: 'Libre Baskerville',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}
</style>
