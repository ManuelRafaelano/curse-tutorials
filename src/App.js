import React, { Component } from "react";
import "./App.css";
class ControlledInput extends Component {
  state = { text: "" };
  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value.toUpperCase();
    /*   console.log(`The name of the input : ${name}`);
    console.log(`The name of the input : ${value}`); */
    this.setState({
      text: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.text);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ margin: "3rem" }}>
        <input
          tpe="text"
          value={this.state.text}
          onChange={this.handleChange}
          name="firstname"
        />
        <button type="submit">Submit Here</button>
      </form>
    );
  }
}
class UncontrolledInput extends Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.firstname.value);
    console.log(this.email.value);
    console.log(this.text.textContent);
  };
  render() {
    return (
      <form style={{ margin: "3rem" }}>
        <input
          type="text"
          name="firstname"
          ref={orange => (this.firstname = orange)}
        />
        <input type="email" name="email" ref={input => (this.email = input)} />
        <button type="submit" onClick={this.handleSubmit}>
          Submit Here
        </button>
        <p ref={input => (this.text = input)}>hello world</p>
      </form>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <UncontrolledInput />
      </div>
    );
  }
}

export default App;
