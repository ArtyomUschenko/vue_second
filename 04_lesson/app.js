const  h = Vue.h

const app = Vue.createApp({
   data() {
       return {
           title: "ГОСЭДО"
       }
   },
    methods: {
       changeTitle() {
           console.log(this)
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
    },
    beforeCreate() {
        console.log("beforeCreate")
    },
    created() {
        console.log("created")
    },
    beforeMount() {
       console.log("beforeMount")
    },
    mounted() {
       console.log("mounted")
    },
    beforeUnmount() {
       console.log("beforeUnmount")
    },
    unmounted() {
       console.log("unmounted")
    },
    beforeUpdate() {
       console.log("beforeUpdate")
    },
    updated() {
       console.log("updated")
    }
})

app.mount('#app')

// setTimeout( () => {
//     app.unmount()
// }, 2000)
// ====

let title = "Vue"
let message = "Заголовок: " + title


// console.log(message)
//
// title = "Angular"
//
// console.log(message)

const data = {
    title: "Vue",
    message: "Заголовок " + title
}

const proxy = new Proxy(data, {
    // get(target, p) {
    //     console.log(target)
    //     console.log(p)
    // },
    set(target, key, value) {
        if (key === "title") {
            target.message = "Заголовок" + value
        }
        target[key] = value
    }
})

proxy.title = "Angular"
// console.log(proxy)