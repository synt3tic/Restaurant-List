<template>
  <div @click="goToRestaurantPage" class="card">
    <h3 class="card__header">{{ restaurant.name }}</h3>
    <img class="card__image" :src="restaurant.imageSource" alt="restaurant" />
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
    </div>
    <div :class="{ 'card__restaurant-closed-status': !this.restaurant.status }">
      {{ restaurantStatus }}
    </div>
  </div>
</template>

<script>
import RestaurantPage from "./RestaurantPage.vue";
export default {
  components: { RestaurantPage },
  props: {
    restaurant: {
      type: Object,
      required: true,
    },
  },
  computed: {
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
  },
  methods: {
    goToRestaurantPage() {
      this.$router.push({
        name: "Restaurant",
        params: { id: this.restaurant.id },
      });
    },
  },
};
</script>

<style>
.card {
  width: 280px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 15px;
  background: rgb(15, 15, 15);
  border-radius: 10px;
}

.card:hover {
  cursor: pointer;
  background: rgb(25, 25, 25);
}

.card__header {
  margin: 0;
}

.card__image {
  width: 210px;
  height: 140px;
}

.card__restaurant-workload {
  display: flex;
  align-items: center;
  margin: 0;
  gap: 10px;
}

.card__restaurant-workload-indicator {
  width: 18px;
}

.card__restaurant-closed-status {
  color: rgb(219, 53, 53);
}

@media (max-width: 480px) {
  .card {
    width: 220px;
    height: 220px;
    font-size: 14px;
  }

  .card__image {
    width: 180px;
    height: 110px;
  }
}
</style>