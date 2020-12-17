<template>
  <div>
    <div id="computer" v-bind:style="computedStyleObject"></div>
    <div>
      <button @click="onClickButton('rock')">보</button>
      <button @click="onClickButton('scissor')">가위</button>
      <button @click="onClickButton('paper')">바위</button>
    </div>
    <div>
      <div>{{result}}</div>
      <div>현재 {{score}}점</div>
    </div>
  </div>
</template>

<script>
  let interval = null;
  const rspCords = {
    'rock' : '0',
    'scissor': '-142px',
    'paper': '-284px',
  };
  const scores = {
    rock: 1,
    scissor: 0,
    paper: -1,
  };
  const computerChoice = (imgCords) => {
    return Object.entries(rspCords).find(function (v) {
      return v[1] === imgCords;
    })[0];
  };
  export default {
    data() {
      return {
        imgCords: rspCords.rock,
        result:'',
        score: 0,
      };
    },
    computed: {
      computedStyleObject() {
        return {
          background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCords} 0`,
        };
      }
    },
    methods: {
      onClickButton(choice) {
        clearInterval(interval);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(this.imgCords)];
        const diff = myScore - cpuScore;
        if (diff === 0) {
          this.result = '비겼습니다.';
        } else if ([-1, 2].includes(diff)) {
          this.result = '이겼습니다.';
          this.score += 1;
        } else {
          this.result = '졌습니다.';
          this.score -= 1;
        }
        setTimeout(() => {
          this.changeHand();
        }, 1000);
      },
      changeHand() {
        interval = setInterval(() => {
          if(this.imgCords === rspCords.rock) {
            this.imgCords = rspCords.scissor;
          } else if (this.imgCords === rspCords.scissor) {
            this.imgCords = rspCords.paper;
          } else if(this.imgCords === rspCords.paper) {
            this.imgCords = rspCords.rock;
          }
        },100);
      },

    },
    mounted() {
      this.changeHand();
    },
    beforeDestroy() {
      clearInterval(interval);
    }
  };
</script>

<style>
  #computer {
    width: 142px;
    height: 200px;
    background-position: 0 0;
  }
</style>