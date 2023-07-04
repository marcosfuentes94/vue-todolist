const app = Vue.createApp({
    
data() {
    return {
    // LISTA DELLE ATTIVITÀ DA FARE
    todos: [
        { id: 1, text: 'Fare la spesa', done: false },
        { id: 2, text: 'Pulire la casa', done: true },
        { id: 4, text: 'Studiare Vue.js', done: false },
        { id: 5, text: 'Lavare la macchina', done: false },
        { id: 6, text: 'Preparare meme per Alessio', done: false },
    ],
// TESTO PER LA NUOVA ATTIVITÀ
    newTodoText: ''
    };
},
// DEFINISCE I METODI PER MANIPOLARE I DATI
methods: {
// AGGIUNGE UNA NUOVA ATTIVITÀ ALLA LISTA
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
// CAMBIA LO STATO DI COMPLETAMENTO DI UNA ATTIVITÀ
    toggleTodoDone(todo) {
    todo.done = !todo.done;
    },
// RIMUOVE UNA ATTIVITÀ DALLA LISTA
    removeTodo(todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
        this.todos.splice(index, 1);
    }
    }
}
});

// MONTA L'APP NELL'ELEMENTO HTML CON ID "app"
app.mount('#app');
