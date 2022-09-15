<template>
  <div>
    <h1>404</h1>
    <p>Такой страницы не существует</p>
    <button @click="redirect"> Вернуться на главную страницу</button>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage404',
  methods: {
    redirect() {
      this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style lang="scss" scoped>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;

    h1 {
      font-size: 5rem;
    }

    p {
      font-size: 1.5rem;
    }

    button {
      background: white;
      border: 1px solid #1c1c1c;
      border-radius: 0.7rem;
      padding: 0.8rem 1rem;
      font-size: 1.5rem;
      transition: all 0.4s;

      &:hover {
        font-size: 1.8rem;
      }
    }
  }
</style>
