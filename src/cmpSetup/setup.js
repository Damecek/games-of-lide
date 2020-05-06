import React, { Component } from 'react'

import Slider from '../cmpSlider/slider';
import ButtonGroup from '../cmpBtnGroup/btnGroup';

export class Setup extends Component {
    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <ButtonGroup />
                </div>
                <div className="row justify-content-center">
                    <div className="col-2">
                        <Slider />
                    </div>
                </div>
            </div>
        )
    }
}

export default Setup
