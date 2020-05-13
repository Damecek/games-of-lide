import React, { Component } from 'react'
import '../renderer.css';

import Line from '../../cmpLine/line';

export class Renderer2D extends Component {
    constructor(props) {
        super(props);
        this.state = {setSize: (100/this.props.obj.length).toFixed(20) + '%'};
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <div className="col-8 justify-content-center">
                {this.props.obj.map((line, i)=>{
                    return <Line size={this.state.setSize} value={[].concat(line)} key={i} />
                })}
            </div>
        )
    }
}

export default Renderer2D
