import React from "react";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { images } from "../Components/Images";
import { FaSortAlphaUp } from "react-icons/fa";
import { BsFilter } from "react-icons/bs";
import Menu from "../Components/Menu";
import "../Assets/Css/User.css"
const Users = () => {
  return (
    <div>
    <Menu/>
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
        <Col xs={9} sm={9} md={9} lg={10} xl={10} style={{ marginTop: "30px" }} className=" addspaceatbottom">
          <Row className="addpaddinguser">
            <Col md={4}>
              <div className="usercardone">
                <p className="cardheqadinguser">2HRS+</p>
                <div className="headsubheadinlineusercard">
                  <p className="cardsubhead">Time</p>
                  <p className="cardsparagraph">Interaction Time</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="usercardtwo">
                <p className="cardheqadinguser">3960+</p>
                <div className="headsubheadinlineusercard">
                  <p className="cardsubhead">Visitors</p>
                  <p className="cardsparagraph">Active Site Visitors</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="usercardthree">
                <p className="cardheqadinguser">100+</p>
                <div className="headsubheadinlineusercard">
                  <p className="cardsubhead">Total Users</p>
                  <p className="cardsparagraph">Active Users</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={9}></Col>
            <Col md={3} className='makebuttonspacemanage'>
              <Button className='sortbtnmanage'><span className='sortmanagelogo'><FaSortAlphaUp /></span>Sort by </Button>
              <Button className='sortbtnmanage'><span className='sortmanagelogo'><BsFilter /></span>Filter </Button>
            </Col>
          </Row>
          <div className="addpaddinguser">
          <Row className="mt-3 ">
            <Col md={12} className="viewportsinglebg">
              <Col md={2} xs={2}>
                <div className='coinnameandlogoviewportinline'>
                  <Image src={images.person} width="40px" />
                  <p className='coinnameviewport'>Alen David</p>
                </div>
              </Col>
              <Col md={2} xs={2}>
                <p className='coinnameviewport'><span className="userrowtitle">User Name</span>ADX</p>
              </Col>
              <Col md={3} xs={2}>
                <p className='coinnameviewport'><span className="userrowtitle">Email</span>alen01@gmail.com</p>
              </Col>
              <Col md={2} xs={2}>
                <p className='coinnameviewport'><span className="userrowtitle">Joined Date</span>12-02-2023</p>
              </Col>
              <Col md={3} xs={2}>
                <div className="makeuserrowbtninline">
                  <Button className='userrowstatusbtn'>Active </Button>
                  <Button className='userrowstatusbtn'>Inactive </Button>
                  <Button className='userrowstatusbtn'>Edit</Button>
                </div>
              </Col>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={12} className="viewportsinglebg">
              <Col md={2} xs={2}>
                <div className='coinnameandlogoviewportinline'>
                  <Image src={images.person} width="40px" />
                  <p className='coinnameviewport'>Alen David</p>
                </div>
              </Col>
              <Col md={2} xs={2}>
                <p className='coinnameviewport'><span className="userrowtitle">User Name</span>ADX</p>
              </Col>
              <Col md={3} xs={2}>
                <p className='coinnameviewport'><span className="userrowtitle">Email</span>alen01@gmail.com</p>
              </Col>
              <Col md={2} xs={2}>
                <p className='coinnameviewport'><span className="userrowtitle">Joined Date</span>12-02-2023</p>
              </Col>
              <Col md={3} xs={2}>
                <div className="makeuserrowbtninline">
                  <Button className='userrowstatusbtn'>Active </Button>
                  <Button className='userrowstatusbtn'>Inactive </Button>
                  <Button className='userrowstatusbtn'>Edit</Button>
                </div>
              </Col>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={12} className="viewportsinglebg">
              <Col md={2} xs={2}>
                <div className='coinnameandlogoviewportinline'>
                  <Image src={images.person} width="40px" />
                  <p className='coinnameviewport'>Alen David</p>
                </div>
              </Col>
              <Col md={2} xs={2}>
                <p className='coinnameviewport'><span className="userrowtitle">User Name</span>ADX</p>
              </Col>
              <Col md={3} xs={2}>
                <p className='coinnameviewport'><span className="userrowtitle">Email</span>alen01@gmail.com</p>
              </Col>
              <Col md={2} xs={2}>
                <p className='coinnameviewport'><span className="userrowtitle">Joined Date</span>12-02-2023</p>
              </Col>
              <Col md={3} xs={2}>
                <div className="makeuserrowbtninline">
                  <Button className='userrowstatusbtn'>Active </Button>
                  <Button className='userrowstatusbtn'>Inactive </Button>
                  <Button className='userrowstatusbtn'>Edit</Button>
                </div>
              </Col>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={12} className="viewportsinglebg">
              <Col md={2} xs={2}>
                <div className='coinnameandlogoviewportinline'>
                  <Image src={images.person} width="40px" />
                  <p className='coinnameviewport'>Alen David</p>
                </div>
              </Col>
              <Col md={2} xs={2}>
                <p className='coinnameviewport'><span className="userrowtitle">User Name</span>ADX</p>
              </Col>
              <Col md={3} xs={2}>
                <p className='coinnameviewport'><span className="userrowtitle">Email</span>alen01@gmail.com</p>
              </Col>
              <Col md={2} xs={2}>
                <p className='coinnameviewport'><span className="userrowtitle">Joined Date</span>12-02-2023</p>
              </Col>
              <Col md={3} xs={2}>
                <div className="makeuserrowbtninline">
                  <Button className='userrowstatusbtn'>Active </Button>
                  <Button className='userrowstatusbtn'>Inactive </Button>
                  <Button className='userrowstatusbtn'>Edit</Button>
                </div>
              </Col>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={12} className="viewportsinglebg">
              <Col md={2} xs={2}>
                <div className='coinnameandlogoviewportinline'>
                  <Image src={images.person} width="40px" />
                  <p className='coinnameviewport'>Alen David</p>
                </div>
              </Col>
              <Col md={2} xs={2}>
                <p className='coinnameviewport'><span className="userrowtitle">User Name</span>ADX</p>
              </Col>
              <Col md={3} xs={2}>
                <p className='coinnameviewport'><span className="userrowtitle">Email</span>alen01@gmail.com</p>
              </Col>
              <Col md={2} xs={2}>
                <p className='coinnameviewport'><span className="userrowtitle">Joined Date</span>12-02-2023</p>
              </Col>
              <Col md={3} xs={2}>
                <div className="makeuserrowbtninline">
                  <Button className='userrowstatusbtn'>Active </Button>
                  <Button className='userrowstatusbtn'>Inactive </Button>
                  <Button className='userrowstatusbtn'>Edit</Button>
                </div>
              </Col>
            </Col>
          </Row>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Users;
