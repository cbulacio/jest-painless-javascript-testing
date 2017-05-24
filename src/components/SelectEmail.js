import React from 'react';

const STATUS = {
	CLICKED: 'clicked',
    NORMAL: 'normal'
};

export default class SelectEmail extends React.Component {
	constructor(props){
		super(props);

        this.state = {
            className: STATUS.NORMAL,
            color:'white'
        }		
	}

	_onClickHandler = () => {
		this.setState({
			className: STATUS.CLICKED,
			color:'lightgreen'
		})
	};

	_onMouseOverHandler = () => {
		this.setState({
			className: STATUS.CLICKED,
			color:'green'
		})
	};

	_onMouseOutHandler = () => {
		this.setState({
			className: STATUS.NORMAL,
			color:'white'
		})
	};

    render (){
        return (<div>
        			<h2>{this.props.title}</h2>
        			<select 
            		className={this.state.className}
            		style={{backgroundColor:this.state.color}}
            		onClick={this._onClickHandler}
            		onMouseOver={this._onMouseOverHandler}
            		onMouseOut={this._onMouseOutHandler}            		
        			autoFocus="true">
                		{this.props.options.map(item =>{
                    		return <option style={{backgroundColor:this.state.color}} 
                    			key={item.id} 
                    			value={item.id}>{item.email}</option>;
                		})}        			
        			</select>
        </div>)
    };

}