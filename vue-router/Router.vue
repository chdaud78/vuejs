<template>
  <div>
    <div>
      <router-link to="number-baseball"></router-link>
      <router-link to="response-check"></router-link>
      <router-link to="rock-sicssor-paper"></router-link>
      <router-link to="lotto-generate"></router-link>
      <router-link to="tic-tac-toe"></router-link>
      <router-link to="mine-sweeper"></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import router from './routes';

  export default {
    router,
  };
</script>

<style>

</style>
