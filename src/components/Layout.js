import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import 'antd/dist/antd.css';
import './carousel.css'

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <Grid fluid>
        <Row>
          <NavMenu/>
          <Col xl={9}>            
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}
