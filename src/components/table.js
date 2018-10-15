import React from 'react';
import { Table, Divider, Tag } from 'antd';
import './table.css';

class MyTable extends React.Component{
   constructor(props){
      super(props);

      this.state = {
          columns: [{
            title: 'User Name',
            dataIndex: 'User_Name',
            key: 'User_Name',
          }, {
            title: 'Credibility',
            dataIndex: 'Credibility',
            key: 'Credibility',
          }, {
            title: 'Payment Methods',
            dataIndex: 'Payment_Methods',
            key: 'Payment_Methods',
          },
          {
            title: 'Quota',
            dataIndex: 'Quota',
            key: 'Quota',
          },
          {
            title: 'Amount',
            dataIndex: 'Amount',
            key: 'Amount',
          },
          {
            title: 'Selling Price',
            dataIndex: 'Selling_Price',
            key: 'Selling_Price',
          },
          {
            title: '',
            dataIndex: 'buyButton',
            key: 'butButton',
          }, 
         ],

         dataSource: [{
            key: '1',
            User_Name: 'Bill Gates',
            Credibility: 'Transaction 412 Positive 190 Negative 0',
            Payment_Methods: 'Card',
            Quota: '1,000 - 1,887CNY',
            Amount: '1.25923405 ETH',
            Selling_Price: '1,498.53 CNY',
            buyButton: 'Buy ETH'
          }, {
            key: '2',
            User_Name: 'Lol m lol',
            Credibility: 'Transaction 1324 Positive 3677 Negative 5',
            Payment_Methods: 'Cashh',
            Quota: '1,234 - 1,887CNY',
            Amount: '22.45ETH',
            Selling_Price: '1,498.53 CNY',
            buyButton: 'Buy ETH'
          },],
      }
   }

   render(){
      return (
         <Table columns={this.state.columns} dataSource={this.state.dataSource}></Table>
      )
   }
}

export default MyTable;