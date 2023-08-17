import React from "react";
import { usePagination, DOTS } from "../hooks/usePagination";
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount=100,
    siblingCount = 1,
    currentPage,
    pageSize = 20,
  } = props;
  console.log(totalCount)
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  // let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className="flex items-center justify-center my-6">
      <li onClick={onPrevious} className="mx-2 hover:cursor-pointer text-xl">
        <BsArrowLeftCircle />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className="w-4 text-[#9b9b9b]">&#8230;</li>;
        }

        return <li className={`w-8 flex justify-center hover:cursor-pointer text-[#9B9B9B] ${currentPage === pageNumber && 'text-[#4d4d4d] underline'}`} onClick={() => onPageChange(pageNumber)}>{pageNumber}</li>;
      })}
      <li onClick={onNext} className="mx-2 hover:cursor-pointer text-xl">
        <BsArrowRightCircle />
      </li>
    </ul>
  );
};

export default Pagination;
