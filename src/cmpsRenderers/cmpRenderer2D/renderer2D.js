import React, { Component } from 'react'
import '../renderer.css';

export class Renderer2D extends Component {
    render() {
        function color(item) {
            return item === 0 ? "white" : "black";
        }
        
        const length = this.props.obj.length; //obj is array from game
        const size = (100/length).toFixed(20) + '%';
        return (
            <div className="col-8 justify-content-center">
                {this.props.obj.map((line, i)=>{
                    return (
                        <div key={i} className="reset-line-height">
                            {line.map((item, i)=>{
                                return <span className={`square ${color(item)}`} key={i} style={{width: size, paddingTop: size}}></span>
                            })}<br/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Renderer2D
