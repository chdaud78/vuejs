const app = Vue.createApp ({
    data() {
        return {
            number: 0,
        };
    },
    watch: {
        checkNumber(value) {
            const that = this;
            setTimeout(function () {
                that.number = 0;
                }, 5000);
            }
    },
    computed: {
        checkNumber() {
            if (this.number < 37) {
                return 'Not there yet!'
            } else if (this.number > 37){
                return "Too much"
            } else {
                return "Cool!"
            }
        }
    },
    methods: {
        add(num) {
            this.number += num;
        },
        // checkNumber() {
        //     if (this.number < 37) {
        //         this.text = 'Not there yet!'
        //     } else if (this.number > 37){
        //         this.text = "Too much"
        //     }
        // }
    },
});

app.mount('#assignment')