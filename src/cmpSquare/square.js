import React, { Component } from 'react'

export class Square extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.value !== this.props.value;
    }

    render() {
        function color(val) {
            return val === 0 ? "white" : "black";
        }
        const size = (100/this.props.length).toFixed(20) + '%';
        return (
            <div>
                <span className={`square ${color(this.props.value)}`} style={{width: size, paddingTop: size}}></span>
            </div>
        )
    }
}

export default Square
