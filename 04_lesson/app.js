const  h = Vue.h

const app = Vue.createApp({
   data() {
       return {
           title: "ГОСЭДО"
       }
   },
    methods: {
       changeTitle() {
           this.title = "Информация"
       }
    },
//     template: `<div class="card center">
//                     <h1>{{ title }}</h1>
//                     <button class="btn" @click="title='Информация'">Записать</button>
//                 </div>
// `
    render(){
       return h("div", {
           class: "card center"
       }, [
           h("h1", {}, this.title),
           h("button", {class: "btn",
           onclick: this.changeTitle}, "Записать" ),
       ])
    }
})

app.mount('#app')