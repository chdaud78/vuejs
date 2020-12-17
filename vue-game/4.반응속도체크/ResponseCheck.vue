<template>
  <div>
    <div id="screen" :class="state" @click="onClickScreen">{{message}}</div>
    <template v-if="result.length"> <!--template는 없는셈 쳐서 template 속의 마크업 들은 위의 div와 형제가 됨-->
      <div>평균 시간: {{average}}ms</div>
      <button @click="onReset">리셋</button>
    </template>
  </div>
</template>

<script>
  let startTime = 0;
  let endTime = 0;
  let timeout = null;
  export default {
    data() {
      return {
        result: [],
        state: 'waiting',
        message: '클릭해서 시작하세요.',
      }
    },
    computed: { // 성능을 업그레이드, 캐싱을 없애기 위해 단순한 data를 가공 시 이용
      average() {
        return this.result.reduce((a,c) => a + c, 0) / this.result.length || 0;
      }
    },
    methods: {
      onReset() {
        this.result = [];
      },
      onClickScreen() {
        if(this.state === 'waiting') {
          this.state = "ready";
          this.message = "초록색이 되면 클릭하세요.";
          setTimeout(() => {
            this.state = "now";
            this.message = "지금 클릭!";
            startTime = new Date();
          }, Math.floor(Math.random() * 1000) + 2000); //2 ~3초
        } else if(this.state === "ready") {
          clearTimeout(timeout);
          this.state = "waiting";
          this.message = "너무 성급 하시군요! 초록색이 된 후에 클릭하세요.";
        } else if (this.state === "now") {
          endTime = new Date();
          this.state = "waiting";
          this.message = "클릭해서 시작하세요";
          this.result.push(endTime - startTime);
        }
      }
    }
  };
</script>

<style scoped>
  #screen {
    width: 300px;
    height: 200px;
    text-align: center;
    user-select: none;
  }
  #screen.waiting {
    background-color: aqua;
  }
  #screen.ready {
    background-color: red;
    color: white;
  }
  #screen.now {
    background-color: greenyellow;
  }
</style>