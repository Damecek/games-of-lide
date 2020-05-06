import React, { Component } from 'react'

export class BtnGroup extends Component {
    render() {
        return (
            <div>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-secondary active">
                            <input type="radio" name="options" id="option1" checked /> 1-dim Life
                        </label>
                        <label className="btn btn-secondary">
                            <input type="radio" name="options" id="option2" /> 2-dim Life
                        </label>
                        <label className="btn btn-secondary">
                            <input type="radio" name="options" id="option3" /> 3-dim Life
                        </label>
                    </div>
            </div>
        )
    }
}

export default BtnGroup
