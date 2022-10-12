<template>
  <div class="restaurant-list">
    <restaurant-card
      v-for="restaurant in restaurantList"
      :key="restaurant.id"
      :restaurant="restaurant"
    />
  </div>
</template>

<script>
import RestaurantCard from "./RestaurantCard.vue";

export default {
  props: {
    restaurantList: {
      type: Array,
    },
  },
  components: { RestaurantCard },
};
</script>

<style scoped>
.restaurant-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  color: white;
  gap: 30px;
  margin-top: 30px;
}
</style>