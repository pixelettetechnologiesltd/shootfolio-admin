import { authConstant, gameLeagueConstant } from "./../constants";
import axios from "axios";

export const GetAllGameLeague = (page) => {
  return async (dispatch) => {
    dispatch({ type: gameLeagueConstant.GET_GAME_LEAGUE_REQUEST });
    try {
      const token = sessionStorage.getItem("adminToken");
      let result;
      if (page) {
        result = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/v1/api/gameleagues?page=${page}&limit=9`,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : "",
            },
          }
        );
      } else {
        result = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/v1/api/gameleagues`,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : "",
            },
          }
        );
      }
      const { data } = result;
      dispatch({
        type: gameLeagueConstant.GET_GAME_LEAGUE_SUCCESS,
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
          type: gameLeagueConstant.GET_GAME_LEAGUE_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};

export const GetSingleGameLeague = (leagueId) => {
  return async (dispatch) => {
    dispatch({ type: gameLeagueConstant.GET_SINGLE_GAME_LEAGUE_REQUEST });
    try {
      const token = sessionStorage.getItem("adminToken");
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/v1/api/gameleagues/${leagueId}`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      const { data } = result;
      dispatch({
        type: gameLeagueConstant.GET_SINGLE_GAME_LEAGUE_SUCCESS,
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
          type: gameLeagueConstant.GET_SINGLE_GAME_LEAGUE_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};
export const AddGameLeague = (body) => {
  return async (dispatch) => {
    dispatch({ type: gameLeagueConstant.ADD_GAME_LEAGUE_REQUEST });
    try {
      const token = sessionStorage.getItem("adminToken");
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/v1/api/gameleagues`,
        body,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      dispatch({
        type: gameLeagueConstant.ADD_GAME_LEAGUE_SUCCESS,
        payload: "Game League has been created",
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
          type: gameLeagueConstant.ADD_GAME_LEAGUE_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};

export const UpdateGameLeague = (body, gameLeagueId) => {
  return async (dispatch) => {
    dispatch({ type: gameLeagueConstant.UPDATE_SINGLE_GAME_LEAGUE_REQUEST });
    try {
      const token = sessionStorage.getItem("adminToken");
      await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/v1/api/gameleagues/${gameLeagueId}`,
        body,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      dispatch({
        type: gameLeagueConstant.UPDATE_SINGLE_GAME_LEAGUE_SUCCESS,
        payload: "Game League has been updated",
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
          type: gameLeagueConstant.UPDATE_SINGLE_GAME_LEAGUE_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};
