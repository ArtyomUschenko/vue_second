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
        myHtml: "<h1>Ошибка</h1>",
        title: "Список заметок",
        person: {
            firstName: "Artyom",
            lastName: "Uschenko",
            age: 30
        },
        items: [1, 2, 3, 4, 5],
    })
}).mount("#app")