import { authConstant, quizConstant } from './../constants';
import axios from 'axios';

export const GetAllQuiz = (page) => {
  return async (dispatch) => {
    dispatch({ type: quizConstant.GET_QUIZ_REQUEST });
    try {
      const token = sessionStorage.getItem('adminToken');
      let result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/v1/api/quiz?page=${page}&limit=6`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
          },
        }
      );
      const { data } = result;
      dispatch({
        type: quizConstant.GET_QUIZ_SUCCESS,
        payload: {
          results: data.results,
          page: data.page,
          totalPages: data.totalPages,
        },
      });
    } catch (error) {
      if (error.response.data.code === 401) {
        sessionStorage.clear();
        dispatch({
          type: authConstant.SESSION_EXPIRE,
          payload: { err: 'Session has been expired' },
        });
      } else {
        dispatch({
          type: quizConstant.GET_QUIZ_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};

export const AddQuiz = (body) => {
  return async (dispatch) => {
    dispatch({ type: quizConstant.CREATE_QUIZ_REQUEST });
    try {
      const token = sessionStorage.getItem('adminToken');
      await axios.post(`${process.env.REACT_APP_BASE_URL}/v1/api/quiz/`, body, {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
      });
      dispatch({
        type: quizConstant.CREATE_QUIZ_SUCCESS,
        payload: 'Quiz has been created',
      });
    } catch (error) {
      if (error.response.data.code === 401) {
        sessionStorage.clear();
        dispatch({
          type: authConstant.SESSION_EXPIRE,
          payload: { err: 'Session has been expired' },
        });
      } else {
        dispatch({
          type: quizConstant.CREATE_QUIZ_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};

export const GetSingleQuizQuestion = (id) => {
  console.log('id===', id);
  return async (dispatch) => {
    dispatch({ type: quizConstant.GET_SINGLE_QUIZ_QUESTION_REQUEST });
    try {
      const token = sessionStorage.getItem('adminToken');
      let result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/v1/api/quiz/${id}`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
          },
        }
      );
      const { data } = result;
      console.log('data===', data);
      dispatch({
        type: quizConstant.GET_SINGLE_QUIZ_QUESTION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      if (error.response.data.code === 401) {
        sessionStorage.clear();
        dispatch({
          type: authConstant.SESSION_EXPIRE,
          payload: { err: 'Session has been expired' },
        });
      } else {
        dispatch({
          type: quizConstant.GET_SINGLE_QUIZ_QUESTION_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};

export const UpdateSingleQuizQuestion = (body, quizId) => {
  return async (dispatch) => {
    dispatch({ type: quizConstant.UPDATE_SINGLE_QUIZ_QUESTION_REQUEST });
    try {
      const token = sessionStorage.getItem('adminToken');
      await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/v1/api/quiz/${quizId}`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
          },
        }
      );
      dispatch({
        type: quizConstant.UPDATE_SINGLE_QUIZ_QUESTION_SUCCESS,
        payload: {
          id: quizId,
          updates: body, // or the actual response from the server if it includes the updated data
          message: 'Quiz has been updated',
        },
      });
    } catch (error) {
      if (error.response.data.code === 401) {
        sessionStorage.clear();
        dispatch({
          type: authConstant.SESSION_EXPIRE,
          payload: { err: 'Session has been expired' },
        });
      } else {
        dispatch({
          type: quizConstant.UPDATE_SINGLE_QUIZ_QUESTION_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};

export const DeleteSingleQuizQuestion = (id) => {
  console.log('id===', id);
  return async (dispatch) => {
    dispatch({ type: quizConstant.DELETE_SINGLE_QUIZ_QUESTION_REQUEST });
    try {
      const token = sessionStorage.getItem('adminToken');
      await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/v1/api/quiz/${id}`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
          },
        }
      );
      dispatch({
        type: quizConstant.DELETE_SINGLE_QUIZ_QUESTION_SUCCESS,
        payload: id,
      });
    } catch (error) {
      if (error.response.data.code === 401) {
        sessionStorage.clear();
        dispatch({
          type: authConstant.SESSION_EXPIRE,
          payload: { err: 'Session has been expired' },
        });
      } else {
        dispatch({
          type: quizConstant.DELETE_SINGLE_QUIZ_QUESTION_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};
