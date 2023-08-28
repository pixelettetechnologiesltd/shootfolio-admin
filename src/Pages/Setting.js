import React, { useState, useEffect } from "react";
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { BiFootball } from "react-icons/bi";
import "../Assets/Css/Addsubscriptionplan.css";
import Form from "react-bootstrap/Form";
import Settingpop from "../Components/Settingpop";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllSubscriptionPlan,
  GetSingleUser,
  UpdateSubscriptionPlanAccordingToUser,
  clearErrors,
  clearMessages,
} from "./../storeRedux/actions";
import { Puff } from "react-loader-spinner";
import { useFormik } from "formik";
import { UpdateUserSchema } from "./../Schemas";

const Settings = () => {
  const [buttonPopupOne, setButtonPopupOne] = useState(false);
  const [subscriptionPlan, setSubscriptionPlan] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    subscriptionPlans,
    message,
    errors: error,
    sessionExpireError,
    loading,
  } = useSelector((state) => state.subscriptionReducer);

  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        userName: "",
      },
      enableReinitialize: true,
      validationSchema: UpdateUserSchema,
      onSubmit: (values, action) => {
        console.log("values is", values);
        // dispatch(dispatch(AddSubscriptionPlan(values)));
        // action.resetForm();
      },
    });

  useEffect(() => {
    if (!id) {
      return navigate("/dashboard/users");
    } else {
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
    }
  }, [error, sessionExpireError, message]);

  useEffect(() => {
    if (id) {
      dispatch(GetAllSubscriptionPlan(1));
    }
  }, []);

  const handleUpdateSubscription = () => {
    if (!subscriptionPlan) {
      return toast.error("Plan is required");
    } else {
      let result = { subscriptionId: subscriptionPlan };
      dispatch(UpdateSubscriptionPlanAccordingToUser(id, result));
    }
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
                  <p className="sootfoliobreadclub">Edit Subscription Plans</p>
                </div>
              </Col>
              <Col md={5}></Col>
              <Col md={3}></Col>
            </Row>
            <Row className="setpaddinginnerpage mt-5 mb-5">
              <Col md={6}>
                <Form>
                  {/* <Form.Group className="mb-4" controlId="formGroupText">
                    <Form.Label className="makelabelleft">Plan Name</Form.Label>
                    <Form.Control
                      className="makeinputborder"
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <p className="form-error custom-form-error">
                        {errors.name}
                      </p>
                    ) : (
                      ""
                    )}
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formGroupText">
                    <Form.Label className="makelabelleft">User Name</Form.Label>
                    <Form.Control
                      className="makeinputborder"
                      type="text"
                      placeholder="User Name"
                      name="userName"
                      value={values.userName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.userName && touched.userName ? (
                      <p className="form-error custom-form-error">
                        {errors.userName}
                      </p>
                    ) : (
                      ""
                    )}
                  </Form.Group> */}
                  <Form.Group
                    controlId="formFile"
                    className="mb-4"
                    classNamem="makelabelandinputinline"
                  >
                    <Form.Label className="makelabelleft">
                      Select Subscription Plan
                    </Form.Label>
                    <Form.Select
                      className="makeinputborder"
                      aria-label="Default select example"
                      name="gameModeId"
                      value={subscriptionPlan}
                      onChange={(e) => setSubscriptionPlan(e.target.value)}
                    >
                      {subscriptionPlans.length > 0 &&
                        subscriptionPlans.map((item, ind) => {
                          return (
                            <option key={ind} value={item?._id}>
                              {item?.name && item.name}
                            </option>
                          );
                        })}
                    </Form.Select>
                  </Form.Group>
                  <div className="makeplanbuttonend">
                    <Button
                      className="planformsubmitbutton"
                      onClick={() => handleUpdateSubscription()}
                    >
                      {loading ? (
                        <Puff
                          height="20"
                          width="50"
                          radius="6"
                          color="white"
                          ariaLabel="loading"
                          wrapperStyle
                          wrapperClass
                        />
                      ) : (
                        "Update User"
                      )}
                    </Button>
                  </div>
                </Form>
                <Settingpop
                  className="makeplanpopinline"
                  trigger={buttonPopupOne}
                  setTrigger={setButtonPopupOne}
                >
                  <p className="planppoptext">
                    Your Plan for Platinum subscription is created. Do you want
                    to live it on website
                  </p>
                  <Button className="planpopgolive">Go Live</Button>
                </Settingpop>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Settings;
