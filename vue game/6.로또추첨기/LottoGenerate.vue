<template>
  <div>
    <div>당첨결과</div>
    <lotto-ball v-for="ball in winBall" :key="ball" :number="ball"></lotto-ball>
    <div>보너스</div>
    <lotto-ball v-if="bonusBall" :number="bonusBall"></lotto-ball>
    <button v-if="redo" @click="onclickRedo">한번더</button>
  </div>
</template>

<script>
import LottoBall from "./LottoBall";

function getWinNumbers() {
  const candidate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}
const timeouts = [];
export default {
  components: {
    'lotto-ball': LottoBall, //앞과 뒤의 pascal case, Kebab case가 같을 경우 서로 호환되어 LottoBall로 줄일수 있음.
  },
  data() {
    return {
      winNumbers: getWinNumbers(),
      winBall: [],
      bonusBall: null,
      redo: false,
    };
  },
  computed: {},
  methods: {
    onclickRedo() {
      this.winNumbers = getWinNumbers();
      this.winBall = [];
      this.bonusBall = null;
      this.redo = false;
      this.showBalls();
    },
    showBalls() {
      for (let i = 0; i < this.winNumbers.length - 1; i++) {
        timeouts[i] = setTimeout(() => {
          this.winBall.push(this.winNumbers[i]);
        }, (i + 1) * 1000);
      }
      timeouts[6] = setTimeout(() => {
        this.bonusBall = this.winNumbers[6];
        this.redo = true;
      }, 7000);
    }
  },
  mounted() {
    this.showBalls();
  },
  beforeDestroyed() {
    timeouts.forEach((t) => {
      clearTimeout(t);
    });
  },
  // watch: {
  //   winBalls(value, oldValue) {
  //     console.log(value, oldValue);
  //     if (value.length === 0) {
  //       this.showBalls();
  //     }
  //   }
  // } 감시 역할. 최대한 사용 자제하기.
};
</script>

<style>

</style>