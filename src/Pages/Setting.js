import React, {useState} from "react";
import Sidebar from "../Components/Sidebar";
import { Row, Col, Container, Button } from "react-bootstrap";
import "../Assets/Css/Setting.css";
import Menu from "../Components/Menu";
import { Form } from "react-bootstrap";
import Settingpop from "../Components/Settingpop";
const Setting = () => {
    const [buttonPopup, setButtonPopup] =useState(false);
  return (
    <div>
      <Menu />
      <Container fluid className="sidebar">
        <Row>
          <Col
            xs={3}
            sm={3}
            md={3}
            lg={2}
            xl={2}
            style={{ backgroundColor: "#1B1B1B" }}
            className="h-100"
          >
            <Sidebar></Sidebar>
          </Col>
          <Col xs={9} sm={9} md={9} lg={10} xl={10} style={{ marginTop: "50px" }} className="pb-5">
            <Row className='setpaddinginnerpage'>
              <Col md={4}>
                <div className='makebreadinrow'>
                  <p className='sootfoliobreadclub'>Settings</p>
                </div>
              </Col>
              <Col md={5}></Col>
              <Col md={3}>
              </Col>
            </Row>
            <div className="mt-5 setpaddinginnerpage">
              <Container className="makedisplayyinblockviewport"  >
                <Row>
                  <Col md={12} className="makeinrowtitlesviewportfolio">
                    <Col md={3} xs={3}>
                      <p className="joinleaguetitles">Slug</p>
                    </Col>
                    <Col md={3} xs={3}>
                      <p className="joinleaguetitles">Value</p>
                    </Col>
                    <Col md={3} xs={3}>
                    </Col>
                    <Col md={3} xs={3}>
                    </Col>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col md={12} className="viewportsinglebg">
                    <Col md={3} xs={3}>
                      <p className='nameandsr'>
                        0.33252566
                      </p>
                    </Col>
                    <Col md={3} xs={3}>
                      <p className='nameandsr'>
                        0.33252566
                      </p>
                    </Col>
                    <Col md={3} xs={3}>
                    </Col>

                    <Col md={3} xs={3}>
                      <div className="makebuttonendviewport">
                      <Button onClick={()=> setButtonPopup (true)} className="viewporteditbutton">Edit</Button>
                      </div>
                    </Col>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col md={12} className="viewportsinglebg">
                    <Col md={3} xs={3}>
                      <p className='nameandsr'>
                        0.33252566
                      </p>
                    </Col>
                    <Col md={3} xs={3}>
                      <p className='nameandsr'>
                        0.33252566
                      </p>
                    </Col>
                    <Col md={3} xs={3}>
                    </Col>

                    <Col md={3} xs={3}>
                      <div className="makebuttonendviewport">
                      <Button onClick={()=> setButtonPopup (true)} className="viewporteditbutton">Edit</Button>
                      </div>
                    </Col>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col md={12} className="viewportsinglebg">
                    <Col md={3} xs={3}>
                      <p className='nameandsr'>
                        0.33252566
                      </p>
                    </Col>
                    <Col md={3} xs={3}>
                      <p className='nameandsr'>
                        0.33252566
                      </p>
                    </Col>
                    <Col md={3} xs={3}>
                    </Col>

                    <Col md={3} xs={3}>
                      <div className="makebuttonendviewport">
                      <Button onClick={()=> setButtonPopup (true)} className="viewporteditbutton">Edit</Button>
                      </div>
                    </Col>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col md={12} className="viewportsinglebg">
                    <Col md={3} xs={3}>
                      <p className='nameandsr'>
                        0.33252566
                      </p>
                    </Col>
                    <Col md={3} xs={3}>
                      <p className='nameandsr'>
                        0.33252566
                      </p>
                    </Col>
                    <Col md={3} xs={3}>
                    </Col>

                    <Col md={3} xs={3}>
                      <div className="makebuttonendviewport">
                        <Button onClick={()=> setButtonPopup (true)} className="viewporteditbutton">Edit</Button>
                      </div>
                    </Col>
                    <Settingpop trigger={buttonPopup} setTrigger={setButtonPopup}>
                      <div className="popuponeditclick mt-5">
                        <div className="sluginrpw">
                          <p className="slugtitle">Slug</p>
                          <p className="slugtitle">0.33252566</p>
                        </div>
                        <div className="slugchangeform ">
                          <Form>
                            <Form.Group controlId="formGridtext">
                              <Form.Label className="slugtitle mb-3">Value</Form.Label>
                              <Form.Control placeholder="0.36522456" />
                            </Form.Group>
                            <div className="makeformsettingbuttonset">
                            <Button className='savesettingbuttonpop'>Save</Button>
                            </div>
                          </Form>
                        </div>
                      </div>
                    </Settingpop>
                  </Col>
                </Row>

              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Setting;
