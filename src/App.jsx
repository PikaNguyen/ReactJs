import TodoAddNew from './components/todo/TodoAddNew'
import TodoDisplayData from './components/todo/TodoDisplayData'
import './components/todo/todo.css'
import imgUploadFromUser from './assets/wl-op-26se.jpg'

const App = () => {

  const parent = "Parent property"
  const age = 100
  const address = {
    provine: "lam đồng",
    city: "đà lạt"
  }
  const addNewTodo = (param) => {
    alert(`Declare alert - My value's input: ${param}- Alert: When entering web this pop up show message`)


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

      />
      <div className='todo-image'>
        <img src={imgUploadFromUser} className='img-upload' />
      </div>
    </div>

  )
}

export default App