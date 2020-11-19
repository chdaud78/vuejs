import Vue from 'vue';
import VueRouter from 'vue-router';
import NumberBaseball from "../3.숫자야구/NumberBaseball";
import ResponseCheck from "../4.반응속도체크/ResponseCheck";
import RockSicssorPaper from "../5.가위바위보/RockSicssorPaper";
import LottoGenerate from "../6.로또추첨기/LottoGenerate";
import TicTacToe from "../7.틱택토/TicTacToe";
import MineSweeper from "../8.지뢰찾기/MineSweeper";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/number-baseball', component:NumberBaseball },
        { path: '/response-check', component:ResponseCheck },
        { path: '/rock-sicssor-paper', component:RockSicssorPaper },
        { path: '/lotto-generate', component:LottoGenerate },
        { path: '/tic-tac-toe', component:TicTacToe },
        { path: '/mine-sweeper', component:MineSweeper },
    ],
});