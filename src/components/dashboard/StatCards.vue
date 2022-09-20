<template>
  <div class="cards-container">
    <p>{{ cardName }}</p>
    <div class="count-container">
      <img :src="require(`../../assets/images/${ image }.svg`)" alt="card"
           v-if="image.length !== 0">
      <p class="count"
         :class="{ 'most-viewed-article': cardName === 'Most Viewed Article' }">
        {{ count }}
      </p>
    </div>
    <span>This month</span>
  </div>
</template>

<script>
export default {
  name: 'StatCards',
  props: {
    cardName: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    count: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.cards-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 0.125rem solid rgba(28, 28, 28, 0.35);
  border-radius: 0.6rem;
  margin: 0 1.5rem;

  >p {
    font-family: 'Roboto',serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 1rem;
    align-self: start;
    margin: 0.6rem;
  }
  span {
    font-family: 'Roboto',serif;
    font-size: 0.875rem;
    line-height: 1rem;
    color: rgba(28, 28, 28, 0.5);
    margin: 0.9rem 0.5rem 0.65rem;
    align-self: end;
  }
}

.count-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 3.2rem 0 0.9rem;

  img {
    width: 1.7rem;
    height: 1.7rem;
    margin-right: 0.6rem;
    margin-left: 0.9rem;
  }

  .count {
    font-family: 'Libre Baskerville',serif;
    font-size: 2.06rem;
    line-height: 2.56rem;
    margin: 0;
  }

  .most-viewed-article {
    font-family: 'Libre Baskerville',serif;
    font-size: 1.4rem;
    line-height: 1.7rem;
  }

}
</style>
