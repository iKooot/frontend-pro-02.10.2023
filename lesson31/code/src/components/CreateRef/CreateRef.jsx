import React, {createRef} from "react";

export class CreateRef extends React.Component {
    inputRef = createRef();
    render() {
        console.log(this.inputRef)
        // this.inputRef.current = 2;
        // console.log(this.inputRef)
        return (
            <div>
                <input ref={this.inputRef} type="text" onChange={() => {
                    console.log('this ref', this.inputRef)
                    console.log('this { current } ', this.inputRef.current)
                    console.log('input value', this.inputRef.current.value)
                }}/>
            </div>
        )
    }
}