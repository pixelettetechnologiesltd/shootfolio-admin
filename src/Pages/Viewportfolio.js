import React, { useEffect } from "react";
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { images } from "../Components/Images";
import { Link } from "react-router-dom";
import "../Assets/Css/ViewPortfolio.css";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllPortfolio,
  GetSingleClub,
  clearErrors,
  clearMessages,
} from "./../storeRedux/actions";
import { Puff } from "react-loader-spinner";
const Viewportfolio = () => {
  const { id } = useParams();
  const adminUser = JSON.parse(localStorage.getItem("admin"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    message,
    errors: error,
    sessionExpireError,
    loading,
    club,
    singleClub,
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
      setTimeout(() => navigate("/dashboard/game/shootfolioclubs"), 2000);
    }
  }, [error, sessionExpireError, message]);

  useEffect(() => {
    let admin = adminUser?.id;
    dispatch(GetAllPortfolio(admin, id, 1));
    dispatch(GetSingleClub(id));
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
                  <Image
                    crossOrigin="true"
                    src={singleClub?.logo && singleClub.logo}
                    width="60px"
                  />
                  <p className="sootfoliobreadclub">
                    {singleClub?.title && singleClub.title}
                  </p>
                </div>
              </Col>
              <Col md={5}></Col>
              <Col md={3} className="makebuttonalignend">
                <Link to={`/Dashboard/game/addportfolioclub/${id}`}>
                  <Button className="addnewshhotfolioclubbutton">
                    {" "}
                    + Add New Portfolio
                  </Button>
                </Link>
              </Col>
            </Row>
            <div className="mt-5 setpaddinginnerpage">
              <Container className="makedisplayyinblockviewport">
                <Row>
                  <Col md={12} className="makeinrowtitlesviewportfolio">
                    <Col md={2} xs={2}>
                      <p className="joinleaguetitles">Coin</p>
                    </Col>
                    <Col md={2} xs={2}>
                      <p className="joinleaguetitles">Symbol</p>
                    </Col>
                    <Col md={2} xs={2}>
                      <p className="joinleaguetitles">Quantity</p>
                    </Col>
                    <Col md={2} xs={2}>
                      <p className="joinleaguetitles">Price</p>
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
                ) : club.length > 0 ? (
                  club.map((data, ind) => {
                    return (
                      <Row className="mt-3" key={ind}>
                        <Col md={12} className="viewportsinglebg">
                          <Col md={2} xs={2}>
                            <div className="coinnameandlogoviewportinline">
                              <Image
                                crossOrigin="true"
                                height={20}
                                width={20}
                                src={
                                  data.coin?.photoPath && data.coin.photoPath
                                }
                              />
                              <p className="coinnameviewport">
                                {data.coin?.name && data.coin.name}
                              </p>
                            </div>
                          </Col>
                          <Col md={2} xs={2}>
                            <p className="coinnameviewport">
                              {data.coin?.symbol && data.coin.symbol}
                            </p>
                          </Col>
                          <Col md={2} xs={2}>
                            <p className="coinnameviewport">
                              {data.quantity && data.quantity}
                            </p>
                          </Col>
                          <Col md={2} xs={2}>
                            <p className="coinnameviewport">
                              {" "}
                              ${" "}
                              {data.coin?.quote?.USD?.price &&
                                Math.floor(data.coin?.quote.USD.price)}
                            </p>
                          </Col>
                          <Col md={2} xs={2}>
                            <div className="makebuttonendviewport">
                              <Link
                                to={`/Dashboard/game/Editportfolioclub/${data.id}`}
                              >
                                <Button className="viewporteditbutton">
                                  Edit
                                </Button>
                              </Link>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Viewportfolio;
