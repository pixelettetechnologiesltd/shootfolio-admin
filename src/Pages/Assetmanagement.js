import React from 'react'
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { images } from '../Components/Images';
import "../Assets/Css/Assetmanagement.css"
import { FaSortAlphaUp } from "react-icons/fa";
import { BsFilter } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiFootball } from "react-icons/bi";
import Dropdown from 'react-bootstrap/Dropdown';
const Assetmanagement = () => {
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
                                    <p className='sootfoliobreadclub'>Assets Management</p>
                                </div>
                            </Col>
                            <Col md={5}></Col>
                            <Col md={3} className='makebuttonspacemanage'>
                                <Button className='sortbtnmanage'><span className='sortmanagelogo'><FaSortAlphaUp /></span>Sort by </Button>
                                <Button className='sortbtnmanage'><span className='sortmanagelogo'><BsFilter /></span>Filter </Button>
                            </Col>
                        </Row>
                        <div className="mt-5 setpaddinginnerpage">
                            <Container className="makedisplayyinblockviewport"  >
                                <Row>
                                    <Col md={12} className="makeinrowtitlesviewportfolio">
                                        <Col md={2} xs={2}>
                                            <p className="joinleaguetitles">Name</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className="joinleaguetitles">Symbol</p>
                                        </Col>
                                        <Col md={3} xs={2}>
                                            <p className="joinleaguetitles">Contract Address</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className="joinleaguetitles">Price_USD</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className="joinleaguetitles">Status</p>
                                        </Col>
                                        <Col md={1} xs={2}>
                                            <p className="joinleaguetitles">Action</p>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col md={12} className="viewportsinglebg">
                                        <Col md={2} xs={2}>
                                            <div className='coinnameandlogoviewportinline'>
                                                <Image src={images.ether} />
                                                <p className='coinnameviewport'>Ethereum</p>
                                            </div>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>ETH</p>
                                        </Col>
                                        <Col md={3} xs={2}>
                                            <p className='coinnameviewport'>0xa8...onG907</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>$1362</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>Active</p>
                                        </Col>
                                        <Col md={1} xs={2}>
                                            <div className="makebuttonendviewport paddrightrowmanage">
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" className='managepage' id="dropdown-basic">
                                                        <RxHamburgerMenu/>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col md={12} className="viewportsinglebg">
                                        <Col md={2} xs={2}>
                                            <div className='coinnameandlogoviewportinline'>
                                                <Image src={images.avalan} />
                                                <p className='coinnameviewport'>Avalanche</p>
                                            </div>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>AVAX</p>
                                        </Col>
                                        <Col md={3} xs={2}>
                                            <p className='coinnameviewport'>0xa8...onG907</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>$120</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>Active</p>
                                        </Col>
                                        <Col md={1} xs={2}>
                                            <div className="makebuttonendviewport paddrightrowmanage">
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" className='managepage' id="dropdown-basic">
                                                        <RxHamburgerMenu/>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col md={12} className="viewportsinglebg">
                                        <Col md={2} xs={2}>
                                            <div className='coinnameandlogoviewportinline'>
                                                <Image src={images.ether} />
                                                <p className='coinnameviewport'>Ethereum</p>
                                            </div>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>ETH</p>
                                        </Col>
                                        <Col md={3} xs={2}>
                                            <p className='coinnameviewport'>0xa8...onG907</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>$1362</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>Active</p>
                                        </Col>
                                        <Col md={1} xs={2}>
                                            <div className="makebuttonendviewport paddrightrowmanage">
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" className='managepage' id="dropdown-basic">
                                                        <RxHamburgerMenu/>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col md={12} className="viewportsinglebg">
                                        <Col md={2} xs={2}>
                                            <div className='coinnameandlogoviewportinline'>
                                                <Image src={images.avalan} />
                                                <p className='coinnameviewport'>Avalanche</p>
                                            </div>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>AVAX</p>
                                        </Col>
                                        <Col md={3} xs={2}>
                                            <p className='coinnameviewport'>0xa8...onG907</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>$120</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>Active</p>
                                        </Col>
                                        <Col md={1} xs={2}>
                                            <div className="makebuttonendviewport paddrightrowmanage">
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" className='managepage' id="dropdown-basic">
                                                        <RxHamburgerMenu/>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col md={12} className="viewportsinglebg">
                                        <Col md={2} xs={2}>
                                            <div className='coinnameandlogoviewportinline'>
                                                <Image src={images.ether} />
                                                <p className='coinnameviewport'>Ethereum</p>
                                            </div>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>ETH</p>
                                        </Col>
                                        <Col md={3} xs={2}>
                                            <p className='coinnameviewport'>0xa8...onG907</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>$1362</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>Active</p>
                                        </Col>
                                        <Col md={1} xs={2}>
                                            <div className="makebuttonendviewport paddrightrowmanage">
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" className='managepage' id="dropdown-basic">
                                                        <RxHamburgerMenu/>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col md={12} className="viewportsinglebg">
                                        <Col md={2} xs={2}>
                                            <div className='coinnameandlogoviewportinline'>
                                                <Image src={images.avalan} />
                                                <p className='coinnameviewport'>Avalanche</p>
                                            </div>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>AVAX</p>
                                        </Col>
                                        <Col md={3} xs={2}>
                                            <p className='coinnameviewport'>0xa8...onG907</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>$120</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>Active</p>
                                        </Col>
                                        <Col md={1} xs={2}>
                                            <div className="makebuttonendviewport paddrightrowmanage">
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" className='managepage' id="dropdown-basic">
                                                        <RxHamburgerMenu/>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
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

export default Assetmanagement