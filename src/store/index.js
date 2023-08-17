import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { moviesApi } from "./apis/moviesApi";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(moviesApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useFetchUpcomingMoviesQuery,
  useFetchMoviesByIdQuery,
  useFetchMovieActorsByIdQuery,
  useSearchMovieByKeywordQuery,
} from "./apis/moviesApi";
