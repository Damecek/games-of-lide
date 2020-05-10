import React, { Component } from 'react'

import Slider from '../cmpSlider/slider';
import ButtonGroup from '../cmpsButtons/cmpBtnGroup/btnGroup';

export class Setup extends Component {
    constructor(props) {
        super(props);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleSizeChange = this.handleSizeChange.bind(this);
    }

    handleTypeChange(type) {
        this.props.onTypeChange(type);
    }

    handleSizeChange(size) {
        this.props.onSizeChange(size);
    }

    render() {
        return (
            <div>
                <div className="row justify-content-center my-1">
                    <div className="col-2">
                        <Slider onSizeChange={this.handleSizeChange} />
                    </div>
                </div>
                <div className="row justify-content-center my-1">
                    <ButtonGroup onTypeChange={this.handleTypeChange} />
                </div>
            </div>
        )
    }
}

export default Setup
