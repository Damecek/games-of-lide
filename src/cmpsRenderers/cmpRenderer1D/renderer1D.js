import React, { Component } from 'react'
import '../renderer.css';

export class Renderer1D extends Component {
    static history = [];

    constructor(props) {
        super(props);
        this.state = {history: []};
    }

    static getDerivedStateFromProps(props, state) {
        return state.history.push(props.obj);
    }

    render() {
        function color(item) {
            return item === 0 ? "white" : "black";
        }
        console.log(this.state.history);
        
        
        const length = this.props.obj.length; //obj is array from game
        const size = length > 34 ? (1140/length).toString() + 'px': '34px';
        return (
            <div>
                {this.state.history.map((line, i)=>{
                    return (
                        <div key={i} className="reset-line-height">
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
