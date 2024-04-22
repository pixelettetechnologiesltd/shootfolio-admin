import React, { useEffect, useState } from 'react';
import Menu from '../Components/Menu';
import Sidebar from '../Components/Sidebar';
import { BiFootball } from 'react-icons/bi';
import '../Assets/Css/Addquestion.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  AddQuiz,
  clearMessages,
  clearErrors,
  GetSingleQuizQuestion,
  UpdateSingleQuizQuestion,
} from './../storeRedux/actions';
import { Puff } from 'react-loader-spinner';
import { useFormik } from 'formik';
import { addQuestionSchema } from './../Schemas';

const Addquestion = () => {
  const {
    errors: error,
    message,
    sessionExpireError,
    loading,
    singleQuiz,
  } = useSelector((state) => state.quizReducer);
  const { questionId } = useParams(); // For edit mode
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(Boolean(questionId));
  const [selectedOption, setSelectedOption] = useState('');
  // useEffect(() => {
  //   if (isEdit && questionId) {
  //     console.log(
  //       'Dispatching GetSingleQuizQuestion for questionId:',
  //       questionId
  //     );
  //     setIsEdit(true);
  //     dispatch(GetSingleQuizQuestion(questionId));
  //   }
  // }, [dispatch, isEdit, questionId]);
  useEffect(() => {
    console.log('useEffect 1');

    if (questionId) {
      console.log('questionId2:', questionId);
      // If questionId is present, we're in edit mode.
      setIsEdit(true);
      dispatch(GetSingleQuizQuestion(questionId));
      console.log('singleQuiz from Redux:', singleQuiz);
    }
  }, [questionId]);
  

  // Initialize useFormik for form handling
  const formik = useFormik({
    initialValues: {
      question: singleQuiz?.question || '',
      option1: singleQuiz?.options[0] || '',
      option2: singleQuiz?.options[1] || '',
      option3: singleQuiz?.options[2] || '',
      option4: singleQuiz?.options[3] || '',
    },
    validationSchema: addQuestionSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      const payload = {
        question: values.question,
        options: [
          values.option1,
          values.option2,
          values.option3,
          values.option4,
        ],
        correctOption: Number(selectedOption),
      };
      if (!selectedOption) {
        toast.error('Correct option is required');
        return;
      }
      if (isEdit) {
        dispatch(UpdateSingleQuizQuestion(payload, questionId));
      } else {
        dispatch(AddQuiz(payload));
      }
    },
  });

  // useEffect(() => {
  //   if (questionId) {
  //     console.log('questionId2:', questionId);
  //     // If questionId is present, we're in edit mode.
  //     setIsEdit(true);
  //     dispatch(GetSingleQuizQuestion(questionId));
  //   }
  // }, [questionId]);

  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    formik;

  useEffect(() => {
    console.log('useEffect 2 is running');
    console.log('questionId:', questionId);
    console.log('singleQuiz:', singleQuiz);
    // Only run if `singleQuiz` has new data to prevent an infinite loop.
    if (isEdit && singleQuiz && !Object.keys(formik.values).length) {
      console.log('Current formik values:', formik.values);
      console.log('New values from singleQuiz:', {
        question: singleQuiz.question,
        option1: singleQuiz.options[0],
        // ... rest of your options
      });
      if (isEdit && singleQuiz && questionId === singleQuiz._id) {
        console.log('Setting new form values');
        formik.setValues(
          {
            question: singleQuiz.question,
            option1: singleQuiz.options[0],
            option2: singleQuiz.options[1],
            option3: singleQuiz.options[2],
            option4: singleQuiz.options[3],
          },
          false
        ); // Second argument `false` prevents validation from running.
        setSelectedOption(String(singleQuiz.correctOption));
      }
    }
  }, [isEdit, singleQuiz]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
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
      setTimeout(() => navigate("/quiz"), 2000);
    }
  }, [error, sessionExpireError, message]);

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
                  <p className="sootfoliobreadclub">Add Quiz Question</p>
                </div>
              </Col>
              <Col md={2}></Col>
              <Col md={6}></Col>
            </Row>
            <Row className="addpaddingtomakeformcent">
              <Col md={6}>
                <Form className="mt-5" onSubmit={handleSubmit}>
                  <Form.Group
                    as={Row}
                    className="mb-5"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={2} className="formlabelquestion">
                      Question:{' '}
                      <span style={{ color: 'red', marginLeft: '5px' }}>*</span>
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        style={{ marginLeft: '5px' }}
                        type="text"
                        placeholder="Enter your question"
                        name="question"
                        value={values.question}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.question && touched.question ? (
                        <p className="form-error custom-form-error">
                          {errors.question}
                        </p>
                      ) : (
                        ''
                      )}
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={2} className="formlabelquestion">
                      A:{' '}
                      <span style={{ color: 'red', marginLeft: '5px' }}>*</span>
                    </Form.Label>
                    <Col sm={10} className="makebothinlinefields">
                      <Form.Group>
                        <label class="radio-button">
                          <input
                            value="0"
                            type="radio"
                            checked={selectedOption === '0'}
                            onChange={handleOptionChange}
                          />
                          <span class="radio"></span>
                        </label>
                        {/* <input
                          type="radio"
                          value="0"
                          checked={selectedOption === "0"}
                          onChange={handleOptionChange}
                          style={{ marginTop: "1rem" }}
                        /> */}
                      </Form.Group>
                      <Form.Control
                        type="text"
                        placeholder="Enter option # 1"
                        name="option1"
                        value={values.option1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      {errors.option1 && touched.option1 ? (
                        <p className="form-error custom-form-error">
                          {errors.option1}
                        </p>
                      ) : (
                        ''
                      )}
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={2} className="formlabelquestion">
                      B:{' '}
                      <span style={{ color: 'red', marginLeft: '5px' }}>*</span>
                    </Form.Label>
                    <Col sm={10} className="makebothinlinefields">
                      <Form.Group>
                        <label class="radio-button">
                          <input
                            value="1"
                            type="radio"
                            checked={selectedOption === '1'}
                            onChange={handleOptionChange}
                          />
                          <span class="radio"></span>
                        </label>
                        {/* <input
                        type="radio"
                        value="1"
                        checked={selectedOption === "1"}
                        onChange={handleOptionChange}
                        style={{ marginTop: "1rem" }}
                      /> */}
                      </Form.Group>
                      <Form.Control
                        type="text"
                        placeholder="Enter option # 2"
                        name="option2"
                        value={values.option2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      {errors.option2 && touched.option2 ? (
                        <p className="form-error custom-form-error">
                          {errors.option2}
                        </p>
                      ) : (
                        ''
                      )}
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={2} className="formlabelquestion">
                      C:{' '}
                      <span style={{ color: 'red', marginLeft: '5px' }}>*</span>
                    </Form.Label>
                    <Col sm={10} className="makebothinlinefields">
                      <Form.Group>
                        <label class="radio-button">
                          <input
                            value="2"
                            type="radio"
                            checked={selectedOption === '2'}
                            onChange={handleOptionChange}
                          />
                          <span class="radio"></span>
                        </label>
                      </Form.Group>
                      <Form.Control
                        type="text"
                        placeholder="Enter option # 3"
                        name="option3"
                        value={values.option3}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {/* <input
                        type="radio"
                        value="2"
                        checked={selectedOption === "2"}
                        onChange={handleOptionChange}
                        style={{ marginTop: "1rem" }}
                      /> */}
                      {errors.option3 && touched.option3 ? (
                        <p className="form-error custom-form-error">
                          {errors.option3}
                        </p>
                      ) : (
                        ''
                      )}
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={2} className="formlabelquestion">
                      D:{' '}
                      <span style={{ color: 'red', marginLeft: '5px' }}>*</span>
                    </Form.Label>
                    <Col sm={10} className="makebothinlinefields">
                      <Form.Group>
                        <label class="radio-button">
                          <input
                            value="3"
                            type="radio"
                            checked={selectedOption === '3'}
                            onChange={handleOptionChange}
                          />
                          <span class="radio"></span>
                        </label>
                      </Form.Group>
                      <Form.Control
                        type="text"
                        placeholder="Enter option # 4"
                        name="option4"
                        value={values.option4}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {/* <input
                        type="radio"
                        value="3"
                        checked={selectedOption === "3"}
                        onChange={handleOptionChange}
                        style={{ marginTop: "1rem" }}
                      /> */}
                      {errors.option4 && touched.option4 ? (
                        <p className="form-error custom-form-error">
                          {errors.option4}
                        </p>
                      ) : (
                        ''
                      )}
                    </Col>
                  </Form.Group>
                  <div className="makeformsavebtnend">
                    <Button
                      className="addmorepaddingforquestsubmit"
                      type="submit"
                      disabled={loading ? true : false}
                    >
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
                        'Save'
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

export default Addquestion;
