import React,{Component} from 'react';

import {Main,Brand,SideBar,RightBar,Nav,Tabs,Tabpage,List,tools} from 'yrui';

import {sidebarMenu,rightbarTabs,rightbarTabLists,dropList,projectList} from './models/models';


const {getCurrent,getBreadcrumb,addClass,$storage}=tools;

import {getDefault} from './servers/storage';

export default class Frame extends Component {

  render() {
    getDefault();
  	document.documentElement.scrollTop?(document.documentElement.scrollTop=0):(document.body.scrollTop=0);
    const str=location.hash.match(/#(\S+)\?/)||location.hash.match(/#(\S+)/);
    const menu=getCurrent(sidebarMenu,str);
    const breadcrumb=getBreadcrumb(sidebarMenu,str);
    return (
      <div>
        <header>
          <div className="y-header">
            <Brand title="React" subtitle="UI Demo" logo={false} />
            <Nav dropList={dropList} hideRightTogbar={false} />
          </div>
        </header>
        <aside>
          <SideBar menu={menu} userInfo={null} />
          <RightBar>
            <Tabs>
              {
                rightbarTabs.map((v,k)=>{
                  return (
                    <Tabpage key={`tabs-${k}`} icon={v.icon}>
                      <List list={rightbarTabLists} name={v.name} />
                    </Tabpage>
                  )
                })
              }
            </Tabs>
          </RightBar>
        </aside>
        <Main breadcrumb={breadcrumb} hidePagetitle={false}>
          {this.props.children}
        </Main>
      </div>
    );
  }
}
