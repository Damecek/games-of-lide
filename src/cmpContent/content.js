import React, { Component } from 'react'
import './content.css';

import Title from '../cmpTitle/title';
import Setup from '../cmpSetup/setup';
import Board from '../cmpBoard/board';

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {type: '', size: 5};
        this.handleSizeChange = this.handleSizeChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
    }

    handleSizeChange(size) {
        this.setState({size: size});
    }

    handleTypeChange(type) {
        this.setState({type: type});
    }

    render() {
        return (
            <div className="content">
                <Title />
                <Setup onSizeChange={this.handleSizeChange} onTypeChange={this.handleTypeChange} />
                <Board type={this.state.type} size={this.state.size} />
            </div>
        )
    }
}

export default Content
