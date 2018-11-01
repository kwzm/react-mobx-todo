import { observable, action, computed, decorate } from 'mobx'

class Todo {
  id = Math.random()

  title = ''
  
  finished = false

  constructor(title) {
    this.title = title
  }

  toggle = () => {
    this.finished = !this.finished
  }
}

decorate(Todo, {
  title: observable,
  finished: observable,
  toggle: action,
})

class Store {
  todos = []

  filter = 'All'

  createTodo = (title) => {
    this.todos.unshift(new Todo(title))
  }

  removeTodo = (todo) => {
    this.todos.remove(todo)
  }

  filterTodos = (filter) => {
    this.filter = filter
  }

  get left() {
    return this.todos.filter(todo => !todo.finished).length
  }

  get filteredTodos() {
    switch(this.filter) {
      case 'Active':
        return observable(this.todos.filter(todo => !todo.finished))
      case 'Completed':
        return observable(this.todos.filter(todo => todo.finished))
      case 'All':
      default:
        return this.todos
    }
  }
}

decorate(Store, {
  todos: observable,
  filter: observable,
  createTodo: action,
  removeTodo: action,
  filterTodos: action,
  left: computed,
  filteredTodos: computed,
})

export default Store