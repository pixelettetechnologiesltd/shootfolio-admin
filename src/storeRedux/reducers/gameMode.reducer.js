import { authConstant, gameModeConstant } from "../constants";

const initialState = {
  gameMode: [],
  singleGameMode: {},
  errors: [],
  loading: false,
  uploadLoading: false,
  message: "",
  sessionExpireError: "",
  page: 1,
  totalPages: 1,
};

const gameModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case gameModeConstant.GET_GAME_MODE_REQUEST:
    case gameModeConstant.ADD_GAME_MODE_REQUEST:
    case gameModeConstant.GET_SINGLE_GAME_MODE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case gameModeConstant.UPDATE_SINGLE_GAME_MODE_REQUEST:
      return {
        ...state,
        uploadLoading: true,
      };
    case gameModeConstant.GET_GAME_MODE_SUCCESS:
      return {
        ...state,
        loading: false,
        gameMode: action.payload.results,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
      };
    case gameModeConstant.ADD_GAME_MODE_SUCCESS:
    case gameModeConstant.UPDATE_SINGLE_GAME_MODE_SUCCESS:
      return {
        ...state,
        uploadLoading: false,
        loading: false,
        message: action.payload,
      };
    case gameModeConstant.GET_SINGLE_GAME_MODE_SUCCESS:
      return {
        ...state,
        loading: false,
        singleGameMode: action.payload,
      };
    case gameModeConstant.GET_GAME_MODE_FAILURE:
    case gameModeConstant.ADD_GAME_MODE_FAILURE:
    case gameModeConstant.GET_SINGLE_GAME_MODE_FAILURE:
    case gameModeConstant.UPDATE_SINGLE_GAME_MODE_FAILURE:
      return {
        ...state,
        uploadLoading: false,
        loading: false,
        errors: action.payload.err,
      };
    case authConstant.SESSION_EXPIRE:
      return {
        ...state,
        uploadLoading: false,
        loading: false,
        sessionExpireError: action.payload.err,
      };
    case authConstant.CLEAR_MESSAGES:
      return {
        ...state,
        uploadLoading: false,
        loading: false,
        message: "",
      };
    case authConstant.CLEAR_ERRORS:
      return {
        ...state,
        uploadLoading: false,
        loading: false,
        errors: [],
        sessionExpireError: "",
      };
    default:
      return state;
  }
};

export default gameModeReducer;
