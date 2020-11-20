const app = Vue.createApp ({
    data() {
        return {
            number: 0,
            text: '',
        };
    },
    watch: {

    },
    computed: {

    },
    methods: {
        add(num) {
            this.number += num;
        },
        checkNumber() {
            if (this.number < 37) {
                this.text = 'Not there yet!'
            } else if (this.number > 37){
                this.text = "Too much"
            }
        }
    },
});

app.mount('#assignment')