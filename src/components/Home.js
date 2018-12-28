import React, { Component } from "react";
import "./home.css";
import { Icon, Button, Modal } from "antd";
import MyTable from "./table";
import MyFooter from "./footer";
import { Carousel } from "react-bootstrap";

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
            <Modal
              visible={this.state.visible}
              title="Title"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" onClick={this.handleCancel}>Return</Button>,
                <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
                  Submit
                </Button>,
              ]}
            >
                <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
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
