import * as React from 'react';

import {Tabs,Tabpage,Row,Col,Table} from 'yrui';

let thead=['ID','参数','说明','类型','可选值','默认值'];
let tabs=[{
  key:'active',
  expr:'默认显示的tab',
  type:'number',
  values:'-',
  default:'0'
}];
let tabpage=[{
  key:'icon',
  expr:'tab图标',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'name',
  expr:'tab名字',
  type:'string',
  values:'-',
  default:'-'
}];

export default class TabsDemo extends React.Component<any,any> {

  render() {
    return (
      <div>
        <Row gutter={12}>
          <Col span={6}>
            <h2>tabs配置</h2>
            <Table thead={thead} tbody={tabs} />
          </Col>
          <Col span={6}>
            <h2>tabpage配置</h2>
            <Table thead={thead} tbody={tabpage} />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={6}>
            <h2>tabs配置</h2>
            <Tabs>
              <Tabpage name="t1">
                <div style={{height:'200px',backgroundColor:'#eee'}}>p1</div>
              </Tabpage>
              <Tabpage name="t2">
                <div style={{height:'200px',backgroundColor:'#6f0'}}>p2</div>
              </Tabpage>
              <Tabpage name="t3">
                <div style={{height:'200px',backgroundColor:'#60f'}}>p3</div>
              </Tabpage>
            </Tabs>
          </Col>
        </Row>
      </div>
    )
  };
}
