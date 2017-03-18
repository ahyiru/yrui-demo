import * as React from 'react';

import {Items,Item,Row,Col,Table} from 'yrui';

let thead=['ID','参数','说明','类型','可选值','默认值'];
let sidebarMenu=[{
  key:'url',
  expr:'路由地址',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'title',
  expr:'路由标题',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'leftIcon',
  expr:'左侧图标',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'rightIcon',
  expr:'右侧图标',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'open',
  expr:'默认收缩状态',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'subMenu',
  expr:'二级菜单',
  type:'array',
  values:'-',
  default:'-'
}];
let subMenu=[{
  key:'url',
  expr:'二级路由地址',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'icon',
  expr:'二级路由图标',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'title',
  expr:'二级路由标题',
  type:'string',
  values:'-',
  default:'-'
}];

export default class AsideDemo extends React.Component<any,any> {

  render() {
    return (
      <Items>
        <Item>
          <Row gutter={8}>
            <Col span={6}>
              <h2>sidebarMenu配置</h2>
              <Table thead={thead} tbody={sidebarMenu} />
            </Col>
            <Col span={6}>
              <h2>subMenu配置</h2>
              <Table thead={thead} tbody={subMenu} />
            </Col>
          </Row>
        </Item>
      </Items>
    )
  };
}
