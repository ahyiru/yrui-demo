import React,{Component} from 'react';

import {YpageHeader,YbackTop,Ynotify} from 'yrui';

import Yheader from '../header';
import Yaside from '../aside';

import {getCurrent,getBreadcrumb} from '../../configs/tools';
import {sidebarMenu,notifyList} from '../../models/models';

export default class Yframe extends Component {

  static sidebarMenu=sidebarMenu;
  static notifyList=notifyList;

  static propTypes={
    
  };
  static defaultProps={
    auth:'yiru'
  };

	constructor(props){
    super(props);
    this.str=location.hash.match(/#(\S+)\?/)||location.hash.match(/#(\S+)/);

    let menu=getCurrent(sidebarMenu,this.str);
    let breadcrumb=getBreadcrumb(sidebarMenu,this.str);
    this.state=({
      menu:menu,
      breadcrumb:breadcrumb,
      notify:notifyList
    });

    window.addEventListener('hashchange',this.hashChg,false);
  };

  //hashchange
  hashChg=()=>{
    document.documentElement.scrollTop?(document.documentElement.scrollTop=0):(document.body.scrollTop=0);
    let str=location.hash.match(/#(\S+)\?/)||location.hash.match(/#(\S+)/);
    let menu=getCurrent(sidebarMenu,str);
    let breadcrumb=getBreadcrumb(sidebarMenu,str);
    this.setState({
      menu:menu,
      breadcrumb:breadcrumb
    });
  }

  componentWillUnmount=()=>{
    window.removeEventListener('hashchange',this.hashChg,false);
  };

  render() {
  	const {children}=this.props;
  	const {breadcrumb,menu,notify}=this.state;
    return (
      <div>
        <Yheader />
        <Yaside sideBarMenu={menu} />

        <main>
	        <section className="y-main">
	          <div className="y-container">
	            
              <YpageHeader breadcrumb={breadcrumb} hidePagetitle={false} />

	            <div className="y-pagecontent">
	              <div>{children}</div>
	            </div>

	          </div>
	          
	          <YbackTop />

	        </section>
	      </main>

        <Ynotify notify={notify} />
      </div>
    );
  }
}
