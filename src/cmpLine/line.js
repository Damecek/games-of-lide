import React, { Component } from 'react'

import Square from '../cmpSquare/square';

export class Line extends Component {
    render() {
        return (
            <div className="reset-line-height">
                {this.props.value.map((item, i)=>{
                    return <Square length={this.props.length} key={i} value={item} />
                })}<br/>
            </div>
        )
    }
}

export default Line
