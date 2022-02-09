
import './App.css';
import { useState } from 'react';
import ToDoList from './components/ToDoList';

// 1 - Form component using controlled inputs and onSubmitHandler function to submit a new to do
// 2 - DONE -ToDoList component which will map over todo array and output each todo within the ToDoItem component
// 3 - DONE - ToDoitem to display single to do items
// 4 - Component helpers functions - handleSubmit, handleOnChange, handleDelete (from array index), handleComplete
// 5 - useState to store the list of todo within array
// 6 - Spread operator to update the state of the todo array
// 7 - Conditionalrendering - if not todos dont 
// 8 - event handlers - Form = onChange & onSubmit, Onclick (delete & complete)

function App() {

  const [toDoItems, setToDoItems] = useState([]);
  const [completed, setCompleted] = useState(true);

  const [inputValue, setInputValue] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log('submitted');
    // spread over & copy toDoItems arr & push input value on to newToDoItems
    let newToDoItems = [...toDoItems];
    newToDoItems.push(inputValue);
    setToDoItems(newToDoItems);

  }

  const deleteHandler = (index) => {
    // console.log('clicked delete');
    let newToDoItems = [...toDoItems];
    newToDoItems.splice(index, 1);
    setToDoItems(newToDoItems);
    
  }

  const changeHandler = (index) => {
    console.log('clicked complete');
    // let newToDoItems = [...toDoItems];
    setCompleted(!completed);
    console.log(completed);
  }

  return (
    <>
      <main>
        <div id="todoList">
        <h1>All Tasks</h1>
          <form onSubmit={submitHandler}>
                <input 
                  type="text"
                  placeholder="Add new todo"
                  required
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}>
                </input>
                <button>Submit</button>
          </form>
          <ToDoList deleteHandler={deleteHandler} changeHandler={changeHandler} toDoItems={ toDoItems } completed={completed} />
        </div>
       
      </main>
    </>
  )
}

export default App;
