<template>
  <div class="page">
    <header class="header">
      <img src="./images/logo.png" alt="header-logo" />
      <router-link class="header__link" to="/">Главная</router-link>
      <router-link class="header__link" to="/about"
        >Список ресторанов</router-link
      >
    </header>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  margin: 0;
}

.page {
  height: 100vh;
  background: rgb(36, 36, 36);
  font-family: "Courier New", Courier, monospace;
  font-weight: 100;
}

.header {
  display: flex;
  justify-content: space-between;
  background: rgb(14, 14, 14);
  height: 40px;
  padding: 10px;
}

.header__link {
  align-self: center;
  text-decoration: none;
  color: white;
  font-size: 20px;
}

.header__link:hover {
  color: rgb(219, 53, 53);
}

.router-link-active {
  color: rgb(219, 53, 53);
}
</style>