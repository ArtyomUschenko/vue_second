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
        title: "Список заметок"
    })
}).mount("#app")