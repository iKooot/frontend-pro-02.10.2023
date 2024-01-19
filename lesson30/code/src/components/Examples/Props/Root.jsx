import React from "react";
import {Button} from "./Button";

export class Root extends React.Component {
    clickHandler = (param) => {
        console.log('click', param)
    }
    render() {
        const title = 'Click me'
        return (
            <div>
                <h3>i am Root</h3>
                <Button title={title} onClick={this.clickHandler}/>
            </div>
        )
    }
}