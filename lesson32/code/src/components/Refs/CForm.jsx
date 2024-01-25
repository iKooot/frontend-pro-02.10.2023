import React, {createRef, forwardRef} from "react";

class Input extends React.Component {
    render() {
        const { label, name, inputRef } = this.props;
        return (
            <label>
                {label}
                <input ref={inputRef} type="text" name={name} />
            </label>
        );
    }
}

class _TextArea extends React.Component {
    render() {
        const { label, name, forwardedRef } = this.props;
        return (
            <label>
                {label}
                <textarea ref={forwardedRef} name={name} />
            </label>
        );
    }
}

const TextArea = forwardRef((props, ref) => {
    return <_TextArea {...props} forwardedRef={ref}/>;
})

export class CForm extends React.Component {
    formRef = null;
    firstNameRef = createRef();
    lastNameRef = createRef();
    commentRef = createRef();
    submitHandler = (e) => {
        e.preventDefault();
        const preparedData = {
            firstName: this.firstNameRef.current.value,
            lastName: this.lastNameRef.current.value,
            comment: this.commentRef.current.value,
        };
        console.log(preparedData);
    };

    resetFormHandler = () => {
        this.formRef.reset();
    };

    render() {
        return (
            <form ref={(node) => (this.formRef = node)} onSubmit={this.submitHandler}>
                <input ref={this.firstNameRef} type="text" name="firstName" />
                <Input ref={'hello ref'} label="Last name" name="lastName" inputRef={this.lastNameRef}/>
                <TextArea label="Comment" name="comment" ref={this.commentRef}/>
                <button type="submit">Submit</button>
                <button type="button" onClick={this.resetFormHandler}>
                    Reset
                </button>
            </form>
        );
    }
}
