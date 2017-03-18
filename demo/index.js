import * as React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';

import routes from './routes';

import 'font-awesome/css/font-awesome.css';
import 'yrui/lib/yrui.css';

render(<Router history={hashHistory} routes={routes} />,document.getElementById('app'));
