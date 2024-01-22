import React from "react";

export class ComponentDidUpdate extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // console.log("Component shouldComponentUpdate => ", nextProps, nextState);

    return true;
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log("ComponentDidUpdate prevState => ", prevState);
    // console.log("ComponentDidUpdate prevProps => ", prevProps);
    // const root = document.getElementById('root');
    // console.log('Root from  Component', root)
  }

  componentDidMount() {
    // console.log("Component component did mount");
  }
  render() {
    // console.log('Component render')
    const { title } = this.props;
    return <div>title = {title}</div>;
  }
}
