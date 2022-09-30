<template>
  <div class="page">
    <header class="header">
      <img src="./images/logo.png" alt="header-logo" />
      <router-link class="header__links" to="/">Главная</router-link>
      <router-link class="header__links" to="/about"
        >Список ресторанов</router-link
      >
    </header>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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

.header__links {
  align-self: center;
  text-decoration: none;
  color: white;
  font-size: 20px;
}

.header__links:hover {
  color: rgb(219, 53, 53);
}

.router-link-active {
  color: rgb(219, 53, 53);
}
</style>