import React, { useEffect } from "react";
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BiFootball } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../Assets/Css/Gameplaymode.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllGameMode,
  clearErrors,
  clearMessages,
} from "./../storeRedux/actions";
import { Puff } from "react-loader-spinner";
const Gameplaymode = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    gameMode,
    errors: error,
    message,
    sessionExpireError,
    loading,
  } = useSelector((state) => state.gameModeReducer);

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
    dispatch(GetAllGameMode(1));
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
          >
            <Row className="setpaddinginnerpage">
              <Col md={4}>
                <div className="makebreadinrow">
                  <span className="breadgreenfootball">
                    <BiFootball />
                  </span>
                  <p className="sootfoliobreadclub">Game Mode</p>
                </div>
              </Col>
              <Col md={5}></Col>
              <Col md={3} className="makebuttonalignend">
                <Link to="/Dashboard/game/addgameplaymode">
                  <Button className="addnewshhotfolioclubbutton">
                    {" "}
                    + Add New Game
                  </Button>
                </Link>
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
            ) : gameMode.length > 0 ? (
              gameMode.map((item, ind) => {
                return (
                  <Row className="mt-5" key={ind}>
                    <Col md={2}></Col>
                    <Col md={8}>
                      <div className="gamemodebg">
                        <Col md={6}>
                          <p className="gamemodename">
                            {item.modeTitle && item.modeTitle}
                          </p>
                        </Col>
                        <Col md={3}>
                          <p className="gameduration">
                            <span className="modedurationtitle"></span>
                            {item.duration && item.duration}
                          </p>
                        </Col>
                        <Col md={3}>
                          <Link
                            to={`/Dashboard/game/editgameplaymode/${item.id}`}
                          >
                            <Button className="gamdemodeeditbutton">
                              Edit
                            </Button>
                          </Link>
                        </Col>
                      </div>
                    </Col>
                    <Col md={2}></Col>
                  </Row>
                );
              })
            ) : (
              ""
            )}
            {/* <Row className="mt-3">
              <Col md={2}></Col>
              <Col md={8}>
                <div className="gamemodebg">
                  <Col md={6}>
                    <p className="gamemodename">Idle (Player vs Machine)</p>
                  </Col>
                  <Col md={3}>
                    <p className="gameduration">
                      <span className="modedurationtitle"></span>7 Days
                    </p>
                  </Col>
                  <Col md={3}>
                    <Link to="/Dashboard/game/editgameplaymode">
                      <Button className="gamdemodeeditbutton">Edit</Button>
                    </Link>
                  </Col>
                </div>
              </Col>
              <Col md={2}></Col>
            </Row> */}
            {/* <Row className="mt-3">
              <Col md={2}></Col>
              <Col md={8}>
                <div className="gamemodebg">
                  <Col md={6}>
                    <p className="gamemodename">Idle (Player vs Machine)</p>
                  </Col>
                  <Col md={3}>
                    <p className="gameduration">
                      <span className="modedurationtitle"></span>90 mins
                    </p>
                  </Col>
                  <Col md={3}>
                    <Link to="/Dashboard/game/editgameplaymode">
                      <Button className="gamdemodeeditbutton">Edit</Button>
                    </Link>
                  </Col>
                </div>
              </Col>
              <Col md={2}></Col>
            </Row> */}
            {/* <Row className="mt-3">
              <Col md={2}></Col>
              <Col md={8}>
                <div className="gamemodebg">
                  <Col md={6}>
                    <p className="gamemodename">
                      Multiplayer Realtime (5 Player vs 5 Player)
                    </p>
                  </Col>
                  <Col md={3}>
                    <p className="gameduration">
                      <span className="modedurationtitle"></span>90 mins
                    </p>
                  </Col>
                  <Col md={3}>
                    <Link to="/Dashboard/game/editgameplaymode">
                      <Button className="gamdemodeeditbutton">Edit</Button>
                    </Link>
                  </Col>
                </div>
              </Col>
              <Col md={2}></Col>
            </Row> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gameplaymode;
