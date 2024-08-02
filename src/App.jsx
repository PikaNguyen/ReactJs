import TodoAddNew from './components/todo/TodoAddNew'
import TodoDisplayData from './components/todo/TodoDisplayData'
import './components/todo/todo.css'
import imgUploadFromUser from './assets/wl-op-26se.jpg'
import { useState } from 'react'

const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "KhaBanh" },
    { id: 2, name: "Dan choi" }
  ])
  const parent = "Parent property"
  const age = 100
  const address = {
    provine: "lam đồng",
    city: "đà lạt"
  }
  const addNewTodo = (param) => {
    const newObjectThree = {
      id: crypto.randomUUID(),// New Guid
      name: param
    }
    setTodoList([...todoList, newObjectThree])
  }

  //object{key:value}
  return (
    <div className="todo-container">
      <div className="todo-title">Todo list </div>
      <TodoAddNew
        addNewTodo={addNewTodo}
      />
      <TodoDisplayData
        name={parent}
        age={age}
        address={address}
        todoList={todoList}
      />
      <div className='todo-image'>
        <img src={imgUploadFromUser} className='img-upload' />
      </div>
    </div>

  )
}

export default App