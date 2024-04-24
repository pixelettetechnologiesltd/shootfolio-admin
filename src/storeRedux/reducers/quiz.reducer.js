import { authConstant, quizConstant } from '../constants';

const initialState = {
  quiz: [],
  singleQuiz: null,
  errors: [],
  loading: false,
  message: '',
  sessionExpireError: '',
  page: 1,
  totalPages: 1,
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case quizConstant.CREATE_QUIZ_REQUEST:
    case quizConstant.GET_QUIZ_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case quizConstant.DELETE_SINGLE_QUIZ_QUESTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case quizConstant.CREATE_QUIZ_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case quizConstant.GET_QUIZ_SUCCESS:
      return {
        ...state,
        loading: false,
        quiz: action.payload.results,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
      };
    case quizConstant.DELETE_SINGLE_QUIZ_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        quiz: state.quiz.filter((quiz) => quiz._id !== action.payload), // assuming `_id` is the identifier for each quiz
        message: 'Quiz deleted successfully',
      };
    case quizConstant.CREATE_QUIZ_FAILURE:
    case quizConstant.GET_QUIZ_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.err,
      };
    case quizConstant.UPDATE_SINGLE_QUIZ_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case quizConstant.UPDATE_SINGLE_QUIZ_QUESTION_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case quizConstant.GET_SINGLE_QUIZ_QUESTION_SUCCESS:
      return {
        ...state,
        singleQuiz: action.payload,
        loading: false,
      };
    case quizConstant.GET_SINGLE_QUIZ_QUESTION_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
        singleQuiz: {},
      };
    case quizConstant.DELETE_SINGLE_QUIZ_QUESTION_FAILURE:
      return {
        ...state,
        loading: false,
        errors: [...state.errors, action.payload],
      };
    case authConstant.SESSION_EXPIRE:
      return {
        ...state,
        loading: false,
        sessionExpireError: action.payload.err,
      };
    case authConstant.CLEAR_MESSAGES:
      return {
        ...state,
        loading: false,
        message: '',
      };
    case authConstant.CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: [],
        sessionExpireError: '',
      };
    default:
      return state;
  }
};

export default quizReducer;
