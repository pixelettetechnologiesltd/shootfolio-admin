import { authConstant, gameModeConstant } from "./../constants";
import axios from "axios";

export const GetAllGameMode = (page) => {
  return async (dispatch) => {
    dispatch({ type: gameModeConstant.GET_GAME_MODE_REQUEST });
    try {
      const token = localStorage.getItem("adminToken");
      let result;
      if (page) {
        result = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/v1/api/gamemodes?page=${page}&limit=10`,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : "",
            },
          }
        );
      } else {
        result = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/v1/api/gamemodes`,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : "",
            },
          }
        );
      }
      const { data } = result;
      dispatch({
        type: gameModeConstant.GET_GAME_MODE_SUCCESS,
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
          type: gameModeConstant.GET_GAME_MODE_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};

export const AddGameMode = (body) => {
  return async (dispatch) => {
    dispatch({ type: gameModeConstant.ADD_GAME_MODE_REQUEST });
    try {
      const token = localStorage.getItem("adminToken");
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/v1/api/gamemodes`,
        body,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      dispatch({
        type: gameModeConstant.ADD_GAME_MODE_SUCCESS,
        payload: "Game Mode has been created",
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
          type: gameModeConstant.ADD_GAME_MODE_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};

export const GetSingleGameMode = (gameModeId) => {
  return async (dispatch) => {
    dispatch({ type: gameModeConstant.GET_SINGLE_GAME_MODE_REQUEST });
    try {
      const token = localStorage.getItem("adminToken");
      let result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/v1/api/gamemodes/${gameModeId}`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      const { data } = result;
      dispatch({
        type: gameModeConstant.GET_SINGLE_GAME_MODE_SUCCESS,
        payload: data,
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
          type: gameModeConstant.GET_SINGLE_GAME_MODE_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};

export const UpdateSingleGameMode = (body, gameModeId) => {
  return async (dispatch) => {
    dispatch({ type: gameModeConstant.UPDATE_SINGLE_GAME_MODE_REQUEST });
    try {
      const token = localStorage.getItem("adminToken");
      await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/v1/api/gamemodes/${gameModeId}`,
        body,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      dispatch({
        type: gameModeConstant.UPDATE_SINGLE_GAME_MODE_SUCCESS,
        payload: "Game Mode has been updated",
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
          type: gameModeConstant.UPDATE_SINGLE_GAME_MODE_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};
