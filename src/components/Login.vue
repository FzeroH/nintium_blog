<template>
  <div>
    <h1>Welcome back!</h1>
    <p>Sign in to get the most out of nintium.</p>
    <form>
      <label for="login">
        <input type="text" id="login" placeholder="Username">
      </label>
      <label for="password">
        <input type="password" id="password" placeholder="Password">
      </label>
    </form>
    <div class="under-fields">
      <label for="remember-me" class="remember-me">
        <input type="checkbox" id="remember-me">
        <span>Remember me</span>
      </label>
      <router-link to="/" class="forgot-password">Forgot Password?</router-link>
    </div>
    <router-link to="/" class="button-login">Login</router-link>
    <!--TODO: Вынести See screenlock page в правый нижний угол! (position: absolute) -->
    <router-link to="/screenlock" class="screenlock">See screenlock page</router-link>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10.8rem;

  h1 {
    font-weight: 700;
    font-size: 2.1rem;
    margin-bottom: 0.9rem;
  }

  p {
    font-size: 1rem;
    margin: 0.9rem 0 1.4rem 0;
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
form {
  display: flex;
  flex-direction: column;

  input[type = text], input[type = password] {
    outline: none;
    max-width: 20.25rem;
    height: 3.6rem;
    border-radius: 0.6rem;
    border: solid 1px #F8F8F8;
    padding-left: 3.4rem;
    background-repeat: no-repeat;
    background-position: 1.125rem center;
    background-size: 1.875rem 1.875rem;
  }

  input[type = text] {
    background-image: url("@/assets/images/user.svg");
  }

  input[type = password] {
    background-image: url("@/assets/images/key.svg");
    margin-top: 0.875rem;
  }
}

a {
  text-decoration: none;
}

.under-fields {
  display: flex;
  flex-direction: row;

  font-weight: 400;
  font-size: 0.75rem;
  margin-top: 0.7rem;
}

.forgot-password {
  font-family: 'Open Sans',serif !important;
  font-size: 0.75rem;
  color: rgba(28, 28, 28, 0.5);
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
  }
}

.screenlock {
  position: absolute;
  top: 43.75rem;
  right: 3.125rem;
  font-family: 'Open Sans',serif !important;
  font-size: 1rem;
  color: black;
  width: fit-content;
  height: fit-content;
}
</style>
