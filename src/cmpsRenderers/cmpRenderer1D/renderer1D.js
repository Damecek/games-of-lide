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
        // const size = length > 36 ? (245/length).toString() + 'vh': '7vh';
        // const size = (245/length).toString() + 'vh';
        const size = (100/length).toFixed(20) + '%';
        return (
            <div className="w-100 justify-content-center">
                {this.state.history.map((line, i)=>{
                    return (
                        <div key={i} className="reset-line-height">
                            {line.map((item, i)=>{
                                // return <span className={`square ${color(item)}`} key={i} style={{width: size, height: size}}></span>
                                return <span className={`square ${color(item)}`} key={i} style={{width: size, paddingTop: size}}></span>
                            })}<br/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Renderer1D
