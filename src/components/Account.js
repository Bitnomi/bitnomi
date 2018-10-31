import React, { Component } from 'react'
import { Card, Layout, Avatar, Divider, Icon } from 'antd';
import './account.css';

const gridStyle = {
  width: '33.33%'
};


export default class Account extends Component {
    render(){
        const { Sider, Content } = Layout;
        const { Meta, Grid } = Card;
        return(
            <Layout style={{padding:'25px'}}>
                <Sider style={{background:'white'}}>
                    <Card>
                        <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Arnold"
                        description="UID: 40652542"
                        />
                        <Divider />
                        <p><span style={{color:'darkgray'}}>Trades:</span> 0 Times</p>
                        <p><span style={{color:'darkgray'}}>Trades in 30 days:</span> 0 Times</p>
                        <p><span style={{color:'darkgray'}}>Avg Release:</span> 0.00 Min</p>
                        <p><span style={{color:'darkgray'}}>30d Completion Rate:</span> 0%</p>
                        <Divider />
                        <p style={{color:'darkgray'}}>Account Created at 2018-06-04 00:58:19, First purchased at 2018-10-16 16:02:00</p>
                    </Card>
                </Sider>
                <Content>
                    <Card title="Account & Security" className='cardStyle' style={{maxWidth:'900px'}}>
                        <Grid style={gridStyle}><Icon type="mail" theme="outlined" />&nbsp;Email</Grid>
                        <Grid style={gridStyle}>Bound</Grid>
                        <Grid style={gridStyle} className='alignRight'><a>Close</a></Grid>
                        <Divider style={{margin:'0'}} />
                        <Grid style={gridStyle}><Icon type="mobile" theme="outlined" />&nbsp;Phone</Grid>
                        <Grid style={gridStyle}>Unbound</Grid>
                        <Grid style={gridStyle} className='alignRight'><a>Bind</a></Grid>
                        <Divider style={{margin:'0'}} />
                        <Grid style={gridStyle}><Icon type="google" theme="outlined" />&nbsp;Google Authentication</Grid>
                        <Grid style={gridStyle}>Unbound</Grid>
                        <Grid style={gridStyle} className='alignRight'><a>Bind</a></Grid>
                        <Divider style={{margin:'0'}} />
                        <Grid style={gridStyle}><Icon type="lock" theme="outlined" />&nbsp;Password</Grid>
                        <Grid style={gridStyle}>*****</Grid>
                        <Grid style={gridStyle} className='alignRight'><a>Modify</a></Grid>
                        <Divider style={{margin:'0'}} />
                        <Grid style={gridStyle}><Icon type="lock" theme="outlined" />&nbsp;Trade Password</Grid>
                        <Grid style={gridStyle}>*****</Grid>
                        <Grid style={gridStyle} className='alignRight'><a>Reset</a></Grid>
                    </Card>
                </Content>
            </Layout>
        );
    }
}