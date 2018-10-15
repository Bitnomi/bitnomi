import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import './carousel.css'

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <Grid fluid>
        <Row>
          <NavMenu/>
          <Col xl={9}>
            <Carousel>
                <div><img src="B:\Shall\work\devscore\ClientApp\public\2938.jpg" alt=""/></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}
