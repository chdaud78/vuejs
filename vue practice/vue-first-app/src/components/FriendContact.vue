<template>
  <li>
    <h2>{{ name }} {{ this.friendIsFavorite === '1' ? '(Favorite)' : '' }} </h2>
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
  props: [
      "name",
      "phoneNumber",
      "emailAddress",
      "isFavorite"
  ],
  data() {
    return {
      toggleCheck: false,
      // friend: {
      //   id: 'jea',
      //   name: 'Park Jaehyun',
      //   phone: '010 1234 5678',
      //   email: 'jae@naver.com',
      // },
      friendIsFavorite: this.isFavorite, // props에서 받은 값은 초기값으로만 이용하고 data에 저장해 가공 (unisection data flow)
    };
  },
  methods: {
    toggleDetail() {
      this.toggleCheck = !this.toggleCheck;
    },
    toggleFavorite() {
      if(this.friendIsFavorite === '1') {
        this.friendIsFavorite = '0';
      } else{
        this.friendIsFavorite = '1';
      }
    },
  },
};
</script>

<style>

</style>