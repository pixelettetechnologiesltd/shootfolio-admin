import { authConstant, gameTypeConstant } from "./../constants";
import axios from "axios";

export const GetAllGameType = (page) => {
  return async (dispatch) => {
    dispatch({ type: gameTypeConstant.GET_GAME_TYPE_REQUEST });
    try {
      const token = sessionStorage.getItem("adminToken");
      let result;
      if (page) {
        result = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/v1/api/gametypes?page=${page}&limit=8`,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : "",
            },
          }
        );
      } else {
        result = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/v1/api/gametypes`,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : "",
            },
          }
        );
      }
      const { data } = result;
      dispatch({
        type: gameTypeConstant.GET_GAME_TYPE_SUCCESS,
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
          payload: { err: "Session has been expired" },
        });
      } else {
        dispatch({
          type: gameTypeConstant.GET_GAME_TYPE_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};

export const GetSingleGameType = (gameTypeId) => {
  return async (dispatch) => {
    dispatch({ type: gameTypeConstant.GET_SINGLE_GAME_TYPE_REQUEST });
    try {
      const token = sessionStorage.getItem("adminToken");
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/v1/api/gametypes/${gameTypeId}`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      const { data } = result;
      dispatch({
        type: gameTypeConstant.GET_SINGLE_GAME_TYPE_SUCCESS,
        payload: data,
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
          type: gameTypeConstant.GET_SINGLE_GAME_TYPE_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};
export const AddGameType = (body) => {
  return async (dispatch) => {
    dispatch({ type: gameTypeConstant.ADD_GAME_TYPE_REQUEST });
    try {
      const token = sessionStorage.getItem("adminToken");
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/v1/api/gametypes`,
        body,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      dispatch({
        type: gameTypeConstant.ADD_GAME_TYPE_SUCCESS,
        payload: "Game Type has been created",
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
          type: gameTypeConstant.ADD_GAME_TYPE_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};

export const EditSingleGameType = (body, gameTypeId) => {
  return async (dispatch) => {
    dispatch({ type: gameTypeConstant.EDIT_SINGLE_GAME_TYPE_REQUEST });
    try {
      const token = sessionStorage.getItem("adminToken");
      await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/v1/api/gametypes/${gameTypeId}`,
        body,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      dispatch({
        type: gameTypeConstant.EDIT_SINGLE_GAME_TYPE_SUCCESS,
        payload: "Game Type has been updated",
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
          type: gameTypeConstant.EDIT_SINGLE_GAME_TYPE_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};
