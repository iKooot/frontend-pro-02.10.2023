import React from "react";
import { Header } from "./components";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDate: false,
    };
  }
  isOpenHandler = () => {
    this.setState((state) => {
      console.log(state);
      return { showDate: !state.showDate };
    });
  };
  render() {
    const { showDate } = this.state;
    const styles = {
      fontWeight: 300,
      color: "#00faff",
    };

    const par = React.createElement("p", null, "Some text");

    const list = ["Serhii", "Vitalii", "Oksana"];

    return (
      <div className="App">
        <Header />
        <h1 id={Math.round(Math.random() * 100).toString()} style={styles}>
          Hello world
        </h1>
        {par}
        {"text"}
        {12345}
        {null}
        {/*{{}} // Error*/}
        <ul>
          {list.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
        <button onClick={this.isOpenHandler}>Click me</button>
        {showDate && <div>{new Date().toISOString()}</div>}
      </div>
    );
  }
}

export default App;
