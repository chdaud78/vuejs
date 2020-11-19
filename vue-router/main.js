import Vue from 'vue';
import MineSweeper from './Router';

new Vue({
  render: createElement => createElement(MineSweeper)
}).$mount('#root');
