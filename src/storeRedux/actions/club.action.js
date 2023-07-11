import { authConstant, clubConstant } from "./../constants";
import axios from "axios";

export const GetAllClub = (page) => {
  return async (dispatch) => {
    dispatch({ type: clubConstant.GET_CLUB_REQUEST });
    try {
      const token = localStorage.getItem("adminToken");
      let result;
      if (page) {
        result = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/v1/api/gameclubs?page=${page}&limit=10`,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : "",
            },
          }
        );
      } else {
        result = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/v1/api/gameclubs`,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : "",
            },
          }
        );
      }
      const { data } = result;
      dispatch({
        type: clubConstant.GET_CLUB_SUCCESS,
        payload: {
          results: data.results,
          page: data.page,
          totalPages: data.totalPages,
        },
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
          type: clubConstant.GET_CLUB_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};

export const GetAllCoin = (page) => {
  return async (dispatch) => {
    dispatch({ type: clubConstant.GET_COIN_REQUEST });
    try {
      const token = localStorage.getItem("adminToken");
      let result;
      if (page) {
        result = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/v1/api/coins?page=${page}&limit=400`,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : "",
            },
          }
        );
      } else {
        result = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/v1/api/coins`,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : "",
            },
          }
        );
      }
      const { data } = result;
      dispatch({
        type: clubConstant.GET_COIN_SUCCESS,
        payload: {
          results: data.results,
          page: data.page,
          totalPages: data.totalPages,
        },
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
          type: clubConstant.GET_COIN_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};

export const AddClub = (body) => {
  return async (dispatch) => {
    dispatch({ type: clubConstant.ADD_CLUB_REQUEST });
    try {
      const token = localStorage.getItem("adminToken");
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/v1/api/gameclubs`,
        body,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      dispatch({
        type: clubConstant.ADD_CLUB_SUCCESS,
        payload: "Club has been created",
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
          type: clubConstant.ADD_CLUB_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};

export const AddPortfolio = (body) => {
  return async (dispatch) => {
    dispatch({ type: clubConstant.ADD_PORTFOLIO_REQUEST });
    try {
      const token = localStorage.getItem("adminToken");
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/v1/api/portfolio`,
        body,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      dispatch({
        type: clubConstant.ADD_PORTFOLIO_SUCCESS,
        payload: "Portfolio has been created",
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
          type: clubConstant.ADD_PORTFOLIO_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};
