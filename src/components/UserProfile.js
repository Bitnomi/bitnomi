import React, { Component } from 'react';
import { Divider, Icon, Button, Alert } from 'antd';
import { Col, Grid, Row } from 'react-bootstrap';
import { Widget } from 'react-chat-widget';
import { Link } from 'react-router-dom' 

import 'react-chat-widget/lib/styles.css';
import './UserProfile.css';

export default class UserProfile extends Component {
    state = {
        warningMessage : "Please click \"I've Paid\" after you made the payment",
    };
    componentDidMount() {
        //addResponseMessage("Welcome to this awesome chat!");
    }
    
    handleNewUserMessage = (newMessage) => {
        console.log(`New message incomig! ${newMessage}`);
        // Now send the message throught the backend API
        //addResponseMessage(response);
    }
    
    render() {
        return (
            <Grid style={{paddingTop:'50px'}}>
                <Row>
                    <Col md={8}>
                        <h5>Order: 123456</h5>
                        <h2>Buy 0.111 BTC From John</h2>
                        <Grid fluid>
                            <Row>
                                <Col md={1} className='pdL-0'>
                                    <h4>Price:</h4>
                                </Col>
                                <Col md={8}>
                                    <h4>9001 USD/BTC</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={1} className='pdL-0'>
                                    <h4>Amount:</h4>
                                </Col>
                                <Col md={8}>
                                    <h4>1,000 USD</h4>
                                </Col>
                            </Row>
                        </Grid>
                        <Divider />
                        <Grid fluid>
                            <Row>
                                <Col md={3} className='pdL-0'>
                                    <Icon type="credit-card" theme="outlined" />&nbsp;
                                    <span>PayNow</span>
                                </Col>
                                <Col md={9} className='pdL-0'>
                                    <p>Loreum Ipsum</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3} className='pdL-0'>
                                    <Icon type="credit-card" theme="outlined" />&nbsp;
                                    <span>PayPal</span>
                                </Col>
                                <Col md={9} className='pdL-0'>
                                    <p>Loreum Ipsum</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3} className='pdL-0'>
                                    <Icon type="credit-card" theme="outlined" />&nbsp;
                                    <span>Bank Account</span>
                                </Col>
                                <Col md={9} className='pdL-0'>
                                    <p>Loreum Ipsum</p>
                                </Col>
                            </Row>
                        </Grid>
                        <h4 className='msg'>Unpaid, will complete this payment <span className='timer'>04 Min 30 Sec</span>, Reference: <span className='refno'>6512</span></h4>
                        <Grid>
                            <Row>
                                <Col md={1} className='pdL-0'>
                                    <Button type="primary" size='large'>I've Paid</Button>
                                </Col>
                                <Col md={6}>
                                    <Alert 
                                        message={this.state.warningMessage}
                                        type='error'
                                        showIcon
                                        icon={<Icon type="exclamation-circle" theme="outlined" />}
                                    />
                                </Col>
                            </Row>
                        </Grid>
                        <ol className='list'>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie sagittis mauris luctus imperdiet.</li>
                            <li>Nullam sodales dolor at elit auctor placerat. Donec sed eleifend mauris. Suspendisse odio tortor, luctus non diam non, rhoncus dignissim ligula.</li>
                            <li>Fusce maximus arcu in metus eleifend, at luctus diam maximus. Mauris quis sem cursus metus dignissim finibus nec vitae diam</li>
                        </ol>    
                        <Button style={{color:'blue'}}>Cancel</Button>   
                    </Col>
                    <Col md={4}>
                        <Widget
                            handleNewUserMessage={this.handleNewUserMessage}
                        />
                    </Col>
                </Row>
            </Grid>
        );
    }
}
