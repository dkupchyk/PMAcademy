import React from 'react';

import './InputField.css';

const INVALID_INPUT = 'Enter a valid input.';

class InputField extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputText: this.props.textValue,
            isInvalidInput: false,
        }

        this.changeText = this.changeText.bind(this);
        this.execute = this.execute.bind(this);
    }

    execute() {
        if (!this.state.inputText) {
            return this.setState(() => ({
                isInvalidInput: true
            }));
        }

        this.props.buttonFunction(this.state.inputText);
    }

    changeText(event) {
        this.setState(() => ({
            inputText: event.target.value
        }))
    }

    render() {
        const {execute, changeText} = this;
        const {isInvalidInput, inputText} = this.state;
        const {buttonText, placeholder} = this.props;

        return <div>
            <div className="input-container">
                <input type="text"
                       onChange={changeText}
                       placeholder={placeholder ? placeholder : "Enter text..."}
                       value={inputText}/>
                <button onClick={execute}>{buttonText}</button>
            </div>
            <p className="error">{isInvalidInput ? INVALID_INPUT : ''}</p>
        </div>;
    }
}

export default InputField;
