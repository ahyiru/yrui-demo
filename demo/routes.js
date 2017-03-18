import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import Frame from './base';

import Layout from './views/layout';

import HeadDemo from './views/headdemo';
import AsideDemo from './views/asidedemo';
import MainDemo from './views/maindemo';

import ColDemo from './views/coldemo';
import Color from './views/color';
import ButtonDemo from './views/buttondemo';
import PanelDemo from './views/paneldemo';
import TableDemo from './views/tabledemo';
import EchartDemo from './views/echartdemo';
import InputDemo from './views/inputdemo';
import FormDemo from './views/formdemo';

import ItemsDemo from './views/itemsdemo';
import ListDemo from './views/listdemo';
import TabsDemo from './views/tabsdemo';
import RadiocheckboxDemo from './views/radiocheckboxdemo';
import SelectswitchDemo from './views/selectswitchdemo';
import TextareabadgeDemo from './views/textareabadgedemo';


export default (
  <Route path="/" component={Frame}>

    <IndexRoute component={Layout} />

    <Route path="base/head" component={HeadDemo} />
    <Route path="base/aside" component={AsideDemo} />
    <Route path="base/main" component={MainDemo} />

    <Route path="component/col" component={ColDemo} />
    <Route path="component/color" component={Color} />
    <Route path="component/button" component={ButtonDemo} />
    <Route path="component/panel" component={PanelDemo} />
    <Route path="component/table" component={TableDemo} />
    <Route path="component/echart" component={EchartDemo} />
    <Route path="component/input" component={InputDemo} />
    <Route path="component/form" component={FormDemo} />

    <Route path="component/items" component={ItemsDemo} />
    <Route path="component/list" component={ListDemo} />
    <Route path="component/tabs" component={TabsDemo} />
    <Route path="component/radio-checkbox" component={RadiocheckboxDemo} />
    <Route path="component/select-switch" component={SelectswitchDemo} />
    <Route path="component/textarea-badge" component={TextareabadgeDemo} />

    <Route path="tools/tool1" component={FormDemo} />
    <Route path="tools/tool2" component={FormDemo} />
    <Route path="tools/tool3" component={FormDemo} />

  </Route>
);
