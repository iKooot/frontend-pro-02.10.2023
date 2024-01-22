import React from "react";

export class PureComponent extends React.PureComponent {
// export class PureComponent extends React.Component {
    render() {
        console.log('PureComponent render');
        return (
            <p>Hello Pure Component {this.props.title}</p>
        )
    }
}