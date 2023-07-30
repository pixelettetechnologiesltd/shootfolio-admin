import React, { useEffect } from "react";
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Assets/Css/Addnewclub.css";
import Form from "react-bootstrap/Form";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  GetSingleClub,
  GetAllGameType,
  UpdateSingleClub,
  clearErrors,
  clearMessages,
} from "./../storeRedux/actions";
import { Puff } from "react-loader-spinner";
import { useFormik } from "formik";
import { editClubSchema } from "./../Schemas";

const Editclub = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { gameType } = useSelector((state) => state.gameTypeReducer);
  const {
    message,
    errors: error,
    sessionExpireError,
    singleClub,
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
      title: singleClub?.title && singleClub.title,
      gameTypeId:
        singleClub?.gameTypeId?.gameTitle && singleClub.gameTypeId.gameTitle,
      symbol: singleClub?.symbol && singleClub.symbol,
      status: singleClub?.status === false ? "false" : "true",
    },
    enableReinitialize: true,
    validationSchema: editClubSchema,
    onSubmit: (values) => {
      const { photoPath, title, gameTypeId, symbol, status } = values;
      let finalResult = new FormData();
      if (photoPath) {
        finalResult.append("photoPath", photoPath);
      }
      let newGameTpeId;
      if (gameTypeId === singleClub.gameTypeId.gameTitle) {
        newGameTpeId = singleClub.gameTypeId.id;
      } else {
        newGameTpeId = gameTypeId;
      }
      finalResult.append("gameTypeId", newGameTpeId);
      finalResult.append("title", title);
      finalResult.append("symbol", symbol);
      finalResult.append("status", status);
      dispatch(UpdateSingleClub(finalResult, id));
    },
  });

  const handleImageChange = (event) => {
    setFieldValue("photoPath", event.target.files[0]);
  };
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
    if (gameType.length <= 0) {
      dispatch(GetAllGameType());
    }
    dispatch(GetSingleClub(id));
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
                <p className="addnewclubheading">Edit Club</p>
              </Col>
              <Col md={5}></Col>
            </Row>
            <Row>
              <Col md={6} className="setmarg">
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formFile" className="mb-4">
                    <Form.Label className="makelabelleft">Club Logo</Form.Label>
                    <Form.Control
                      className="removebgupload"
                      type="file"
                      accept="image/jpeg, image/jpg,image/png"
                      onChange={(e) => handleImageChange(e)}
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formFile"
                    className="mb-4"
                    classNamem="makelabelandinputinline"
                  >
                    <Form.Label className="makelabelleft">
                      Select Game Type
                    </Form.Label>
                    <Form.Select
                      className="makeinputborder"
                      aria-label="Default select example"
                      name="gameTypeId"
                      value={values.gameTypeId}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      {gameType.length > 0 &&
                        gameType.map((data, ind) => {
                          return (
                            <option value={data?.id} key={ind}>
                              {data?.gameTitle && data.gameTitle}
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
                    <Form.Label className="makelabelleft">Title</Form.Label>
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
                    <Form.Label className="makelabelleft">Symbol</Form.Label>
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
                  <Form.Group
                    controlId="formFile"
                    className="mb-4"
                    classNamem="makelabelandinputinline"
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
                    <Button
                      className="createclubbutton"
                      type="submit"
                      disabled={loading ? true : false}
                    >
                      {loading ? (
                        <Puff
                          height="20"
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

export default Editclub;
