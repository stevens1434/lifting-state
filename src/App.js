import React, { Component } from 'react';
import logo from './logo.svg';
import $ from "jquery";
import bodyParser from 'body-parser';
import _ from 'lodash';
import './App.css';
import TaskList from './TaskList';
import TaskAdder from './TaskAdder';

class App extends Component {
  constructor(props) {
    super(props);

    // The Parent holds the following in its state:
    //  taskArray: All the todo list items
    //  editMode: Flag whether we want to edit item text
    //  editId: The data-key index representing the item in the taskArray
    this.state = {
      taskArray: ['Buy food', 'Walk dogs', 'Make React lessons', 'Subvert the dominant paradigm'],
      dateArray: ['10/15/2017', '10/15/2017', '10/15/2017', '10/15/2017'],
      editMode: false,
      editId: '',
      editDate: '',
      newDate: ''
    };

    // Binders required to make sure 'this' stays on this class
    this.addNewTask = this.addNewTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.editDate = this.editDate.bind(this);
    this.toggleEditDate = this.toggleEditDate.bind(this);
  }

  // Method called by TaskAdder when the Add button is clicked
  // Passed in via props
  addNewTask(taskName) { //-----3-----send taskName from TaskAdder.js component
    var temp = this.state.taskArray; //temp Arr
    temp.push(taskName); //add taskName to temp ARr
    // These this.setState calls require those bind() lines above
    this.setState({taskArray: temp}); //re render <div>s below with new info
  }

  // Method called by TaskList when the Done link is clicked
  // Passed in via props
  removeTask(taskId) {
    var temp = this.state.taskArray;
    temp.splice(taskId, 1);
    this.setState({taskArray: temp})
  }

  // Method called by TaskList when the Edit link is clicked
  // Passed in via props
  toggleEditMode(taskId) {
    console.log("App::toggleEditMode");
    this.setState({
      editMode: true,
      editId: taskId
    });
  }

  // Method called by TaskList when the Save Changes link is clicked
  // Passed in via props
  editTask(taskId, value) {
    // console.log("in the editTask");
    var tempArr = this.state.taskArray;
    tempArr[taskId] = value;
    this.setState({
      taskArray: tempArr,
      editMode: false,
      editId: ''
    });
  }

  toggleEditDate(taskId) {
    console.log("App::toggleEditMode");
    console.log(this.state.date)
    this.setState({
      editMode: true,
      editId: taskId
    });
  }

  editDate(key, value) {
    var tempArr = this.state.dateArray;
    tempArr[key] = value;
    console.log("____tempArr in editDate()" + tempArr)
    this.setState({
      dateArray: tempArr,
      editMode: false,
      editDate: ''
    });
  }

  render() {
    return ( //-----4----- re-render after the end of addNewTask()
      <div className="App">  //-----0-----passes addNewTask() to TaskAdder component
        <TaskAdder className="TaskAdder" addNewTask={this.addNewTask}/>
        <TaskList editMode={this.state.editMode}
                  editId={this.state.editId}
                  toggleEditMode={this.toggleEditMode}
                  editTask={this.editTask}
                  removeTask={this.removeTask}
                  tasks={this.state.taskArray}
                  datArray={this.state.dateArray}
                  toggleEditDate={this.toggleEditDate}
                  editDate={this.editDate} />
      </div>
    );
  }
}

export default App;
