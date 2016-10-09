import React,{Component} from 'react';

import {YpageHeader,YbackTop,Ynotify} from 'yrui';

import Yheader from '../header';
import Yaside from '../aside';

import {getCurrent} from '../../configs/tools';
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
    this.str=location.hash.match(/#(\S+)\?/);
    this.data={
      title:'',
      subTitle:'',
      level:1
    };
    let obj=getCurrent(sidebarMenu,this.str,this.data);
    this.state=({
    	menu:obj,
    	data:this.data,
      notify:notifyList
    });

    const that=this;
    //hashchange
    window.addEventListener('hashchange',()=>{
      document.documentElement.scrollTop?(document.documentElement.scrollTop=0):(document.body.scrollTop=0);
    	let str=location.hash.match(/#(\S+)\?/);
    	let obj=getCurrent(sidebarMenu,str,this.data);
    	that.setState({
    		menu:obj,
    		data:this.data
    	});
    },false);
  };

  render() {
  	const {children}=this.props;
  	const {data,menu,notify}=this.state;
    return (
      <div>
        <Yheader />
        <Yaside sideBarMenu={menu} />

        <main>
	        <section className="y-main">
	          <div className="y-container">
	            
              <YpageHeader data={data} />

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
