import React, { Component } from 'react'
import '../renderer.css';

export class Renderer1D extends Component {
    static history = [];

    constructor(props) {
        super(props);
        // Renderer1D.history.push(this.props.obj);
    }

    componentDidUpdate() {
        Renderer1D.history.push(this.props.obj);
    }

    render() {
        function color(item) {
            return item === 0 ? "white" : "black";
        }
        console.log(Renderer1D.history);
        
        const length = this.props.obj.length; //obj is array from game(1d,2d,3d)
        const size = length > 34 ? (1140/length).toString() + 'px': '34px';
        return (
            <div>
                {Renderer1D.history.map((line, i)=>{
                    return (
                        <div key={i}>
                            {line.map((item, i)=>{
                                return <span className={`square ${color(item)}`} key={i} style={{width: size, height: size}}></span>
                            })}<br/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Renderer1D
