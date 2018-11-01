import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import styles from './TodoFooter.module.css'

class TodoFooter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: props.filter,
    }
  }

  static propTypes = {
    left: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    filterTodos: PropTypes.func.isRequired,
  }

  handleClick = (action) => {
    this.setState({
      filter: action,
    })
    this.props.filterTodos(action)
  }

  render() {
    const { left } = this.props
    const { filter } = this.state
    const actions = ['All', 'Active', 'Completed']

    return (
      <footer className={styles.todoFooter}>
        <span>{left} item(s) left</span>
        <div className={styles.actions}>
          {
            actions.map(action => (
              <span
                className={filter === action ? styles.active : ''} 
                key={action} 
                onClick={() => this.handleClick(action)}
              >
                {action}
              </span>
            ))
          }
        </div>
      </footer>
    )
  }
}

export default inject(stores => ({
  left: stores.store.left,
  filter: stores.store.filter,
  filterTodos: stores.store.filterTodos,
}))(observer(TodoFooter))
