// const App = {
//     data() {
//         return {
//             title: "Список заметок",
//         }
//     },
// }
//
// const app = Vue.createApp(App)
//
// app.mount("#app")


Vue.createApp({
    data: () => ({
        myHtml: "<h1>Ошибка</h1>", title: "Список заметок", person: {
            firstName: "Artyom", lastName: "Uschenko", age: 30
        }, items: [1, 2, 3, 4, 5],
    }), methods: {
        stopPropagation(event) {
            event.stopPropagation()
        },
        addItem(event) {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value=""
            // console.log(this.$refs.myInput.value)
            console.log(event)
        },
        remove(i) {
            this.items.splice(i, 1)
        },
        log(item) {
            console.log(item)
        }
    }, computed: {
        evenItems(){
            return this.items.filter(i => i % 2 === 0 )
        }
    },
}).mount("#app")