import React from "react";
import PropTypes from "prop-types";

export class CTimer extends React.Component {
  state = {
    time: new Date()
  }
  static propTypes = {
    text: PropTypes.string.isRequired,
    isBoolean: PropTypes.bool.isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {
    text: "Hello C-Timer",
    isBoolean: true,
  }

  tick() {
    this.setState({time: new Date()})
  }
  render() {
    const { time } = this.state;
    const { children, text, isBoolean } = this.props;

    setInterval(this.tick.bind(this), 2000)

    return <div>
      <p>{text}</p>
      { isBoolean && `This is boolean prop = ${isBoolean}` }
      <p>This time ${time.toISOString()}</p>
      {children}
    </div>;
  }
}
