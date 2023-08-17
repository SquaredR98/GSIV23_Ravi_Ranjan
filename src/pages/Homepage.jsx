/* eslint-disable no-restricted-globals */
import React, { Fragment, useState } from "react";
import Header from "../components/Header";
import CardSkeleton from "../components/CardSkeleton";
import Card from "../components/Card";
import { useFetchUpcomingMoviesQuery } from "../store";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";

const Homepage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: movieData,
    isFetching,
    error,
  } = useFetchUpcomingMoviesQuery(currentPage);
  console.log(movieData);
  const handlePageChange = (page) => {
    setCurrentPage(page);
    scrollTo(0, 0);
  };
  const navigate = useNavigate();
  return (
    <Fragment>
      <Header isHomePage />
      <div className="py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:w-10/12 mx-auto gap-x-4 gap-y-4">
        {isFetching
          ? Array(10)
              .fill(0)
              .map((element, index) => <CardSkeleton key={index} />)
          : movieData?.results?.map((element, index) => (
              <Card
                key={index}
                imageUrl={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                backdropUrl={element.backdrop_path}
                title={element.original_title}
                description={element.overview}
                rating={element.vote_average}
                onClickEvent={() => navigate(`${element.id}`)}
              />
            ))}
      </div>
      <Pagination
        onPageChange={handlePageChange}
        totalCount={movieData?.total_results}
        currentPage={currentPage}
        totalPageNumbers={movieData?.total_pages}
      />
    </Fragment>
  );
};

export default Homepage;
