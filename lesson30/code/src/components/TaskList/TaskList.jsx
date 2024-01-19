import React from "react";
import PropTypes from "prop-types";
import { ListItem } from "./ListItem";
import "./TaskList.css";

export class TaskList extends React.Component {
  static propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          task: PropTypes.string.isRequired,
        })
    ).isRequired,
    onRemove: PropTypes.func.isRequired,
  };

  static defautProps = {
    list: [],
    onRemove: () => {},
  };
  render() {
    const { list, onRemove } = this.props;
    return (
        <>
          <h2 className="task-list-title">Tasks list</h2>
          <ul className="task-list-container">
            {list.map(({ id, task }) => (
                <ListItem
                    key={id}
                    task={task}
                    removeTaskHandler={onRemove}
                    id={id}
                />
            ))}
          </ul>
        </>
    );
  }
}
