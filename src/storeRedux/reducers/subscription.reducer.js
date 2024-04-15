import { authConstant, subscriptionPlanConstant } from '../constants';

const initialState = {
  subscriptionPlans: [],
  cryptoTransactions: [],
  singleSubscriptionPlan: {},
  errors: [],
  loading: false,
  page: 1,
  totalPages: 1,
  message: '',
  sessionExpireError: '',
};

const subscriptionPlanReducer = (state = initialState, action) => {
  switch (action.type) {
    case subscriptionPlanConstant.ADD_NEW_SUBSCRIPTION_PLAN_REQUEST:
    case subscriptionPlanConstant.GET_ALL_SUBSCRIPTION_PLAN_REQUEST:
    case subscriptionPlanConstant.GET_SINGLE_SUBSCRIPTION_PLAN_REQUEST:
    case subscriptionPlanConstant.DELETE_SUBSCRIPTION_PLAN_REQUEST:
    case subscriptionPlanConstant.EDIT_SUBSCRIPTION_PLAN_REQUEST:
    case subscriptionPlanConstant.GET_ALL_CRYPTO_TRANSACTION_REQUEST:
    case subscriptionPlanConstant.UPDATE_CRYPTO_TRANSACTION_STATUS_REQUEST:
    case subscriptionPlanConstant.UPDATE_SUBSCRIPTION_PLAN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case subscriptionPlanConstant.ADD_NEW_SUBSCRIPTION_PLAN_SUCCESS:
    case subscriptionPlanConstant.EDIT_SUBSCRIPTION_PLAN_SUCCESS:
    case subscriptionPlanConstant.DELETE_SUBSCRIPTION_PLAN_SUCCESS:
    case subscriptionPlanConstant.UPDATE_CRYPTO_TRANSACTION_STATUS_SUCCESS:
    case subscriptionPlanConstant.UPDATE_SUBSCRIPTION_PLAN_SUCCESS:
      if (!action.payload || !action.payload._id) {
        console.error('Payload is undefined or does not have _id');
        return state;
      }
      const index = state.subscriptionPlans.findIndex(
        (plan) => plan._id === action.payload._id
      );
      if (index !== -1) {
        const updatedPlans = [
          ...state.subscriptionPlans.slice(0, index),
          action.payload,
          ...state.subscriptionPlans.slice(index + 1),
        ];

        return {
          ...state,
          subscriptionPlans: updatedPlans,
          loading: false,
          message: 'Subscription plan has been updated',
        };
      } else {
        console.error('Unable to find the subscription plan to update');
        return state;
      }

    case subscriptionPlanConstant.GET_ALL_SUBSCRIPTION_PLAN_SUCCESS:
      return {
        ...state,
        loading: false,
        subscriptionPlans: action.payload.results,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
      };
    case subscriptionPlanConstant.GET_ALL_CRYPTO_TRANSACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        cryptoTransactions: action.payload.results,
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
    case subscriptionPlanConstant.DELETE_SUBSCRIPTION_PLAN_FAILURE:
    case subscriptionPlanConstant.EDIT_SUBSCRIPTION_PLAN_FAILURE:
    case subscriptionPlanConstant.GET_ALL_CRYPTO_TRANSACTION_FAILURE:
    case subscriptionPlanConstant.UPDATE_CRYPTO_TRANSACTION_STATUS_FAILURE:
    case subscriptionPlanConstant.UPDATE_SUBSCRIPTION_PLAN_FAILURE:
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
        message: '',
      };
    case authConstant.CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: [],
        sessionExpireError: '',
      };
    default:
      return state;
  }
};

export default subscriptionPlanReducer;
