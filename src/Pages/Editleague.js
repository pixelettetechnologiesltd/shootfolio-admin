import React, { useEffect } from "react";
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { BiFootball } from "react-icons/bi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllGameType,
  GetAllGameMode,
  UpdateGameLeague,
  GetSingleGameLeague,
  clearErrors,
  clearMessages,
} from "./../storeRedux/actions";
import { Puff } from "react-loader-spinner";
import { useFormik } from "formik";
import { EditLeagueTypeSchema } from "./../Schemas";
import { useParams } from "react-router-dom";
const Defineleaguetype = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { gameType } = useSelector((state) => state.gameTypeReducer);
  const { gameMode } = useSelector((state) => state.gameModeReducer);
  const {
    message,
    errors: error,
    sessionExpireError,
    singleGameLeague,
    loading,
  } = useSelector((state) => state.gameLeagueReducer);

  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: {
        gameTypeId:
          singleGameLeague?.gameTypeId?.id && singleGameLeague.gameTypeId.id,
        // gameModeId:
        //   singleGameLeague?.gameModeId?.modeTitle &&
        //   singleGameLeague.gameModeId.modeTitle,
        leagueTitle:
          singleGameLeague?.leagueTitle && singleGameLeague.leagueTitle,
        status: singleGameLeague?.status === false ? "false" : "true",
        investableBudget:
          singleGameLeague?.investableBudget &&
          singleGameLeague.investableBudget,
        borrowAmount:
          singleGameLeague?.borrowAmount && singleGameLeague.borrowAmount,
      },
      enableReinitialize: true,
      validationSchema: EditLeagueTypeSchema,
      onSubmit: (values) => {
        const {
          gameTypeId,
          gameModeId,
          leagueTitle,
          status,
          investableBudget,
          borrowAmount,
        } = values;
        let newGameTpeId;
        if (gameTypeId === singleGameLeague.gameTypeId.gameTitle) {
          newGameTpeId = singleGameLeague.gameTypeId.id;
        } else {
          newGameTpeId = gameTypeId;
        }
        // let newGameModeId;
        // if (gameModeId === singleGameLeague.gameModeId.modeTitle) {
        //   newGameModeId = singleGameLeague.gameModeId.id;
        // } else {
        //   newGameModeId = gameModeId;
        // }
        let finalResult = {
          gameTypeId: newGameTpeId,
          gameModeId: "64ab3d6ddd27213e692f613c",
          leagueTitle,
          status,
          investableBudget,
          borrowAmount,
        };
        dispatch(UpdateGameLeague(finalResult, id));
      },
    });

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
      setTimeout(() => navigate(-1), 2000);
    }
  }, [error, sessionExpireError, message]);

  useEffect(() => {
    dispatch(GetAllGameType());
    dispatch(GetAllGameMode());
    dispatch(GetSingleGameLeague(id));
  }, [dispatch, navigate, id]);

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
                  <p className="sootfoliobreadclub">Edit League</p>
                </div>
              </Col>
              <Col md={5}></Col>
            </Row>
            <Row>
              <Col md={6} className="setmarg">
                <Form onSubmit={handleSubmit}>
                  <Form.Label className="makelabelleft">Game Type</Form.Label>
                  <Form.Group className="mb-4" controlId="formGroupText">
                    <Form.Select
                      className="makeinputborder"
                      aria-label="Default select example"
                      name="gameTypeId"
                      value={values.gameTypeId}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      {gameType.length > 0 &&
                        gameType.map((item, ind) => {
                          return (
                            <option key={ind} value={item.id}>
                              {item.gameTitle && item.gameTitle}
                            </option>
                          );
                        })}
                    </Form.Select>
                    {errors.gameTypeId && touched.gameTypeId ? (
                      <p className="form-error custom-form-error">
                        {errors.gameTypeId}
                      </p>
                    ) : (
                      ""
                    )}
                  </Form.Group>
                  <Form.Group
                    controlId="formFile"
                    className="mb-4"
                    classNamem="makelabelandinputinline"
                    style={{ display: "none" }}
                  >
                    <Form.Label
                      className="makelabelleft"
                      style={{ display: "none" }}
                    >
                      Select Game Mode
                    </Form.Label>
                    <Form.Select
                      className="makeinputborder"
                      aria-label="Default select example"
                      name="gameModeId"
                      value={values.gameModeId}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      {gameMode.length > 0 &&
                        gameMode.map((item, ind) => {
                          return (
                            <option key={ind} value={item.id}>
                              {item.modeTitle && item.modeTitle}
                            </option>
                          );
                        })}
                    </Form.Select>
                    {errors.gameModeId && touched.gameModeId ? (
                      <p className="form-error custom-form-error">
                        {errors.gameModeId}
                      </p>
                    ) : (
                      ""
                    )}
                  </Form.Group>
                  <Form.Group
                    controlId="formFile"
                    className="mb-4"
                    classNamem="makelabelandinputinline"
                  >
                    <Form.Label className="makelabelleft">
                      League Title
                    </Form.Label>
                    <Form.Control
                      className="makeinputborder"
                      type="text"
                      placeholder="Enter title"
                      name="leagueTitle"
                      value={values.leagueTitle}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.leagueTitle && touched.leagueTitle ? (
                      <p className="form-error custom-form-error">
                        {errors.leagueTitle}
                      </p>
                    ) : (
                      ""
                    )}
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formGroupText">
                    <Form.Label className="makelabelleft">
                      Investment Budget
                    </Form.Label>
                    <Form.Control
                      className="makeinputborder"
                      type="text"
                      placeholder="$340"
                      name="investableBudget"
                      value={values.investableBudget}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.investableBudget && touched.investableBudget ? (
                      <p className="form-error custom-form-error">
                        {errors.investableBudget}
                      </p>
                    ) : (
                      ""
                    )}
                  </Form.Group>

                  {/* <Form.Group className="mb-4" controlId="switch">
                    <Form.Label className="makelabelleft">Status</Form.Label>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="Shows game status on or off"
                    />
                  </Form.Group> */}
                  <Form.Group className="mb-4" controlId="formGroupText">
                    <Form.Label className="makelabelleft">
                      Borrow Amount
                    </Form.Label>
                    <Form.Control
                      className="makeinputborder"
                      type="number"
                      placeholder="Add borrow limit"
                      name="borrowAmount"
                      value={values.borrowAmount}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.borrowAmount && touched.borrowAmount ? (
                      <p className="form-error custom-form-error">
                        {errors.borrowAmount}
                      </p>
                    ) : (
                      ""
                    )}
                  </Form.Group>
                  <Form.Group
                    controlId="formFile"
                    className="mb-4"
                    classNamem="makelabelandinputinline"
                    style={{ display: "none" }}
                  >
                    <Form.Label className="makelabelleft">Status</Form.Label>
                    <Form.Select
                      className="makeinputborder"
                      aria-label="Default select example"
                      name="status"
                      value={values.status}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="true">True</option>
                      <option value="false">false</option>
                    </Form.Select>
                    {errors.status && touched.status ? (
                      <p className="form-error custom-form-error">
                        {errors.status}
                      </p>
                    ) : (
                      ""
                    )}
                  </Form.Group>
                  <div className="addgapbetween">
                    <Button type="submit" className="createclubbutton">
                      {loading ? (
                        <Puff
                          height="20"
                          width="100"
                          radius="6"
                          color="white"
                          ariaLabel="loading"
                          wrapperStyle
                          wrapperClass
                        />
                      ) : (
                        "Update League Type"
                      )}
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Defineleaguetype;
