import React, { useEffect } from "react";
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BiFootball } from "react-icons/bi";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { editGameModeSchema } from "./../Schemas";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllGameType,
  GetSingleGameMode,
  UpdateSingleGameMode,
  clearErrors,
  clearMessages,
} from "./../storeRedux/actions";
import { Puff } from "react-loader-spinner";
const Editgameplaymode = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { gameType } = useSelector((state) => state.gameTypeReducer);
  const {
    message,
    errors: error,
    sessionExpireError,
    uploadLoading,
    singleGameMode,
  } = useSelector((state) => state.gameModeReducer);

  console.log("singleGameMode is", singleGameMode);
  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: {
        // gameType: singleGameMode?.gameType?.gameTitle
        //   ? singleGameMode.gameType.gameTitle
        //   : "",
        modeTitle: singleGameMode?.modeTitle ? singleGameMode.modeTitle : "",
        status: singleGameMode.status === false ? "false" : "true",
        duration: singleGameMode?.duration ? singleGameMode.duration : "",
        quiz: singleGameMode.quiz === false ? "false" : "true",
      },
      validationSchema: editGameModeSchema,
      onSubmit: (values, action) => {
        dispatch(UpdateSingleGameMode(values, id));
        action.resetForm();
      },
    });

  console.log("values is", values);
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
      setTimeout(() => navigate("/Dashboard/game/gameplaymode"), 2000);
    }
  }, [error, sessionExpireError, message]);

  useEffect(() => {
    dispatch(GetAllGameType());
    dispatch(GetSingleGameMode(id));
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
                  <p className="sootfoliobreadclub">Edit Gameplay Mode</p>
                </div>
              </Col>
              <Col md={5}></Col>
            </Row>
            <Row>
              <Col md={6} className="mt-4 mb-5 setmarg">
                <Form onSubmit={handleSubmit}>
                  {/* <Form.Group controlId="formFile" className="mb-4 mt-4">
                    <Form.Label className="makelabelleft">Game Type</Form.Label>
                    <Form.Select
                      className="makeinputborder"
                      aria-label="Default select example"
                      name="gameType"
                      value={values.gameType}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      {gameType.length > 0 &&
                        gameType.map((item, ind) => {
                          return (
                            <option value={item.id && item.id} key={ind}>
                              {item.gameTitle && item.gameTitle}
                            </option>
                          );
                        })}
                    </Form.Select>
                    {errors.gameType && touched.gameType ? (
                      <p className="form-error custom-form-error">
                        {errors.gameType}
                      </p>
                    ) : (
                      ""
                    )}
                  </Form.Group> */}

                  <Form.Group className="mb-4" controlId="formGroupText">
                    <Form.Label className="makelabelleft">
                      Mode Title
                    </Form.Label>
                    <Form.Control
                      className="makeinputborder"
                      type="text"
                      placeholder="Mode Title"
                      name="modeTitle"
                      value={values.modeTitle}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.modeTitle && touched.modeTitle ? (
                      <p className="form-error custom-form-error">
                        {errors.modeTitle}
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
                    <Form.Group className="mb-4" controlId="formGroupText">
                      <Form.Label className="makelabelleft">
                        Duration
                      </Form.Label>
                      <Form.Control
                        className="makeinputborder"
                        type="text"
                        placeholder="Enter Duration"
                        name="duration"
                        value={values.duration}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.duration && touched.duration ? (
                        <p className="form-error custom-form-error">
                          {errors.duration}
                        </p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                    {/* <Form.Group
                      controlId="formFile"
                      className="mb-4"
                      classNamem="makelabelandinputinline"
                    >
                      <Form.Label className="makelabelleft">Status</Form.Label>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="status false or true"
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
                    </Form.Group> */}
                  </Form.Group>
                  <Form.Group controlId="formFile" className="mb-4 mt-4">
                    <Form.Label className="makelabelleft">Status</Form.Label>
                    <Form.Select
                      className="makeinputborder"
                      aria-label="Default select example"
                      name="status"
                      value={values.status}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </Form.Select>
                    {errors.status && touched.status ? (
                      <p className="form-error custom-form-error">
                        {errors.status}
                      </p>
                    ) : (
                      ""
                    )}
                  </Form.Group>
                  {/* <Form.Group className="mb-4" controlId="switch">
                    <Form.Label className="makelabelleft">
                      Quiz Access
                    </Form.Label>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="Quiz access on or off"
                      name="quiz"
                      value={values.quiz}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.quiz && touched.quiz ? (
                      <p className="form-error custom-form-error">
                        {errors.quiz}
                      </p>
                    ) : (
                      ""
                    )}
                  </Form.Group> */}
                  <Form.Group controlId="formFile" className="mb-4 mt-4">
                    <Form.Label className="makelabelleft">
                      Quiz Access
                    </Form.Label>
                    <Form.Select
                      className="makeinputborder"
                      aria-label="Default select example"
                      name="quiz"
                      value={values.quiz}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </Form.Select>
                    {errors.quiz && touched.quiz ? (
                      <p className="form-error custom-form-error">
                        {errors.quiz}
                      </p>
                    ) : (
                      ""
                    )}
                  </Form.Group>
                  <div className="addgapbetween">
                    <Button className="createclubbutton" type="submit">
                      {uploadLoading ? (
                        <Puff
                          height="15"
                          width="40"
                          radius="6"
                          color="white"
                          ariaLabel="loading"
                          wrapperStyle
                          wrapperClass
                        />
                      ) : (
                        "Update"
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

export default Editgameplaymode;
