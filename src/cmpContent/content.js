import React, { Component } from 'react'
import './content.css';

import Title from '../cmpTitle/title';
import Setup from '../cmpSetup/setup';
import Board from '../cmpBoard/board';

export class Content extends Component {
    render() {
        return (
            <div className="content">
                <Title />
                <Setup />
                <Board />
            </div>
        )
    }
}

export default Content
