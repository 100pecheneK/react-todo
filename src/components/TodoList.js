import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import Context from '../context'

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}
const TodoList = ({todos, onToggle}) => {

  return (
    <ul style={styles.ul}>
      {todos.length ? todos.map((todo, i) => (
        <TodoItem todo={todo} index={i + 1} key={todo.id}/>
      )) : <h2>No todos here!</h2>}
    </ul>
  )
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default TodoList
