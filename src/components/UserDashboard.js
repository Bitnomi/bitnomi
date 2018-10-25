import React, { Component } from 'react';
import { Card, Avatar } from 'antd';
import { Grid, Row, Col } from 'react-bootstrap';
import DashboardTable from './DashboardTable';

import './UserDashboard.css';

function CardGrid(props) {
        return (
            <Grid fluid>
                <Row>
                    <Col md={3}>
                        Positive: {props.positive}
                    </Col>
                    <Col md={3}>
                        Negative: {props.negative}
                    </Col>
                    <Col md={3}>
                        Number of Transactions: {props.transactions}
                    </Col>
                    <Col md={3}>
                        Amount Traded: {props.amountRange}
                    </Col>
                </Row>
            </Grid>
        )
}

export default class UserDashboard extends Component {
    state = {
        name:'Bitpool LTD',
        positive:16,
        negative: 16,
        transactions: 16,
        amountRange: '0-10'
    };
    
    render() {
        const { Meta } = Card;
        const { positive, negative, transactions, amountRange, name} = this.state;
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Card bordered={false} className='card-style'>
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={name}
                                description={<CardGrid positive={positive} negative={negative} transactions={transactions} amountRange={amountRange} />}
                            />
                        </Card>
                    </Col>
                    <Col xs={12} className='pdT-20'>
                        <h3>My Published Advertisements</h3>
                    </Col>
                    <Col xs={12} className='pdT-20'>
                        <DashboardTable />
                    </Col>
                </Row>
            </Grid>
        );
    }
}
