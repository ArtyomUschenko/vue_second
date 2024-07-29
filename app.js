const App = {
    data() {
        return {
            placeholderString: "Введите название заметки",
            title: "Список заметок",
            inputValue: "2222"
        }
    },
    methods: {
        inputChangeHandler(event){
            console.log(event.target.value);
            this.inputValue = event.target.value;
        }

    }
}

const app = Vue.createApp(App)

app.mount("#app") //


// Vue.createApp({
//     data:function () {
//         return {
//             placeholderString: "Введите ваше имя",
//             title: "Список заметок",
//             inputValue: "",
//             notes: []
//         }
//     },
//     methods: {
//         inputChangeHandler(event){
//             this.inputValue = event.target.value;
//         },
//         addNewNote(){
//             if(inputValue !="") {
//                 this.notes.push(this.inputValue)
//                 this.inputValue = ""
//             }
//         }
//     }
// })
//     .month("#app")