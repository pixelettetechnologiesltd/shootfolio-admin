import React from 'react'
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { BiFootball } from "react-icons/bi";
import "../Assets/Css/Addquestion.css"
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Addquestion = () => {
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
                                <div className="makebreadinrow">
                                    <span className="breadgreenfootball">
                                        <BiFootball />
                                    </span>
                                    <p className="sootfoliobreadclub">Add Quiz Question</p>
                                </div>
                            </Col>
                            <Col md={5}></Col>
                            <Col md={3}></Col>
                        </Row>
                        <Row className="addpaddingtomakeformcent">
                            <Col md={6}>
                                <Form className='mt-5'>
                                    <Form.Group as={Row} className="mb-5" controlId="formHorizontalEmail">
                                        <Form.Label column sm={2} className='formlabelquestion'>
                                            Question:
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="email" placeholder="Enter your question" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                        <Form.Label column sm={2} className='formlabelquestion'>
                                           A:
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="email" placeholder="Enter option # 1" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                        <Form.Label column sm={2} className='formlabelquestion'>
                                            B:
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="email" placeholder="Enter option # 2" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                        <Form.Label column sm={2} className='formlabelquestion'>
                                            C:
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="email" placeholder="Enter option # 3" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                        <Form.Label column sm={2} className='formlabelquestion'>
                                            D:
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="email" placeholder="Enter option # 4" />
                                        </Col>
                                    </Form.Group>
                                    <div className='makeformsavebtnend'>
                                        <Button className='addmorepaddingforquestsubmit'>Save</Button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Addquestion