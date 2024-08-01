

const TodoAddNew = (props) => {
    console.log(">>Check props Fuction: ", props)
    const { addNewTodo } = props
    addNewTodo("PARAM Input form user")
    return (
        <div>
            <input type="text" placeholder='Enter your task' />
            <button className='button-add'>Add</button>
        </div>
    )
}

export default TodoAddNew