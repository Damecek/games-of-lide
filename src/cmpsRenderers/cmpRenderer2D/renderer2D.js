import React, { Component } from 'react'
import '../renderer.css';

import Square from '../../cmpSquare/square';

export class Renderer2D extends Component {
    render() {
        return (
            <div className="col-8 justify-content-center">
                {this.props.obj.map((line, i)=>{
                    return (
                        <div key={i} className="reset-line-height">
                            {line.map((item, i)=>{
                                return <Square length={this.props.obj.length} key={i} value={item} />
                            })}<br/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Renderer2D
