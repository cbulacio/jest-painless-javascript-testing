import React from 'react';


const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal'
};

export default class Link extends  React.Component {
    constructor (props){
        super(props);

        this.state = {
            className: STATUS.NORMAL
        }

    }

    _onMouserEnter = () => {
        this.setState({
            className:STATUS.HOVERED
        });
    };

    _onMouseLeave =()=> {
        this.setState({
            className: STATUS.NORMAL
        });
    };


    render (){
        return (<a
            className={this.state.className}
            href={this.props.page || '#'}
            onMouseEnter={this._onMouserEnter}
            onMouseLeave={this._onMouseLeave}
        >
            {this.props.children}
        </a>)
    };
}