import React, { Component } from 'react'
import '../renderer.css';

import Line from '../../cmpLine/line';

export class Renderer2D extends Component {
    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <div className="col-8 justify-content-center">
                {this.props.obj.map((line, i)=>{
                    return (
                        <Line length={line.length} value={line} key={i} />
                    )
                })}
            </div>
        )
    }
}

export default Renderer2D
