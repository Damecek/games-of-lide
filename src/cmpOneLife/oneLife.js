import React, { Component } from 'react'

import Game from '../game/oneDimGameOfLife';
import ButtonPlay from '../cmpBtnPlay/btnPlay';
import ButtonStep from '../cmpBtnStep/btnStep';
import Line from '../cmpLine/line';

export class OneLife extends Component {
    constructor(props) {
        super(props);
        this.state = {game: new Game(this.props.size), interval: '', isPlaying: false};
        this.handleClickPlay = this.handleClickPlay.bind(this);
        this.handleClickStep = this.handleClickStep.bind(this);
    }

    handleClickPlay(action) {
        if (action === 'Play') {
            this.setState({isPlaying: true,
                interval: setInterval(() => {
                    this.state.game.tick();
                    this.setState({game: this.state.game});
                }, 300)});
        } else if (action === 'Stop') {
            clearInterval(this.state.interval);
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
                <div className="row justify-content-center my-1">
                    <div className="col-1 justify-content-center">
                        <ButtonPlay onClick={this.handleClickPlay} />
                    </div>
                    <div className="col-1 justify-content-center">
                        <ButtonStep onClick={this.handleClickStep} isDisabled={this.state.isPlaying} />
                    </div>
                </div>
                <div className="row justify-content-center mt-3">
                    <Line line={this.state.game.board} />
                </div>
            </div>
        )
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }
}

export default OneLife
