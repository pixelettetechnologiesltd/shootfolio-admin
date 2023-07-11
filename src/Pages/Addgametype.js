import React, { useEffect } from "react";
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BiFootball } from "react-icons/bi";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import { addGameTypeSchema } from "./../Schemas";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AddGameType,
  clearErrors,
  clearMessages,
} from "./../storeRedux/actions";
import { Puff } from "react-loader-spinner";
const Addgametype = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    message,
    errors: error,
    sessionExpireError,
    loading,
  } = useSelector((state) => state.gameTypeReducer);
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
      gameTitle: "",
      status: "",
    },
    validationSchema: addGameTypeSchema,
    onSubmit: (values, action) => {
      const { photoPath, gameTitle, status } = values;
      let finalResult = new FormData();
      finalResult.append("photoPath", photoPath);
      finalResult.append("gameTitle", gameTitle);
      finalResult.append("status", status);
      dispatch(AddGameType(finalResult));
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
      setTimeout(() => navigate("/Dashboard/game/gametype"), 2000);
    }
  }, [error, sessionExpireError, message]);

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
                <div className="makebreadinrow">
                  <span className="breadgreenfootball">
                    <BiFootball />
                  </span>
                  <p className="sootfoliobreadclub">Add New Game</p>
                </div>
              </Col>
              <Col md={5}></Col>
            </Row>
            <Row>
              <Col md={6} className="mt-4 mb-5 setmarg">
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formFile" className="mb-4 mt-4">
                    <Form.Label className="makelabelleft">
                      Icon <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Control
                      className="removebgupload"
                      type="file"
                      style={{ color: "white" }}
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

                  <Form.Group className="mb-4" controlId="formGroupText">
                    <Form.Label className="makelabelleft">
                      Game Title <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Control
                      className="makeinputborder"
                      type="text"
                      placeholder="Game Title"
                      name="gameTitle"
                      value={values.gameTitle}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.gameTitle && touched.gameTitle ? (
                      <p className="form-error custom-form-error">
                        {errors.gameTitle}
                      </p>
                    ) : (
                      ""
                    )}
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formGroupText">
                    <Form.Label className="makelabelleft">Demo Link</Form.Label>
                    <Form.Control
                      className="makeinputborder"
                      type="text"
                      placeholder="www.youtube/demo.com"
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formFile"
                    className="mb-4"
                    classNamem="makelabelandinputinline"
                  >
                    <Form.Label className="makelabelleft">
                      Status <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Select
                      className="makeinputborder"
                      aria-label="Default select example"
                      name="status"
                      value={values.status}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="">Select Status</option>
                      <option value="Active">Active</option>
                      <option value="InActive">Inactive</option>
                      <option value="CommingSoon">Coming soon</option>
                    </Form.Select>
                    {errors.status && touched.status ? (
                      <p className="form-error custom-form-error">
                        {errors.status}
                      </p>
                    ) : (
                      ""
                    )}
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="switch">
                    <Form.Label className="makelabelleft">
                      Quiz Access
                    </Form.Label>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="Quiz access on or off"
                    />
                  </Form.Group>
                  <div className="addgapbetween">
                    <Button className="createclubbutton" type="submit">
                      {loading ? (
                        <Puff
                          height="15"
                          width="30"
                          radius="6"
                          color="white"
                          ariaLabel="loading"
                          wrapperStyle
                          wrapperClass
                        />
                      ) : (
                        "Save"
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

export default Addgametype;
