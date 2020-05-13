import React, { Component } from 'react'
import './life.css';

import OneLife from '../life/oneDimLife';
import TwoLife from '../life/twoDimLife';
// import ThreeLife from '../life/threeDimLife'; //not yet developed

import ButtonPlay from '../cmpsButtons/cmpBtnPlay/btnPlay';
import ButtonStep from '../cmpsButtons/cmpBtnStep/btnStep';

export class Life extends Component {
    constructor(props) {
        super(props);
        switch (this.props.type) {
            case '1':
                this.refLastLine = React.createRef();
                this.handleScroll = this.handleScroll.bind(this);
                this.state = {game: new OneLife(this.props.size, 2), interval: '', isPlaying: false};
                break;
            case '2':
                this.state = {game: new TwoLife(this.props.size, 'normal'), interval: '', isPlaying: false};
                break;
            default:
                throw new Error('Wrong state inside Life component.');
        }
        this.handleClickPlay = this.handleClickPlay.bind(this);
        this.handleClickStep = this.handleClickStep.bind(this);
    }

    handleClickPlay(action) {
        if (action === 'Play') {
            this.state.game.tick();
            this.setState({game: this.state.game.clone(), isPlaying: true,
                interval: setInterval(() => {
                    this.state.game.tick();
                    this.setState({game: this.state.game.clone()});
                    if (this.props.type === '1'){this.refLastLine.current.scrollIntoView();}
                }, 100)});
        } else if (action === 'Stop') {
            clearInterval(this.state.interval);
            this.state.game.tick();
            this.setState({game: this.state.game.clone(), isPlaying: false});
            if (this.props.type === '1'){this.refLastLine.current.scrollIntoView();}
        } else {
            throw new Error('Wrong attribute value in handleClickPlay');
        }
    }

    handleClickStep(event) {
        this.state.game.tick();
        this.setState({game: this.state.game.clone()});
        if (this.props.type === '1'){this.refLastLine.current.scrollIntoView({behavior: "smooth", block: "end"});}
    }

    handleScroll(props){
        return props.type === '1' ? <div ref={this.refLastLine}></div> : null;
    }

    render() {
        return (
            <div>
                <div className="row justify-content-center py-2 sticky w-100 ml-0">
                    <div className="col-1 justify-content-center">
                        <ButtonPlay onClick={this.handleClickPlay} />
                    </div>
                    <div className="col-1 justify-content-center">
                        <ButtonStep onClick={this.handleClickStep} isDisabled={this.state.isPlaying} />
                    </div>
                </div>
                <div className="row justify-content-center mt-0 w-100 ml-0 pb-1">
                    {this.props.render(this.state.game.board)}
                </div>
                {this.handleScroll(this.props)}
            </div>
        )
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }
}

export default Life
