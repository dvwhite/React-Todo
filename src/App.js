import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.scss';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Walk the dog',
    id: 1528817084562,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  toggleCompleted = todoId => {

    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo?.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })
  }

  clearCompleted = event => {
    event.preventDefault();

    this.setState({
      todos: [...todos.filter(todo => !todo.completed)]
    })
  }

  addTodo = (event, todo) => {
    event.preventDefault();

    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    }

    this.setState({...this.state.todos, newTodo})
  }
  
  render() {
    return (
      <div>
        <h2>My Todo List</h2>
        <TodoList todos={this.state.todos} 
          toggleCompleted={this.toggleCompleted}
          newTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
