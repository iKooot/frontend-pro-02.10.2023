import React from "react";

export class ComponentWillUnmount extends React.Component {
    constructor(props) {
        super(props);
        console.log('Toggle constructor')
    }
    componentWillUnmount() {
        console.log('Toggle unmount');
    }

    componentDidMount() {
        console.log('Toggle mount');
    }
    render() {
        console.log('Toggle render')
        return (
            <div>
                <p>hello unmount</p>
            </div>
        )
    }
}