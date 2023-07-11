import { apiSlice } from "./apiSlice";

const USERS_URL = process.env.REACT_APP_USERS_URL;

export const leagueApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    leagueAdd: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/game/leagueAdd`,
        method: "POST",
        body: data,
      }),
      
    }),
  
    leagueGet: builder.query({
      query: () => ({
        url: `${USERS_URL}/game/leagueGet`,
        method: "GET",
      }),
    }),
   
    deleteLeague: builder.mutation({
      query: (id) => ({
        url: `${USERS_URL}/game/leagueDelete/${id}`,
        method: "DELETE",
      }),
    }),
  
    getOneLeague: builder.mutation({
      query: (id) => ({
        url: `${USERS_URL}/game/leagueGetOne/${id}`,
        method: "GET",
      }),
    }),
   
    updateOneLeague: builder.mutation({
      query: ({ id, data }) => ({
        url: `${USERS_URL}/game/leagueUpdate/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useLeagueAddMutation,
  useLeagueGetQuery,
  useDeleteLeagueMutation,
  useGetOneLeagueMutation,
  useUpdateOneLeagueMutation,
} = leagueApi;
