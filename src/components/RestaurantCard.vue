<template>
  <div class="card">
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
    <div class="card__restaurant-status" v-if="this.restaurant.status">
      Открыт
    </div>
    <div class="card__restaurant-status" v-else>Закрыт</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    restaurant: {
      type: Object,
      required: true,
    },
  },
  methods: {},
  computed: {
    workloadLevel() {
      return (this.restaurant.busyPlaces / this.restaurant.totalPlaces) * 100;
    },

    workloadLevelIdicate() {
      if (this.workloadLevel < 55) {
        return require(`../images/${"restaurant__loading_normal"}.png`);
      }
      if (this.workloadLevel > 55 && this.workloadLevel < 75) {
        return require(`../images/${"restaurant__loading_middle"}.png`);
      }
      if (this.workloadLevel >= 75) {
        return require(`../images/${"restaurant__loading_high"}.png`);
      }
    },

    restaurantLink() {
      const fileName = this.restaurant.imageSource;
      return require(`../images/${fileName}.jpg`);
    },
  },
};
</script>

<style scoped>
.card {
  width: 280px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(15, 15, 15);
  border-radius: 10px;
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
}

.card__restaurant-workload-indicator {
  width: 18px;
  height: 18px;
  margin-left: 10px;
}

.card__restaurant-status {
}
</style>