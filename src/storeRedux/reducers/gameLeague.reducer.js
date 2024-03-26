import { authConstant, gameLeagueConstant } from '../constants';

const initialState = {
  gameLeague: [],
  singleGameLeague: {},
  errors: [],
  loading: false,
  message: '',
  sessionExpireError: '',
  page: 1,
  totalPages: 1,
};

const gameLeagueReducer = (state = initialState, action) => {
  switch (action.type) {
    case gameLeagueConstant.GET_GAME_LEAGUE_REQUEST:
    case gameLeagueConstant.ADD_GAME_LEAGUE_REQUEST:
    case gameLeagueConstant.UPDATE_SINGLE_GAME_LEAGUE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case gameLeagueConstant.GET_GAME_LEAGUE_SUCCESS:
      return {
        ...state,
        loading: false,
        gameLeague: action.payload.results,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
      };
    case gameLeagueConstant.ADD_GAME_LEAGUE_SUCCESS:
    case gameLeagueConstant.UPDATE_SINGLE_GAME_LEAGUE_SUCCESS:
      // Assuming the payload now includes { id, updates }, where `updates` is the new data for the league
      const updatedGameLeagues = state.gameLeague.map((league) => {
        if (league.id === action.payload.id) {
          // Update the league with new data
          return { ...league, ...action.payload.updates };
        }
        return league;
      });

      return {
        ...state,
        gameLeague: updatedGameLeagues,
        message: action.payload.message,
      };
    case gameLeagueConstant.GET_SINGLE_GAME_LEAGUE_SUCCESS:
      return {
        ...state,
        loading: false,
        singleGameLeague: action.payload,
      };
    case gameLeagueConstant.GET_GAME_LEAGUE_FAILURE:
    case gameLeagueConstant.ADD_GAME_LEAGUE_FAILURE:
    case gameLeagueConstant.GET_SINGLE_GAME_LEAGUE_FAILURE:
    case gameLeagueConstant.UPDATE_SINGLE_GAME_LEAGUE_FAILURE:
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

export default gameLeagueReducer;
