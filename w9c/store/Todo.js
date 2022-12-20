import { makeAutoObservable } from 'mobx'

class Todo {
    todos = [
        { id: '01', title: 'Hello', completed: false },
        { id: '02', title: 'Hello2', completed: false }
    ]

    constructor() {
        makeAutoObservable(this)
    }

    createTodo(todo) {
        console.log(`create`)
        this.todos.push(todo)
    }

    deleteTodo(id) {
        console.log(`delete`)
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeTodo(id) {
        console.log(`complete`)
        this.todos = this.todos.map(todo => (todo.id === id ? { ...todo, completed : !todo.completed } : todo))
    }

}

export default new Todo()
