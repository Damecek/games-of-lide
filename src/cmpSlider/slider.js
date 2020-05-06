import React, { Component } from 'react'

export class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 5};
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        const val = e.target.value;
        this.setState({value: val});
    }

    render() {
        return (
            <div>
                Size of game: {this.state.value}
                <input type="range" className="form-control-range" 
                        min="5" max="100" id="range" value={this.state.value}
                        onChange={this.handleInput} />
            </div>
        )
    }
}

export default Slider
