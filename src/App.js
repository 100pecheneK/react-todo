import React, {useEffect, useState} from 'react'
import TodoList from './components/TodoList'
import Context from './context'
import Loader from './components/Loader'
import Modal from './components/Modal'

const AddTodo = React.lazy(() => import('./components/AddTodo'))

const App = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(r => r.json())
      .then(data => {
        setTimeout(() => {
          setTodos(data)
          setLoading(false)
        }, 2000)
      })
  }, [])

  const toggleTodo = id => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }
  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const onCreate = title => {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }
  return (
    <Context.Provider value={{removeTodo, toggleTodo}}>
      <div className="wrapper">
        <h1>React tutorial</h1>
        <Modal/>
        <React.Suspense fallback={<Loader/>}>
          <AddTodo onCreate={onCreate}/>
        </React.Suspense>

        {loading ? <Loader/> :
          <TodoList todos={todos}/>
        }
      </div>
    </Context.Provider>
  )
}

export default App
