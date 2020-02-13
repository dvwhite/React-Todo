import React from 'react';

const Todo = props => {
  return (
    <div className={`todo${props.data.completed ? " completed" : ""}`} onClick={() => props.toggleCompleted(props.data.id)}>
      <p>{props.data.task}</p>
      {props.data.completed ? 
        <div className='checkmark-wrapper'>
          <div className='checkmark'>&#10003;</div>
        </div> 
        : null}
    </div>
  )
}

export default Todo;