import React from "react";

export class CRef extends React.Component {
    renderCounter = 0;
    intervalID = null;

    state = {
        counter: 0
    }

    componentDidMount() {
        this.intervalID = setInterval(() => {
            console.log('interval')
            this.setState(prev => ({counter: prev.counter + 1}))
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    render() {
        this.renderCounter += 1;
        return (
            <div>
                <p>This component rendered {this.renderCounter} times</p>
                <p>This component counter is {this.state.counter}</p>
            </div>
        )
    }
}