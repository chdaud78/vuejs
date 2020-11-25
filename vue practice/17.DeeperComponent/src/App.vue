<template>
  <div>
    <TheHeader /> <!-- <the-header></the-header> Pascalcase 에서만 self dash 사용 가능 -->
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';

export default {
  components: {
    TheHeader, // 'the-header':TheHeader , TheHeader:TheHeader
    BadgeList,
    UserInfo,
  },
  data() {
    return {
      activeUser: {
        name: 'Park Chong Myeong',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>