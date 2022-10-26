<template>
  <div class="restaurant-list">
    <div @click="addNewRestaurant" class="card">
      <img
        class="add-restaurant-icon"
        src="../images/restaurant__add-new.svg"
        alt="add-new-restaurant-icon"
      />
    </div>
    <restaurant-card
      v-for="restaurant in restaurantList"
      :key="restaurant.id"
      :restaurant="restaurant"
    />
  </div>
  <create-restaurant
    v-if="isModalActive"
    @createRestaurant="createNewRestaurant"
    @closeModal="closeModal"
  ></create-restaurant>
</template>

<script>
import RestaurantCard from "./RestaurantCard.vue";
import CreateRestaurant from "./CreateRestaurant.vue";

export default {
  data() {
    return {
      isModalActive: false,
    };
  },
  props: {
    restaurantList: {
      type: Array,
    },
  },
  components: { RestaurantCard, CreateRestaurant },
  methods: {
    addNewRestaurant() {
      this.isModalActive = true;
    },

    createNewRestaurant(restaurant) {
      this.$emit("createRestaurant", restaurant);
      this.isModalActive = false;
    },

    closeModal() {
      this.isModalActive = false;
    },
  },
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

.add-restaurant-icon {
  width: 160px;
}
</style>