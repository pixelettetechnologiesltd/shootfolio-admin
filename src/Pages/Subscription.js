import React, { useState, useEffect } from 'react';
import Menu from '../Components/Menu';
import Sidebar from '../Components/Sidebar';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { images } from '../Components/Images';
import { Link } from 'react-router-dom';
import { BiFootball } from 'react-icons/bi';
import { AiOutlineCheck } from 'react-icons/ai';
import '../Assets/Css/Subscription.css';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  DeleteSubscription,
  GetAllSubscriptionPlan,
  UpdateSubscriptionPlan,
  clearErrors,
} from './../storeRedux/actions';
import { Puff } from 'react-loader-spinner';

const Subscription = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const {
    subscriptionPlans,
    errors: error,
    sessionExpireError,
    loading,
  } = useSelector((state) => state.subscriptionReducer);

  useEffect(() => {
    if (error.length > 0) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (sessionExpireError !== '') {
      toast.error(sessionExpireError);
      dispatch(clearErrors());
      setTimeout(() => navigate('/'), 1000);
    }
  }, [error, sessionExpireError]);

  useEffect(() => {
    dispatch(GetAllSubscriptionPlan(page));
  }, [page]);

  const handleDisable = (planId, currentStatus) => {
    let body = {
      status: !currentStatus,
    };
    dispatch(UpdateSubscriptionPlan(body, planId));
    console.log('Disable plan with id: ', planId);
    // You might want to refresh the list after deletion or navigate the user to a confirmation page
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
            style={{ backgroundColor: '#1B1B1B' }}
          >
            <Sidebar></Sidebar>
          </Col>
          <Col
            xs={9}
            sm={9}
            md={9}
            lg={10}
            xl={10}
            style={{ marginTop: '30px' }}
          >
            <Row className="setpaddinginnerpage">
              <Col md={4}>
                <div className="makebreadinrow">
                  <span className="breadgreenfootball">
                    <BiFootball />
                  </span>
                  <p className="sootfoliobreadclub">Subscription Plans</p>
                </div>
              </Col>
              <Col md={5}></Col>
              <Col md={3} className="makebuttonalignend">
                <Link to="/Dashboard/addsubscriptionplan">
                  <Button className="addnewshhotfolioclubbutton">
                    {' '}
                    + Add New Plan
                  </Button>
                </Link>
              </Col>
            </Row>
            <Row className="addpaddingplans">
              {loading ? (
                <Puff
                  height="60"
                  width="60"
                  radius="6"
                  color="white"
                  ariaLabel="loading"
                  wrapperStyle
                  wrapperClass
                />
              ) : subscriptionPlans.length > 0 ? (
                subscriptionPlans.map((data, ind) => {
                  return (
                    <Col md={4} key={ind}>
                      <div
                        className={`plancard  ${
                          !data.status ? 'blurEffect' : ''
                        }`}
                        key={ind}
                      >
                        <div className="cardhead">
                          <Image src={images.planpic} width="70px" />
                          <div className="planmeta">
                            <p className="planname">
                              {data?.name && data.name}
                            </p>
                            <p className="planprice">
                              $ {data?.amount && data.amount} per month
                            </p>
                          </div>
                        </div>
                        {data.leagues &&
                          data.leagues.map((item, ind) => {
                            return (
                              <div className="cardbody mt-4" key={ind}>
                                <p className="planbenifits">
                                  <span className="checkwithplanbenifits">
                                    <AiOutlineCheck />
                                  </span>
                                  {item.leagueTitle}
                                </p>
                              </div>
                            );
                          })}
                        <div className="cardfooter mt-5">
                          <Link
                            to={`/Dashboard/editsubscriptionplan/${data._id}`}
                          >
                            <Button className="planbutton">Edit Plan</Button>
                          </Link>
                          <Button
                            className="addleaguebutton disableButton"
                            onClick={() => handleDisable(data._id, data.status)}
                          >
                            {data?.status ? 'Disable' : 'Enable'}
                          </Button>
                        </div>
                      </div>
                    </Col>
                  );
                })
              ) : (
                ''
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Subscription;
