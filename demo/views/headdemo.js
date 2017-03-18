import * as React from 'react';

import {Items,Item,Row,Col,Table} from 'yrui';

let thead=['ID','参数','说明','类型','可选值','默认值'];
let brand=[{
  key:'logo',
  expr:'是否在brand上显示logo',
  type:'boolean',
  values:'true/false',
  default:'false'
},{
  key:'title',
  expr:'标题',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'subtitle',
  expr:'副标题',
  type:'string',
  values:'-',
  default:'-'
}];
let nav=[{
  key:'login',
  expr:'是否已经登录',
  type:'boolean',
  values:'true/false',
  default:'false'
},{
  key:'hideRightTogbar',
  expr:'是否显示右侧边栏切换按钮',
  type:'boolean',
  values:'true/false',
  default:'false'
},{
  key:'dropList',
  expr:'头部显示内容',
  type:'object',
  values:'-',
  default:'-'
},{
  key:'dropList.leftList',
  expr:'头部左侧内容',
  type:'object',
  values:'-',
  default:'-'
},{
  key:'dropList.rightList',
  expr:'头部右侧内容',
  type:'object',
  values:'-',
  default:'-'
},{
  key:'dropList.searchFlag',
  expr:'是否显示搜索框',
  type:'boolean',
  values:'true/false',
  default:'false'
}];
let droplist=[{
  key:'name',
  expr:'下拉菜单名',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'icon',
  expr:'下拉菜单图标',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'img',
  expr:'下拉菜单图标',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'animate',
  expr:'下拉菜单动画',
  type:'string',
  values:'up/down/left/right',
  default:'up'
},{
  key:'msg',
  expr:'下拉菜单消息提示',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'open',
  expr:'显示下拉菜单',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'items',
  expr:'下拉菜单内容',
  type:'object',
  values:'-',
  default:'-'
},{
  key:'getCur',
  expr:'切换下拉菜单的显示隐藏',
  type:'function',
  values:'-',
  default:'-'
}];

export default class HeadDemo extends React.Component<any,any> {

  render() {
    return (
      <Items>
        <Item>
          <Row gutter={12}>
            <Col span={6}>
              <h2>barnd配置</h2>
              <Table thead={thead} tbody={brand} />
            </Col>
            <Col span={6}>
              <h2>nav配置</h2>
              <Table thead={thead} tbody={nav} />
            </Col>
          </Row>
        </Item>
        <Item>
          <h2>droplist配置</h2>
          <Table thead={thead} tbody={droplist} noBorder={true} />
        </Item>
      </Items>
    )
  };
}
