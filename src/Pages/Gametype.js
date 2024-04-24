import React, { useState, useEffect } from "react";
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { BiFootball } from "react-icons/bi";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Assets/Css/Gametype.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllGameType,
  clearErrors,
  clearMessages,
} from "./../storeRedux/actions";
import { Puff } from "react-loader-spinner";
import Pagination from "@mui/material/Pagination";


const Gametype = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [page, setPage] = useState(1);
  const {
    gameType,
    errors: error,
    message,
    sessionExpireError,
    loading,
    totalPages,
  } = useSelector((state) => state.gameTypeReducer);

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
    dispatch(GetAllGameType(page));
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
            className="setpaddinginnerpage"
          >
            <Row>
              <Col md={4}>
                <div className="makebreadinrow">
                  <span className="breadgreenfootball">
                    <BiFootball />
                  </span>
                  <p className="sootfoliobreadclub">Game Type</p>
                </div>
              </Col>
              <Col md={5}></Col>
              <Col md={3} className="makebuttonalignend">
                <Link to="/Dashboard/game/addnewgame">
                  <Button className="addnewshhotfolioclubbutton">
                    {" "}
                    + Add New Game
                  </Button>
                </Link>
              </Col>
            </Row>
            <Row className="mt-5">
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
              ) : gameType.length > 0 ? (
                gameType.map((item, ind) => {
                  return (
                    <Col md={3} key={ind}>
                      <div className="gametypebg">
                        <Image
                          crossOrigin="true"
                          src={item.iconUrl && item.iconUrl}
                          width="100px"
                        />
                        <p className="gametypetitle">
                          {item.gameTitle && item.gameTitle}
                        </p>
                        <div className="makebuttonstretchgametype">
                          <Link
                            to={`/Dashboard/game/editgametype/${item.id}`}
                            className="editgametype"
                          >
                            Edit
                          </Link>
                        </div>
                      </div>
                    </Col>
                  );
                })
              ) : (
                ""
              )}
              {loading
                ? ""
                : gameType.length > 0 && (
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
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gametype;
