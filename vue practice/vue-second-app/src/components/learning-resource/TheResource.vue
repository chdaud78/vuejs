<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resource')"
                 :mode="storedResButtonMode"
    >Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import StoredResource from "./StoredResource.vue"
import AddResource from "./AddResource.vue"

export default {
  components: {
    StoredResource,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resource',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Let\'s learn about google',
          link: 'https://google.com'
        },
      ],
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab ==='stored-resource'? null: 'flat';
    },
    addResButtonMode() {
      return this.selectedTab ==='add-resource'? null: 'flat';
    }
  },
  provide() {
    return {
      resources: this.storedResources,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
}
</script>