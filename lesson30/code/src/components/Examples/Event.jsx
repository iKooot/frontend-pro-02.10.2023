import React from "react";

export class Event extends React.Component {
    state = {
        value: ''
    }

    inputHandler(e) {
        this.setState({value: e.target.value})
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.inputHandler.bind(this)}/>
            </div>
        )
    }
}