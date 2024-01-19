import React from "react";

export class Button extends React.Component {
  render() {
    const { title, onClick } = this.props;

    function clickHandler() {
      console.log("click in Button");
      onClick('apple');
    }
    return <button onClick={clickHandler}>{title}</button>;
  }
}
