import React from 'react';
import Validate from '../helpers/Validate';

export default class LoginBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayError: {
                msg: 'Error',
                status: false
            }
        }
    }

    _handleChange = (e) => {
        let value = e.target.value;
        if (Validate.isAlphaNumeric(value)) {
            this._handleError('', false);
        } else {
            this._handleError('User name is invalid', true);
        }
    };

    _handleError = (msg,status) => {
        this.setState({
            displayError: {
                msg: msg,
                status: status
            }
        })
    };

    render() {
        return (
            <div className="span4 offset4 well">
                <legend>Please Sign In</legend>
                {this.state.displayError.status &&
                <div className="alert alert-error">{this.state.displayError.msg}</div>}
                <form method="POST" action="">
                    <input type="text" id="username" onChange={this._handleChange} className="span4" name="username"
                           placeholder="Username"/>
                    <input type="password" id="password" className="span4" name="password" placeholder="Password"/>
                    <button type="submit" name="submit" className="btn btn-info btn-block">Sign in</button>
                </form>
            </div>
        )
    }
}