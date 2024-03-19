Vue.createApp({
    data() {
        return {
            name: 'Hoa',
            age: 29,
            image: "https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/429966781_2115931472090245_8258911117600734339_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=U2c--3m5gFEAX9Ej1_P&_nc_ht=scontent.fhan17-1.fna&oh=00_AfAqGyPyEnaat1d8TTyNe5J1r2fM94vIHps_HuGbxK8Paw&oe=65FEA055"
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