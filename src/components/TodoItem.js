import React, {useContext} from "react"
import PropTypes from "prop-types"
import Context from '../context'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '.5rem'
  },
  input: {
    marginRight: '1rem'
  }
}

const TodoItem = ({todo, index}) => {
  const {toggleTodo, removeTodo} = useContext(Context)
  return (
    <li style={styles.li}>
      <span className={todo.completed ? 'done' : ''}>
        <input
          checked={todo.completed}
          type="checkbox" style={styles.input} onChange={toggleTodo.bind(null, todo.id)}/>
        <strong>{index}</strong>{' '}
        {todo.title}
      </span>
      <button className='btn red' onClick={removeTodo.bind(null, todo.id)}>Delete</button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}

export default TodoItem
