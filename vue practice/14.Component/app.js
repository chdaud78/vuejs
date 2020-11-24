const app = Vue.createApp({
    data() {
        return {
            toggleCheck: false,
            friends: [{
                id: 'Manuel',
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com',
            },
                {
                    id: 'Julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com',
                }
            ]
        };
    },
    methods: {}
});

app.component('friend-contact', {
    template: `
    <li v-for="friend in friends" :key="friend.id">
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetail">
        {{ toggleCheck ? 'Hide' : 'Show' }}Details</button>
        <ul v-if="toggleCheck">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            toggleCheck: false,
            friends: [{
                id: 'Manuel',
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com',
            }],
        };
    },
    methods: {
        toggleDetail() {
            this.toggleCheck = !this.toggleCheck;
        }
    }

});

app.mount('#app')