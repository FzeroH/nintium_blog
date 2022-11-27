<template>
  <div class="burger">
<!--    eslint-disable-next-line-->
    <div
      class="burger-menu"
      :class="{
      'burger-menu__active': active,
      'burger-menu__inverse': inverseBtnColor && active }"
      @click="active = !active">
      <span></span>
    </div>
    <nav :class="{ nav__active: active }"
         :style="{ backgroundColor: backgroundColor }">
      <slot />
    </nav>
<!--    <div :class="{ back: active }"></div>-->
  </div>
</template>

<script>
export default {
  name: 'BurgerMenu',
  props: {
    backgroundColor: {
      type: String,
      default: '',
    },
    buttonColor: {
      type: String,
      default: '#222',
    },
    inverseBtnColor: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.burger {
  position: relative;
  top: 0;
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  z-index: 7;
  margin-left: 2rem;
}

.burger-menu {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: none;
  margin-bottom: 1rem;
  transition: transform 0.4s ease;
}

.burger-menu span,
.burger-menu span::before,
.burger-menu span::after {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2.25rem;
  height: 0.36rem;
  margin: 0.45rem -1.15rem;
  background: #000;
  transition: transform 0.2s ease;
}

.burger-menu span::before,
.burger-menu span::after {
  content: "";
}

.burger-menu span::before {
  transform: translateY(-0.1rem);
}

.burger-menu span::after {
  transform: translateY(0.5rem);
}

.burger-menu__active {
  transform: translateX(9.5rem);
}

.burger-menu__inverse span,
.burger-menu__inverse span::before,
.burger-menu__inverse span::after{
  background: white;
}

.burger-menu__active span {
  height: 0;
}

.burger-menu__active span::before {
  transform: rotate(45deg);
}

.burger-menu__active span::after {
  transform: rotate(-45deg);
}

nav {
  position: absolute;
  display: flex;
  align-items: center;
  left: -2rem;
  top: 0;
  flex-direction: column;
  background: white;
  width: 16rem;
  height: 100vh;
  transition: 0.4s ease;
  opacity: 0;
  transform: translateX(-100%);
  z-index: -1;
}

.nav__active {
  opacity: 1;
  transform: translateX(0);
}

a {
  margin-bottom: 1rem;
  &:first-child {
    margin-top: 3rem;
  }
}

</style>
