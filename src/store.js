import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import { apiSlice } from './slices/apiSlice';
import gameReducer from "./slices/gameSlice"
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    game:gameReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;