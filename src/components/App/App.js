import React, { Component } from "react"
import { hot } from 'react-hot-loader'
import TodoHeader from '../TodoHeader'
import TodoList from '../TodoList'
import TodoFooter from '../TodoFooter'
import styles from './App.module.css'

class App extends Component {  
  render() {

    return (
      <div className={styles.app}>
        <TodoHeader />
        <TodoList />
        <TodoFooter />
      </div>
    )
  }
}

export default hot(module)(App)