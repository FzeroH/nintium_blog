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
    <button>Login</button>
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
  margin-top: 174px;

  h1 {
    font-family: 'Libre Baskerville',serif;
    font-style: normal;
    font-weight: 700;
    font-size: 33px;
    margin-bottom: 14px;
  }

  p {
    font-family: 'Open Sans', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin: 14px 0 23px 0;
  }

  button {
    width: 323px;
    height: 58px;
    margin-top: 13px;
    border: solid 2px #1C1C1C;
    border-radius: 10px;
    font-family: 'Libre Baskerville', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
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
    max-width: 324px;
    height: 58px;
    border-radius: 10px;
    border: solid 1px #F8F8F8;
    font-family: 'Open Sans',serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    padding-left: 54px;
  }

  input[type = text] {
    background-image: url("@/assets/images/user.svg");
    background-repeat: no-repeat;
    background-position: 18px center;
  }

  input[type = password] {
    background-image: url("@/assets/images/key.svg");
    background-repeat: no-repeat;
    background-position: 18px center;
    margin-top: 14px;
  }
}

a {
  text-decoration: none;
}

.under-fields {
  display: flex;
  flex-direction: row;
  font-family: 'Open Sans',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  margin-top: 11px;
}

.forgot-password {
  font-family: 'Open Sans',serif !important;
  font-size: 12px;
  color: rgba(28, 28, 28, 0.5);
}

.remember-me {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 105px;

  input[type=checkbox] {
    margin: 0 5px;
  }

  span {
    color: rgba(28, 28, 28, 0.5);
  }
}

.screenlock {
  position: absolute;
  top: 700px;
  right: 50px;
  font-family: 'Open Sans',serif !important;
  font-size: 16px;
  color: black;
  width: fit-content;
  height: fit-content;
}
</style>
