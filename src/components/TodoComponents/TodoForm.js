import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      buttonIndex: 0
    }
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.text) {
      this.props.addTodo(event, this.state.text)
      this.setState({...this.state, text: ''})
      event.target.reset(); // Clear form on submit
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="text" onChange={this.handleChange} placeholder='Something needing doing...'></input>
        <button>Add Todo</button>
      </form>
    )
  };
}

export default TodoForm;
