import React, { useState, useEffect } from "react";
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
  UpdateUserStatus,
  GetAllUser,
  clearErrors,
  clearMessages,
} from "./../storeRedux/actions";
import { Puff } from "react-loader-spinner";
import Pagination from "@mui/material/Pagination";


const Users = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [page, setPage] = useState(1);
  const {
    errors: error,
    message,
    customMessage,
    sessionExpireError,
    loading,
    user,
    totalPages,
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
    if (customMessage.length > 0) {
      toast.success(customMessage);
      dispatch(clearMessages());
    }
  }, [error, sessionExpireError, message, customMessage]);

  useEffect(() => {
    dispatch(GetAllUser(page));

  }, [page]);

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
                            {data.createdAt &&
                              new Date(data.createdAt).toLocaleDateString()}
                          </p>
                        </Col>
                        <Col md={3} xs={2}>
                          <div className="makeuserrowbtninline">
                          {data.status === 'inactive' ? (
                            <Button
                              className="userrowstatusbtn"
                              disabled={loading ? true : false}
                              onClick={() =>
                                dispatch(
                                  UpdateUserStatus(
                                    { status: "active" },
                                    data.id
                                  )
                                )
                              }
                            >
                              Active{" "}
                            </Button>
                            ) : (
                            <Button
                              className="userrowstatusbtn"
                              onClick={() =>
                                dispatch(
                                  UpdateUserStatus(
                                    { status: "inactive" },
                                    data.id
                                  )
                                )
                              }
                              disabled={loading ? true : false}
                            >
                              Inactive{" "}
                            </Button>
                            )}
                            <Button
                              className="userrowstatusbtn"
                              onClick={() =>
                                navigate(`/Dashboard/setting/${data.id}`)
                              }
                            >
                              Edit
                            </Button>
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
            {loading
              ? ""
              : user.length > 0 && (
                  <Pagination
                    
                    variant="outlined"
                    color="secondary"
                    count={totalPages}
                    page={page}
                    size="large"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "2rem",
                    }}
                    showFirstButton
                    showLastButton
                    onChange={(e, value) => setPage(value)}
                  />
                )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Users;
