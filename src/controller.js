import React from 'react';
import ReactDOM from 'react-dom';
import LoginBox from './components/Login';
import Validate from './helpers/Validate';

import {users} from './data/data';
import SelectEmail from './components/SelectEmail';

//console.log(Validate.isValidLength('hola mu'));

ReactDOM.render(<SelectEmail title="User emails" options={users} />, document.querySelector('#root'));