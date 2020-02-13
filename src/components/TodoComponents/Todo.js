import React from 'react';

const Todo = props => {
  return (
    <div className={`todo${props.data.completed ? " completed" : ""}`} onClick={() => props.toggleCompleted(props.data.id)}>
      <p>{props.data.task}</p>
      {props.data.completed ? <img src='./../../images/checkmark.svg' alt='green checkmark' className='checkmark'/> : null}
    </div>
  )
}

export default Todo;