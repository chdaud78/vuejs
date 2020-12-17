const app = Vue.createApp ({ //vue option
   data() { // 객체의 프로퍼티
       return {
           courseGoal: 'Finish the course and learn Vue!',
           courseGoalA: 'Beautiful Apps!',
           courseGoalB: '<h3>You can do it!</h3>',
           vueLink: 'https://vuejs.org',
       };
   },
    methods: { // function 객체
       outputGoal() {
           const randomNumber = Math.random();
           if (randomNumber < 0.5) {
               return 'fool'
           } else {
               return 'genius'
           }
       },
        outputGoalByData() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA
            } else {
                return this.courseGoalB
            }
        }
    },
});

app.mount('#user-goal')