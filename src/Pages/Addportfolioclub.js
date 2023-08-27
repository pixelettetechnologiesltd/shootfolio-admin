import React, { useEffect } from "react";
import Menu from "../Components/Menu";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../Assets/Css/Addportfolioclub.css";
import InputGroup from "react-bootstrap/InputGroup";
import { RiExternalLinkLine } from "react-icons/ri";
import { useFormik } from "formik";
import { addPortfolioSchema } from "./../Schemas";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllClub,
  GetAllCoin,
  AddPortfolio,
  clearErrors,
  clearMessages,
} from "./../storeRedux/actions";
import { Puff } from "react-loader-spinner";
const Addportfolioinclub = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    coin,
    message,
    errors: error,
    sessionExpireError,
    loading,
    portLoading,
  } = useSelector((state) => state.clubReducer);

  const adminUser = JSON.parse(sessionStorage.getItem("admin"));
  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: {
        coin: "",
        quantity: "",
      },
      validationSchema: addPortfolioSchema,
      onSubmit: (values, action) => {
        values["club"] = id;
        values["admin"] = adminUser?.id;
        dispatch(AddPortfolio(values));
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
    }
  }, [error, sessionExpireError, message]);

  useEffect(() => {
    dispatch(GetAllClub());
    dispatch(GetAllCoin());
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
                <p className="addportfolioinclubheadmain">
                  Add Portfolio in Club
                </p>
              </Col>
              <Col md={5}></Col>
            </Row>
            <Row>
              <Col md={6} className="setmarg">
                <Form onSubmit={handleSubmit}>
                  <Form.Group
                    controlId="formFile"
                    className="mb-4"
                    classNamem="makelabelandinputinline"
                  >
                    <Form.Label className="makelabelleft">
                      Select Coin <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Select
                      className="makeinputborder"
                      aria-label="Default select example"
                      name="coin"
                      value={values.coin}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option>Open this select menu</option>
                      {loading && <option>Loading Please Wait...</option>}
                      {coin.length > 0 &&
                        coin.map((item, ind) => {
                          return (
                            <option value={item._id} key={ind}>
                              {item.name && item.name}
                            </option>
                          );
                        })}
                    </Form.Select>
                    {errors.coin && touched.coin ? (
                      <p className="form-error custom-form-error">
                        {errors.coin}
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
                    <Form.Label className="makelabelleft">
                      Select Club <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Select
                      className="makeinputborder"
                      aria-label="Default select example"
                      name="club"
                      value={values.club}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option>Open this select menu</option>
                      {loading && <option>Loading Please Wait...</option>}
                      {club.length > 0 &&
                        club.map((item, ind) => {
                          return (
                            <option value={item.id} key={ind}>
                              {item.title && item.title}
                            </option>
                          );
                        })}
                    </Form.Select>
                    {errors.club && touched.club ? (
                      <p className="form-error custom-form-error">
                        {errors.club}
                      </p>
                    ) : (
                      ""
                    )}
                  </Form.Group> */}

                  <Form.Group className="mb-4" controlId="formGroupText">
                    <Form.Label className="makelabelleft">
                      Number of Units <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <InputGroup className="mb-3 linkbuttonright">
                      <Form.Control
                        type="number"
                        className="makeinputborder"
                        placeholder="Add quantity of units"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        name="quantity"
                        value={values.quantity}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Button
                        className="formgroupbuttojn"
                        variant="outline-secondary"
                        id="buttonlink"
                      >
                        <RiExternalLinkLine />
                      </Button>
                    </InputGroup>
                    {errors.quantity && touched.quantity ? (
                      <p className="form-error custom-form-error">
                        {errors.quantity}
                      </p>
                    ) : (
                      ""
                    )}
                  </Form.Group>
                  <div className="addgapbetween">
                    <Button className="discardbutton" type="submit">
                      {" "}
                      {portLoading ? (
                        <Puff
                          height="15"
                          width="20"
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

export default Addportfolioinclub;
