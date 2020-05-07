import React, { Component } from 'react'

export class ButtonStep extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onClick(event);
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-secondary btn-block" 
                        onClick={this.handleClick} disabled={this.props.isDisabled}>
                    Step
                </button>
            </div>
        )
    }
}

export default ButtonStep
