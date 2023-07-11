import React, { useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { images } from "../Components/Images";
import { FaSortAlphaUp } from "react-icons/fa";
import { BsFilter } from "react-icons/bs";
import Menu from "../Components/Menu";
import "../Assets/Css/User.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllUser,
  clearErrors,
  clearMessages,
} from "./../storeRedux/actions";
import { Puff } from "react-loader-spinner";
const Users = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    errors: error,
    message,
    sessionExpireError,
    loading,
    user,
  } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (error.length > 0) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (sessionExpireError !== "") {
      toast.error(sessionExpireError);
      dispatch(clearErrors());
      setTimeout(() => navigate("/"), 1000);
    }
    if (message !== "") {
      toast.success(message);
      dispatch(clearMessages());
    }
  }, [error, sessionExpireError, message]);
  useEffect(() => {
    dispatch(GetAllUser());
  }, []);
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
            className=" addspaceatbottom"
          >
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
              <Col md={3} className="makebuttonspacemanage">
                <Button className="sortbtnmanage">
                  <span className="sortmanagelogo">
                    <FaSortAlphaUp />
                  </span>
                  Sort by{" "}
                </Button>
                <Button className="sortbtnmanage">
                  <span className="sortmanagelogo">
                    <BsFilter />
                  </span>
                  Filter{" "}
                </Button>
              </Col>
            </Row>
            <div className="addpaddinguser">
              {loading ? (
                <Puff
                  height="60"
                  width="60"
                  radius="6"
                  color="white"
                  ariaLabel="loading"
                  wrapperStyle
                  wrapperClass
                />
              ) : user.length > 0 ? (
                user.map((data, ind) => {
                  return (
                    <Row className="mt-3" key={ind}>
                      <Col md={12} className="viewportsinglebg">
                        <Col md={2} xs={2}>
                          <div className="coinnameandlogoviewportinline">
                            <Image src={images.person} width="40px" />
                            <p className="coinnameviewport">
                              {data.name && data.name}
                            </p>
                          </div>
                        </Col>
                        <Col md={2} xs={2}>
                          <p className="coinnameviewport">
                            <span className="userrowtitle">User Name</span>
                            {data.userName && data.userName}
                          </p>
                        </Col>
                        <Col md={3} xs={2}>
                          <p className="coinnameviewport">
                            <span className="userrowtitle">Email</span>
                            {data.email && data.email}
                          </p>
                        </Col>
                        <Col md={2} xs={2}>
                          <p className="coinnameviewport">
                            <span className="userrowtitle">Joined Date</span>
                            {data.createdAt && data.createdAt}
                          </p>
                        </Col>
                        <Col md={3} xs={2}>
                          <div className="makeuserrowbtninline">
                            <Button className="userrowstatusbtn">
                              Active{" "}
                            </Button>
                            <Button className="userrowstatusbtn">
                              Inactive{" "}
                            </Button>
                            <Button className="userrowstatusbtn">Edit</Button>
                          </div>
                        </Col>
                      </Col>
                    </Row>
                  );
                })
              ) : (
                ""
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Users;
