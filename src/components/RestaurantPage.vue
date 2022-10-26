<template>
  <div class="restaurant-info">
    <router-link class="restaurant-info__back-button" to="/about"
      >⇐ К списку ресторанов</router-link
    >
    <h2 class="restaurant-info__name">{{ restaurant.name }}</h2>
    <img
      class="restaurant-info__image"
      :src="restaurant.imageSource"
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
        :disabled="removeButtonStatus"
      >
        -
      </button>
      <button
        @click="addGuest"
        class="restaurant-info__change-number-guests-button"
        :disabled="addButtonStatus"
      >
        +
      </button>
    </div>
    <div>{{ visitorsStatus }}</div>
    <div :class="{ 'card__restaurant-closed-status': !this.restaurant.status }">
      {{ restaurantStatus }}
    </div>
    <button
      class="restaurant-info__change-status-button"
      @click="changeRestaurantStatus"
    >
      {{ restaurantStatusButton }}
    </button>
    <button
      class="restaurant-info__delete-restaurant-button"
      @click="deleteRestaurant"
    >
      Удалить ресторан
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
  },
  computed: {
    restaurantStatusButton() {
      return this.restaurant.status ? "Закрыть ресторан" : "Открыть ресторан";
    },

    workloadLevel() {
      return (this.restaurant.busyPlaces / this.restaurant.totalPlaces) * 100;
    },

    workloadLevelIdicate() {
      let workloadLevelIdicateLink;
      if (this.workloadLevel <= 55) {
        workloadLevelIdicateLink = require("../images/restaurant__loading_normal.png");
      } else if (this.workloadLevel >= 75) {
        workloadLevelIdicateLink = require("../images/restaurant__loading_high.png");
      } else if (this.workloadLevel > 55 && this.workloadLevel < 75) {
        workloadLevelIdicateLink = require("../images/restaurant__loading_middle.png");
      }
      return workloadLevelIdicateLink;
    },

    restaurantStatus() {
      return this.restaurant.status ? "Открыт" : "Закрыт";
    },

    visitorsStatus() {
      let status;
      if (this.restaurant.totalPlaces === this.restaurant.busyPlaces) {
        status = "Максимальное кол-во гостей";
      }
      if (this.restaurant.busyPlaces === 0) {
        status = "Ресторан пуст, будьте первыми";
      }
      if (this.workloadLevel <= 55 && this.workloadLevel > 0) {
        status = "В ресторане низкая загруженность";
      }
      if (this.workloadLevel >= 75 && this.workloadLevel < 100) {
        status = "В ресторане высокая загруженность";
      }
      if (this.workloadLevel > 55 && this.workloadLevel < 75) {
        status = "В ресторане средняя загруженность";
      }
      return status;
    },

    removeButtonStatus() {
      return !this.restaurant.busyPlaces;
    },

    addButtonStatus() {
      return this.restaurant.busyPlaces === this.restaurant.totalPlaces;
    },
  },

  methods: {
    addGuest() {
      if (
        this.restaurant.totalPlaces > this.restaurant.busyPlaces &&
        this.restaurant.status
      ) {
        this.$emit("addGuest", this.restaurant);
      }
    },

    removeGuest() {
      if (this.restaurant.busyPlaces > 0) {
        this.$emit("removeGuest", this.restaurant);
      }
    },

    changeRestaurantStatus() {
      this.$emit("changeRestaurantStatus", this.restaurant);
    },

    deleteRestaurant() {
      this.$emit("deleteRestaurant", this.restaurant);
      this.$router.push("/about");
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
  margin: 30px;
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
  width: 900px;
}

.restaurant-info__description {
  font-size: 20px;
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

.restaurant-info__change-number-guests-button:disabled {
  background: gray;
  color: aliceblue;
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

.restaurant-info__delete-restaurant-button {
  margin-top: 10px;
  border-radius: 5px;
  border: none;
  width: 140px;
  height: 30px;
  background: rgb(112, 53, 53);
  color: aliceblue;
}

.restaurant-info__delete-restaurant-button:hover {
  cursor: pointer;
  color: rgb(14, 14, 14);
  background: rgb(148, 52, 52);
}

@media (max-width: 980px) {
  .restaurant-info__image {
    width: 700px;
  }
}

@media (max-width: 760px) {
  .restaurant-info__image {
    width: 500px;
  }
}

@media (max-width: 560px) {
  .restaurant-info__image {
    width: 300px;
  }
}
</style>