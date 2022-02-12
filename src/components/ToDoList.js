
const ToDoList = ( {toDoItems, deleteHandler, changeHandler, toggleComplete} ) => {
    return (
        <div>
            {toDoItems.map((todo, index) => {
            //    <ToDoItem style={{color: toggleComplete ? '#000' : '#c3c3c3' }} key={index} todo={todo} deleteHandler={deleteHandler} changeHandler={changeHandler} toggleComplete={toggleComplete} />
                return (
                    <div className="toDoItem" key={index}>
                        {/* <p className={`${toggleComplete ? "complete" : ""}`}>{todo}</p> */}
                        <p>{todo}</p>
                        <input id='success-checkbox' type='checkbox' onClick={() => changeHandler(index)}></input>
                        <button onClick={() => deleteHandler(index)}>delete</button>
                    </div>
                   )  
            })}  
        </div>
    )
};

export default ToDoList;