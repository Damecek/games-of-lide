import React, { Component } from 'react'
import './line.css';

export class Line extends Component {
    render() {
        function color(item) {
            return item === 0 ? "white" : "black";
        }
        const size = this.props.line.length > 34 ? (1140/this.props.line.length).toString() + 'px': '34px';
        return (
            <div>
                {this.props.line.map((item, i) =>{
                    return <span className={`square ${color(item)}`} key={i} style={{width: size, height: size}}></span>;
                })}
            </div>
        )
    }
}

export default Line
