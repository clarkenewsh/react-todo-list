import './App.css';
import { useState } from 'react';
import ToDoList from './components/ToDoList';


// 1 - Form component using controlled inputs and onSubmitHandler function to submit a new to do
// 2 - DONE -ToDoList component which will map over todo array and output each todo within the ToDoItem component
// 3 - DONE - ToDoitem to display single to do items
// 4 - Component helpers functions - handleSubmit, handleOnChange, handleDelete (from array index), handleComplete
// 5 - useState to store the list of todo within array
// 6 - Spread operator to update the state of the todo array
// 7 - Conditional rendering - style when completing a todo
// 8 - event handlers - Form = onChange & onSubmit, Onclick (delete & complete)

const App = () => {

  const [toDoItems, setToDoItems] = useState([]);
  const [toggleComplete, setToggleComplete] = useState(true);
  const [complete, isComplete] = useState('');

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

  const changeHandler = (e, index) => {
    console.log('change', e, index);
    // let newToDoItems = [...toDoItems];
    setToggleComplete(!toggleComplete, index);
    console.log(toggleComplete, index);
    // if(toggleComplete[index] === true) {
    //   console.log('this is true ')
    // }
  }

  return (
    <>
      <main>
        <div id="todoList">
        <h1>All Tasks</h1>
        {Date()}
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
          <ToDoList deleteHandler={deleteHandler} changeHandler={changeHandler} toDoItems={ toDoItems } toggleComplete={toggleComplete} />
        </div>
       
      </main>
    </>
  )
}

export default App;
