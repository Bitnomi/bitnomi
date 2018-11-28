import React, { Component } from 'react';
import { Card, Layout, Avatar, Divider, Icon, Input, Select, Switch, Checkbox, Button, Tabs } from 'antd';
import './PostTrade.css';

const Option = Select.Option;
const { TextArea } = Input;
const TabPane = Tabs.TabPane;

const Header = ({number, title}) => (
	<div className="header">
		<div className="header__number">{number}</div>
		<div className="header__title">{title}</div>
	</div>
);

const Body = ({children}) => (
	<div className="pBody">
		{children}
	</div>	
);

const PostTrade = () => (
	<div style={{margin: 20}}>
	 <Tabs defaultActiveKey="1">
		<TabPane tab="Post sell ads DKKT" key="1"></TabPane>
		<TabPane tab="Post buy ads DKKT" key="2"></TabPane>
	</Tabs>,
		<div style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
			<div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
				<Header number={1} title={'Area and legal currency'}/>
				<Body>
					<div className={'form__title'}>Area</div>
					<Select defaultValue="vi" style={{width: '100%'}} >
						<Option value="china">China</Option>
						<Option value="vi">Vietnam</Option>
					</Select>
					<div className={'form__title'}>Legal currency</div>
					<Select defaultValue="lucy" style={{width: '100%'}}>
						<Option value="lucy">Lucy</Option>
					</Select>
				</Body>
				<Header number={2} title={'Trading information'}/>
				<Body>
					<div className={'form__title'}>Margin</div>
					<Input addonAfter={<Icon type="setting" />} defaultValue="" />
					<div className={'form__title'}>Reference Price</div>
					<Input addonAfter={<div>CNY/DKKT</div>} defaultValue="1.05" />
					<div className={'form__title'}>Quantity</div>
					<Input addonAfter={<div>DKKT</div>} defaultValue="1.05" />
					<div className={'form__title'}>Trading Limit</div>
					<div style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
						<Input addonAfter={<div>CNY</div>} defaultValue="1.05" style={{ width: '40%' }}/>

						<Input addonAfter={<div>CNY</div>} defaultValue="1.05" style={{ width: '40%' }}/>
					</div>
				</Body>
			</div>
			<Divider type={'vertical'} style={{ height: 800, marginLeft: 80, marginRight:80 }}/>	
			<div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
				<Header number={3} title={'Transaction time and method'}/>
				<Body>
					<div className={'form__title'}>Day opening hour</div>
					<div style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
						<Input addonBefore={<Icon type="clock" />} defaultValue="1.05" style={{ width: '40%' }}/>

						<Input addonBefore={<Icon type="clock" />} defaultValue="1.05" style={{ width: '40%' }}/>
					</div>
					<div className={'form__title'}>Payment period</div>
					<Select defaultValue="30">
						<Option value="30">30 minutes</Option>
						<Option value="10">10 minutes</Option>
					</Select>
					<div className={'form__title'}>Receiving account</div>
					<div style={{borderWidth: '0.2px', borderStyle: 'solid', padding: '1.5rem' , borderColor: 'rgba(0, 0, 0, 0.384)'}}>
						<div style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
							<div>Select receiving accounts(multiple).</div>
							<Button type="dashed" icon="retweet">Refresh</Button>
						</div>
						<Button type="dashed" icon="plus" style={{width: 100}}></Button>

					</div>
					{/* <div className={'form__title'}>Payment method</div>
					<Button style={{marginRight: '1.5rem', marginBottom: '0.5rem'}} icon="alipay">Alipay</Button>
					<Button style={{marginRight: '1.5rem', marginBottom: '0.5rem'}} icon="wechat">Wechat</Button>
					<Button style={{marginRight: '1.5rem', marginBottom: '0.5rem'}} icon="bank">Bank Account</Button>
					<Button style={{marginRight: '1.5rem', marginBottom: '0.5rem'}} icon="bank"> Western Union</Button>
					<Button style={{marginRight: '1.5rem', marginBottom: '0.5rem'}} icon="bank">Moneygram</Button>
					<Button style={{marginRight: '1.5rem', marginBottom: '0.5rem'}} icon="bank">Neteller</Button>
					<Button style={{marginRight: '1.5rem', marginBottom: '0.5rem'}} icon="bank">Paypal</Button> */}

					<div style={{flexDirection: 'row', display: 'flex', alignItems: 'center'}}>

						<div className={'form__title'}>Auto Response</div>
						<Switch defaultChecked />
					</div>
					<TextArea style={{height: 200}}/>
					<Checkbox style={{marginTop: '2rem'}}>Agree OTC User Agreement</Checkbox>
					<div style={{marginTop: '1rem'}}>
						<Button type="primary" style={{width: 200}}>Post</Button>
					</div>
				</Body>
			</div>
	</div>

	</div>
);

export default PostTrade;