import { authConstant, quizConstant } from "../constants";

const initialState = {
  quiz: [],
  errors: [],
  loading: false,
  message: "",
  sessionExpireError: "",
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
    case quizConstant.CREATE_QUIZ_FAILURE:
    case quizConstant.GET_QUIZ_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.err,
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
        message: "",
      };
    case authConstant.CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: [],
        sessionExpireError: "",
      };
    default:
      return state;
  }
};

export default quizReducer;
