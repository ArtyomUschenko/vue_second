const app = Vue.createApp({
   data() {
       return {
           title: "ГОСЭДО"
       }
   },
    template: `<div class="card center">
                    <h1>{{ title }}</h1>
                    <button class="btn" @click="title='Информация'">Записать</button>
                </div>
`
})

app.mount('#app')