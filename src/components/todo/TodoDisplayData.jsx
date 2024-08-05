const TodoDisplayData = (props) => {
    //props là 1 object {}

    const { todoList } = props
    console.log(">> checking props: ", todoList)
    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                console.log(">>> Check param map", item, index)
                return (
                    <div className="todo-item">
                        <div>
                            {item.name}
                        </div>
                        <button>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoDisplayData