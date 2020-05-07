import React, { Component } from 'react'

import Game from '../game/oneDimGameOfLife';
import ButtonPlay from '../cmpBtnPlay/btnPlay';
import ButtonStep from '../cmpBtnStep/btnStep';
import Line from '../cmpLine/line';

export class OneLife extends Component {
    constructor(props) {
        super(props);
        this.state = {game: new Game(this.props.size), timeout: '', isPlaying: false};
        this.handleClickPlay = this.handleClickPlay.bind(this);
        this.handleClickStep = this.handleClickStep.bind(this);
    }

    handleClickPlay(action) {
        if (action === 'Play') {
            this.setState({isPlaying: true,
                timeout: setInterval(() => {
                    this.state.game.tick();
                    this.setState({game: this.state.game});
                }, 1000)});
        } else if (action === 'Stop') {
            clearTimeout(this.state.timeout);
            this.setState({isPlaying: false});
        } else {
            console.log('wrong attribute value in handleClickPlay');
        }
    }

    handleClickStep(event) {
        this.state.game.tick();
        this.setState({game: this.state.game});
    }

    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-1 justify-content-center">
                        <ButtonPlay onClick={this.handleClickPlay} />
                    </div>
                    <div className="col-1 justify-content-center">
                        <ButtonStep onClick={this.handleClickStep} isDisabled={this.state.isPlaying} />
                    </div>
                </div>
                <p>&nbsp;</p>
                <div className="row justify-content-center">
                    <Line line={this.state.game.board} />
                </div>
            </div>
        )
    }
}

export default OneLife