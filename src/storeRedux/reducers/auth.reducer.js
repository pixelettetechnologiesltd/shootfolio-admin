import { authConstant } from "../constants";

const initialState = {
  errors: [],
  loading: false,
  message: "",
  sessionExpireError: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstant.USER_LOGIN_REQUEST:
    case authConstant.USER_LOGOUT_REQUEST:
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
    case authConstant.USER_LOGIN_FAILURE:
    case authConstant.USER_LOGOUT_FAILURE:
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

export default authReducer;
