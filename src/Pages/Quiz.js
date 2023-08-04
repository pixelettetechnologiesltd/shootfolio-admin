import React from 'react'
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { BiFootball } from "react-icons/bi";
import "../Assets/Css/Addquestion.css"
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from "react-bootstrap";
const Quiz = () => {
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
                                    <p className="sootfoliobreadclub">Quiz</p>
                                </div>
                            </Col>
                            <Col md={5}></Col>
                            <Col md={3} className="makebuttonalignend">
                <Link to="/addquestion">
                  <Button className="addnewshhotfolioclubbutton">
                    {" "}
                    + Add Question
                  </Button>
                </Link>
              </Col>
                        </Row>
                       <Row>
                            <Col md={6}>
                                <div className="radio-input">
                                    <div className="info">
                                        <span className="question">What is Juventus’ nickname?</span>
                                    </div>
                                    <input type="radio" id="value-1" name="value-radio" value="value-1" />
                                    <label for="value-1">The Old Lady</label>
                                    <input type="radio" id="value-2" name="value-radio" value="value-2" />
                                    <label for="value-2">Swiss</label>
                                    <input type="radio" id="value-3" name="value-radio" value="value-3" />
                                    <label for="value-3">Dena</label>
                                    <input type="radio" id="value-4" name="value-radio" value="value-4" />
                                    <label for="value-4">Roger</label>
                                    <span class="result success">Congratulations!</span>
                                    <span class="result error">Wrong answer</span>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="radio-input">
                                    <div className="info">
                                        <span className="question">What is Juventus’ nickname?</span>
                                    </div>
                                    <input type="radio" id="value-1" name="value-radio" value="value-1" />
                                    <label for="value-1">The Old Lady</label>
                                    <input type="radio" id="value-2" name="value-radio" value="value-2" />
                                    <label for="value-2">Swiss</label>
                                    <input type="radio" id="value-3" name="value-radio" value="value-3" />
                                    <label for="value-3">Dena</label>
                                    <input type="radio" id="value-4" name="value-radio" value="value-4" />
                                    <label for="value-4">Roger</label>
                                    <span class="result success">Congratulations!</span>
                                    <span class="result error">Wrong answer</span>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
    </div>
  )
}

export default Quiz