import React from 'react'
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "../Assets/Css/ManualTransectionHistory.css"
const ManualTransactionHistory = () => {
    return (
        <div>
            <Menu />
            <Container fluid className="sidebar">
                <Row className="h-100">
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
                    <Col
                        xs={9}
                        sm={9}
                        md={9}
                        lg={10}
                        xl={10}
                        style={{ marginTop: "30px" }}
                    >
                        <Row className="setpaddinginnerpage">
                            <Col md={4}>
                                <p className="sootfoliobreadclub">Manual Transaction history</p>
                            </Col>
                            <Col md={5}></Col>
                        </Row>
                        <div className="mt-5 setpaddinginnerpage">
                            <Container className="makedisplayyinblockviewport">
                                <Row>
                                    <Col md={12} className="makeinrowtitlesviewportfolio">
                                        <Col md={3} xs={3}>
                                            <p className="joinleaguetitles">Users</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className="joinleaguetitles">Subscription</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className="joinleaguetitles">Payment Method</p>
                                        </Col>
                                        <Col md={3} xs={3}>
                                            <p className="joinleaguetitles">Transaction Hash</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className="transactiontitlesmarg">Status</p>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col md={12} className="viewportsinglebg">
                                    <Col md={3} xs={3}>
                                            <p className="transactionlistdta">Alen David </p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className="transactionlistdta">Platinum Plan</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className="transactionlistdta">Stipe</p>
                                        </Col>
                                        <Col md={3} xs={3}>
                                            <p className="transactionlistdta">0cerXi............o9Xn</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className="transactionlistdtawithbg">successfull</p>
                                        </Col>
                                    </Col>
                                </Row>    
                                <Row className="mt-3">
                                    <Col md={12} className="viewportsinglebg">
                                    <Col md={3} xs={3}>
                                            <p className="transactionlistdta">Smith Ravor </p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className="transactionlistdta">Golden Plan</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className="transactionlistdta">Stipe</p>
                                        </Col>
                                        <Col md={3} xs={3}>
                                            <p className="transactionlistdta">0cerXi............o9Xn</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className="transactionlistdtawithbg">successfull</p>
                                        </Col>
                                    </Col>
                                </Row>    
                                <Row className="mt-3">
                                    <Col md={12} className="viewportsinglebg">
                                    <Col md={3} xs={3}>
                                            <p className="transactionlistdta">Hawks Jaim </p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className="transactionlistdta">Silver</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className="transactionlistdta">Bank Account</p>
                                        </Col>
                                        <Col md={3} xs={3}>
                                            <p className="transactionlistdta">0cerXi............o9Xn</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className="transactionlistdtawithbg">successfull</p>
                                        </Col>
                                    </Col>
                                </Row>    
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ManualTransactionHistory