//sidebarMenu
export const sidebarMenu=[{
  url:'/',
  title:'主页',
  leftIcon:'home',
  rightIcon:'angle-right',
  open:'',
},{
  url:'javascript:;',
  title:'框架配置',
  leftIcon:'cogs',
  rightIcon:'angle-right',
  open:'',
  subMenu:[{
    url:'/base/head',
    icon:'arrow-right',
    title:'头部配置'
  },{
    url:'/base/aside',
    icon:'arrow-right',
    title:'侧边栏配置'
  },{
    url:'/base/main',
    icon:'arrow-right',
    title:'主页配置'
  }],
},{
  url:'/component/col',
  title:'栅格',
  leftIcon:'cogs',
  rightIcon:'angle-right',
  open:'',
},{
  url:'/component/color',
  title:'颜色',
  leftIcon:'cogs',
  rightIcon:'angle-right',
  open:'',
},{
  url:'/component/button',
  title:'按钮',
  leftIcon:'picture-o',
  rightIcon:'angle-right',
  open:'',
},{
  url:'/component/panel',
  title:'面板',
  leftIcon:'gavel',
  rightIcon:'angle-right',
  open:'',
},{
  url:'/component/table',
  title:'表格',
  leftIcon:'table',
  rightIcon:'angle-right',
  open:'',
},{
  url:'/component/echart',
  title:'图表',
  leftIcon:'pie-chart',
  rightIcon:'angle-right',
  open:'',
},{
  url:'/component/form',
  title:'表单',
  leftIcon:'th-list',
  rightIcon:'angle-right',
  open:'',
},{
  url:'/component/input',
  title:'输入框',
  leftIcon:'github-alt',
  rightIcon:'angle-right',
  open:''
},{
  url:'javascript:;',
  title:'其他',
  leftIcon:'github-alt',
  rightIcon:'angle-right',
  open:'',
  subMenu:[{
    url:'/component/items',
    icon:'arrow-right',
    title:'items列表'
  },{
    url:'/component/list',
    icon:'arrow-right',
    title:'list列表'
  },{
    url:'/component/tabs',
    icon:'arrow-right',
    title:'tabs页签'
  },{
    url:'/component/radio-checkbox',
    icon:'arrow-right',
    title:'单选、多选'
  },{
    url:'/component/select-switch',
    icon:'arrow-right',
    title:'下拉选择、切换'
  },{
    url:'/component/textarea-badge',
    icon:'arrow-right',
    title:'textarea、标记'
  }],
},{
  url:'javascript:;',
  title:'工具插件',
  leftIcon:'github-alt',
  rightIcon:'angle-right',
  open:'',
  subMenu:[{
    url:'/tools/tool1',
    icon:'arrow-right',
    title:'工具1'
  },{
    url:'/tools/tool2',
    icon:'arrow-right',
    title:'工具2'
  },{
    url:'/tools/tool3',
    icon:'arrow-right',
    title:'工具3'
  }],
}];

//notifyList
export const notifyList=[{
  class:'top-left success',
  icon:'check-square-o',
  txt:'更新成功！'
},{
  class:'top-middle warning',
  icon:'exclamation-triangle',
  txt:'数据格式不规范！'
},{
  class:'top-right danger',
  icon:'times-circle',
  txt:'更新出错！'
},{
  class:'bottom-right info',
  icon:'info-circle',
  txt:'请升级版本！'
}];

//dropList
export const dropList={
  searchFlag:true,
  leftList:[{
    name:'theme',
    icon:'cog',
    animate:'up',
    open:'',
    // items:['header','branding','sidebar','active']
    items:['头部','LOGO','侧边栏','选中']
  }],
  rightList:[{
    name:'msg',
    icon:'envelope',
    animate:'left',
    msg:'3',
    open:'',
    items:[{
      pic:'m1',
      h4:'你有一条新信息',
      p:'请注意查收 ',
      icon:'qq',
    },{
      pic:'m2',
      h4:'你有一条新信息',
      p:'请注意查收 ',
      icon:'qq',
    },{
      pic:'m3',
      h4:'你有一条新信息',
      p:'请注意查收 ',
      icon:'qq',
    },{
      pic:'m4',
      h4:'你有一条新信息',
      p:'请注意查收 ',
      icon:'qq',
    }]
  },{
    name:'tips',
    icon:'bell',
    animate:'up',
    msg:'5',
    open:'',
    items:[{
      pic:'t1',
      h4:'你的系统有更新',
      p:'请升级到最新版本',
      icon:'qq',
    },{
      pic:'t2',
      h4:'你的系统有更新',
      p:'请升级到最新版本',
      icon:'qq',
    },{
      pic:'t3',
      h4:'你的系统有更新',
      p:'请升级到最新版本',
      icon:'qq',
    },{
      pic:'t4',
      h4:'你的系统有更新',
      p:'请升级到最新版本',
      icon:'qq',
    },{
      pic:'t5',
      h4:'你的系统有更新',
      p:'请升级到最新版本',
      icon:'qq',
    }]
  },{
    name:'language',
    icon:'html5',
    animate:'down',
    msg:'',
    open:'',
    items:[{
      pic:'中',
      h4:'中文',
      p:'简体',
      icon:'qq',
    },{
      pic:'英',
      h4:'English',
      p:'en',
      icon:'qq',
    },{
      pic:'日',
      h4:'Japanese',
      p:'japan',
      icon:'qq',
    }]
  },{
    name:'profile',
    // icon:require('../styles/images/usr.jpg'),
    icon:'user',
    animate:'right',
    msg:'4',
    open:'',
    items:[{
      pic:'用',
      h4:'用户信息',
      p:'',
      icon:'qq',
    },{
      pic:'消',
      h4:'消息',
      p:'',
      icon:'qq',
    },{
      pic:'设',
      h4:'设置',
      p:'',
      icon:'qq',
    },{
      pic:'退',
      h4:'退出',
      p:'',
      icon:'qq',
      url:'user/login',
    }]
  }]
};

//rightbarTabs
export const rightbarTabs=[{
  id:'0',
  name:'tab1',
  icon:'weibo',
  active:''
},{
  id:'1',
  name:'tab2',
  icon:'weixin',
  active:''
},{
  id:'2',
  name:'tab3',
  icon:'qq',
  active:''
},{
  id:'3',
  name:'tab4',
  icon:'apple',
  active:''
}];
//rightbarTabLists
export const rightbarTabLists=[{
  num:'l1',
  pic:'l1',
  h4:'我想起那天夕阳下的奔跑1111111',
  p:'那是我们逝去的青春',
  icon:'hand-o-left'
},{
  num:'l2',
  pic:'l2',
  h4:'我想起那天夕阳下的奔跑',
  p:'那是我们逝去的青春',
  icon:'hand-o-left'
},{
  num:'l3',
  pic:'l3',
  h4:'我想起那天夕阳下的奔跑',
  p:'那是我们逝去的青春',
  icon:'hand-o-left'
},{
  num:'l4',
  pic:'l4',
  h4:'我想起那天夕阳下的奔跑',
  p:'那是我们逝去的青春',
  icon:'hand-o-left'
}];
















