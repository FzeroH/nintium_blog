<template>
  <div>
    <img src="@/assets/images/logo.svg" alt="logo">
    <p>A publishing company that focuses on the essentials.</p>
    <div class="main-info">
      <section class="main-info-section">
        <h2>We tell stories that drives the heart.</h2>
        <!-- eslint-disable-next-line -->
        <p>Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam dolore excepteur tempor dolor consectetur ut id.</p>
      </section>
      <img src="@/assets/images/about/people.svg" alt="people" class="people">
      <img src="@/assets/images/about/angel.svg" alt="people" class="angel">
      <section class="main-info-section">
        <h2>We tell the news that makes the most impact.</h2>
        <!-- eslint-disable-next-line -->
        <p>Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam dolore excepteur tempor dolor consectetur ut id.</p>
      </section>
      <section class="main-info-section">
        <h2>We share the little moments that shows we’re alive.</h2>
        <!-- eslint-disable-next-line -->
        <p>Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam dolore excepteur tempor dolor consectetur ut id.</p>
      </section>
      <div class="vertical-left"></div>
      <div class="vertical-right"></div>
<!--      <div class="carousel">-->
<!--        <swiper-->
<!--          :slides-per-view="3"-->
<!--          :space-between="50">-->
<!--          <swiper-slide><img src="@/assets/images/about/cat.svg" alt="cat"></swiper-slide>-->
<!--          <swiper-slide><img src="@/assets/images/about/boy.svg" alt="boy"></swiper-slide>-->
<!--          <swiper-slide><img src="@/assets/images/about/man.svg" alt="man"></swiper-slide>-->
<!--        </swiper>-->
<!--      </div>-->
    </div>
    <div class="under-main">
      <h2>Because we are you. Humans.</h2>
      <!--eslint-disable-next-line-->
      <p>Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad.</p>
    </div>
    <footer>
      <h2>want to connect?</h2>
      <p>Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui..</p>
      <div class="social-networks">
        <a href="/">
          <img src="@/assets/images/about/fb.svg" alt="fb">
        </a>
        <a href="/">
          <img src="@/assets/images/about/linkedin.svg" alt="linkedin">
      </a>
        <a href="/">
          <img src="@/assets/images/about/inst.svg" alt="instagram">
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'About',
  components: {},
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  margin-top: 14.6rem;

  >img {
    width: 15.7rem;
    height: 4.9rem;
    align-self: center;
  }

  >p {
    font-family: 'Libre Baskerville',serif;
    font-size: 1.25rem;
    line-height: 2rem;
    width: 23rem;
    height: 3.9rem;
    align-self: center;
    text-align: center;

  }
}

.main-info {
  display: flex;
  flex-direction: column;
  position: relative;
  background: #1C1C1C;
  margin: 12.25rem 3.75rem 14rem 3.75rem;
  height: 132rem;

  .main-info-section {
    display: flex;
    flex-direction: column;

    &:nth-child(1) {
      align-self: flex-start;
      width: 27.75rem;
      height: 14.8rem;
      margin-top: 10.75rem;
      margin-left: 9.7rem;

      h2 {
        width: 28rem;
      }

      p {
        width: 27.25rem;
        height: 7.6rem;
      }
    }

    &:nth-child(4) {
      align-self: center;
      margin-top: 2rem;
      width: 34rem;
      height: 14rem;

      h2 {
        width: 33rem;
      }

      p {
        width: 33rem;
      }
    }

    &:nth-child(5) {
      align-self: flex-start;
      width: 38rem;
      height: 14rem;
      margin-left: 18.5rem;
      margin-top: 12.6rem;

      h2 {
        width: 39rem;
      }

      p {
        width: 35rem;
        align-self: flex-start;
      }
    }

    >h2 {
      color: white;
      font-weight: 400;
      font-size: 2.6rem;
      line-height: 3.25rem;
      margin: 0;
    }

    >p {
      color: white;
      text-align: start;
      line-height: 1.5rem;
      font-size: 1rem;
    }
  }

  .people {
    align-self: start;
    width: 35rem;
    height: 24rem;
    margin-top: 3.25rem;
    margin-left: 24.25rem;
    z-index: 2;
  }

  .angel {
    position: absolute;
    top: 9.125rem;
    right: 9rem;
    width: 35.6rem;
    height: 26.19rem;
    margin-top: 3.25rem;
    z-index: 1;
  }
}

.vertical-left {
  position: absolute;
  width: 0.5rem;
  height: 91rem;
  background: white;
  bottom: 0;
  left: 13.8rem;
  margin: 0;
}

.vertical-right {
  position: absolute;
  width: 0.5rem;
  height: 63.5rem;
  background: white;
  top: 0;
  right: 15.875rem;
  margin: 0;
}

.carousel {
  display: flex;
  flex-direction: row;
  margin-top: 4.75rem;
  margin-left: 18.5rem;

  img {
    width: 21.9rem;
    height: 21.9rem;
  }
}

.under-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 14rem auto;
  width: 77.8rem;
  height: 6.4rem;

  >h2 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 3.25rem;
    text-align: center;
    width: 26.7rem;
    height: 6.4rem;
  }

  >p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    width: 27rem;
    height: 3.4rem;
    margin-top: 2.2rem;
    text-align: center;
  }
}

footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1C1C1C;
  margin: 0 auto;
  width: 77.8rem;
  height: 26.6rem;

  >h2 {
    color: white;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.6rem;
  }

  >p {
    color: white;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    width: 20.75rem;
    height: 3.4rem;
    text-align: center;
  }
}

.social-networks {
  display: flex;
  flex-direction: row;
  margin-top: 1.75rem;

  >a {
    &:not(:first-child) {
      margin-left: 0.9rem;
    }
  }
}

@media (max-width: 2560px) {

}

@media (min-width: 992px) and (max-width: 1199px) {

}

@media (min-width: 768px) and (max-width: 993px)  {

  .main-info {
    margin-left: 0 !important;
    width: 100% !important;
  }

  .vertical-left, .vertical-right {
    display: none;
  }
  section {
    margin-left: 0 !important;
    align-self: center !important;
  }

  img {
    position: static !important;
    align-self: center !important;
    margin-left: 0 !important;
  }
}

@media (max-width: 767px) {
  .main-info {
    margin-left: 0 !important;
    width: 100% !important;
  }

  .under-main {
    width: auto !important;
  }
  footer {
    width: 100% !important;
  }

  .vertical-left, .vertical-right {
    display: none;
  }
  section {
    margin-left: 0 !important;
    align-self: center !important;
    width: initial;
    &:nth-child(5) {
      width: 36rem !important;
      >h2 {
        width: initial !important;
      }
    }
  }

  img {
    position: static !important;
    align-self: center !important;
    margin-left: 0 !important;
  }
}

</style>
