import TodoAddNew from './TodoAddNew'
import TodoDisplayData from './TodoDisplayData'
import './todo.css'
import imgUploadFromUser from '../../assets/wl-op-26se.jpg'
import { useState } from 'react'

//object{key:value}
const TodoApp = () => {
    const [todoList, setTodoList] = useState([
        //{ id: 1, name: "KhaBanh" },
        //{ id: 2, name: "Dan choi" }
    ])
    const addNewTodo = (param) => {
        const newObjectThree = {
            id: crypto.randomUUID(),// New Guid
            name: param
        }
        setTodoList([...todoList, newObjectThree])
    }

    const deleteItem = (id) => {
        const result = todoList.filter((item) => item.id !== id)
        setTodoList(result)

    }

    return (
        <div className="todo-container">
            <div className="todo-title">Todo list </div>
            <TodoAddNew
                addNewTodo={addNewTodo}
            />
            {todoList.length > 0 ?
                <TodoDisplayData
                    todoList={todoList}
                    deleteItem={deleteItem}
                />
                :
                <div className='todo-image'>
                    <img src={imgUploadFromUser} className='img-upload' />
                </div>
            }

        </div>
    )
}

export default TodoApp