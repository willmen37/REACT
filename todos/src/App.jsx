import { useState } from 'react'
import './App.css'

function App() {

  let [todos, setTodos] = useState([])
  let [input, setInput] = useState('')
  let [listType, setListType] = useState('all')

  function handleChange(e) {
    setInput(e.target.value)
  }

  function handleClick() {
    let newTodo = {
      text: input,
      completed: false,
      id: crypto.randomUUID()
    }

    setTodos([...todos, newTodo])
    setInput("")
  }

  let filteredTodos;

  if (listType === 'complete') {
    filteredTodos = todos.filter(todo => todo.completed === true)
  } else if (listType === 'incomplete') {
    filteredTodos = todos.filter(todo => todo.completed === false)
  } else {
    filteredTodos = todos
  }

  function handleDelete(id) {
    const deleted = todos.filter((item)=> item.id !== id)
    setTodos(deleted)
  }

  return (
    <div>
      <h1>Todos ({listType})</h1>

      <>
        {filteredTodos.map(todo => {

          return (
            <div>
            
            < >
            <input key={todo.id} type='checkbox'/>
            {todo.text}
            <button onClick={()=> handleDelete(todo.id)}>X</button>
            </>
            
            </div>

          )
        })}
      </>

      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>

      <br /><br />

      <button onClick={() => setListType('all')}>All</button>
      <button onClick={() => setListType('complete')}>Completed</button>
      <button onClick={() => setListType('incomplete')}>Incomplete</button>
      
    </div>
  )
}

export default App
