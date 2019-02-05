import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import history from './react-components/History';
import { Router } from 'react-router-dom';


import Index from './react-components/Index';

const indexTarget = document.getElementById('react-target');


ReactDOM.render(
    <Router history={history}>
    <Index />
    </Router>,
    indexTarget
);