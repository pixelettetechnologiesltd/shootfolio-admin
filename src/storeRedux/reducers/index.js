import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import gameTypeReducer from "./gameType.reducer";
import gameLeagueReducer from "./gameLeague.reducer";
import gameModeReducer from "./gameMode.reducer";
import clubReducer from "./club.reducer";
import subscriptionReducer from "./subscription.reducer";

const rootReducer = combineReducers({
  authReducer,
  gameTypeReducer,
  gameLeagueReducer,
  gameModeReducer,
  clubReducer,
  subscriptionReducer,
});

export default rootReducer;
