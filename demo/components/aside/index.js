import React,{Component} from 'react';

import {YsideBar,YrightBar} from 'yrui';

import {rightbarTabs,rightbarTabLists,projectList} from '../../models/models';

export default class Yaside extends Component {

  constructor(props){
    super(props);
  };

  render() {

    return (
      <aside>
        <YsideBar menu={this.props.sideBarMenu} projectList={projectList} />
        <YrightBar tabs={rightbarTabs} tabList={rightbarTabLists} />
      </aside>
    );
  }
}
