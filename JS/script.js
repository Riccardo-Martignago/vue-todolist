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
            textAdd: ''
        }
    },
    methods:{
        remove: function(index){
            this.todos.splice(index, 1)
        },
        add: function(){
            const textToAdd = this.textAdd.trim();
            if(textToAdd){
                this.todos.push({text: textToAdd, done: false});
                this.textAdd = ''
            }
        }
    }
}).mount('#app')