import React from "react";

export class ArrayRender extends React.Component {
  render() {
    return (
      <div className="App">
        <ul>
          {[
            { id: 1, title: "Hello 1" },
            { id: 2, title: "Hello 2" },
            { id: 3, title: "Hello 3" },
          ].map(({ title, id }) => (
            <li key={id}>
              <p>{title}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
