import React from "react";
import {
  useFetchMovieActorsByIdQuery,
  useFetchMoviesByIdQuery,
} from "../store";
import Skeleton from "react-loading-skeleton";

const MovieDetails = () => {
  const id = window.location.pathname.slice(1);
  console.log(id);
  const {
    data: movieDataDetail,
    isFetching: isFetchingMovieDataDetail,
    error: movieDataDetailError,
  } = useFetchMoviesByIdQuery(id);
  const {
    data: castDetails,
    isFetching: castDetailsFetching,
    error: castDetailsError,
  } = useFetchMovieActorsByIdQuery(id);
  console.log(castDetails);

  const director =
    castDetails &&
    castDetails?.crew?.filter(
      (element) => element.known_for_department === "Directing"
    );
  let cast = [];
  castDetails &&
    castDetails?.cast?.slice(0, 3).map((element) => cast.push(element.name));
  cast = cast.join(", ");
  return (
    <div className="flex w-full lg:w-10/12 mx-auto mt-8">
      <div className="w-1/6 px-2 pl-0">
        {isFetchingMovieDataDetail ? (
          <Skeleton style={{ width: "100%", height: "16rem" }} />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDataDetail?.poster_path}`}
            alt={movieDataDetail?.title}
          />
        )}
      </div>
      <div className="w-5/6 pl-3">
        {isFetchingMovieDataDetail ? (
          <Skeleton style={{ height: "2.5rem", width: "25rem" }} />
        ) : (
          <h2 className="text-3xl text-[#4A4A4A] font-bold pb-3">
            {movieDataDetail?.title}{" "}
            <span className="text-[#9B9B9B]">
              ({movieDataDetail?.vote_average})
            </span>
          </h2>
        )}
        {isFetchingMovieDataDetail ? (
          <Skeleton style={{ width: "15rem" }} />
        ) : (
          <p className="font-medium text-[#4A4A4A]">
            {movieDataDetail?.release_date?.split("-")[0]} |{" "}
            {movieDataDetail?.runtime} min. | {director && director[0]?.name}
          </p>
        )}
        {isFetchingMovieDataDetail ? (
          <Skeleton style={{ width: "15rem" }} />
        ) : (
          <p className="font-medium text-[#4A4A4A]">Cast: {cast}...</p>
        )}
        {isFetchingMovieDataDetail ? (
          <div>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        ) : (
          <p className="font-medium text-[#4A4A4A]">
            Description: {movieDataDetail?.overview}
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
