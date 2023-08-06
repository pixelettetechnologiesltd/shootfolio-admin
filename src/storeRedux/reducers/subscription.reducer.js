import { authConstant, subscriptionPlanConstant } from "../constants";

const initialState = {
  subscriptionPlans: [],
  singleSubscriptionPlan: {},
  errors: [],
  loading: false,
  page: 1,
  totalPages: 1,
  message: "",
  sessionExpireError: "",
};

const subscriptionPlanReducer = (state = initialState, action) => {
  switch (action.type) {
    case subscriptionPlanConstant.ADD_NEW_SUBSCRIPTION_PLAN_REQUEST:
    case subscriptionPlanConstant.GET_ALL_SUBSCRIPTION_PLAN_REQUEST:
    case subscriptionPlanConstant.GET_SINGLE_SUBSCRIPTION_PLAN_REQUEST:
    case subscriptionPlanConstant.EDIT_SUBSCRIPTION_PLAN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case subscriptionPlanConstant.ADD_NEW_SUBSCRIPTION_PLAN_SUCCESS:
    case subscriptionPlanConstant.EDIT_SUBSCRIPTION_PLAN_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case subscriptionPlanConstant.GET_ALL_SUBSCRIPTION_PLAN_SUCCESS:
      return {
        ...state,
        loading: false,
        subscriptionPlans: action.payload.results,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
      };
    case subscriptionPlanConstant.GET_SINGLE_SUBSCRIPTION_PLAN_SUCCESS:
      return {
        ...state,
        loading: false,
        singleSubscriptionPlan: action.payload,
      };
    case subscriptionPlanConstant.ADD_NEW_SUBSCRIPTION_PLAN_FAILURE:
    case subscriptionPlanConstant.GET_ALL_SUBSCRIPTION_PLAN_FAILURE:
    case subscriptionPlanConstant.GET_SINGLE_SUBSCRIPTION_PLAN_FAILURE:
    case subscriptionPlanConstant.EDIT_SUBSCRIPTION_PLAN_FAILURE:
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

export default subscriptionPlanReducer;
