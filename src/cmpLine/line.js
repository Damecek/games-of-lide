import React, { Component } from 'react'
import './line.css';

export class Line extends Component {
    render() {
        function color(item) {
            return item === 0 ? "white" : "black";
        }
        return (
            <div>
                {this.props.line.map((item, i) =>{
                    return <span className={`square ${color(item)}`} key={i}></span>;
                })}
            </div>
        )
    }
}

export default Line
