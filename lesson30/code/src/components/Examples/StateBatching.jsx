import React from "react";

export class StateBatching extends React.Component {
  state = {
    number: 0,
    string: ''
  };
  increment = () => {
    // this.setState({number: this.state.number + 1})
    // this.setState({number: this.state.number + 1})
    // this.setState({number: this.state.number + 1})
    // this.setState({number: this.state.number + 1})
    // this.setState({number: this.state.number + 1})
    // this.setState({number: this.state.number + 1})
    this.setState((state) => {
      console.log(state)
      return { number: state.number + 1 }
    });
    this.setState((state) => ({ number: state.number + 1 }));
    this.setState((state) => ({ number: state.number + 1 }));
    this.setState((state) => ({ number: state.number + 1 }));
    this.setState((state) => ({ number: state.number + 1 }));
    this.setState((state) => ({ number: state.number + 1 }));
  };
  render() {
    console.log('render')
    return (
      <div>
        <p>Number: {this.state.number.toString()}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
