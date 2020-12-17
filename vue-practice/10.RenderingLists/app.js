const app = Vue.createApp({
  data() {
    return {
      inputText: '',
      goals: [] ,
    };
  },
  methods: {
    inputList() {
      this.goals.push(this.inputText);
      this.inputText = '';
    },
    removeList(idx){
      this.goals.splice(idx, 1);
    }
  },
});

app.mount('#user-goals');
