

const TodoAddNew = (props) => {
    console.log(">>Check props Fuction: ", props)
    const { addNewTodo } = props
    //addNewTodo("PARAM Input form user")

    const handleClick = () => {
        alert("Click mee")
    }
    const printHandleOnChange = (name) => {
        console.log("Type input", name)
    }
    return (
        <div>
            <input type="text"
                //want to pass param into func --> Need to using arrow func
                onChange={(event) => printHandleOnChange(event.target.value)}

                placeholder='Enter your task' />
            <button className='button-add'
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
        </div>
    )
}

export default TodoAddNew