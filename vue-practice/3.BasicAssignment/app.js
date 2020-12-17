const app = Vue.createApp({
   data() {
       return {
           names: '박총명',
           age: 23,
           number1: 3,
           number2: 7,
           imgurl: 'http://www.jpposter.com/wp-content/uploads/2019/12/Curious-Tabby-Kitten-1024x640.jpg',
       };
   },
    methods: {
       chooseNumber() {
           const randomNumber = Math.random();
           if (randomNumber < 0.5) {
               return this.number1;
           } else {
               return this.number2;
           }
       }
    }
});

app.mount('#assignment');