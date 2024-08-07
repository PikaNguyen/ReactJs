const TodoDisplayData = (props) => {
    //props là 1 object {}

    const { todoList, deleteItem } = props
    console.log(">> checking props: ", todoList)
    const handleDeleteItem = (id) => {
        deleteItem(id)
    }

    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                console.log(">>> Check param map", item, index)
                return (
                    <div className="todo-item" key={item.id}>
                        <div>
                            {item.name}
                        </div>
                        <button
                            onClick={() => handleDeleteItem(item.id)}
                        >Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoDisplayData