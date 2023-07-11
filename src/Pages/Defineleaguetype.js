import React, { useEffect } from "react";
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { BiFootball } from "react-icons/bi";
import { useFormik } from "formik";
import { addLeagueTypeSchema } from "./../Schemas";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllGameType,
  GetAllGameMode,
  AddGameLeague,
  clearErrors,
  clearMessages,
} from "./../storeRedux/actions";
import { Puff } from "react-loader-spinner";
const Defineleaguetype = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { gameType } = useSelector((state) => state.gameTypeReducer);
  const { gameMode } = useSelector((state) => state.gameModeReducer);
  const {
    message,
    errors: error,
    sessionExpireError,
    loading,
  } = useSelector((state) => state.gameLeagueReducer);
  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: {
        gameTypeId: "",
        gameModeId: "",
        leagueTitle: "",
        status: "",
        investableBudget: "",
      },
      validationSchema: addLeagueTypeSchema,
      onSubmit: (values, action) => {
        dispatch(AddGameLeague(values));
        action.resetForm();
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
      setTimeout(() => navigate("/Dashboard/game/gameleague"), 2000);
    }
  }, [error, sessionExpireError, message]);

  useEffect(() => {
    dispatch(GetAllGameType());
    dispatch(GetAllGameMode());
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
                  <p className="sootfoliobreadclub">Define League Type</p>
                </div>
              </Col>
              <Col md={5}></Col>
            </Row>
            <Row>
              <Col md={6} className="setmarg">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4" controlId="formGroupText">
                    <Form.Label className="makelabelleft">
                      Game Type <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Select
                      className="makeinputborder"
                      aria-label="Default select example"
                      name="gameTypeId"
                      value={values.gameTypeId}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option>Open this select menu</option>
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
                  >
                    <Form.Label className="makelabelleft">
                      Select Game Mode <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Select
                      className="makeinputborder"
                      aria-label="Default select example"
                      name="gameModeId"
                      value={values.gameModeId}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option>Open this select menu</option>
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
                      Select League Title{" "}
                      <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Select
                      className="makeinputborder"
                      aria-label="Default select example"
                      name="leagueTitle"
                      value={values.leagueTitle}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option>Open this select menu</option>
                      <option value="ICrypto Amateur Learners League">
                        ICrypto Amateur Learners League
                      </option>
                      <option value="Crypto Super League">
                        Crypto Super League{" "}
                      </option>
                      <option value="Crypto Expert League">
                        Crypto Expert League{" "}
                      </option>
                    </Form.Select>
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
                      Investment Budget <span style={{ color: "red" }}>*</span>
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
                  <Form.Group
                    controlId="formFile"
                    className="mb-4"
                    classNamem="makelabelandinputinline"
                  >
                    <Form.Label className="makelabelleft">
                      Membership Type
                    </Form.Label>
                    <Form.Select
                      className="makeinputborder"
                      aria-label="Default select example"
                    >
                      <option>Subsciption</option>
                      <option value="1">Subsciption</option>
                      <option value="2">Subsciption</option>
                      <option value="3">Crypto Expert League </option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="switch">
                    <Form.Label className="makelabelleft">
                      Status <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="Shows game status on or off"
                      name="status"
                      value={values.status}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
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
                          width="60"
                          radius="6"
                          color="white"
                          ariaLabel="loading"
                          wrapperStyle
                          wrapperClass
                        />
                      ) : (
                        "Add League Type"
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
