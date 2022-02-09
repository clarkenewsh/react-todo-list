const ToDoItem = ( {todo, deleteHandler, changeHandler, index, completed} ) => {
    return (
        <div className="toDoItem">
            <p>{todo}</p> 
            <input 
                type='checkbox'
                key={index} onClick={() => changeHandler(index)}
            >
            </input>
            <button 
                key={index} 
                onClick={() => deleteHandler(index)}>
                delete
            </button>
            {/* <button key={index} onClick={() => changeHandler(index)}>edit</button> */}
        </div>
    )
};

export default ToDoItem;