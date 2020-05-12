import React, { Component } from 'react'
import '../renderer.css';

import Square from '../../cmpSquare/square';

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
                        <div key={i} className="reset-line-height">
                            {line.map((item, i)=>{
                                return <Square length={this.props.obj.length} key={i} value={item} />
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Renderer1D
