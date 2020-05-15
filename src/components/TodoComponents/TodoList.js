import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className='todo-list'>
      <div>
        {props.todos?.map(todo => (
          <Todo key={todo.id} data={todo} toggleCompleted={props.toggleCompleted}/>
        ))}
        <button className='btn-clear' onClick={props.clearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  )
}

export default TodoList;