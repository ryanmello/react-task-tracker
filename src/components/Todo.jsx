import './Todo.css'

function Todo({ title })  {
    
    function deleteTodo(id) {
        console.log("delete todo", title)
    }

    return (
        <div className="todo">
            <p>{ title }</p>
            <button onClick={() => deleteTodo()}>Delete</button>
        </div>
    )
}

export default Todo