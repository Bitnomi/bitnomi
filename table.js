import React, { Component } from 'react';
import Table from 'antd/lib/table';
import './App.css';


class OrderTable  extends Component {

  render() {


const columns = [
  {
    title: "No.",
    dataIndex: "No.",
    key: "No.",
   
  },
  {
    title: "Type",
    dataIndex: "Type",
    key: "Type",
   
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    key: "Amount",
   
  },
  {
    title: "Price",
    dataIndex: "Price",
    key: "Price",
   
  },
  {
    title: "Fee",
    dataIndex: "Fee",
    key: "Fee",
   
  },{
    title: "Time",
    dataIndex: "Time",
    key: "Time",
   
  },

  {
    title: "Status",
    dataIndex: "Status",
    key: "Status"
  },
  {
    title: "Conterparty",
    dataIndex: "Conterparty",
    key: "Conterparty"
  }
];

const data = [
  {
    key: "1",
    Status: "Closed",
    age: 32,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
     Status: "Closed",
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    Status: "Closed",
    address: "Sidney No. 1 Lake Park"
  }
  ,
  {
    key: "3",
    name: "Joe Black",
    Status: "Canceled",
    address: "Sidney No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    Status: "Closed",
    address: "Sidney No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    Status: "Canceled",
    address: "Sidney No. 1 Lake Park"
  }
];



    return (
      <div className="table">
     <Table columns={columns} dataSource={data} />
  </div>
    );
  }
}

export default OrderTable;

