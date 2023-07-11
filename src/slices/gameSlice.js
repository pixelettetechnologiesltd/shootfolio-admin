import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  defineGame: [],
  loading: false,
  error: null,
};
const gameSlice = createSlice({
  name: "gameInfo",
  initialState,
  reducers: {
    addGame: (state, action) => {
      state.defineGame.push(action.payload);
    },
    showGame: (state, action) => {
      state.loading = false;
      state.defineGame = action.payload;
    },
    removeGame: (state, action) => {
      const { id } = action.payload;
      state.defineGame = state.defineGame.filter((item) => item._id !== id);
    },
    updateGame: (state, action) => {
      
    },
  },
});

export const { addGame, removeGame, showGame,updateGame } = gameSlice.actions;
export default gameSlice.reducer;
