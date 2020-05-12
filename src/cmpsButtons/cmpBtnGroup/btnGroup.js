import React, { PureComponent } from 'react'

export class BtnGroup extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {selected: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const selectedType = event.target.value;
        this.setState({selected: selectedType});
        this.props.onTypeChange(selectedType);
    }

    render() {
        function isActive(select, i) {
            return select === i ? 'active' : '';
        }
        const select = this.state.selected;

        return (
            <div>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className={`btn btn-secondary ${isActive(select, "1")}`}>
                            <input type="radio" name="options" 
                                    id="option1" value="1"
                                    onClick={this.handleClick} /> 1-dim Life
                        </label>
                        <label className={`btn btn-secondary ${isActive(select, "2")}`}>
                            <input type="radio" name="options" 
                                    id="option2" value="2"
                                    onClick={this.handleClick} /> 2-dim Life
                        </label>
                        <label className={`btn btn-secondary ${isActive(select, "3")}`}>
                            <input type="radio" name="options" 
                                    id="option3" value="3"
                                    onClick={this.handleClick} /> 3-dim Life
                        </label>
                    </div>
            </div>
        )
    }
}

export default BtnGroup
