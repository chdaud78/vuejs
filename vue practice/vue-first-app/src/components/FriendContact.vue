<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }} </h2>
    <button @click="toggleFavorite">Favorite</button>
    <button @click="toggleDetail">
     {{toggleCheck ? 'Hide' : 'Show'}} Details
    </button>
    <ul v-if="toggleCheck">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function (value) {
      //   return value === '1' || value === '0';
      // }
    },
  },
  emits: ['toggle-favorite'],
  data() {
    return {
      toggleCheck: false,
    // friendIsFavorite: this.isFavorite, // props에서 받은 값은 초기값으로만 이용하고 data에 저장해 가공 (unidirection data flow)
    };
  },
  methods: {
    toggleDetail() {
      this.toggleCheck = !this.toggleCheck;
    },
    toggleFavorite() {
      // this.friendIsFavorite = !this.friendIsFavorite;
      this.$emit('toggle-favorite', this.id);
    },
  },
};
</script>

<style>

</style>