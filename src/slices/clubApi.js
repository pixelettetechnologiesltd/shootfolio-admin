import { apiSlice } from "./apiSlice";

const USERS_URL = process.env.REACT_APP_USERS_URL;

export const clubApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    clubAdd: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/game/clubAdd`,
        method: "POST",
        body: data,
      }),
      
    }),
  
    getClub: builder.query({
      query: () => ({
        url: `${USERS_URL}/game/clubGet`,
        method: "GET",
      }),
    }),
   
    deleteClub: builder.mutation({
      query: (id) => ({
        url: `${USERS_URL}/game/clubDelete/${id}`,
        method: "DELETE",
      }),
    }),
  
    getOneClub: builder.mutation({
      query: (id) => ({
        url: `${USERS_URL}/game/clubGetOne/${id}`,
        method: "GET",
      }),
    }),
   
    updateOneClub: builder.mutation({
      query: ({ id, data }) => ({
        url: `${USERS_URL}/game/clubUpdate/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useClubAddMutation,
  useGetClubQuery,
  useDeleteClubMutation,
  useGetOneClubMutation,
  useUpdateOneClubMutation,
} = clubApi;
