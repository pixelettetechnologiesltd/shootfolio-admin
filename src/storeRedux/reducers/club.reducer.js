import { authConstant, clubConstant } from '../constants';

const initialState = {
  club: [],
  singleClub: {},
  coin: [],
  errors: [],
  loading: false,
  portLoading: false,
  message: '',
  sessionExpireError: '',
  page: 1,
  totalPages: 1,
};

const clubReducer = (state = initialState, action) => {
  switch (action.type) {
    case clubConstant.GET_CLUB_REQUEST:
    case clubConstant.ADD_CLUB_REQUEST:
    case clubConstant.GET_COIN_REQUEST:
    case clubConstant.DELETE_COIN_REQUEST:
    case clubConstant.GET_SINGLE_CLUB_REQUEST:
    case clubConstant.UPDATE_SINGLE_CLUB_REQUEST:
    case clubConstant.GET_SINGLE_PORTFOLIO_REQUEST:
    case clubConstant.UPDATE_SINGLE_PORTFOLIO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case clubConstant.ADD_PORTFOLIO_REQUEST:
      return {
        ...state,
        portLoading: true,
      };
    case clubConstant.GET_CLUB_SUCCESS:
      return {
        ...state,
        loading: false,
        club: action.payload.results,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
      };
    case clubConstant.GET_SINGLE_CLUB_SUCCESS:
    case clubConstant.GET_SINGLE_PORTFOLIO_SUCCESS:
      return {
        ...state,
        loading: false,
        singleClub: action.payload,
      };
    case clubConstant.GET_COIN_SUCCESS:
      return {
        ...state,
        loading: false,
        coin: action.payload.results,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
      };
    case clubConstant.ADD_CLUB_SUCCESS:
    case clubConstant.ADD_PORTFOLIO_SUCCESS:
    case clubConstant.DELETE_COIN_SUCCESS:
    case clubConstant.UPDATE_SINGLE_CLUB_SUCCESS:
      const updatedClubs = state.club.map((club) => {
        if (club.id === action.meta.clubId) {
          return { ...club, status: action.meta.newStatus };
        }
        return club;
      });
      return {
        ...state,
        loading: false,
        club: updatedClubs,
        message: action.payload,
      };
    case clubConstant.UPDATE_SINGLE_PORTFOLIO_SUCCESS:
      return {
        ...state,
        portLoading: false,
        loading: false,
        message: action.payload,
      };
    case clubConstant.GET_CLUB_FAILURE:
    case clubConstant.ADD_CLUB_FAILURE:
    case clubConstant.GET_COIN_FAILURE:
    case clubConstant.ADD_PORTFOLIO_FAILURE:
    case clubConstant.DELETE_COIN_FAILURE:
    case clubConstant.GET_SINGLE_CLUB_FAILURE:
    case clubConstant.UPDATE_SINGLE_CLUB_FAILURE:
    case clubConstant.GET_SINGLE_PORTFOLIO_FAILURE:
    case clubConstant.UPDATE_SINGLE_PORTFOLIO_FAILURE:
      return {
        ...state,
        portLoading: false,
        loading: false,
        errors: action.payload.err,
      };
    case authConstant.SESSION_EXPIRE:
      return {
        ...state,
        portLoading: false,
        loading: false,
        sessionExpireError: action.payload.err,
      };
    case authConstant.CLEAR_MESSAGES:
      return {
        ...state,
        portLoading: false,
        loading: false,
        message: '',
      };
    case authConstant.CLEAR_ERRORS:
      return {
        ...state,
        portLoading: false,
        loading: false,
        errors: [],
        sessionExpireError: '',
      };
    default:
      return state;
  }
};

export default clubReducer;
