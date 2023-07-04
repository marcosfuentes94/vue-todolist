const app = Vue.createApp({
    data() {
        return {
            todos: [
                { id: 1, text: 'Fare la spesa', done: false },
                { id: 2, text: 'Pulire la casa', done: true },
                { id: 4, text: 'Studiare Vue.js', done: false },
                { id: 5, text: 'Lavare la macchina', done: false },
                { id: 6, text: 'Preparare meme per Alessio', done: false },
            ],
            newTodoText: ''
        };
    },
    methods: {
        addTodo() {
            if (this.newTodoText.trim() !== '') {
                const newTodo = {
                    id: Date.now(),
                    text: this.newTodoText,
                    done: false
                };
                this.todos.push(newTodo);
                this.newTodoText = '';
            }
        },
        toggleTodoDone(todo) {
            todo.done = !todo.done;
        }
    }
});

app.mount('#app');