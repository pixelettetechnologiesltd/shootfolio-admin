import React from "react";
import { images } from "./Images";
import { Container, Row, Col, Nav, Card, Form } from "react-bootstrap";
const Account = () => {
  return (
    <Container>
      <Row>
        <div className="d-flex justify-content-between">
          <div className="image-with-name">
            <img src={images.cover} alt="Cover" className="image" />
            <div className="name">John Doe</div>
          </div>
          <div className="button-container">
            <button className="button">Upload new picture</button>
          </div>
        </div>
      </Row>
      <Row>
        <div className="under_border"></div>
      </Row>
      <Row>
        <Col lg={6} xs={6} md={6} xl={6}>
          <p style={{ margin: "10px", color: "#AD00D8" }}>Basic Information</p>

          <Form className="mt-5">
            <Row>
              <Col lg={6} xs={6} md={6} xl={6}>
                <Form.Group className="mb-3" controlId="validationCustom01">
                  <Form.Control
                    className="makefieldgightmore"
                    type="name"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </Form.Group>
              </Col>
              <Col lg={6} xs={6} md={6} xl={6}>
                <Form.Group className="mb-3" controlId="validationCustom02">
                  <Form.Control
                    className="makefieldgightmore"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </Form.Group>
              </Col>
              <Col lg={12} xs={12} md={12} xl={12}>
                <Form.Group className="mb-3" controlId="validationCustom02">
                  <Form.Control
                    as="textarea"
                    name="biography"
                    placeholder="Say something about you..."
                    required
                    className="custom-textarea"
                  />
                </Form.Group>
              </Col>
              <div className="makebtnsinrow">
                <div className="submitbtn">
                  <button className="formsubmitbutton" type="submit">
                    Save Change
                  </button>
                </div>
              </div>
            </Row>
          </Form>
        </Col>
        <Col lg={6} xs={6} md={6} xl={6}>
          <p style={{ margin: "10px", color: "#AD00D8" }}>More Information</p>
          <Row style={{ marginTop: "45px" }}>
            <Col lg={6} xs={12} md={12} xl={6}>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  className="makefieldgightmore"
                  type="email"
                  name="email"
                  placeholder="Role"
                  required
                />
              </Form.Group>
            </Col>
            <Col lg={6} xs={12} md={12} xl={6}>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  className="makefieldgightmore"
                  type="email"
                  name="email"
                  placeholder="Phone Number"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row >
            <Col lg={6} xs={12} md={12} xl={6}>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  className="makefieldgightmore"
                  type="email"
                  name="email"
                  placeholder="Your Location"
                  required
                />
              </Form.Group>
            </Col>
            <Col lg={6} xs={12} md={12} xl={6}>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  className="makefieldgightmore"
                  type="email"
                  name="email"
                  placeholder="Example.com"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
