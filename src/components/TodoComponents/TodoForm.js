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

    this.props.addTodo(event, this.state.text)
    event.target.reset(); // Clear form on submit
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="text" onChange={this.handleChange}></input>
        <button>Add Item</button>
      </form>
    )
  }
}

export default TodoForm;
