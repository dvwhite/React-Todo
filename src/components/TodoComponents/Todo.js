import React from 'react';

const Todo = props => {
  console.log(props);
  return (
    <div className={`todo${props.data.completed ? " completed" : ""}`} onClick={() => props.toggleCompleted(props.data.id)}>
      <p>{props.data.task}</p>
    </div>
  )
}

export default Todo;