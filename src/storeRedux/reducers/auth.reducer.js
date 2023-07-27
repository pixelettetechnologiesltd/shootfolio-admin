import { authConstant } from "../constants";

const initialState = {
  errors: [],
  loading: false,
  user: [],
  singleUser: {},
  page: 1,
  totalPages: 1,
  message: "",
  customMessage: [],
  sessionExpireError: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstant.USER_LOGIN_REQUEST:
    case authConstant.USER_LOGOUT_REQUEST:
    case authConstant.GET_ALL_USER_REQUEST:
    case authConstant.UPDATE_USER_STATUS_REQUEST:
    case authConstant.GET_SINGLE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case authConstant.USER_LOGIN_SUCCESS:
    case authConstant.USER_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case authConstant.GET_SINGLE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        singleUser: action.payload,
      };
    case authConstant.UPDATE_USER_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        customMessage: action.payload,
      };
    case authConstant.GET_ALL_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.results,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
      };
    case authConstant.USER_LOGIN_FAILURE:
    case authConstant.USER_LOGOUT_FAILURE:
    case authConstant.GET_ALL_USER_FAILURE:
    case authConstant.UPDATE_USER_STATUS_FAILURE:
    case authConstant.GET_SINGLE_USER_FAILURE:
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
        customMessage: "",
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

export default authReducer;
