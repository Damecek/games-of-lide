import React, { Component } from 'react'
import '../renderer.css';

import Line from '../../cmpLine/line';
export class Renderer1D extends Component {
    constructor(props) {
        super(props);
        this.state = {history: []};
    }

    static getDerivedStateFromProps(props, state) {
        return {history: state.history.concat([props.obj])};
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <div className="w-100 justify-content-center">
                {this.state.history.map((line, i)=>{
                    return (
                            <Line length={line.length} value={line} key={i} />
                    )
                })}
            </div>
        )
    }
}

export default Renderer1D
