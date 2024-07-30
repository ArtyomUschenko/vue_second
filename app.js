const App = {
    data() {
        return {
            placeholderString: "Введите название заметки",
            title: "Список заметок",
            inputValue: "2222",
            notes: ["Заметка1", "Заметка2"]
        }
    },
    methods: {
        inputChangeHandler(event){
            // console.log(event.target.value);
            this.inputValue = event.target.value;
        },
        addNewNote() {
            if(this.inputValue !== "") {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(idx) {
            this.notes.splice(idx, 1)
        }
    },
    computed: {
        doubleCountComputer(){
            console.log("doubleCountComputer")
            return this.notes.length * 2
        },
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = ""
            }
        }
    }
}

const app = Vue.createApp(App)

app.mount("#app")