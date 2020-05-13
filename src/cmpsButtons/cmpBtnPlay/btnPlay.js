import React, { PureComponent } from 'react'

export class ButtonPlay extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {action: 'Play'};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({action: this.state.action === 'Play' ? 'Stop' : 'Play'});
        this.props.onClick(this.state.action);
    }

    render() {
        function btnActionClass(action) {
            return action === 'Play' ? 'btn-primary' : 'btn-danger';
        }

        return (
            <div>
                <button type="button" onClick={this.handleClick} 
                        className={`btn btn-block text-center ${btnActionClass(this.state.action)}`}>
                    {this.state.action}
                </button>
            </div>
        )
    }
}

export default ButtonPlay
