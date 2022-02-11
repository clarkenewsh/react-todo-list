import ToDoItem from "./ToDoItem";

const ToDoList = ( {toDoItems, deleteHandler, changeHandler, toggleComplete} ) => {
    return (
        <div>
            {toDoItems.map((todo, index) => {
            //    <ToDoItem style={{color: toggleComplete ? '#000' : '#c3c3c3' }} key={index} todo={todo} deleteHandler={deleteHandler} changeHandler={changeHandler} toggleComplete={toggleComplete} />
                return (
                    <div className="toDoItem" key={index}>
                        <p style={{color: toggleComplete ? '#000' : '#c3c3c3' }}>{todo}</p>
                        <input type='checkbox' onClick={(e) => changeHandler(e.target.value, index)}></input>
                        <button onClick={() => deleteHandler(index)}>delete</button>
                    </div>
                   )  
            })}  
        </div>
    )
};

export default ToDoList;