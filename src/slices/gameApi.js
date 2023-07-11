import { apiSlice } from "./apiSlice";

const USERS_URL = process.env.REACT_APP_USERS_URL;

export const gameApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    gameAdd: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/game/gameAdd`,
        method: "POST",
        body: data,
      }),
      
    }),
  
    getGame: builder.query({
      query: () => ({
        url: `${USERS_URL}/game/gameGet`,
        method: "GET",
      }),
    }),
   
    deleteGame: builder.mutation({
      query: (id) => ({
        url: `${USERS_URL}/game/gameDelete/${id}`,
        method: "DELETE",
      }),
    }),
  
    getOneGame: builder.mutation({
      query: (id) => ({
        url: `${USERS_URL}/game/gameGetOne/${id}`,
        method: "GET",
      }),
    }),
   
    updateOneGame: builder.mutation({
      query: ({ id, data }) => ({
        url: `${USERS_URL}/game/gameUpdate/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGameAddMutation,
  useGetGameQuery,
  useDeleteGameMutation,
  useGetOneGameMutation,
  useUpdateOneGameMutation,
} = gameApi;
