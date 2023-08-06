import { authConstant, subscriptionPlanConstant } from "./../constants";
import axios from "axios";

export const AddSubscriptionPlan = (body) => {
  return async (dispatch) => {
    dispatch({
      type: subscriptionPlanConstant.ADD_NEW_SUBSCRIPTION_PLAN_REQUEST,
    });
    try {
      const token = localStorage.getItem("adminToken");
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/v1/api/subscription`,
        body,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      dispatch({
        type: subscriptionPlanConstant.ADD_NEW_SUBSCRIPTION_PLAN_SUCCESS,
        payload: "Subscription plan has been created",
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
          type: subscriptionPlanConstant.ADD_NEW_SUBSCRIPTION_PLAN_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};

export const GetAllSubscriptionPlan = (page) => {
  return async (dispatch) => {
    dispatch({
      type: subscriptionPlanConstant.GET_ALL_SUBSCRIPTION_PLAN_REQUEST,
    });
    try {
      const token = localStorage.getItem("adminToken");
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/v1/api/subscription?page=${page}&limit=10`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      const { data } = result;
      dispatch({
        type: subscriptionPlanConstant.GET_ALL_SUBSCRIPTION_PLAN_SUCCESS,
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
          type: subscriptionPlanConstant.GET_ALL_SUBSCRIPTION_PLAN_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};

export const UpdateSubscriptionPlan = (body, subscriptionId) => {
  return async (dispatch) => {
    dispatch({
      type: subscriptionPlanConstant.EDIT_SUBSCRIPTION_PLAN_REQUEST,
    });
    try {
      const token = localStorage.getItem("adminToken");
      await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/v1/api/subscription/${subscriptionId}`,
        body,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      dispatch({
        type: subscriptionPlanConstant.EDIT_SUBSCRIPTION_PLAN_SUCCESS,
        payload: "Subscription plan has been updated",
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
          type: subscriptionPlanConstant.EDIT_SUBSCRIPTION_PLAN_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};

export const GetSingleSubscriptionPlan = (subscriptionId) => {
  return async (dispatch) => {
    dispatch({
      type: subscriptionPlanConstant.GET_SINGLE_SUBSCRIPTION_PLAN_REQUEST,
    });
    try {
      const token = localStorage.getItem("adminToken");
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/v1/api/subscription/${subscriptionId}`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      const { data } = result;
      dispatch({
        type: subscriptionPlanConstant.GET_SINGLE_SUBSCRIPTION_PLAN_SUCCESS,
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
          type: subscriptionPlanConstant.GET_SINGLE_SUBSCRIPTION_PLAN_FAILURE,
          payload: { err: error.response.data.errors[0].message },
        });
      }
    }
  };
};
