import React, {useState} from 'react'
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { BiFootball } from "react-icons/bi";
import "../Assets/Css/Addsubscriptionplan.css"
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import {FaRegEdit } from "react-icons/fa";
import Settingpop from '../Components/Settingpop';
const Addsubscriptionplan = () => {
    const[buttonPopupOne, setButtonPopupOne]= useState(false);
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
                    <Col xs={9} sm={9} md={9} lg={10} xl={10} style={{ marginTop: "30px" }}>

                        <Row className='setpaddinginnerpage'>
                            <Col md={4}>
                                <div className='makebreadinrow'>
                                    <span className='breadgreenfootball'><BiFootball /></span>
                                    <p className='sootfoliobreadclub'>Add Subscription Plans</p>
                                </div>
                            </Col>
                            <Col md={5}></Col>
                            <Col md={3}>
                            </Col>
                        </Row>
                        <Row className='setpaddinginnerpage mt-5 mb-5' >
                            <Col md={6}>
                                <Form>
                                    <Form.Group className="mb-4" controlId="formGroupText">
                                        <Form.Label className="makelabelleft">Plan Name</Form.Label>
                                        <Form.Control className='makeinputborder' type="text" placeholder="Platinum Plan" />
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formGroupText">
                                        <Form.Label className="makelabelleft">Price</Form.Label>
                                        <Form.Control className='makeinputborder' type="text" placeholder="$300" />
                                    </Form.Group>
                                    <Form.Group className="mb-4 mt-5" controlId="formGroupText">
                                        <Form.Label className="makelabelleft">Pick Features</Form.Label>
                                        {['checkbox'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <InputGroup className='positionrelsetplan'>
                                                    <Form.Check className='makecheckbackground'
                                                        type={type}
                                                        id={`plansecond-${type}`}
                                                        label="Crypto Amateur Learners League"
                                                    />
                                                    <Button variant="outline-secondary" id="planselectone">
                                                        <FaRegEdit />
                                                    </Button>
                                                </InputGroup>
                                                <InputGroup className='positionrelsetplan mt-3'>
                                                    <Form.Check className='makecheckbackground'
                                                        type={type}
                                                        id={`plansecond-${type}`}
                                                        label="Crypto Super League"
                                                    />
                                                    <Button variant="outline-secondary" id="planselectone">
                                                        <FaRegEdit />
                                                    </Button>
                                                </InputGroup>
                                                <InputGroup className='positionrelsetplan mt-3'>
                                                    <Form.Check className='makecheckbackground'
                                                        type={type}
                                                        id={`plansecond-${type}`}
                                                        label="Crypto Expert League"
                                                    />
                                                    <Button variant="outline-secondary" id="planselectone">
                                                        <FaRegEdit />
                                                    </Button>
                                                </InputGroup>
                                            </div>
                                        ))}
                                    </Form.Group>
                                    <div className='makeplanbuttonend'>
                                        <Button onClick={()=> setButtonPopupOne (true)} className='planformsubmitbutton'>Publish Plan</Button></div>
                                </Form>
                                <Settingpop className="makeplanpopinline"  trigger={buttonPopupOne} setTrigger={setButtonPopupOne}>
                                    <p className='planppoptext'>Your Plan for Platinum subscription is created. Do you want to live it on website</p>
                                    <Button className='planpopgolive'>Go Live</Button>
                                </Settingpop>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Addsubscriptionplan