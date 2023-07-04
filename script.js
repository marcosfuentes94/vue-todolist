const app = Vue.createApp({
    data() {
      return {
        todos: [
          { id: 1, text: 'Fare la spesa', done: false },
          { id: 2, text: 'Pulire la casa', done: true },
          { id: 4, text: 'Studiare Vue.js', done: false },
          { id: 5, text: 'Lavare la macchina.js', done: false },
          { id: 6, text: 'Preparare meme per Alessio', done: false },
        ]
      }
    },
  methods: {
    removeTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    }
  }
  });

  app.mount('#app');