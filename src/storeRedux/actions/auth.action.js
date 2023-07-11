import { authConstant } from "./../constants";
import axios from "axios";

export const Signin = (body) => {
  return async (dispatch) => {
    dispatch({ type: authConstant.USER_LOGIN_REQUEST });
    try {
      const token = localStorage.getItem("userToken");
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/v1/api/admin/login`,
        body,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      const { data } = result;
      localStorage.setItem("adminToken", data.tokens.access.token);
      localStorage.setItem("adminRefreshToken", data.tokens.refresh.token);
      localStorage.setItem("admin", JSON.stringify(data.user));
      dispatch({
        type: authConstant.USER_LOGIN_SUCCESS,
        payload: "Login Successfully",
      });
    } catch (error) {
      if (error.response.data.errors[0].code === 401) {
        localStorage.clear();
        dispatch({
          type: authConstant.SESSION_EXPIRE,
          payload: { err: "Session has been expired" },
        });
      } else {
        dispatch({
          type: authConstant.USER_LOGIN_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};

export const GetAllUser = () => {
  return async (dispatch) => {
    dispatch({ type: authConstant.GET_ALL_USER_REQUEST });
    try {
      const token = localStorage.getItem("adminToken");
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/v1/api/auth/`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      const { data } = result;
      dispatch({
        type: authConstant.GET_ALL_USER_SUCCESS,
        payload: {
          results: data.results,
          page: data.page,
          totalPages: data.totalPages,
        },
      });
    } catch (error) {
      if (error.response.data.errors[0].code === 401) {
        localStorage.clear();
        dispatch({
          type: authConstant.SESSION_EXPIRE,
          payload: { err: "Session has been expired" },
        });
      } else {
        dispatch({
          type: authConstant.GET_ALL_USER_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};
export const logOut = () => {
  return async (dispatch) => {
    dispatch({ type: authConstant.USER_LOGOUT_REQUEST });
    try {
      localStorage.clear();
      dispatch({
        type: authConstant.USER_LOGOUT_SUCCESS,
        payload: "Logout Successfully",
      });
    } catch (error) {
      if (error.response.data.code === 401) {
        localStorage.clear();
        dispatch({
          type: authConstant.SESSION_EXPIRE,
          payload: { err: "Session has been expired" },
        });
      } else {
        dispatch({
          type: authConstant.USER_LOGOUT_FAILURE,
          payload: { err: error.response.data.message },
        });
      }
    }
  };
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: authConstant.CLEAR_ERRORS });
};

// Clearing Messages
export const clearMessages = () => async (dispatch) => {
  dispatch({ type: authConstant.CLEAR_MESSAGES });
};
