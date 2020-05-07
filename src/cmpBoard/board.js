import React, { Component } from 'react'

import OneLife from '../cmpOneLife/oneLife';

export class Board extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        function Life(props) {
            if (props.type === "1") {
                return <OneLife size={props.size} />
            }
            return <p>This was not yet developed.</p>
        }

        return (
            <div className="row">
                <div className="col-12 text-center">
                    {/* <p>{`For now the type of game is ${this.props.type} and size is ${this.props.size}`}</p> */}
                    <p>&nbsp;</p>
                    <Life type={this.props.type} size={this.props.size} />
                </div>
            </div>
        )
    }
}

export default Board
