<template>
  <form>
    <label for="title">
      Title
      <input type="text" id="title" v-model="title">
      </label>
    <label for="tag">
      Tag
      <input type="text" id="tag" v-model="tag">
      </label>
    <label for="text">
      Text
      <textarea id="text" v-model="text"/>
      </label>
    <label for="image">
      <input type="file" id="image" accept="image/*" @change="onFileChange">
      <span>Выберите картинку</span>
    </label>
    <button @click.prevent="uploadPost" v-if="!this.$route.query.update">Upload</button>
    <button @click.prevent="updatePost" v-if="this.$route.query.update">Update</button>
  </form>
</template>

<script>

export default {
  name: 'WritePost',
  data() {
    return {
      title: '',
      tag: '',
      text: '',
      postImg: null,
    };
  },
  mounted() {
    if (this.$route.query.update) {
      this.$store.dispatch('addCurrentArticle', Number(this.$route.query.update));
      const article = [this.$store.getters.getCurrentArticle];
      this.title = article[0].articleTitle;
      this.tag = article[0].tag;
      this.text = article[0].articleText;
    }
  },
  methods: {
    uploadPost() {
      const fd = new FormData();
      fd.append('post', this.postImg, this.title);
      this.image = fd;
    },
    updatePost() {
      console.log({
        id: this.$route.query.update,
        title: this.title,
        tag: this.tag,
        text: this.text,
      });
    },
    onFileChange(event) {
      // eslint-disable-next-line prefer-destructuring
      this.postImg = event.target.files[0];
    },
  },
};
</script>

<style lang="scss" scoped>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10rem;

    label {
      display: flex;
      position: relative;
      flex-direction: column;
      margin-bottom: 1rem;
      font-size: 1.5rem;

      textarea {
        resize: none;
        width: 44rem;
        height: 24rem;
        outline: none;
        padding: 1rem 2rem;
        font-size: 1.5rem;
      }

      input[type="text"] {
        outline: none;
        width: 25rem;
        height: 2rem;
        padding: 0.5rem 1rem;
        font-size: 1.5rem;
      }

      input[type="file"]{
        opacity: 0;
        position: absolute;
        overflow: hidden;
        z-index: -1;
      }

      span {
        display: block;
        border: 1px solid #3B3F44;
        border-radius: 0.5rem;
        padding: 0.5rem;
        transition: all 0.5s;
        &:hover {
          cursor: pointer;
          transform: scale(110%);
        }
      }
    }

    button {
      width: fit-content;
      padding: 0.5rem 3rem;
      margin-top: 1rem;
      background-color: white;
      border: 1px solid #3B3F44;
      border-radius: 0.5rem;
      font-size: 1.5rem;
    }
  }

  @media (max-width: 468px) {
    label {
      textarea {
        width: 100% !important;
      }
      input[type="text"] {
        width: 100% !important;
      }
    }
  }
</style>
