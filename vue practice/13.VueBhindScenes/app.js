const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log('beforeCreate') // 크롬 관리자 도구 breakpoint 찍어서 확인
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  },
});

app.mount('#app');
setTimeout(function() {
  app.unmount();
}, 3000);


const app2 = Vue.createApp({
  template: `
  <p>{{favoriteDrink}}</p>
  `,
  data() {
    return {
      favoriteMeal: 'Hamburger',
      favoriteDrink: 'Cola',
    };
  }
});

app2.mount('#app2');




/*

let message = 'Hello!';

let longMessage = message + 'World';

console.log(longMessage);

message = 'Hello!!!!!';

console.log(longMessage); /!* 자바스크립트는 reacitve 하지않다. *!/

const data = {
  message: 'Hello!',
  longMessage: 'Hello! World!'
};

const handler = {
  set(target, key, value) {
    /!*console.log(target);
    console.log(key);
    console.log(value);*!/
    if(key === 'message') {
      target.longMessage = value + ' World';
    }
    target.longMessage = value;

  }
};

const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!!';

console.log(proxy.longMessage);

/!* vue는 가상 DOM을 만들어 최신 DOM과 이전 DOM을 비교하여 바뀐 부분만을 실제 DOM으로 올려준다. *!/

*/
