import React, { Component } from 'react';
import $ from "jquery";
import bodyParser from 'body-parser';
import _ from 'lodash';
import './App.css';

class TaskAdder extends Component {
  constructor(props) {
    super(props);
    // The only state this component needs is for the temporary
    // storage of the taskName when a user wants to add a new
    // task.
    this.state = {
      taskName: ''
    };

    // Binders for 'this'
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // This is the local function that handles the text box change event
  // It is required for the text input to render correctly
  handleChange(event) {
    this.setState({taskName: event.target.value});
  }
  // This is the local function that handles the ADD click event
  // It calls the method passed in from the parent, then updates local state
  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.taskName);
    event.preventDefault();
    this.props.addNewTask(this.state.taskName);
    this.setState({taskName: ''});
  }

  render() {
    return (
      <form className="form-style" onSubmit={this.handleSubmit}>
        <ul>
          <li>
            <input type="text" name="field1" value={this.state.taskName} onChange={this.handleChange} className="field-style field-split align-left" placeholder="New Task..." />
            <input type="date" name="field2" value={this.state.taskName} onChange={this.handleChange} className="field-style field-split align-right" placeholder="Due Date..." />
          </li>
          <li>
            <input type="submit" value="Add Task" />
          </li>
        </ul>
      </form>
    );
  }
}

export default TaskAdder;
