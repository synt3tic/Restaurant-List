<template>
  <div class="modal" @click="$emit('closeModal')">
    <form class="modal__content" @click.stop @submit.prevent>
      <div class="modal__header">Добавление ресторана</div>
      <input
        v-model="restaurant.name"
        class="modal__input"
        type="text"
        placeholder="Название ресторана"
      />
      <textarea
        v-model="restaurant.description"
        class="modal__input modal__input_description"
        name="name"
        id="1"
        cols="30"
        rows="10"
        placeholder="Описание ресторана"
      ></textarea>
      <input
        v-model="restaurant.totalPlaces"
        class="modal__input"
        type="number"
        placeholder="Кол-во мест"
      />
      <div class="image-container">
        <div class="image-container__text">Добавьте изображение</div>
        <div class="image-container__input">
          <input @change="uploadImage" class="modal__input-file" type="file" />
        </div>
        <img class="preview-img" :src="restaurant.imageSource" />
      </div>

      <button
        @click="createRestaurant"
        class="modal__button"
        :disabled="buttonStatus"
      >
        Добавить ресторан
      </button>
    </form>
  </div>
</template>

<script>
const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export default {
  data() {
    return {
      imageInputValue: "",
      restaurant: {
        name: "",
        description: "",
        totalPlaces: "",
        imageSource: "",
      },
    };
  },
  methods: {
    createRestaurant() {
      this.restaurant.id = Date.now();
      this.$emit("createRestaurant", this.restaurant);
      this.restaurant = {
        name: "",
        description: "",
        totalPlaces: "",
      };
    },
    uploadImage(e) {
      const url = URL.createObjectURL(e.target.files[0]);
      this.restaurant.imageSource = url;
    },
  },

  computed: {
    buttonStatus() {
      return !(
        this.restaurant.name.length > 0 &&
        this.restaurant.totalPlaces > 0 &&
        this.restaurant.description.length > 0
      );
    },
  },
};
</script>

<style scoped>
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__content {
  background: rgb(158, 158, 158);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
}

.modal__header {
  font-size: 20px;
  text-align: center;
}

.modal__input {
  width: 400px;
  height: 30px;
  border-radius: 5px;
  border: 0;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
}

.modal__input_description {
  height: 100px;
  resize: none;
}

.modal__input-file {
  width: inherit;
  height: inherit;
}

.modal__button {
  width: 160px;
  height: 30px;
  border-radius: 5px;
  border: none;
  color: aliceblue;
  font-family: "Courier New", Courier, monospace;
  background: rgb(44, 44, 44);
}

.modal__button:disabled {
  background: rgb(117, 117, 117);
}

.modal__button:not([disabled]):hover {
  cursor: pointer;
  color: rgb(44, 44, 44);
  background: aliceblue;
}

.image-container {
  height: 50px;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.image-container__input {
  background: rgb(56, 56, 56);
  border-radius: 5px;
  color: aliceblue;
}

.image-container__input:hover {
  background: rgb(99, 99, 99);
  cursor: pointer;
}

.image-container__text {
  position: absolute;
  color: aliceblue;
  left: 30px;
  top: 15px;
  user-select: none;
}

.preview-img {
  height: 50px;
  width: 100px;
  border-radius: 5px;
}

input[type="file"] {
  opacity: 0;
}

@media (max-width: 480px) {
  .modal__header {
    font-size: 16px;
  }

  .modal__content {
    gap: 10px;
    padding: 10px;
  }

  .modal__input {
    width: inherit;
    height: 18px;
    font-size: 14px;
  }

  .modal__input_description {
    height: 100px;
  }

  .image-container {
    display: flex;
    gap: 5px;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  .image-container__text {
    left: 55px;
    top: 2px;
    user-select: none;
    font-size: 14px;
  }

  .modal__button {
    margin-top: 21px;
  }
}

@media (max-width: 360px) {
  .modal__content {
    width: 230px;
  }

  .image-container__text {
    left: 35px;
    top: 4px;
    font-size: 12px;
  }
}
</style>