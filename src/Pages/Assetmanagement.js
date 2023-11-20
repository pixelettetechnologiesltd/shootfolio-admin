import React, { useState, useEffect } from "react";
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "../Assets/Css/Assetmanagement.css";
import { FaSortAlphaUp } from "react-icons/fa";
import { BsFilter } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiFootball } from "react-icons/bi";
import Dropdown from "react-bootstrap/Dropdown";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllCoin,
  DeleteCoin,
  clearErrors,
  clearMessages,
} from "./../storeRedux/actions";
import { Puff } from "react-loader-spinner";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiPaginationItem-root": {
      color: "white",
      backgroundColor: "black",
      "&:hover": {
        backgroundColor: "black",
        color: "white",
      },
      "& .Mui-selected": {
        backgroundColor: "black",
        color: "white",
      },
    },
  },
});

const Assetmanagement = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const {
    coin,
    message,
    errors: error,
    sessionExpireError,
    loading,
    totalPages,
  } = useSelector((state) => state.clubReducer);

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
    dispatch(GetAllCoin(page));
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
          >
            {/* <Row className="setpaddinginnerpage">
              <Col md={4}>
                <div className="makebreadinrow">
                  <span className="breadgreenfootball">
                    <BiFootball />
                  </span>
                  <p className="sootfoliobreadclub">Assets Management</p>
                </div>
              </Col>
              <Col md={5}></Col>
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
            </Row> */}
            <div className="mt-5 setpaddinginnerpage">
              <Container className="makedisplayyinblockviewport">
                <Row>
                  <Col md={12} className="makeinrowtitlesviewportfolio">
                    <Col md={2} xs={2}>
                      <p className="joinleaguetitles">Name</p>
                    </Col>
                    <Col md={2} xs={2}>
                      <p className="joinleaguetitles">Symbol</p>
                    </Col>
                    <Col md={2} xs={2}>
                      <p className="joinleaguetitles">Price_USD</p>
                    </Col>
                    <Col md={2} xs={2}>
                      <p className="joinleaguetitles">Status</p>
                    </Col>
                    <Col md={1} xs={2}>
                      <p className="joinleaguetitles">Action</p>
                    </Col>
                  </Col>
                </Row>
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
                ) : coin.length > 0 ? (
                  coin.map((data, ind) => {
                    return (
                      <Row className="mt-3" key={ind}>
                        <Col md={12} className="viewportsinglebg">
                          <Col md={2} xs={2}>
                            <div className="coinnameandlogoviewportinline">
                              <Image
                                height={20}
                                width={20}
                                crossOrigin="true"
                                src={data.photoPath && data.photoPath}
                              />
                              <p className="coinnameviewport">
                                {data.name && data.name}
                              </p>
                            </div>
                          </Col>
                          <Col md={2} xs={2}>
                            <p className="coinnameviewport">
                              {data.symbol && data.symbol}
                            </p>
                          </Col>
                          <Col md={2} xs={2}>
                            <p className="coinnameviewport">
                              ${" "}
                              {data.quote?.USD?.price &&
                                data.quote.USD.price.toFixed(7)}
                            </p>
                          </Col>
                          <Col md={2} xs={2}>
                            <p className="coinnameviewport">Active</p>
                          </Col>
                          <Col md={1} xs={2}>
                            <div className="makebuttonendviewport paddrightrowmanage">
                            <Button className="gamdemodeeditbutton" onClick={() =>
                                      dispatch(DeleteCoin(data._id))
                                    } >
                              Delete
                            </Button>
                              {/* <Dropdown>
                                <Dropdown.Toggle
                                  variant="success"
                                  className="managepage"
                                  id="dropdown-basic"
                                >
                                  <RxHamburgerMenu />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                  <Dropdown.Item href="#/action-1">
                                    Action
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    
                                  >
                                    Delete
                                  </Dropdown.Item>
                                  <Dropdown.Item href="#/action-3">
                                    Something else
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown> */}
                            </div>
                          </Col>
                        </Col>
                      </Row>
                    );
                  })
                ) : (
                  ""
                )}
              </Container>
            </div>
            {loading
              ? ""
              : coin.length > 0 && (
                  <Pagination
                    classes={{ root: classes.root }}
                    variant="outlined"
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

export default Assetmanagement;
