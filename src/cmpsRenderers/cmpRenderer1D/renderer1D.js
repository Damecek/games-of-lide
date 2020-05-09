import React, { Component } from 'react'
import '../renderer.css';

export class Renderer1D extends Component {
    render() {
        function color(item) {
            return item === 0 ? "white" : "black";
        }
        const length = this.props.obj.length; //obj is array from game(1d,2d,3d)
        const size = length > 34 ? (1140/length).toString() + 'px': '34px';
        return (
            <div>
                {this.props.obj.map((item, i) =>{
                    return <span className={`square ${color(item)}`} key={i} style={{width: size, height: size}}></span>;
                })}
            </div>
        )
    }
}

export default Renderer1D
