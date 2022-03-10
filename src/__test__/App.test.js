import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

// app startup
test('app renders header at startup', () => {
  render(<App />);
  const element = screen.getByText("All Tasks");
  expect(element).toBeInTheDocument();
});


describe('input element', () => {
  // Input element displayed
  test("input element is displayed", () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Add new todo');
    expect(input).toBeInTheDocument();
  });

  // user input text displayed when adding task
  test("input text is displayed", () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Add new todo');
    // target the input value text added by user - i.e target.value
    fireEvent.change(input, { target: {value: "learn react"}})
    expect(input.value).toBe("learn react");
  });

})


// Submit task button tests
describe("submit button", () => {
  // submission button adds task (fireEvent) 
  test("renders submit", () => {
    render(<App />);
    const button = screen.getByText('Submit');
    expect(button).toBeInTheDocument();
  });

   // submission button adds task (fireEvent) 
   test("submit button adds task", () => {
    render(<App />);
    const button = screen.getByText('Submit');
    fireEvent.click(button);
    const deleteButton = screen.getByText('delete');
    expect(deleteButton).toBeInTheDocument();
  });
    // submission button adds & displays multiple tasks (fireEvent) 
    test("submit button adds & displays multiple tasks", () => {
    render(<App />);
    const button = screen.getByText('Submit');
    fireEvent.click(button);
    fireEvent.click(button);
    const deleteButton = screen.getAllByText('delete');
    expect(deleteButton.length).toBe(2);
  });
})


// // Delete button tests
describe('delete button', () => {
  // deletion of an todo item removed the element so it is no longer displayed to the user
  test('renders delete', () => {
    render(<App />);
    const button = screen.getByText('Submit');
    fireEvent.click(button);
    const deleteButton = screen.getByText('delete');
    expect(deleteButton).toBeInTheDocument();
  });

  test('delete button removes todo item', () => {
    render(<App />);
    const button = screen.getByText('Submit');
    fireEvent.click(button);
    const deleteButton = screen.getByText('delete');
    fireEvent.click(deleteButton);
    // expect(deleteButton);
  })
})


