import { apiSlice } from "./apiSlice";

const USERS_URL = process.env.REACT_APP_USERS_URL;

export const gameModeApi = apiSlice.injectEndpoints({
  tagTypes: ['GameMode'],
  endpoints: (builder) => ({
    gameModeAdd: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/game/gameModeAdd`,
        method: "POST",
        body: data,
      }),
      invalidateTags: ['GameMode'],
    }),

    getGameMode: builder.query({
      query: () => ({
        url: `${USERS_URL}/game/gameGetMode`,
        method: "GET",
      }),
      provideTags: ['GameMode'],
    }),

    deleteGameMode: builder.mutation({
      query: (id) => ({
        url: `${USERS_URL}/game/gameModeDelete/${id}`,
        method: "DELETE",
      }),
      invalidateTags: ['GameMode'],
    }),

    getOneGameMode: builder.mutation({
      query: (id) => ({
        url: `${USERS_URL}/game/gameGetOneMode/${id}`,
        method: "GET",
      }),
      provideTags: ['GameMode'],
    }),

    updateOneGameMode: builder.mutation({
      query: ({ id, data }) => ({
        url: `${USERS_URL}/game/updateOneGameMode/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidateTags: ['GameMode'],
    }),
  }),
});

export const {
  useGameModeAddMutation,
  useGetGameModeQuery,
  useDeleteGameModeMutation,
  useGetOneGameModeMutation,
  useUpdateOneGameModeMutation,
} = gameModeApi;
