import React, { useState } from "react";
import { BiSolidHome } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useSearchMovieByKeywordQuery } from "../store/apis/moviesApi";

const SearchResults = ({ data, isFetching = true }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed top-16 bg-white border rounded shadow-md w-1/3 p-1">
      {data.length > 0 &&
        data.slice(0, 3).map((element) => (
          <div className="flex" onClick={() => navigate(`${element.id}`)}>
            <div className="w-1/6 p-1">
              <img
                src={`https://image.tmdb.org/t/p/w500/${element?.poster_path}`}
                alt={element?.title}
              />
            </div>
            <div className="w-5/6 p-1">
              <h2 className="text-[#4A4A4A]">{element.title}</h2>
              <p>{element.overview.slice(0, 80)}...</p>
            </div>
          </div>
        ))}
    </div>
  );
};

const Header = ({ isHomePage }) => {
  const [keyword, setKeyword] = useState("");
  const { data: results, isFetching } = useSearchMovieByKeywordQuery(keyword);
  const navigate = useNavigate();
  const handleOnChange = (event) => {
    if (event.target.value.length > 3) {
      setKeyword(event.target.value);
    } else if (!event.target.value.length) {
      setKeyword("");
    }
  };
  return (
    <div className={`py-4 ${!isHomePage && ""} border-b shadow-lg`}>
      <div className="lg:w-10/12 mx-auto flex justify-between items-center">
        {isHomePage ? (
          <div className="relative w-full">
            <input
              className="bg-stone-200 outline-none px-3 py-2 rounded w-1/3 pl-10"
              style={{
                background: `#DFDFDF url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center`,
              }}
              onChange={(event) => handleOnChange(event)}
            />
            {!isFetching && results.results.length > 0 && (
              <SearchResults data={results.results} isFetching={isFetching} />
            )}
          </div>
        ) : (
          <h1 className="text-xl font-bold flex items-center text-[#4A4A4A]">
            Movie Details
          </h1>
        )}
        <BiSolidHome
          onClick={() => navigate("/")}
          className="text-2xl text-[#4A4A4A] hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
