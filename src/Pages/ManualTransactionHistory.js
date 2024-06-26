import React, { useState, useEffect } from "react";
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "../Assets/Css/ManualTransectionHistory.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllTransactionHistory,
  UpdateCryptoTransStatus,
  clearErrors,
  clearMessages,
} from "./../storeRedux/actions";
import { Puff } from "react-loader-spinner";
import Pagination from "@mui/material/Pagination";

const ManualTransactionHistory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [page, setPage] = useState(1);
  const {
    errors: error,
    message,
    cryptoTransactions,
    sessionExpireError,
    loading,
    totalPages,
  } = useSelector((state) => state.subscriptionReducer);

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
    dispatch(GetAllTransactionHistory(page));
  }, [page]);

  const handleRejectStatus = (id) => {
    let result = { status: "Reject" };
    dispatch(UpdateCryptoTransStatus(result, id));
  };

  const handleAcceptStatus = (id) => {
    let result = { status: "Approve" };
    dispatch(UpdateCryptoTransStatus(result, id));
  };
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
          >
            <Row className="setpaddinginnerpage">
              <Col md={6}>
                <p className="sootfoliobreadclub">Manual Transaction history</p>
              </Col>
              <Col md={5}></Col>
            </Row>
            <div className="mt-5 setpaddinginnerpage">
              <Container className="makedisplayyinblockviewport">
              <Row>
                  <Col md={12} className="makeinrowtitlesviewportfolio">
                    <Col md={2} xs={2}>
                      <p className="joinleaguetitles">Name</p>
                    </Col>
                    <Col md={1} xs={1}>
                      <p className="joinleaguetitles">Plan</p>
                    </Col>
                    <Col md={2} xs={2}>
                      <p className="joinleaguetitles">Payment Method</p>
                    </Col>
                    <Col md={4} xs={4}>
                      <p className="joinleaguetitles">Transaction Hash</p>
                    </Col>
                    <Col md={3} xs={3}>
                      <p className="joinleaguetitles">Status</p>
                    </Col>
                    
                  </Col>
                </Row>
                <Row className="mt-3">
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
                  ) : cryptoTransactions.length > 0 ? (
                    cryptoTransactions.map((data, ind) => {
                      return (
                        <Col md={12} className="viewportsinglebg mt-3" key={ind}>
                          <Col md={2} xs={2}>
                            <p className="transactionlistdta">
                              {data?.user?.name && data.user.name}
                            </p>
                          </Col>
                          <Col md={1} xs={2}>
                            <p className="transactionlistdta">
                              {data?.subscription?.name &&
                                data.subscription.name}
                            </p>
                          </Col>
                          <Col md={2} xs={2}>
                            <p className="transactionlistdta">
                              {data?.paymentMethod && data.paymentMethod}
                            </p>
                          </Col>
                          <Col md={4} xs={2} className="wraphash">
                            <p className="transactionlistdta">
                              {data?.transactionHash && data.transactionHash}
                            </p>
                          </Col>
                          
                          <Col md={1} xs={1}>
                            <p className="transactionlistdtawithbg">
                              {data?.status && data.status}
                            </p>
                          </Col>
                          <Col md={1} xs={1} style={{ cursor: "pointer" }}>
                            <Button variant="danger"
                              className="rejectbuttontrans"
                              onClick={() => handleRejectStatus(data?._id)}
                            >
                              Reject
                            </Button>
                          </Col>
                          <Col md={1} xs={1} style={{ cursor: "pointer" }}>
                            <Button variant="success"
                              className="rejectbuttontrans"
                              onClick={() => handleAcceptStatus(data?._id)}
                            >
                              Accept
                            </Button>
                          </Col>
                        </Col>
                      );
                    })
                  ) : (
                    <h1>No transaction found</h1>
                  )}
                </Row>
              </Container>
            </div>
            {loading
              ? ""
              : cryptoTransactions.length > 0 && (
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

export default ManualTransactionHistory;
