import React from "react";
import {
  ComponentDidUpdate,
  ComponentWillUnmount,
  ErrorBoundary,
    PureComponent
} from "./components";
import {CreateRef} from "./components/CreateRef/CreateRef";

const ButtonComponent = () => {
  throw Error("error!");
  return <></>;
};
class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log("App constructor called");
    // this.state = {}
    // console.log('App constructor state', this.state)
  }

  state = {
    users: [],
    title: "Default",
    show: false,
  };

  componentDidMount() {
    // console.log("App component did mount");
    // const root = document.getElementById("root");
    // console.log(root);
    // root.style.background = "#333";

    const getUsers = async () => {
      const resp = await fetch("https://reqres.in/api/users");
      const { data } = await resp.json();

      // this.setState({ users: data });
    };

    try {
      getUsers();
    } catch (e) {
      console.error(e);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log("App shouldComponentUpdate => ", nextProps, nextState);

    return true;
  }

  changeTitleHandler = (e) => {
    this.setState({ title: e.target.value });
  };

  render() {
    // console.log("App render");
    return (
      <div>
        {this.state.users.map(({ first_name }) => (
          <div>
            <p>{first_name}</p>
          </div>
        ))}
        <div>
          <input type="text" onChange={this.changeTitleHandler} />
          <ComponentDidUpdate title={this.state.title} />
        </div>
        <div>
          <button
            onClick={() => {
              this.setState((state) => ({ show: !state.show }));
            }}
          >
            Toggle
          </button>
          {this.state.show && <ComponentWillUnmount />}
        </div>
        <div>
          {false && <ButtonComponent />}
          {/*<ErrorBoundary fallback={<p>Ups something went wrong!</p>}>*/}
          {/*  <ButtonComponent />*/}
          {/*</ErrorBoundary>*/}
        </div>
        <div>
          <PureComponent title={this.state.title}/>
        </div>
        <div>
          <CreateRef/>
        </div>
      </div>
    );
  }
}
export default App;
