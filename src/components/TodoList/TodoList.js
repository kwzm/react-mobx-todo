import React, { Component } from "react"
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import TodoItem from '../TodoItem'
import styles from './TodoList.module.css'

class TodoList extends Component {
  static propTypes = {
    todos: ObservablePropTypes.observableArrayOf(ObservablePropTypes.observableObject).isRequired,
    removeTodo: PropTypes.func.isRequired,
  }

  render() {
    const { todos, removeTodo } = this.props
    
    return (
      <ul className={styles.TodoList}>
        { todos.map(todo => (
          <li key={todo.id} className={styles.todoItem}>
            <TodoItem todo={todo} />
            <span className={styles.delete} onClick={e => removeTodo(todo)}>x</span>
          </li>
        ))}
      </ul>
    )
  }
}

export default inject(stores => ({
  todos: stores.store.filteredTodos,
  removeTodo: stores.store.removeTodo,
}))(observer(TodoList))