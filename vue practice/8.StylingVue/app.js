const app = Vue.createApp({
   data() {
       return {
           boxAselected: false,
           boxBselected: false,
           boxCselected: false,
       };
   },
    watch: {

    },
    computed: {
        boxCclass() {
            return {active: this.boxCselected}
        }
    },
    methods: {
        styleBox(box) {
            if (box === 'A') {
                this.boxAselected = !this.boxAselected;
            } else if (box === 'B') {
                this.boxBselected = !this.boxBselected;
            } else if (box === 'C') {
                this.boxCselected = !this.boxCselected;
            }
        }
    },
});

app.mount('#styling');