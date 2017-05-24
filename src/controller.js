import React from 'react';
import ReactDOM from 'react-dom';
import LoginBox from './components/Login';
import Validate from './helpers/Validate';

console.log(Validate.isValidLength('hola mu'));

ReactDOM.render(<LoginBox />, document.querySelector('#root'));