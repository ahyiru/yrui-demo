# yrui-demo

#### yrui是一套基于react的UI模版，使用typescript编写、webpack构建。

## 运行demo

1. Clone this repo:
`
$ git clone https://github.com/ahyiru/yrui-demo.git
`

2. Install dependenices:
`
$ npm i
`

3. Start the project:
`
$ npm start 		//默认端口8080
`

4. 打开浏览器，访问: [http://localhost:8000/](http://localhost:8000/)


## 页面配置

### main页面

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

### 头部

	<header>
	  <div className="y-header">
	    <section className="y-brand">
	      <a href="javascript:;" className="brand"> 
	        <span><b>React</b> UI Demo</span>   
	      </a>
	    </section>
	    <Ynav className="y-nav" dropList={dropList} />
	  </div>
	</header>

    const dropList={
      searchFlag:true,
      leftList:[{
        name:'theme',
        icon:'fa fa-cog',
        animate:'fade-in-up',
        open:'',
        items:['头部','LOGO','侧边栏','选中']
	   }],
	   rightList:[{
		  name:'msg',
		  icon:'fa fa-envelope',
    	  animate:'fade-in-left',
  		  msg:'3',
		  open:'',
	 	  items:[{
	       pic:'m1',
	       h4:'你有一条新信息',
	       p:'请注意查收 '
	     },{
	       pic:'m2',
	       h4:'你有一条新信息',
	       p:'请注意查收 '
	     },{
	       pic:'m3',
	       h4:'你有一条新信息',
	       p:'请注意查收 '
	     }]
	   },{
	     name:'tips',
	     icon:'fa fa-bell',
	     animate:'fade-in-up',
	     msg:'5',
	     open:'',
	     items:[{
	       pic:'t1',
	       h4:'你的系统有更新',
	       p:'请升级到最新版本'
	     },{
	       pic:'t2',
	       h4:'你的系统有更新',
	       p:'请升级到最新版本'
	     },{
	       pic:'t3',
	       h4:'你的系统有更新',
	       p:'请升级到最新版本'
	     }]
	   }]
	 }


- searchFlag设置是否显示搜索框，true为显示，false隐藏。

- leftList是左边菜单，rightList为右边菜单。

- icon是显示图标，animate设置下拉菜单显示方式。有`fade-in-left`、`fade-in-right`、`fade-in-top`、`fade-in-bottom`四种。

- items为下拉菜单内容。


### 侧边栏

	<aside>
   	  <YsideBar menu={this.props.sideBarMenu} />
   	  <YrightBar tabs={rightbarTabs} tabList={rightbarTabLists} />
   	</aside>

#### 左侧

	const sidebarMenu=[{
	  url:'/#/',
	  title:'主页',
	  leftIcon:'fa fa-home',
	  rightIcon:'fa fa-angle-right',
	  open:''
	},{
	  url:'javascript:;',
	  title:'UI设计',
	  leftIcon:'fa fa-picture-o',
	  rightIcon:'fa fa-angle-right',
	  open:'',
	  subMenu:[{
	    url:'/ui/ui1',
	    icon:'fa fa-arrow-right',
	    title:'UI设计1'
	  },{
	    url:'/ui/ui2',
	    icon:'fa fa-arrow-right',
	    title:'UI设计2'
	  },{
	    url:'/ui/ui3',
	    icon:'fa fa-arrow-right',
	    title:'UI设计3'
	  }]
	}];
	
- url为路由路径。
- subMenu设置二级菜单。

### 右侧

	const rightbarTabs=[{
	  id:'0',
	  name:'tab1',
	  tabIcon:'fa fa-weibo',
	  active:''
	},{
	  id:'1',
	  name:'tab2',
	  tabIcon:'fa fa-weixin',
	  active:''
	}]
	
- 右侧边栏是一个tab页面，可自己填充内容。如:

		const rightbarTabLists=[{
		  num:'l1',
		  pic:'l1',
		  h4:'右侧边栏是一个tab页面',
		  p:'可自己填充内容',
		  rightIcon:'fa fa-hand-o-left'
		},{
		  num:'l2',
		  pic:'l2',
		  h4:'我想起那天夕阳下的奔跑',
		  p:'那是我们逝去的青春',
		  rightIcon:'fa fa-hand-o-left'
		}]
		
### echarts

`<Yecharts option={this.state.option} style={{height: 300}} onEvents={onEvents} />`

- option 设置图表数据，见 [echarts API](http://echarts.baidu.com/api.html#echarts)。
- onEvents设置事件。如:

		let onEvents={
	      'click': this.onChartClick,
	      'legendselectchanged': this.onChartLegendselectchanged
	    };



#### 持续更新中...