import React from "react";
import ReactDOM from "react-dom";
import { Button, Menu, Card, Icon, Layout, Row, Col } from "antd";

import "antd/dist/antd.css";

//import "./styles.css";
import ActionButton from "antd/lib/modal/ActionButton";
const { Header, Footer, Sider, Content } = Layout;

const About = () => {
  return (
    <div className="App">
      <Layout>
       
        <Row
          style={{
            background: "#75cac3",
            height: "300px",
            textAlign: "center",
            paddingTop: "150px",
            fontSize: "24px",
            color: "white"
          }}
        >
          About us
        </Row>

        <Row
          style={{
            background: "#fff",
            fontSize: "16px",
            color: "black",
            width: "100%"
          }}
        >
          <Col
            span={20}
            offset={2}
            style={{
              background: "#fff",
              fontSize: "16px",
              color: "black",
              textAlign: "left",
              padding: "20px",
              boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
              marginTop: "-40px",
              paddingTop: "60px",
              zIndex: "2"
            }}
          >
            <Row
              style={{
                background: "#fff",
                fontSize: "16px",
                color: "black",
                paddingBottom: "20px"
              }}
            >
              Founded in 2017, CoinEX is a global and professional digital coin
              exchange service provider. CoinEX core team are from world leading
              internet and finance companies, including the earliest
              adopters/professionals of cryptocurrency who boast rich experience
              in R&D, globla operations and services in the industry. with its
              proprirtary trade matching system and excellent user experience,
              CoinEX is dedicated to building a highly secure, stable and
              efficient digital coin exchange for global users. CoinEX now
              supports multiple languages and are providing global trading
              services in nearly 100 countries/regions.
            </Row>
            <hr />
            <Row>
              Follow us on
              <Icon type="twitter" />
              <Icon type="facebook" />
              <Icon type="telegram" />
            </Row>
            <Row>
              Support: <a> support@coinex.com </a>
              media: <a> pr@coinex.com </a>
              corporation: <a> pd@coinex.com </a>
            </Row>
            <Row>
              Partners
              <Card bordered={false} style={{ width: 200 }}>
                <img
                  width="150"
                  height="80"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLnrlqkoQXysr6m3Hr8vmjy3UI2VcqTRxwfXuiP_lNts1zHWuPaQ" />
              </Card>
            </Row>
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default About;