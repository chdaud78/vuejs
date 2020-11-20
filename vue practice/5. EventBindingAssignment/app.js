const app = Vue.createApp({
    data() {
        return {
            text: '',
            entertext:'',
            inputtext: '',
        }
    },
    methods: {
        showAlert() {
            alert('Thanks for clicking me');
        },
        textInput(e) {
            this.inputtext = e.target.value;
            inputtext='';
        },
        keyInput() {
            this.text = this.inputtext;
        },
        keyInputEnter() {
            this.entertext = this.inputtext;
            inputtext='';
        },
    }
});

app.mount('#assignment');