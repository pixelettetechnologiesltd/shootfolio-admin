import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import "../Assets/Css/Loginform.css";
import toast from "react-hot-toast";
import { Container, Row, Col } from "react-bootstrap";
import "../Assets/Css/Login.css";
import "./../Assets/Css/Form.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Signin, clearErrors, clearMessages } from "./../storeRedux/actions";
import { Puff } from "react-loader-spinner";
import { useFormik } from "formik";
import { signinSchema } from "./../Schemas";
const Loginform = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    errors: error,
    message,
    sessionExpireError,
    loading,
  } = useSelector((state) => state.authReducer);
  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: signinSchema,
      onSubmit: (values, action) => {
        dispatch(dispatch(Signin(values)));
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
      setTimeout(() => navigate("/dashboard/users"), 2000);
    }
  }, [error, sessionExpireError, message]);
  return (
    <div className="loginpagebg">
      <Container>
        <Row>
          <Col md={12}>
            <p className="loginheadcenter">Sign in</p>
          </Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Form className="mt-5" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Control
                  style={{ padding: "0.6rem 0.6rem" }}
                  className="makefieldgightmore"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="form-error custom-form-error">{errors.email}</p>
                ) : (
                  ""
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  className="makefieldgightmore"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="form-error custom-form-error">
                    {errors.password}
                  </p>
                ) : (
                  ""
                )}
              </Form.Group>
              <div className="makebtnsinrow">
                <div className="submitbtn">
                  <button className="formsubmitbutton" type="submit">
                    {loading ? (
                      <Puff
                        height="20"
                        width="30"
                        radius="6"
                        color="white"
                        ariaLabel="loading"
                        wrapperStyle
                        wrapperClass
                      />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </div>
            </Form>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Loginform;
