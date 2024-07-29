const App = {
    data() {
        return {
            placeholderString: "Введите название заметки",
            title: "Список заметок",
            inputValue: ""
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
