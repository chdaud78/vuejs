const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullname: '',
      LastName: '',
    };
  },
  watch: { // watch 속성은 감시할 데이터를 지정하고 그 데이터가 바뀌면 이런 함수를 실행하라는 방식으로 소프트웨어 공학에서 이야기하는 ‘명령형 프로그래밍’ 방식
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    }
    // name(value) { //data의 이름과 같아야함. 그 data 가 바뀔때 마다 실행
    //   if (value === '') {
    //     this.fullname = '';
    //   }else {
    //     this.fullname = value + ' ' + this.LastName;
    //   }
    // },
    // LastName(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   }else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },
  computed: { // 참고하는 값의 변경에만 재실행 하는 속성. computed 속성은 계산해야 하는 목표 데이터를 정의하는 방식으로 소프트웨어 공학에서 이야기하는 ‘선언형 프로그래밍’ 방식.
    fullname() {
      console.log('running...');
      if (this.name === '' || this.LastName === '') { // 버튼을 누를때마다 작동하는 오류아닌 오류가 있음 -> computed 이용
        return '';
      }
      return this.name + ' ' + this.LastName;
    },
  },
  methods: { // 모든상황에서 재실행
    // setName(event) {
    //   this.name = event.target.value;
    // },
    outputFullname() {
      console.log('running...');
      if (this.name === '') { // 버튼을 누를때마다 작동하는 오류아닌 오류가 있음 -> computed 이용
        return '';
      }
      return this.name + ' ' + 'ChongMyeong';
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
  }
});

app.mount('#events');
