<template>
  <section>
    <h2>{{ name }}</h2>
    <h3>Age: {{ age }}</h3>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    }
  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>