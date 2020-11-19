<template>
  <div class="ball" :style="styleObject" > {{number}}</div>
</template>

<script>
export default {
  name: 'LottoBall',
  props: {
    number: Number,
  }, //props로 자식이 받은 값은 바꿀수 없음. read-only
  computed: {
    styleObject() {
    let background;
    if(this.number <= 10) {
      background= 'red';
    } else if (this.number <= 20) {
      background = 'orange';
    } else if (this.number <= 30) {
      background = 'yellow';
    } else if (this.number <= 40) {
      background = 'blue';
    } else {
      background = 'green';
    }
    return {
      background,
    };
  },
  }
};
</script>

<style>
.ball {
  display : inline-block;
  border: 1px solid black;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  margin-right: 20px;
}
</style>