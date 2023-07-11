import React from 'react'
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { images } from '../Components/Images';
import { Link } from 'react-router-dom';
import "../Assets/Css/ViewPortfolio.css"
const Viewportfolio = () => {
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
                                    <Image src={images.clubone} width="60px" />
                                    <p className='sootfoliobreadclub'>Pico Clubs</p>
                                </div>
                            </Col>
                            <Col md={5}></Col>
                            <Col md={3} className='makebuttonalignend'>
                                <Link to="/Dashboard/game/addportfolioclub"><Button className='addnewshhotfolioclubbutton'> + Add New Portfolio</Button></Link>
                            </Col>
                        </Row>
                        <div className="mt-5 setpaddinginnerpage">
                            <Container className="makedisplayyinblockviewport"  >
                                <Row>
                                    <Col md={12} className="makeinrowtitlesviewportfolio">
                                        <Col md={2} xs={2}>
                                            <p className="joinleaguetitles">User Name</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className="joinleaguetitles">Coin</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className="joinleaguetitles">Symbol</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className="joinleaguetitles">Quantity</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className="joinleaguetitles">Price</p>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col md={12} className="viewportsinglebg">
                                        <Col md={2} xs={2}>
                                            <p className='nameandsr'>
                                                <span className='srviewport'>1-</span> David
                                            </p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <div className='coinnameandlogoviewportinline'>
                                                <Image src={images.ether} />
                                                <p className='coinnameviewport'>Ethereum</p>
                                            </div>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>ETH</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>34</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>$1362</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <div className="makebuttonendviewport">
                                                <Link to="/Dashboard/game/Editportfolioclub"><Button className="viewporteditbutton">Edit</Button></Link>
                                            </div>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col md={12} className="viewportsinglebg">
                                        <Col md={2} xs={2}>
                                            <p className='nameandsr'>
                                                <span className='srviewport'>2-</span> Alax
                                            </p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <div className='coinnameandlogoviewportinline'>
                                                <Image src={images.avalan} />
                                                <p className='coinnameviewport'>Avalanche</p>
                                            </div>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>AVAX</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>925</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>$96</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <div className="makebuttonendviewport">
                                            <Link to="/Dashboard/game/Editportfolioclub"><Button className="viewporteditbutton">Edit</Button></Link>
                                            </div>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col md={12} className="viewportsinglebg">
                                        <Col md={2} xs={2}>
                                            <p className='nameandsr'>
                                                <span className='srviewport'>3-</span> Stevan
                                            </p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <div className='coinnameandlogoviewportinline'>
                                                <Image src={images.ether} />
                                                <p className='coinnameviewport'>Ethereum</p>
                                            </div>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>ETH</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>34</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>$1362</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <div className="makebuttonendviewport">
                                            <Link to="/Dashboard/game/Editportfolioclub"><Button className="viewporteditbutton">Edit</Button></Link>
                                            </div>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col md={12} className="viewportsinglebg">
                                        <Col md={2} xs={2}>
                                            <p className='nameandsr'>
                                                <span className='srviewport'>4-</span> Monto
                                            </p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <div className='coinnameandlogoviewportinline'>
                                                <Image src={images.avalan} />
                                                <p className='coinnameviewport'>Avalanche</p>
                                            </div>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>AVAX</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>925</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>$96</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <div className="makebuttonendviewport">
                                            <Link to="/Dashboard/game/Editportfolioclub"><Button className="viewporteditbutton">Edit</Button></Link>
                                            </div>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col md={12} className="viewportsinglebg">
                                        <Col md={2} xs={2}>
                                            <p className='nameandsr'>
                                                <span className='srviewport'>5-</span> Bravo
                                            </p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <div className='coinnameandlogoviewportinline'>
                                                <Image src={images.ether} />
                                                <p className='coinnameviewport'>Ethereum</p>
                                            </div>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>ETH</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>34</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <p className='coinnameviewport'>$1362</p>
                                        </Col>
                                        <Col md={2} xs={2}>
                                            <div className="makebuttonendviewport">
                                            <Link to="/Dashboard/game/Editportfolioclub"><Button className="viewporteditbutton">Edit</Button></Link>
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

export default Viewportfolio