<template>
  <div>
    <img src="@/assets/images/profile_picture.svg" alt="profile_picture">
    <label for="password">
      <input type="password" id="password" placeholder="Password">
    </label>
    <div class="under-fields">
      <label for="remember-me" class="remember-me">
        <input type="checkbox" id="remember-me">
        <span>Remember me</span>
      </label>
      <router-link to="/" class="forgot-password">Forgot Password?</router-link>
    </div>
    <router-link to="/" class="button-login">Login</router-link>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Screenlock',
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 9.4rem;
    height: 9.4rem;
    margin-top: 7.8rem;
    border-radius: 50%;
  }

  label {
    input {
      max-width: 20.25rem;
      height: 3.6rem;
      border-radius: 0.6rem;
      border: solid 1px #F8F8F8;
      padding-left: 3.4rem;
      background-image: url("@/assets/images/key.svg");
      background-repeat: no-repeat;
      background-position: 1.125rem center;
      background-size: 1.875rem 1.875rem;
      margin-top: 0.85rem;
    }
  }

  .button-login {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.125rem 5.35rem;
    margin-top: 0.8rem;
    border: solid 0.125rem #1C1C1C;
    border-radius: 0.6rem;
    background: white;

    &:hover {
      cursor: pointer;
    }
  }
}

.under-fields {
  display: flex;
  flex-direction: row;
  font-size: 0.75rem;
}

.forgot-password {
  color: rgba(28, 28, 28, 0.5);
  font-size: 0.75rem;
}

.remember-me {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 6.6rem;

  input[type=checkbox] {
    margin: 0 0.3rem;
  }

  span {
    color: rgba(28, 28, 28, 0.5);
    height: fit-content;
  }
}
</style>
