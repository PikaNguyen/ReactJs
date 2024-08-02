

const TodoDisplayData = (props) => {
    //props là 1 object {}

    const { age, name } = props
    console.log(">> checking props: ", props)
    return (
        <div className='todo-data'>
            <div>Learning Reactjs {name}</div>
            <div>Learning Oibanoi: Address: {props.name}</div>
            <div>Learning 222 -- Age: {age}</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoDisplayData