import React from 'react'
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { images } from '../Components/Images';
import { Link } from 'react-router-dom';
import { BiFootball } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import "../Assets/Css/Subscription.css"
const Subscription = () => {
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
                                    <p className='sootfoliobreadclub'>Subscription Plans</p>
                                </div>
                            </Col>
                            <Col md={5}></Col>
                            <Col md={3} className='makebuttonalignend'>
                                <Link to="/Dashboard/addsubscriptionplan"><Button className='addnewshhotfolioclubbutton'> + Add New Plan</Button></Link>
                            </Col>
                        </Row>
                        <Row  className='addpaddingplans'>
                            <Col md={4}>
                                <div className='plancard'>
                                    <div className='cardhead'>
                                        <Image src={images.planpic} width="70px" />
                                        <div className='planmeta'>
                                            <p className='planname'>Silver plan</p>
                                            <p className='planprice'>Free</p>
                                        </div>
                                    </div>
                                    <div className='cardbody mt-4'>
                                        <p className='planbenifits'><span className='checkwithplanbenifits'><AiOutlineCheck /></span>50 Positions</p>
                                        <p className='planbenifits mt-4'><span className='checkwithplanbenifits'><AiOutlineCheck /></span>Max 5 selected coins</p>
                                        <p className='planbenifits mt-4'><span className='checkwithplanbenifits'><AiOutlineCheck /></span>Exchange arbitrage</p>
                                    </div>
                                    <div className='cardfooter mt-5'>
                                        <Link to="/Dashboard/editsubscriptionplan"><Button className='planbutton'>Edit Plan</Button></Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='plancard'>
                                    <div className='cardhead'>
                                        <Image src={images.planpic} width="70px" />
                                        <div className='planmeta'>
                                            <p className='planname'>Golden plan</p>
                                            <p className='planprice'>$100 pr month</p>
                                        </div>
                                    </div>
                                    <div className='cardbody mt-4'>
                                        <p className='planbenifits'><span className='checkwithplanbenifits'><AiOutlineCheck /></span>50 Positions</p>
                                        <p className='planbenifits mt-4'><span className='checkwithplanbenifits'><AiOutlineCheck /></span>Max 5 selected coins</p>
                                        <p className='planbenifits mt-4'><span className='checkwithplanbenifits'><AiOutlineCheck /></span>Exchange arbitrage</p>
                                    </div>
                                    <div className='cardfooter mt-5'>
                                    <Link to="/Dashboard/editsubscriptionplan"><Button className='planbutton'>Edit Plan</Button></Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='plancard'>
                                    <div className='cardhead'>
                                        <Image src={images.planpic} width="70px" />
                                        <div className='planmeta'>
                                            <p className='planname'>Platinum plan</p>
                                            <p className='planprice'>$200 pr month</p>
                                        </div>
                                    </div>
                                    <div className='cardbody mt-4'>
                                        <p className='planbenifits'><span className='checkwithplanbenifits'><AiOutlineCheck /></span>1000 Positions</p>
                                        <p className='planbenifits mt-4'><span className='checkwithplanbenifits'><AiOutlineCheck /></span>Max 15 selected coins</p>
                                        <p className='planbenifits mt-4'><span className='checkwithplanbenifits'><AiOutlineCheck /></span>All access to game features</p>
                                    </div>
                                    <div className='cardfooter mt-5'>
                                    <Link to="/Dashboard/editsubscriptionplan"><Button className='planbutton'>Edit Plan</Button></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Subscription