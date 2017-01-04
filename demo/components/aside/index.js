import React,{Component} from 'react';

import {YsideBar,YrightBar} from 'yrui';

import {rightbarTabs,rightbarTabLists,projectList} from '../../models/models';

let userInfo={
  logo:require('../../styles/images/usr.jpg'),
  name:'test',
  email:'test@test.com'
};

export default class Yaside extends Component {

  constructor(props){
    super(props);
  };

  render() {

    return (
      <aside>
        <YsideBar menu={this.props.sideBarMenu} projectList={projectList} userInfo={false} />
        <YrightBar tabs={rightbarTabs} tabList={rightbarTabLists} />
      </aside>
    );
  }
}
