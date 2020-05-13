import React, { PureComponent } from 'react'

export class Square extends PureComponent {
    render() {
        const color = ()=> {return this.props.value === 0 ? 'white' : 'black'};
        return (
                <span className={`square ${color(this)}`} style={{width: this.props.size, paddingTop: this.props.size}}></span>
        )
    }
}

export default Square
