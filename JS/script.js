const { createApp } = Vue

createApp({
    data() {
        return {
            todos : [
                {
                    text: "Fare la spesa",
                    done: false
                },
                {
                    text: "Portare a spasso il cane",
                    done: false
                },
                {
                    text: "Studiare per l'esame",
                    done: true
                },
                {
                    text: "Pulire la casa",
                    done: false
                },
                {
                    text: "Chiamare il dottore",
                    done: true
                }
            ],

        }
    },
    methods:{
        remove(index){
            this.todos.splice(index, 1)
        }
    }
}).mount('#app')