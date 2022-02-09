import ToDoItem from "./ToDoItem";

const ToDoList = ( {toDoItems, deleteHandler, changeHandler, completed } ) => {
    return (
        <div>
            {toDoItems.map((todo, index) => {
                return <ToDoItem todo={todo} key={index} deleteHandler={deleteHandler} changeHandler={changeHandler} completed={completed} />
            })}  
        </div>
    )
};

export default ToDoList;