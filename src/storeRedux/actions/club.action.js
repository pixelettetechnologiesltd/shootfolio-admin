import { authConstant, clubConstant } from './../constants';
import axios from 'axios';

export const GetAllClub = (page) => {
  return async (dispatch) => {
    dispatch({ type: clubConstant.GET_CLUB_REQUEST });
    try {
      const token = sessionStorage.getItem('adminToken');
      let result;
      if (page) {
        result = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/v1/api/gameclubs?page=${page}&limit=12`,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : '',
            },
          }
        );
      } else {
        result = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/v1/api/gameclubs`,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : '',
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
        sessionStorage.clear();
        dispatch({
          type: authConstant.SESSION_EXPIRE,
          payload: { err: 'Session has been expired' },
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

export const GetAllPortfolio = (admin, club, page) => {
  return async (dispatch) => {
    dispatch({ type: clubConstant.GET_CLUB_REQUEST });
    try {
      const token = sessionStorage.getItem('adminToken');
      let result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/v1/api/portfolio?page=${page}&limit=10&admin=${admin}&club=${club}`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
          },
        }
      );
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
        sessionStorage.clear();
        dispatch({
          type: authConstant.SESSION_EXPIRE,
          payload: { err: 'Session has been expired' },
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
      const token = sessionStorage.getItem('adminToken');
      let result;
      if (page) {
        result = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/v1/api/coins?page=${page}&limit=10`,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : '',
            },
          }
        );
      } else {
        result = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/v1/api/coins?limit=400`,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : '',
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
        sessionStorage.clear();
        dispatch({
          type: authConstant.SESSION_EXPIRE,
          payload: { err: 'Session has been expired' },
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

export const DeleteCoin = (coinId) => {
  return async (dispatch) => {
    dispatch({ type: clubConstant.DELETE_COIN_REQUEST });
    try {
      const token = sessionStorage.getItem('adminToken');
      await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/v1/api/coins/${coinId}`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
          },
        }
      );
      dispatch(GetAllCoin(1));
      dispatch({
        type: clubConstant.DELETE_COIN_SUCCESS,
        payload: 'Coin has been deleted',
      });
    } catch (error) {
      if (error.response.data.code === 401) {
        sessionStorage.clear();
        dispatch({
          type: authConstant.SESSION_EXPIRE,
          payload: { err: 'Session has been expired' },
        });
      } else {
        dispatch({
          type: clubConstant.DELETE_COIN_FAILURE,
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
      const token = sessionStorage.getItem('adminToken');
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/v1/api/gameclubs`,
        body,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
          },
        }
      );
      dispatch({
        type: clubConstant.ADD_CLUB_SUCCESS,
        payload: 'Club has been created',
      });
    } catch (error) {
      if (error.response.data.code === 401) {
        sessionStorage.clear();
        dispatch({
          type: authConstant.SESSION_EXPIRE,
          payload: { err: 'Session has been expired' },
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
      const token = sessionStorage.getItem('adminToken');
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/v1/api/portfolio`,
        body,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
          },
        }
      );
      dispatch({
        type: clubConstant.ADD_PORTFOLIO_SUCCESS,
        payload: 'Portfolio has been created',
      });
    } catch (error) {
      if (error.response.data.code === 401) {
        sessionStorage.clear();
        dispatch({
          type: authConstant.SESSION_EXPIRE,
          payload: { err: 'Session has been expired' },
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

export const GetSingleClub = (clubId) => {
  return async (dispatch) => {
    dispatch({ type: clubConstant.GET_SINGLE_CLUB_REQUEST });
    try {
      const token = sessionStorage.getItem('adminToken');
      let result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/v1/api/gameclubs/${clubId}`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
          },
        }
      );
      const { data } = result;
      dispatch({
        type: clubConstant.GET_SINGLE_CLUB_SUCCESS,
        payload: data,
      });
    } catch (error) {
      if (error.response.data.code === 401) {
        sessionStorage.clear();
        dispatch({
          type: authConstant.SESSION_EXPIRE,
          payload: { err: 'Session has been expired' },
        });
      } else {
        dispatch({
          type: clubConstant.GET_SINGLE_CLUB_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};

export const UpdateSingleClub = (body, clubId) => {
  return async (dispatch) => {
    dispatch({ type: clubConstant.UPDATE_SINGLE_CLUB_REQUEST });
    try {
      const token = sessionStorage.getItem('adminToken');
      await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/v1/api/gameclubs/${clubId}`,
        body,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
          },
        }
      );
      dispatch({
        type: clubConstant.UPDATE_SINGLE_CLUB_SUCCESS,
        payload: 'Club has been updated',
      });
    } catch (error) {
      if (error.response.data.code === 401) {
        sessionStorage.clear();
        dispatch({
          type: authConstant.SESSION_EXPIRE,
          payload: { err: 'Session has been expired' },
        });
      } else {
        dispatch({
          type: clubConstant.UPDATE_SINGLE_CLUB_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};

export const GetSinglePortfolio = (portfolioId) => {
  return async (dispatch) => {
    dispatch({ type: clubConstant.GET_SINGLE_PORTFOLIO_REQUEST });
    try {
      const token = sessionStorage.getItem('adminToken');
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/v1/api/portfolio/${portfolioId}`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
          },
        }
      );
      const { data } = result;
      dispatch({
        type: clubConstant.GET_SINGLE_PORTFOLIO_SUCCESS,
        payload: data,
      });
    } catch (error) {
      if (error.response.data.code === 401) {
        sessionStorage.clear();
        dispatch({
          type: authConstant.SESSION_EXPIRE,
          payload: { err: 'Session has been expired' },
        });
      } else {
        dispatch({
          type: clubConstant.GET_SINGLE_PORTFOLIO_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};

export const UpdateSinglePortfolio = (body, portfolioId) => {
  return async (dispatch) => {
    dispatch({ type: clubConstant.UPDATE_SINGLE_PORTFOLIO_REQUEST });
    try {
      const token = sessionStorage.getItem('adminToken');
      await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/v1/api/portfolio/${portfolioId}`,
        body,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
          },
        }
      );
      dispatch({
        type: clubConstant.UPDATE_SINGLE_PORTFOLIO_SUCCESS,
        payload: 'Portfolio has been updated',
      });
    } catch (error) {
      if (error.response.data.code === 401) {
        sessionStorage.clear();
        dispatch({
          type: authConstant.SESSION_EXPIRE,
          payload: { err: 'Session has been expired' },
        });
      } else {
        dispatch({
          type: clubConstant.UPDATE_SINGLE_PORTFOLIO_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};
