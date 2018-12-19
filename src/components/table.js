import React from "react";
import { Table, Button, Dropdown, Menu, Icon } from "antd";
import "./table.css";
import { Link } from 'react-router-dom'

class MyTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        {
          title: "User Name",
          dataIndex: "User_Name",
          key: "User_Name"
        },
        {
          title: "Credibility",
          dataIndex: "Credibility",
          key: "Credibility"
        },
        {
          title: "Payment Methods",
          dataIndex: "Payment_Methods",
          key: "Payment_Methods"
        },
        {
          title: "Quota",
          dataIndex: "Quota",
          key: "Quota"
        },
        {
          title: "Amount",
          dataIndex: "Amount",
          key: "Amount"
        },
        {
          title: "Selling Price",
          dataIndex: "Selling_Price",
          key: "Selling_Price"
        },
        {
          title: (
            <Dropdown
              overlay={
                <Menu>
                   <Menu.Item key="0">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="#"
                    >
                      All
                    </a>
                  </Menu.Item>
                  <Menu.Item key="1">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.alipay.com/"
                    >
                      <Icon type="alipay" style={{color: 'blue'}} /> Alipay
                    </a>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.wechat.com/"
                    >
                     <Icon type="wechat" style={{color: 'green'}} /> Wechat
                    </a>
                  </Menu.Item>
                </Menu>
              }
            >
              <a className="ant-dropdown-link" href="#">
                All payment methods <Icon type="down" />
              </a>
            </Dropdown>
          ),
          dataIndex: "price",
          key: "price"
        },
        {
          title: "Currency type",
          dataIndex: "buyButton",
          key: "butButton"
        }
      ],

      dataSource: [
        {
          key: "1",
          User_Name: <Link to='/userdashboard'> Bill Gates </Link>,
          Credibility: "Transaction 412 Positive 190 Negative 0",
          Payment_Methods: "Card",
          Quota: "1,000 - 1,887CNY",
          Amount: "1.25923405 ETH",
          Selling_Price: "1,498.53 CNY",
          price: "130.00CAD",
          buyButton: <Button type="primary">Buy ETH</Button>
        },
        {
          key: "2",
          User_Name: "Lol m lol",
          Credibility: "Transaction 1324 Positive 3677 Negative 5",
          Payment_Methods: "Cashh",
          Quota: "1,234 - 1,887CNY",
          Amount: "22.45ETH",
          Selling_Price: "1,498.53 CNY",
          price: "130.00CAD",
          buyButton: <Button type="primary">Buy ETH</Button>
        }
      ]
    };
  }

  render() {
    return (
      <Table columns={this.state.columns} dataSource={this.state.dataSource} />
    );
  }
}

export default MyTable;