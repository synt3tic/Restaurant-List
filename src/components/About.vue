<template>
  <div class="restaurant-block">
    <restaurant-card
      v-for="restaurant in restaurantList"
      :key="restaurant.id"
      :restaurant="restaurant"
    ></restaurant-card>
  </div>
</template>

<script>
import RestaurantCard from "./RestaurantCard.vue";

export default {
  components: { RestaurantCard },
  data() {
    return {
      restaurantList: [
        {
          id: 1,
          name: "Кайф Провинанс",
          imageSource: "restaurant",
          busyPlaces: 20,
          totalPlaces: 24,
          status: true,
        },
        {
          id: 2,
          name: "Залупа коня",
          imageSource: "restaurant2",
          busyPlaces: 0,
          totalPlaces: 68,
          status: false,
        },
        {
          id: 3,
          name: "Шаурма на углях",
          imageSource: "restaurant3",
          busyPlaces: 13,
          totalPlaces: 16,
          status: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
.restaurant-block {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  color: white;
  gap: 30px;
  margin: auto;
  margin-top: 30px;
}
</style>