Vue.createApp({
    data() {
        return {
            name: 'Hoa',
            age: 29,
            image: ""
        }
    },
    methods: {
        calculatorAge() {
            return this.age + 5;
        },

        randomNumber() {
            return Math.random();
        }
    }
}).mount('#assignment');