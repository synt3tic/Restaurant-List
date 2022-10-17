<template>
  <div class="page">
    <header class="header">
      <img
        class="header__logo"
        @click="goToMainPage"
        src="./images/logo.png"
        alt="header-logo"
      />
      <router-link class="header__link" to="/">Главная</router-link>
      <router-link class="header__link" to="/about"
        >Список ресторанов</router-link
      >
    </header>
    <router-view
      :restaurantList="restaurantList"
      @deleteRestaurant="deleteRestaurant"
      @createRestaurant="createNewRestaurant"
      @addGuest="addGuest"
      @removeGuest="removeGuest"
      @changeRestaurantStatus="changeRestaurantStatus"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      restaurantList: [],
    };
  },
  methods: {
    deleteRestaurant(restaurant) {
      this.restaurantList = this.restaurantList.filter(
        (element) => element.id !== restaurant.id
      );
    },

    goToMainPage() {
      this.$router.push("/");
    },

    createNewRestaurant(restaurant) {
      restaurant.busyPlaces = 0;
      restaurant.status = false;
      this.restaurantList.push(restaurant);
    },

    addGuest(restaurant) {
      this.restaurantList.find((el) => {
        if (el.id === restaurant.id) {
          el.busyPlaces += 1;
        }
      });
    },

    removeGuest(restaurant) {
      this.restaurantList.find((el) => {
        if (el.id === restaurant.id) {
          el.busyPlaces -= 1;
        }
      });
    },

    changeRestaurantStatus(restaurant) {
      this.restaurantList.find((el) => {
        if (el.id === restaurant.id) {
          el.status = !el.status;
          el.busyPlaces = 0;
        }
      });
    },
  },
};
</script>

<style>
body {
  margin: 0;
  background: rgb(36, 36, 36);
  width: 100%;
}

.page {
  font-family: "Courier New", Courier, monospace;
  font-weight: 100;
  padding-bottom: 30px;
}

.header {
  display: flex;
  justify-content: space-between;
  background: rgb(14, 14, 14);
  height: 40px;
  padding: 10px;
  gap: 20px;
}

.header__logo:hover {
  cursor: pointer;
}

.header__link {
  align-self: center;
  text-decoration: none;
  color: white;
  font-size: 20px;
  text-align: center;
}

@media (max-width: 480px) {
  .header__link {
    font-size: 18px;
  }
}

@media (max-width: 400px) {
  .header__link {
    font-size: 16px;
  }
}

@media (max-width: 300px) {
  .header__link {
    font-size: 12px;
  }
}

.header__link:hover {
  color: rgb(219, 53, 53);
}

.router-link-active {
  color: rgb(219, 53, 53);
}
</style>