import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.scss';
import TodoForm from './components/TodoComponents/TodoForm';
import {recoverStateFromStorage, storeStateInStorage} from './utils';

const todos = [
  {
    task: 'Learn C++',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Fix transistor radio',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Walk the flerken',
    id: 1528817084562,
    completed: false
  }
];

// Initial component state on first mount
const initialState = recoverStateFromStorage() || {todos}
console.log(initialState)

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  // Lifecycle method used to recover state from localStorage or 
  // default to a placeholder constant
  static getDerivedStateFromProps(props, state) {
    return recoverStateFromStorage() || {todos};
  }

  // Custom methods
  updateStateAndStorage(state) {
    this.setState(state);
    storeStateInStorage(state);
  }

  // Class methods
  // Toggles the completed value on the todo to true/false
  toggleCompleted = todoId => {

    const updatedState = {
      todos: this.state.todos?.map(todo => {
        if (todo?.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    }
    this.updateStateAndStorage(updatedState);
  }

  // Clears all completed tasks from the todo list
  clearCompleted = event => {
    event.preventDefault();

    const updatedState = {
      ...this.state,
      todos: [...this.state.todos.filter(todo => !todo.completed)]
    }
    this.updateStateAndStorage(updatedState);
  }

  // Adds a todo task to the todo list
  // The todo parameter is the task text only, the rest 
  // is initialized in this method
  addTodo = (event, todo) => {
    event.preventDefault();

    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    }
  
    const updatedState = {...this.state, todos: [...this.state.todos, newTodo]};
    this.updateStateAndStorage(updatedState);
  }
  
  render() {
    return (
      <div className='app'>
        <h1>Todo List</h1>
        <TodoForm 
          addTodo={this.addTodo}
        />
        <TodoList 
          todos={this.state.todos} 
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
          newTodo={this.addTodo}
        />
        <div class='footer'></div>
      </div>
    );
  }
}

export default App;
