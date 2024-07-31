import TodoAddNew from './components/todo/TodoAddNew'
import TodoDisplayData from './components/todo/TodoDisplayData'
import './components/todo/todo.css'
import imgUploadFromUser from './assets/wl-op-26se.jpg'

const App = () => {
  return (
    <div className="todo-container">
      <div className="todo-title">Todo list </div>
      <TodoAddNew />
      <TodoDisplayData />
      <div className='todo-image'>
        <img src={imgUploadFromUser} className='img-upload' />
      </div>
    </div>

  )
}

export default App