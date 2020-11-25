<template>
  <div>
    <TheHeader/> <!-- <the-header></the-header> Pascalcase 에서만 self dash 사용 가능 -->
    <badge-list></badge-list>
    <user-info
        :full-name="activeUser.name"
        :info-text="activeUser.description"
        :role="activeUser.role"
    ></user-info>
    <course-goals #default="slotProps">
      <h2> {{ slotProps.item }}</h2>
      <p>{{ slotProps['another-prop'] }}</p>
    </course-goals>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!--<active-goals v-if="setSelectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="setSelectedComponent === 'manage-goals'"></manage-goals>-->
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue'

export default {
  components: {
    TheHeader, // 'the-header':TheHeader , TheHeader:TheHeader
    BadgeList,
    UserInfo,
    CourseGoals,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: '',
      activeUser: {
        name: 'Park Chong Myeong',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  }
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