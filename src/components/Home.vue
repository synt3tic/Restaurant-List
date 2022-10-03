<template>
  <div class="page">
    <div class="main">
      <img
        v-if="leftLampActive"
        @click="leftLampStatus"
        class="main__lamp"
        src="../images/lamp__on.png"
        alt="lamp"
      />
      <img
        v-else
        @click="leftLampStatus"
        class="main__lamp"
        src="../images/lamp__off.png"
        alt="lamp"
      />
      <div class="main__text">
        <h1 class="main__text-header">
          Найди лучшее место для проведения прекрасного вечера
        </h1>
        <p class="main__text-description">
          Ресторан и точка - лучшие рестораны, их события, акции и новости.
          Меню, фото, отзывы, телефоны, адреса, заказ столиков и банкетов. Для
          просмотра списка ресторанов нажмите "Список ресторанов" в правом
          верхнем углу.
        </p>
      </div>
      <img
        v-if="rightLampActive"
        @click="rightLampStatus"
        class="main__lamp"
        src="../images/lamp__on.png"
        alt="lamp"
      />
      <img
        v-else
        @click="rightLampStatus"
        class="main__lamp"
        src="../images/lamp__off.png"
        alt="lamp"
      />
    </div>
    <img
      class="page__restaurant-logo"
      src="../images/page__restaurant-logo.svg"
      alt="restaurant-image"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftLampActive: false,
      rightLampActive: false,
    };
  },
  methods: {
    leftLampStatus() {
      this.leftLampActive = !this.leftLampActive;
    },
    rightLampStatus() {
      this.rightLampActive = !this.rightLampActive;
    },
  },
};
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

.main {
  display: flex;
  flex-direction: row;
}

.main__text {
  color: white;
  text-align: center;
}

.main__text-header {
  font-size: 35px;
}

.main__text-description {
  font-size: 20px;
}

.main__lamp {
  width: 150px;
  height: 150px;
  margin-top: 70px;
}

.main__lamp:hover {
  cursor: pointer;
}

.page__restaurant-logo {
  margin-top: 25px;
  width: 40%;
}
</style>