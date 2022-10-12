<template>
  <div class="main-page">
    <div class="main">
      <img
        class="main__lamp"
        @click="changeLeftLampStatus"
        :src="leftLampSource"
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
        class="main__lamp"
        @click="changeRightLampStatus"
        :src="rightLampSource"
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
      leftLampSource: require("../images/lamp__off.png"),
      rightLampSource: require("../images/lamp__off.png"),
      isLeftLampActive: false,
      isRightLampActive: false,
    };
  },
  methods: {
    changeLeftLampStatus() {
      if (!this.isLeftLampActive) {
        this.leftLampSource = require("../images/lamp__on.png");
        this.isLeftLampActive = !this.isLeftLampActive;
      } else {
        this.leftLampSource = require("../images/lamp__off.png");
        this.isLeftLampActive = !this.isLeftLampActive;
      }
    },
    changeRightLampStatus() {
      if (!this.isRightLampActive) {
        this.rightLampSource = require("../images/lamp__on.png");
        this.isRightLampActive = !this.isRightLampActive;
      } else {
        this.rightLampSource = require("../images/lamp__off.png");
        this.isRightLampActive = !this.isRightLampActive;
      }
    },
  },
};
</script>

<style scoped>
.main-page {
  display: flex;
  flex-direction: column;
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
  width: 500px;
}
</style>