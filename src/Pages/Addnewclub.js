import React, { useEffect } from "react";
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Assets/Css/Addnewclub.css";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import { addClubSchema } from "./../Schemas";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllGameType,
  AddClub,
  clearErrors,
  clearMessages,
} from "./../storeRedux/actions";
import { Puff } from "react-loader-spinner";
const Addnewclub = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { gameType } = useSelector((state) => state.gameTypeReducer);
  const {
    message,
    errors: error,
    sessionExpireError,
    loading,
  } = useSelector((state) => state.clubReducer);

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    touched,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues: {
      photoPath: null,
      title: "",
      gameTypeId: "",
      symbol: "",
      status: "",
    },
    validationSchema: addClubSchema,
    onSubmit: (values, action) => {
      const { photoPath, title, gameTypeId, symbol, status } = values;
      let finalResult = new FormData();
      finalResult.append("photoPath", photoPath);
      finalResult.append("title", title);
      finalResult.append("gameTypeId", gameTypeId);
      finalResult.append("symbol", symbol);
      finalResult.append("status", status);
      dispatch(AddClub(finalResult));
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
      setTimeout(() => navigate("/dashboard/game/shootfolioclubs"), 2000);
    }
  }, [error, sessionExpireError, message]);

  useEffect(() => {
    dispatch(GetAllGameType());
  }, []);

  const handleImageChange = (event) => {
    setFieldValue("photoPath", event.target.files[0]);
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
              <Col md={4}>
                <p className="addnewclubheading">Add New Club</p>
              </Col>
              <Col md={5}></Col>
            </Row>
            <Row>
              <Col md={6} className="setmarg">
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formFile" className="mb-4">
                    <Form.Label className="makelabelleft">
                      Club Logo <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Control
                      className="removebgupload"
                      style={{ color: "white" }}
                      type="file"
                      accept="image/jpeg, image/jpg,image/png"
                      onChange={(e) => handleImageChange(e)}
                    />
                    {errors.photoPath && touched.photoPath ? (
                      <p className="form-error custom-form-error">
                        {errors.photoPath}
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
                      Select Game Type <span style={{ color: "red" }}>*</span>
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
                            <option value={item.id && item.id} key={ind}>
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
                  <Form.Group className="mb-4" controlId="formGroupText">
                    <Form.Label className="makelabelleft">
                      Title <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Control
                      className="makeinputborder"
                      type="text"
                      placeholder="Pico Club"
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.title && touched.title ? (
                      <p className="form-error custom-form-error">
                        {errors.title}
                      </p>
                    ) : (
                      ""
                    )}
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formGroupText">
                    <Form.Label className="makelabelleft">
                      Symbol <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Control
                      className="makeinputborder"
                      type="text"
                      placeholder="PFC"
                      name="symbol"
                      value={values.symbol}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.symbol && touched.symbol ? (
                      <p className="form-error custom-form-error">
                        {errors.symbol}
                      </p>
                    ) : (
                      ""
                    )}
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
                    <Button className="discardbutton"> Discard</Button>
                    <Button className="createclubbutton" type="submit">
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
                        "Create Club"
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

export default Addnewclub;
