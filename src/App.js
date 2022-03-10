import './App.css';
import { useState } from 'react';
import ToDoList from './components/ToDoList';


// 1 - DONE - Form component using controlled inputs and onSubmitHandler function to submit a new to do
// 2 - DONE -ToDoList component which will map over todo array and output each todo within the ToDoItem component
// 3 - DONE - ToDoitem to display single to do items
// 4 - DONE - Component helpers functions - handleSubmit, handleOnChange, handleDelete (from array index), handleComplete
// 5 - DONE - useState to store the list of todo within array
// 6 - DONE - Spread operator to update the state of the todo array
// 7 - Conditional rendering - style when completing a todo
// 8 - DONE - event handlers - Form = onChange & onSubmit, Onclick (delete & complete)

const App = () => {

  const [toDoItems, setToDoItems] = useState([]);
  const [toggleComplete, setToggleComplete] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log('submitted');
    // spread over & copy toDoItems arr & push input value on to newToDoItems
    let newToDoItems = [...toDoItems];
    newToDoItems.push(inputValue);
    setToDoItems(newToDoItems);
    setInputValue('');

  }

  const deleteHandler = (index) => {
    console.log('delete', index);
    let newToDoItems = [...toDoItems];
    newToDoItems.splice(index,1);
    setToDoItems(newToDoItems);
  }


  const changeHandler = (index, todo) => {
    console.log('change', index);
    // const newTodos = [...toDoItems];
    // newTodos[index] = todo;
    // setToDoItems(newTodos);
    
    setToggleComplete(!toggleComplete);
    console.log(toggleComplete, index);

  }

  let date = new Date();

  return (
    <>
      <main>
        <div id="todoList">
          <div id="header">
            <h1>All Tasks</h1>
            <span id="date">{date.toDateString()}</span>
          </div>
          <form onSubmit={submitHandler}>
                <input 
                  type="text"
                  placeholder="Add new todo"
                  required
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}>
                </input>
                <button className="btn-submit">Submit</button>
          </form>
          <ToDoList deleteHandler={deleteHandler} changeHandler={changeHandler} toDoItems={ toDoItems } toggleComplete={toggleComplete} />
        </div>
       
      </main>
    </>
  )
}

export default App;
