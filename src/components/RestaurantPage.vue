<template>
  <div class="restaurant-info">
    <router-link class="restaurant-info__back-button" to="/about"
      >⇐ К списку ресторанов</router-link
    >
    <h2 class="restaurant-info__name">{{ restaurant.name }}</h2>
    <img
      class="restaurant-info__image"
      :src="restaurantLink"
      alt="restaurant-image"
    />
    <p class="restaurant-info__description">{{ restaurant.description }}</p>
    <div class="card__restaurant-workload">
      <p class="card__restaurant-workload">
        <strong>Загруженность:</strong> {{ restaurant.busyPlaces }}/{{
          restaurant.totalPlaces
        }}
      </p>
      <img
        class="card__restaurant-workload-indicator"
        :src="workloadLevelIdicate"
        alt="restaurant-workload"
      />
      <button
        @click="removeGuest"
        class="restaurant-info__change-number-guests-button"
      >
        -
      </button>
      <button
        @click="addGuest"
        class="restaurant-info__change-number-guests-button"
      >
        +
      </button>
    </div>
    <div v-if="this.restaurant.status">Открыт</div>
    <div class="card__restaurant-closed-status" v-else>Закрыт</div>
    <button
      class="restaurant-info__change-status-button"
      @click="changeRestaurantStatus"
    >
      {{ restaurantStatusButton }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      restaurant: {},
      restaurantLink: "",
    };
  },
  props: {
    restaurantList: {
      type: Array,
    },
  },
  mounted() {
    this.restaurant = this.restaurantList.find(
      (el) => el.id === +this.$route.params.id
    );
    this.restaurantLink = require(`../images/${this.restaurant.imageSource}.jpg`);
  },
  computed: {
    restaurantStatusButton() {
      if (this.restaurant.status) {
        return "Закрыть ресторан";
      } else {
        return "Открыть ресторан";
      }
    },

    workloadLevel() {
      return (this.restaurant.busyPlaces / this.restaurant.totalPlaces) * 100;
    },

    workloadLevelIdicate() {
      if (this.workloadLevel < 55) {
        return require("../images/restaurant__loading_normal.png");
      }
      if (this.workloadLevel > 55 && this.workloadLevel < 75) {
        return require("../images/restaurant__loading_middle.png");
      }
      if (this.workloadLevel >= 75) {
        return require("../images/restaurant__loading_high.png");
      }
    },
  },

  methods: {
    addGuest() {
      if (this.restaurant.totalPlaces > this.restaurant.busyPlaces) {
        this.restaurant.busyPlaces += 1;
      }
    },

    removeGuest() {
      if (this.restaurant.busyPlaces > 0) {
        this.restaurant.busyPlaces -= 1;
      }
    },

    changeRestaurantStatus() {
      this.restaurant.status = !this.restaurant.status;
    },
  },
};
</script>

<style scoped>
.restaurant-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: aliceblue;
  margin: 10px;
  gap: 10px;
}

.restaurant-info__back-button {
  color: aliceblue;
  text-decoration: none;
  align-self: flex-start;
}

.restaurant-info__back-button:hover {
  color: rgb(219, 53, 53);
}

.restaurant-info__name {
  color: aliceblue;
}

.restaurant-info__image {
  width: 800px;
}

.restaurant-info__change-number-guests-button {
  color: rgb(14, 14, 14);
  background: aliceblue;
  border-radius: 50%;
  border: none;
  width: 20px;
  height: 20px;
}

.restaurant-info__change-number-guests-button:hover {
  cursor: pointer;
  color: aliceblue;
  background: rgb(14, 14, 14);
}

.restaurant-info__change-status-button {
  margin-top: 10px;
  border-radius: 5px;
  border: none;
  width: 140px;
  height: 30px;
}

.restaurant-info__change-status-button:hover {
  cursor: pointer;
  color: aliceblue;
  background: rgb(14, 14, 14);
}
</style>