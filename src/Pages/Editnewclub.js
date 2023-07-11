import React from 'react'
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Assets/Css/Addnewclub.css"
import Form from 'react-bootstrap/Form';
const Editclub = () => {
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
                                <p className='addnewclubheading'>Edit Club</p>
                            </Col>
                            <Col md={5}></Col>
                        </Row>
                        <Row>
                            <Col md={6} className='setmarg'>
                                <Form>
                                    <Form.Group controlId="formFile" className="mb-4" >
                                        <Form.Label className="makelabelleft">Club Logo</Form.Label>
                                        <Form.Control className='removebgupload' type="file" />
                                    </Form.Group>
                                    <Form.Group controlId="formFile" className="mb-4" classNamem="makelabelandinputinline">
                                        <Form.Label className="makelabelleft">Select Game Type</Form.Label>
                                        <Form.Select className='makeinputborder' aria-label="Default select example">
                                            <option>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formGroupText">
                                        <Form.Label className="makelabelleft">Title</Form.Label>
                                        <Form.Control className='makeinputborder' type="text" placeholder="Pico Club" />
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formGroupText">
                                        <Form.Label className="makelabelleft">Symbol</Form.Label>
                                        <Form.Control className='makeinputborder' type="text" placeholder="PFC" />
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
                                        <Button className='discardbutton'> Discard</Button>
                                    <Button href="/Dashboard/game/addportfolioclub" className='createclubbutton'>Create Club</Button>
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

export default Editclub