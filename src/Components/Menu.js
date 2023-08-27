import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "../Assets/Css/Menu.css";
import { images } from "../Components/Images";
import { BiBell } from "react-icons/bi";
const Menu = () => {
  const admin = JSON.parse(sessionStorage.getItem("admin"));
  return (
    <div className="navbg">
      <Row className="justify">
        <Col md={2} xs={3}>
          <a className="removelinefromlogo" href="/">
            <p className="logohead">Shootfolio</p>
          </a>
        </Col>
        <Col md={5} xs={4} className="p-0"></Col>
        <Col md={2} xs={0}></Col>
        <Col md={3} xs={5}>
          <div className="makemaininrow">
            <div className="makemaininrow">
              <div className="profilepic">
                <Image src={images.ellipse} />
              </div>
              <div className="namerole">
                <p className="usernamemen">{admin?.name && admin.name}</p>
                <p className="userrolemen">Admin</p>
              </div>
            </div>
            <div>
              <div className="notificationbg">
                <span className="bellicon">
                  <BiBell />
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Menu;
