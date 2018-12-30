import React, { Component } from "react";
import "./home.css";
import { Icon, Button, Modal, Row, Col, Divider, Input } from "antd";
import MyTable from "./table";
import MyFooter from "./footer";
import { Carousel } from "react-bootstrap";

const HomeModal = (props) => {
  return(
    <Modal
      visible={props.visible}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      footer={[
        <Button key="back" onClick={props.handleCancel}>Cancel</Button>,
        <Button key="submit" type="primary" loading={props.loading} onClick={props.handleOk}>
          Determine
        </Button>
      ]}
      width="750px"
    >
      <h3 style={{"textAlign":"center"}}>Confirm purchase BTC</h3>
      <h4>Confirmation Infromation</h4>
      <Divider/>
      <Row>
        <Col span={8}>Unit price: <span className="font-black-modal">5100.00</span> CNY/BCH</Col>
        <Col span={8}>limit: <span className="font-black-modal">100.00-500000.00</span> CNY</Col>
        <Col span={8}>Payment method: <span className="font-black-modal">bank card</span></Col>
      </Row>
      <br/>
      <Row>
        <Col span={11}>Can buy upto 509.37 CNY to buy &nbsp; &nbsp; <a href="#">all</a></Col>
        <Col span={2}></Col>
        <Col span={11}>Can buy upto 509.37 BCH to buy &nbsp; &nbsp; <a href="#">all purchases</a></Col>
      </Row>
      <Row>
        <Col span={11}><Input placeholder="01202214" suffix="CNY"/></Col>
        <Col span={2} style={{textAlign:"center"}}><Icon type="swap" /></Col>
        <Col span={11}><Input placeholder="01202214" suffix="BCH"/></Col>
      </Row>
      <br />
      
      <p style={{fontSize:"12px", color:"grey"}}>*Submit the order to generate the order, please complete the payment within 15 minutes. <a href="#">More Trading Infromation ></a></p>
    </Modal>
  )
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false
    };
  }
  displayName = Home.name;

  handleClick = ()=>{
    console.log('clicked');
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  render() {
    return (
        <div className="mainContainer">
                
          <div className='carouselcontainer'>
          <Carousel indicators={false}>
            <Carousel.Item>
              <img
                width={1260}
                height={400}
                alt="900x500"
                src="shanghai-skyline-with-historical-waibaidu-bridge-china_1127-2938.jpg"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                width={900}
                height={500}
                alt="900x500"
                src="abstract-background-with-low-poly-design_1048-8478.jpg"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                width={900}
                height={500}
                alt="900x500"
                src="data-visualization-dynamic-wave-pattern-vector_53876-59148.jpg"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>
          <div className="homeContainer">
            <div
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                textAlign: "center"
              }}
            >
              <Button type="primary">Buy</Button>
              <Button type="default">Sell</Button>
            </div>
            <h1>Welcome to DevScore your home to crypto!</h1>

            <MyTable onClickFunc={this.handleClick} />

            <ul className="motto">
              <li>
                <Icon className="font24" type="safety" />
                <strong className="font24">Safe and Reliable</strong>
                <p className="font-gray">
                  It’s a digital assets trusteeship platform. 0 transfer fees
                  from Huobi OTC to Huobi Global Exchange. And we ensure that
                  sellers have the stated amount of coin in their wallet before
                  posting any advertisements
                </p>
              </li>
              <li>
                <Icon className="font24" type="eye-o" />
                <strong className="font24">0 transactions fees</strong>
                <p className="font-gray">
                  0 transaction fee for users to trade local currency to
                  BTC/USDT/ETH
                </p>
              </li>
              <li>
                <Icon className="font24" type="customer-service" />
                <strong className="font24">24 hours customer support</strong>
                <p className="font-gray">
                  24/7 professional customer support to attend to all your
                  trading queries
                </p>
              </li>
            </ul>

            <div className="aboutus about-box">
              <div className="title-line ff-thin">About Us</div>

              <div className="desc-line ff-ligjt">
                <span>
                  Founded in 2018 DevScore Coin is a world Digital Asset
                  exchange provider. Our Core Team originates with vast
                  experience in finance and internet security companies as well
                  and include early adopters of Cryptocurrency . With the
                  emergence of a new digital world , xxx continues to provide
                  the best experience with our platform as an easy , fast and
                  open way for digital assets exchange .
                </span>
              </div>
            </div>
            <HomeModal visible={this.state.visible} loading={this.state.loading} handleCancel={this.handleCancel} handleOk={this.handleOk} />
            </div>
          <div className="footer">
            <div className="footer-lol">Devscore Coin</div>
            <MyFooter />
          </div>
        </div>
    );
  }
}

export default Home;
