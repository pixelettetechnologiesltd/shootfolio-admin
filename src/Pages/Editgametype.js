import React from 'react'
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BiFootball } from "react-icons/bi";
import Form from 'react-bootstrap/Form';
const Editgametype = () => {
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
                                    <p className='sootfoliobreadclub'>Edit Game Type</p>
                                </div>
                            </Col>
                            <Col md={5}></Col>
                        </Row>
                        <Row>
                            <Col md={6} className='mt-4 mb-5 setmarg'>
                                <Form>
                                    <Form.Group controlId="formFile" className="mb-4 mt-4" >
                                        <Form.Label className="makelabelleft">Icon</Form.Label>
                                        <Form.Control className='removebgupload' type="file" />
                                    </Form.Group>

                                    <Form.Group className="mb-4" controlId="formGroupText">
                                        <Form.Label className="makelabelleft">Game Title</Form.Label>
                                        <Form.Control className='makeinputborder' type="text" placeholder="Game Title" />
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formGroupText">
                                        <Form.Label className="makelabelleft">Demo Link</Form.Label>
                                        <Form.Control className='makeinputborder' type="text" placeholder="www.youtube/demo.com" />
                                    </Form.Group>
                                    <Form.Group controlId="formFile" className="mb-4" classNamem="makelabelandinputinline">
                                        <Form.Label className="makelabelleft">Status</Form.Label>
                                        <Form.Select className='makeinputborder' aria-label="Default select example">
                                            <option>Active</option>
                                            <option value="1">Inactive</option>
                                            <option value="2">Coming soon</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="switch">
                                        <Form.Label className="makelabelleft">Quiz Access</Form.Label>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            label="Quiz access on or off"
                                        />
                                    </Form.Group>
                                    <div className="addgapbetween">
                                        <Button className='createclubbutton'>Save</Button>
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

export default Editgametype