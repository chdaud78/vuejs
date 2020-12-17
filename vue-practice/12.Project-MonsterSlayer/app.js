function getRandomValue(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: [],
        };
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                //draw
                this.winner = 'draw';
            } else if (value <= 0) {
                //player lose
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                //draw
                this.winner = 'draw';
            } else if (value <= 0) {
                //monster lose
                this.winner = 'player';
            }
        },
    },
    computed: {
        MonsterHealthBar() {
            if (this.monsterHealth <= 0) {
                return {width: '0%'};
            }
            return {width: this.monsterHealth + '%'};
        },
        PlayerHealthBar() {
            if (this.playerHealth <= 0) {
                return {width: '0%'};
            }
            return {width: this.playerHealth + '%'};
        },
        RestrictedSpecialAttack() {
            return this.currentRound % 3 !== 0;
        },
    },
    methods: {
        Restart() {
            this.winner = null;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.logMessages = [];
        },
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(12, 5);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.inputLogMessage('player','attack', attackValue);
        },
        attackPlayer() {
            const attackValue = getRandomValue(15, 8);
            this.playerHealth -= attackValue;
            this.inputLogMessage('monster','attack', attackValue);
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(25, 10);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.inputLogMessage('player','attack', attackValue);
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(20, 8);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.attackPlayer();
            this.inputLogMessage('player','heal', healValue);
        },
        surrender() {
            this.winner = 'monster';
        },
        inputLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value,
            });
        }
    },
});

app.mount('#game')