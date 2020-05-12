import React, { Component } from 'react'

export class Title extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="text-center">
                        <h1 className="display-2">Game of Life</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Title
