<template>
  <div @click="goToRestaurantPage" class="card" to="/about/:id">
    <h3>{{ restaurant.name }}</h3>
    <img class="card__image" :src="restaurantLink" alt="restaurant" />
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
    <div v-if="this.restaurant.status">Открыт</div>
    <div class="card__restaurant-closed-status" v-else>Закрыт</div>
  </div>
</template>

<script>
import RestaurantPage from "./RestaurantPage.vue";
export default {
  components: { RestaurantPage },
  data() {
    return {};
  },
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
      if (this.workloadLevel < 55) {
        return require("../images/restaurant__loading_normal.png");
      } else {
        return this.workloadLevel >= 75
          ? require("../images/restaurant__loading_high.png")
          : require("../images/restaurant__loading_middle.png");
      }
    },

    restaurantLink() {
      const fileName = this.restaurant.imageSource;
      return require(`../images/${fileName}.jpg`);
    },
  },
  methods: {
    goToRestaurantPage() {
      this.$router.push({
        name: "Restaurant",
        params: { id: this.restaurant.id, kek: this.restaurant },
        query: { restaurant1: this.restaurant },
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
  background: rgb(15, 15, 15);
  border-radius: 10px;
  color: aliceblue;
  text-decoration: none;
}

.card:hover {
  cursor: pointer;
  background: rgb(25, 25, 25);
}

.card__image {
  width: 210px;
  height: 140px;
}

.card__restaurant-workload {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 5px;
  gap: 5px;
}

.card__restaurant-workload-indicator {
  width: 18px;
}

.card__restaurant-closed-status {
  color: rgb(219, 53, 53);
}
</style>