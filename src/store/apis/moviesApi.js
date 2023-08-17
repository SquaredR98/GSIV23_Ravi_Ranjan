import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = 'a9570b430354575601e828b915d8d1de';

const moviesApi = createApi({
  reducerPath: "movies",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),
  endpoints(builder) {
    return {
      fetchUpcomingMovies: builder.query({
        query: () => {
          return {
            url: `/movie/upcoming?api_key=${apiKey}`,
            method: "GET",
          };
        },
      }),
      fetchMoviesById: builder.query({
        query: (id) => {
          return {
            url: `/movie/${id}?api_key=${apiKey}`,
            method: "GET",
          };
        },
      }),
      fetchMovieActorsById: builder.query({
        query: (id) => {
          return {
            url: `/movie/${id}/credits?api_key=${apiKey}`,
            method: "GET",
          };
        },
      }),
      searchMovieByKeyword: builder.query({
        query: (query) => {
          return {
            url: `/search/movie?query=${query}&api_key=${apiKey}`,
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useFetchUpcomingMoviesQuery, useFetchMoviesByIdQuery, useFetchMovieActorsByIdQuery, useSearchMovieByKeywordQuery
} = moviesApi;
export { moviesApi };