import React from 'react';
import { Table, Button, Tag, Avatar } from 'antd';
import { Link } from 'react-router-dom'

const columns = [{
  title: 'Coin',
  dataIndex: 'Coin',
  key: 'coin',
  render: text => (
      <span>
        <Avatar size='large' src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        {text}
      </span>
  ),
}, {
  title: 'Available',
  dataIndex: 'Available',
  key: 'available',
}, {
  title: 'Limits',
  dataIndex: 'Limits',
  key: 'limits',
}, {
    title: 'Price',
    dataIndex: 'Price',
    key: 'price',
},{
  title: 'Payment Methods',
  key: 'payment',
  dataIndex: 'payment',
  render: payment => (
    <span>
      {payment.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
  ),
}, {
  title: 'Control',
  key: 'control',
  render: (text, record) => (
    <span>
    <Link to='/userprofile'><Button type="primary">Sell</Button></Link>
    </span>
  ),
}];

const data = [{
  key: '1',
  Coin: 'HT',
  Available: '5000 HT',
  Limits: '500-5000 CNY',
  Price: '11 CNY',
  payment: ['BankCard'],
}, {
  key: '2',
  Coin: 'EOS',
  Available: '5000 EOS',
  Limits: '500-5000 CNY',
  Price:'36 CNY',
  payment: ['BankCard'],
}, {
  key: '3',
  Coin: 'HT',
  Available: '5000 HT',
  Limits: '500-5000 CNY',
  Price:'13.6 CNY',
  payment: ['BankCard'],
}];

function DashboardTable(){
    return(
        <Table columns={columns} dataSource={data} />
    );
}

export default DashboardTable;