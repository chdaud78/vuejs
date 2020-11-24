<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetail">
     {{toggleCheck ? 'Hide' : 'Show'}} Details
    </button>
    <ul v-if="toggleCheck">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      toggleCheck: false,
      friend: {
        id: 'jea',
        name: 'Park Jaehyun',
        phone: '010 1234 5678',
        email: 'jae@naver.com',
      },
    };
  },
  methods: {
    toggleDetail() {
      this.toggleCheck = !this.toggleCheck;
    },
  },
};
</script>

<style>

</style>