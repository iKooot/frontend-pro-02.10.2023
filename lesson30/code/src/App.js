import React, { Fragment } from "react";
import { v4 as uuidv4 } from 'uuid';
import { TaskList } from "./components";
import "./App.css";

class App extends React.Component {
  state = {
    taskList: [],
    newTask: "",
    showTasks: false,
    validTask: null,
  };

  showTasksHandler() {
    this.setState(() => ({
      showTasks: true,
    }));
  }

  closeTasksHandler() {
    this.setState(() => ({
      showTasks: false,
    }));
  }

  setTaskValueHandler(e) {
    this.setState(() => ({
      newTask: e.target.value,
      validTask: e.target.value !== "",
    }));
  }

  submitTaskHandler(e) {
    e.preventDefault();
    this.setState((prevState) => {
      const newTask = {
        id: uuidv4(),
        task: prevState.newTask,
      };

      return {
        taskList: [...prevState.taskList, newTask],
        newTask: "",
        validTask: null,
      };
    });
  }

  removeTaskHandler(id) {
    this.setState((state) => {
      const newTaskList = state.taskList.filter(({ id: _id }) => _id !== id);
      return {
        taskList: newTaskList,
        showTasks: Boolean(newTaskList.length),
      };
    });
  }
  render() {
    const { taskList, newTask, showTasks, validTask } = this.state;
    return (
      <div className="App">
        <div className="form-group">
          <h1>Tasks</h1>
          <form className="form" onSubmit={this.submitTaskHandler.bind(this)}>
            <div className="input-container">
              <div className="input-group">
                <label htmlFor="task">Enter task</label>
                <input
                  id="task"
                  value={newTask}
                  onChange={this.setTaskValueHandler.bind(this)}
                />
              </div>
              {validTask === false && (
                <p className="error-message">Please enter your task</p>
              )}
            </div>
            <button type="submit" disabled={!validTask}>
              Add Task
            </button>
          </form>
        </div>
        {taskList.length && !showTasks ? (
          <button
            className="show-task-btn"
            onClick={this.showTasksHandler.bind(this)}
          >
            Show Tasks
          </button>
        ) : null}
        {showTasks && (
          <Fragment>
            <TaskList
              list={taskList}
              onRemove={this.removeTaskHandler.bind(this)}
            />
            <button onClick={this.closeTasksHandler.bind(this)}>
              Close Tasks list
            </button>
          </Fragment>
        )}
      </div>
    );
  }
}

export default App;
