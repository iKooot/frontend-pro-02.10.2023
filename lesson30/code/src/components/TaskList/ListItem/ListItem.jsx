import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';
import "./ListItem.css";

export class ListItem extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    removeTaskHandler: PropTypes.func.isRequired,
  };

  static defautProps = {
    id: uuidv4(),
    task: "List item",
    removeTaskHandler: () => {},
  };
  render() {
    const { id, task, removeTaskHandler, children } = this.props;
    return (
      <li className="list-item-container">
        <p>
          id = {id}, task = {task}
        </p>
        {children}
        <button
          onClick={() => {
            removeTaskHandler(id);
          }}
        >
          Remove task
        </button>
      </li>
    );
  }
}
