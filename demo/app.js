import * as React from 'react';
import { Router, hashHistory, browserHistory } from 'react-router';

import routes from './routes';

import 'font-awesome/css/font-awesome.css';
// import 'antd/dist/antd.min.css';
require('./servers/localStorage.js');

import 'yrui/lib/yrui.css';
import './styles/stheme.less';

export default (
  <Router history={hashHistory} routes={routes}/>
);
