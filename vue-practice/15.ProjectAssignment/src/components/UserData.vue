<template>
  <section>
    <form @submit.prevent="submitData">
      <div>
        <label>Name</label>
        <input type="text" v-model="enteredName">
      </div>
      <div>
        <label>Age</label>
        <input type="number" v-model="enteredAge">
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  emits: ['user-data'],
  data() {
    return {
      enteredName: '',
      enteredAge: '',
    };
  },
  methods: {
    submitData() {
      this.$emit(
          'user-data',
          this.enteredName,
          this.enteredAge,
      );
    },
  },
};
</script>