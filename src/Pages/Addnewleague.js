import React, { useEffect } from "react";
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BiFootball } from "react-icons/bi";
import Leaguemap from "../Components/Leaguemap";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllGameLeague,
  clearErrors,
  clearMessages,
} from "./../storeRedux/actions";
import { Puff } from "react-loader-spinner";

const Addnewleague = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    gameLeague,
    errors: error,
    message,
    sessionExpireError,
    loading,
  } = useSelector((state) => state.gameLeagueReducer);

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
    dispatch(GetAllGameLeague(1));
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
                  <p className="sootfoliobreadclub">Game League</p>
                </div>
              </Col>
              <Col md={5}></Col>
              <Col md={3} className="makebuttonalignend">
                <Link to="/Dashboard/game/addnewleague">
                  <Button className="addnewshhotfolioclubbutton">
                    {" "}
                    + Add New League
                  </Button>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="mt-5 mb-5">
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
                ) : gameLeague.length > 0 ? (
                  <Leaguemap league={gameLeague} />
                ) : (
                  ""
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Addnewleague;
