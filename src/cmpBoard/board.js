import React, { Component } from 'react'

export class Board extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="row">
                <div className="col-12 text-center">
                    <p>Here will be printed the game</p>
                    <p>{`For now the type of game is ${this.props.type} and size is ${this.props.size}`}</p>
                </div>
            </div>
        )
    }
}

export default Board
