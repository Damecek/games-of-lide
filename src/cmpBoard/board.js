import React, { Component } from 'react'

import Life from '../cmpLife/life';
import Renderer1D from '../cmpsRenderers/cmpRenderer1D/renderer1D';
import Renderer2D from '../cmpsRenderers/cmpRenderer2D/renderer2D.js';
// import Renderer3D from '../cmpsRenderers/cmpRenderer3D/renderer3D.js';

export class Board extends Component {
    render() {
        function SetLife(props) {
            switch (props.type) {
                case '1':
                    return <Life render={(game)=><Renderer1D obj={game} />} size={props.size} type={props.type} />
                case '2':
                    return <Life render={(game)=><Renderer2D obj={game} />} size={props.size} type={props.type} />
                default:
                    return <p>This was not yet developed.</p>
            }
        }

        return (
            <div className="row">
                <div className="col-12 text-center my-1">
                    <SetLife type={this.props.type} size={this.props.size} />
                </div>
            </div>
        )
    }
}

export default Board
