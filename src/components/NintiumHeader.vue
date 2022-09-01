<template>
  <header>
    <img src="@/assets/logo.svg" alt="logo">
    <!--TODO: Добавить изменение стилей Home, Tags и About-->
    <!--TODO: Доделать header для всех страниц-->
    <router-link to="/">Home</router-link>
    <router-link to="/tags">Tags</router-link>
    <router-link to="/about">About</router-link>
      <label for="search">
        <!--TODO: Добавить скрывашку и раскрывашку для поиска!-->
        <!--TODO: Правильно расположить input и кнопку login!-->
        <input type="text" id="search"/>
      </label>
    <router-link to="/login" class="login">Login</router-link>
  </header>
</template>

<script>

export default {
  name: 'NintiumHeader',
};
</script>

<style scoped>
header{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
}

header > img {
  width: 178px;
  height: 57px;
  margin-top: 31px;
  margin-left: 25px;
}

header > a {
  font-weight: 400;
  font-size: 20px;
  color: black;
  margin: 49px 0 0 31px;
  text-align: center;
  height: fit-content;
  text-decoration: none;
}
.active {
  font-weight: 700;
  font-size: 20px;
  color: black;
  margin: 49px 0 0 31px;
  padding: 0;
  text-align: center;
  text-decoration: none;
}

header > label {
  margin-top: 35px;
  margin-left: 344px;
}

header > label > input {
  outline: none;
  width: 363px;
  height: 46px;
  font-size: 20px;
  border: solid 2px #1C1C1C;
  border-radius: 10px;
  background-image: url("@/assets/search.svg");
  background-repeat: no-repeat;
  background-position: 325px center;
}

header > .login {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: black;
  width: 135px;
  height: 46px;
  margin: 35px 0 0 25px;
  border: solid 2px #1C1C1C;
  border-radius: 10px;
  font-weight: 400;
  font-size: 20px;
}
</style>
