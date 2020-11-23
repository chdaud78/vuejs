const app = Vue.createApp({
    data() {
        return {
            addClassText: '',
            checkClass: false,
            colorText: '',
        };
    },
    computed: {
        paraClasses() {
            return {
                user1: this.addClassText === 'user1',
                user2: this.addClassText === 'user2',
                visible: this.checkClass === false,
                hidden: this.checkClass === true,
            }
        }
    },
    methods: {
        toggleClass() {
            this.checkClass = !this.checkClass;
        },
    },
});

app.mount('#assignment');