import React, { useMemo } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import MyCard from "../Components/MyCard";
import ApexCharts from "../charts/ApexChart";
import ColumnChart from "../charts/ColumnChart";
import BrandingChart from "../charts/BrandingChart";
import Sidebar from "../Components/Sidebar";
import Menu from "../Components/Menu";

const Home = () => {
  return (
    <div>
      <Menu />
      <Container fluid className="sidebar">
        <Row>
          <Col
            xs={3}
            sm={3}
            md={3}
            lg={2}
            xl={2}
            style={{ backgroundColor: "#1B1B1B" }}
          >
            <Sidebar></Sidebar>
          </Col>
          <Col xs={9} sm={9} md={9} lg={10} xl={10}>
            <Row>
              <Col xs={12} sm={12} md={6} lg={4} xl={4} className="card_style">
                <MyCard></MyCard>
              </Col>
              <Col xs={12} sm={12} md={6} lg={4} xl={4} className="card_style">
                <MyCard></MyCard>
              </Col>
              <Col xs={12} sm={12} md={6} lg={4} xl={4} className="card_style">
                <Card>
                  <Card.Body>
                    <Row>
                      <Col xs={6}>
                        <div style={{ width: "120px", height: "120px" }}>
                          <ApexCharts></ApexCharts>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="card-content">
                          <Card.Title>Subscription Revenue </Card.Title>
                          <div className="card-text">
                            <Card.Text></Card.Text>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            {/* <Row>
            <Col xs={12} sm={12} lg={8} xl={8} md={12}>
              <ColumnChart></ColumnChart>
            </Col>
            <Col xs={12} sm={12} lg={4} xl={4} md={12}>
              <BrandingChart></BrandingChart>
            </Col>
          </Row> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
