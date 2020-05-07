import React, { Component } from 'react'

import Game from '../game/oneDimGameOfLife';

export class OneLife extends Component {
    constructor(props) {
        super(props);
        this.state = {game: new Game(this.props.size)};
    }
    
    render() {
        return (
            <div>
                <p>{this.state.game.print()}</p>
            </div>
        )
    }
}

export default OneLife
