import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./../Assets/Css/mycard.css"
import {images} from "./../Components/Images"
const MyCard = () => {
  const progress="58";

  return (
    <Card >
      <Card.Body>
        <Row>
          <Col xs={6}>
            <div className="progress-bar-container" style={{ width: "100px", height: "100px" }}>
              <CircularProgressbar
                value={progress}
                text={`${progress}%`}
                strokeWidth={15}
                styles={buildStyles({
                  pathColor: "#00A500",
                  textColor: "#C1C1C1",
                  trailColor: "#F1F1F1",
                })}
              />
            </div>
          </Col>
          <Col xs={6}>
          <div className="card-content">
            <Card.Title>Users Registered</Card.Title>
            <div className="card-text">
            <Card.Text>
              <span className="text-left">50%</span>
              <span className="text-right">
                <img src={images.map}/>
              </span>
            </Card.Text>
          </div>
          </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
