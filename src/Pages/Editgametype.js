import React, { useEffect } from "react";
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BiFootball } from "react-icons/bi";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetSingleGameType,
  EditSingleGameType,
  clearErrors,
  clearMessages,
} from "./../storeRedux/actions";
import { Puff } from "react-loader-spinner";
import { useFormik } from "formik";
import { editGameTypeSchema } from "./../Schemas";
const Editgametype = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetSingleGameType(id));
    setFieldValue(
      "gameTitle",
      singleGameType?.gameTitle && singleGameType.gameTitle
    );
  }, [id]);

  const {
    message,
    errors: error,
    sessionExpireError,
    loading,
    singleGameType,
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
      setTimeout(() => navigate(-1), 2000);
    }
  }, [error, sessionExpireError, message]);

  const handleImageChange = (event) => {
    setFieldValue("photoPath", event.target.files[0]);
  };

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
      gameTitle: singleGameType?.gameTitle && singleGameType.gameTitle,
      status: singleGameType?.status && singleGameType.status,
    },
    enableReinitialize: true,
    validationSchema: editGameTypeSchema,
    onSubmit: (values) => {
      const { photoPath, gameTitle, status } = values;
      let finalResult = new FormData();
      if (photoPath) {
        finalResult.append("photoPath", photoPath);
      }
      finalResult.append("gameTitle", gameTitle);
      finalResult.append("status", status);
      dispatch(EditSingleGameType(finalResult, id));
    },
  });
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
                  <p className="sootfoliobreadclub">Edit Game Type</p>
                </div>
              </Col>
              <Col md={5}></Col>
            </Row>
            <Row>
              <Col md={6} className="mt-4 mb-5 setmarg">
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formFile" className="mb-4 mt-4">
                    <Form.Label className="makelabelleft">Icon</Form.Label>
                    <Form.Control
                      style={{ color: "white" }}
                      className="removebgupload"
                      type="file"
                      accept="image/jpeg, image/jpg,image/png"
                      onChange={(e) => handleImageChange(e)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formGroupText">
                    <Form.Label className="makelabelleft">
                      Game Title
                    </Form.Label>
                    <Form.Control
                      className="makeinputborder"
                      type="text"
                      placeholder="Game Title"
                      name="gameTitle"
                      value={values.gameTitle && values.gameTitle}
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
                  <div className="addgapbetween">
                    <Button className="createclubbutton" type="submit">
                      {loading ? (
                        <Puff
                          height="20"
                          width="25"
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

export default Editgametype;
