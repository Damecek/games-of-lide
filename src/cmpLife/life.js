import React, { Component } from 'react'

import OneGame from '../life/oneDimLife';
// import TwoGame from '../life/twoDimLife'; //not yet developed
// import ThreeGame from '../life/threeDimLife'; //not yet developed

import ButtonPlay from '../cmpsButtons/cmpBtnPlay/btnPlay';
import ButtonStep from '../cmpsButtons/cmpBtnStep/btnStep';

export class Life extends Component {
    constructor(props) {
        super(props);
        this.state = {game: new OneGame(this.props.size), interval: '', isPlaying: false};
        this.handleClickPlay = this.handleClickPlay.bind(this);
        this.handleClickStep = this.handleClickStep.bind(this);
    }

    handleClickPlay(action) {
        if (action === 'Play') {
            this.state.game.tick();
            this.setState({game: this.state.game});
            this.setState({isPlaying: true,
                interval: setInterval(() => {
                    this.state.game.tick();
                    this.setState({game: this.state.game});
                }, 100)});
                console.log('start play');
        } else if (action === 'Stop') {
            this.state.game.tick();
            this.setState({game: this.state.game});
            clearInterval(this.state.interval);
            this.setState({isPlaying: false});
            console.log('stop play');
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
                    {this.props.render(this.state.game.board)}
                </div>
            </div>
        )
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }
}

export default Life
