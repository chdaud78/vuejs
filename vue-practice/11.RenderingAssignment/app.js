const app = Vue.createApp({
    data() {
        return {
            inputText: '',
            goals: [],
            classCheck: true,
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.inputText);
            this.inputText = '';
        },
        toggleClass() {
            this.classCheck = !this.classCheck;
        }
    },
});

app.mount('#assignment')