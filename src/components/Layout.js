import React, { Component } from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { NavMenu } from "./NavMenu";
//import 'antd/dist/antd.css';
//import './carousel.css'

export class Layout extends Component {
  displayName = Layout.name;

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
            <NavMenu />
            <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}
