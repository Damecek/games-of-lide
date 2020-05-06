import React, { Component } from 'react'

export class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 5};
        this.handleInput = this.handleInput.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    handleInput(event) {
        const val = event.target.value;
        this.setState({value: val});
    }

    handleMouseUp(event) {
        const newSize = event.target.value;
        this.props.onSizeChange(newSize);
    }

    render() {
        return (
            <div>
                Size of game: {this.state.value}
                <input type="range" className="form-control-range" 
                        min="5" max="100" id="range" value={this.state.value}
                        onChange={this.handleInput} onMouseUp={this.handleMouseUp}/>
            </div>
        )
    }
}

export default Slider
