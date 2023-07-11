import React from 'react'
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { BiFootball } from "react-icons/bi";
const Defineleaguetype = () => {
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
                        <span className='breadgreenfootball'><BiFootball/></span>
                        <p className='sootfoliobreadclub'>Edit League</p>
                    </div>
                            </Col>
                            <Col md={5}></Col>
                        </Row>
                        <Row>
                            <Col md={6} className='setmarg'>
                                <Form>
                                <Form.Group className="mb-4" controlId="formGroupText">
                                        <Form.Label className="makelabelleft">Game Type</Form.Label>
                                        <Form.Control className='makeinputborder' type="text" placeholder="Game type" />
                                    </Form.Group>
                                    <Form.Group controlId="formFile" className="mb-4" classNamem="makelabelandinputinline">
                                        <Form.Label className="makelabelleft">Select Game Mode</Form.Label>
                                        <Form.Select className='makeinputborder' aria-label="Default select example">
                                            <option>Open this select menu</option>
                                            <option value="1">Idle (Player vs Machine)</option>
                                            <option value="2">Idle (Player vs Player)</option>
                                            <option value="3">Realtime (Player vs Player)</option>
                                            <option value="4">Multiplayer Realtime (5 Player vs 5 Player)</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group controlId="formFile" className="mb-4" classNamem="makelabelandinputinline">
                                        <Form.Label className="makelabelleft">Select League Title</Form.Label>
                                        <Form.Select className='makeinputborder' aria-label="Default select example">
                                            <option>Open this select menu</option>
                                            <option value="1">ICrypto Amateur Learners League</option>
                                            <option value="2">Crypto Super League </option>
                                            <option value="3">Crypto Expert League </option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formGroupText">
                                        <Form.Label className="makelabelleft">Investment Budget</Form.Label>
                                        <Form.Control className='makeinputborder' type="text" placeholder="$340" />
                                    </Form.Group>
                                    <Form.Group controlId="formFile" className="mb-4" classNamem="makelabelandinputinline">
                                        <Form.Label className="makelabelleft">Membership Type</Form.Label>
                                        <Form.Select className='makeinputborder' aria-label="Default select example">
                                            <option>Subsciption</option>
                                            <option value="1">Subsciption</option>
                                            <option value="2">Subsciption</option>
                                            <option value="3">Crypto Expert League </option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="switch">
                                        <Form.Label className="makelabelleft">Status</Form.Label>
                                        <Form.Check 
                                            type="switch"
                                            id="custom-switch"
                                            label="Shows game status on or off"
                                        />
                                    </Form.Group>
                                    <div className="addgapbetween">
                                    <Button href="/Dashboard/game/addnewleague" className='createclubbutton'>Add League Type</Button>
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

export default Defineleaguetype