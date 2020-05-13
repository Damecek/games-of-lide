import React, { Component } from 'react'

import Square from '../cmpSquare/square';

export class Line extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.value.toString() !== this.props.value.toString();
    }

    render() {
        return (
            <div className="reset-line-height">
                {this.props.value.map((item, i)=>{
                    return <Square size={this.props.size} key={i} value={item} />
                })}<br/>
            </div>
        )
    }
}

export default Line
