import React from 'react'
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import "../Assets/Css/Addportfolioclub.css"
import InputGroup from 'react-bootstrap/InputGroup';
import { RiExternalLinkLine } from "react-icons/ri";
const Editportfolioinclub = () => {
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
                <p className='addportfolioinclubheadmain'>Edit Portfolio Club</p>
              </Col>
              <Col md={5}></Col>
            </Row>
            <Row>
              <Col md={6} className='setmarg'>
                <Form>
                  <Form.Group controlId="formFile" className="mb-4" classNamem="makelabelandinputinline">
                    <Form.Label className="makelabelleft">Coin Name</Form.Label>
                    <Form.Select className='makeinputborder' aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formGroupText">
                    <Form.Label className="makelabelleft">Number of Units</Form.Label>
                    <InputGroup className="mb-4">
                      <Button variant="outline-secondary" id="buttonnumberone">+</Button>
                      <Form.Control  className=" makeinputborderandmakeinputcenter" type="tel" placeholder="$35,000" />
                      <Button variant="outline-secondary" id="buttonnumbertwo">-</Button>

                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formGroupText">
                    <Form.Label className="makelabelleft">Price</Form.Label>
                    <InputGroup className="mb-3 linkbuttonright">
                      <Form.Control
                        className='makeinputborder'
                        placeholder="Pick price from Coinmarketcap.com"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <Button className='formgroupbuttojn' variant="outline-secondary" id="buttonlink">
                        <RiExternalLinkLine />
                      </Button>
                    </InputGroup>
                  </Form.Group>

                  <div className="addgapbetween">
                    <Button href="/Dashboard/game/defineleaguetype" className='discardbutton'> Save</Button>
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

export default Editportfolioinclub