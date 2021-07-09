import { makeAutoObservable } from 'mobx'


type TodoProps = {
  id: number
  title: string
  completed: boolean
}

class Todo {
  todos = [
    { id: 1, title: 'Сходить в магазин', completed: false },
    { id: 2, title: 'Выучить все на свете', completed: false },
    { id: 3, title: 'Помыть посуду', completed: false }
  ]
  constructor() {
    makeAutoObservable(this)
  }

  addTodo(todo: TodoProps) {
    this.todos.push(todo)
  }

  removeTodo(id: number) {
    console.log('remove')

    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  completedTodo(id: number) {
    console.log('complete', this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
  }

  fetchTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))
  }
}

export default new Todo()
