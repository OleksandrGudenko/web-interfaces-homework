import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import Index from './react-components/Index';

const indexTarget = document.getElementById('react-target');


ReactDOM.render(
    <BrowserRouter>
    <Index />
    </BrowserRouter>,
    indexTarget
);



// function component() {
//     let element = document.createElement('div');

//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
//     return element;
// }

// document.body.appendChild(component());