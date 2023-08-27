import { authConstant } from "./../constants";
import axios from "axios";

export const Signin = (body) => {
  return async (dispatch) => {
    dispatch({ type: authConstant.USER_LOGIN_REQUEST });
    try {
      const token = sessionStorage.getItem("userToken");
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
      sessionStorage.setItem("adminToken", data.tokens.access.token);
      sessionStorage.setItem("adminRefreshToken", data.tokens.refresh.token);
      sessionStorage.setItem("admin", JSON.stringify(data.user));
      dispatch({
        type: authConstant.USER_LOGIN_SUCCESS,
        payload: "Login Successfully",
      });
    } catch (error) {
      if (error.response.data.errors[0].code === 401) {
        sessionStorage.clear();
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

export const GetAllUser = (page) => {
  return async (dispatch) => {
    dispatch({ type: authConstant.GET_ALL_USER_REQUEST });
    try {
      const token = sessionStorage.getItem("adminToken");
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/v1/api/auth?page=${page}&limit=10`,
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
        sessionStorage.clear();
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

export const GetSingleUser = (userId) => {
  return async (dispatch) => {
    dispatch({ type: authConstant.GET_SINGLE_USER_REQUEST });
    try {
      const token = sessionStorage.getItem("adminToken");
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/v1/api/auth/${userId}`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      const { data } = result;
      dispatch({
        type: authConstant.GET_SINGLE_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      if (error.response.data.errors[0].code === 401) {
        sessionStorage.clear();
        dispatch({
          type: authConstant.SESSION_EXPIRE,
          payload: { err: "Session has been expired" },
        });
      } else {
        dispatch({
          type: authConstant.GET_SINGLE_USER_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};

export const UpdateUserStatus = (body, userId) => {
  return async (dispatch) => {
    dispatch({ type: authConstant.UPDATE_USER_STATUS_REQUEST });
    try {
      const token = sessionStorage.getItem("adminToken");
      await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/v1/api/auth/status/${userId}`,
        body,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      dispatch({
        type: authConstant.UPDATE_USER_STATUS_SUCCESS,
        payload: "User status has been updated",
      });
    } catch (error) {
      if (error.response.data.errors[0].code === 401) {
        sessionStorage.clear();
        dispatch({
          type: authConstant.SESSION_EXPIRE,
          payload: { err: "Session has been expired" },
        });
      } else {
        dispatch({
          type: authConstant.UPDATE_USER_STATUS_FAILURE,
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
      sessionStorage.clear();
      dispatch({
        type: authConstant.USER_LOGOUT_SUCCESS,
        payload: "Logout Successfully",
      });
    } catch (error) {
      if (error.response.data.code === 401) {
        sessionStorage.clear();
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
