<template>
  <div>
    <img src="@/assets/profile_picture.svg" alt="profile_picture">
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
    <button>Login</button>
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
    width: 150px;
    height: 150px;
    margin-top: 124px;
    border-radius: 50%;
  }

  label {
    input {
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
      background-image: url("@/assets/key.svg");
      background-repeat: no-repeat;
      background-position: 18px center;
      margin-top: 14px;
    }
  }

  a {
    text-decoration: none;
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

.under-fields {
  display: flex;
  flex-direction: row;
  font-family: 'Open Sans',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
}

.forgot-password {
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
    height: fit-content;
  }
}
</style>
