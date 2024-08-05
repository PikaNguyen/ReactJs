import { useState } from "react"


const TodoAddNew = (props) => {

    //useState hook
    // [value - function set value]
    const [valueInput, setValueInput] = useState("Something")

    const { addNewTodo } = props
    //addNewTodo("PARAM Input form user")

    const handleClick = () => {
        addNewTodo(valueInput)
        console.log("Check value input", valueInput)
        setValueInput("")
    }

    const printHandleOnChange = (name) => {
        setValueInput(name)
    }

    return (
        <div>
            <input
                type="text"
                //want to pass param into func --> Need to using arrow func
                onChange={(event) => printHandleOnChange(event.target.value)}
                value={valueInput}

                placeholder='Enter your task' />
            <button className='button-add'
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>
                My text input is: {valueInput}
            </div>
        </div>
    )
}

export default TodoAddNew