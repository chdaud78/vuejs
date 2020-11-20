const app = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: '',
            confirmedName: '',
        };
    },
    methods: {
        confirm() {
          this.confirmedName = this.name;
        },
        submitForm() {
            alert('Submit!!');
        },
        setName(event, lastname) {
            this.name = event.target.value + ' ' +lastname;
        },
        add(num) {
            this.counter = this.counter + num
        },
        remove(num) {
            this.counter = this.counter - num
        },
    }
});

app.mount('#events');