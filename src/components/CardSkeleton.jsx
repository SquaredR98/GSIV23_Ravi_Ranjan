import React from "react";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = () => {
  return (
    <div className="border h-96 rounded-lg shadow-md pb-4 hover:cursor-pointer">
      <div className="h-3/4 mt-[-4px]">
        <Skeleton style={{ height: '100%' }} />
      </div>
      <span className="flex px-1 mt-5">
        <h3 className="text-3xl w-3/4 text-stone-700">
          <Skeleton />
        </h3>
        <p className="w-1/4 text-3xl pl-8">
          <Skeleton />
        </p>
      </span>
      <p className="px-1">
        <Skeleton />
        <Skeleton />
      </p>
    </div>
  );
};

export default CardSkeleton;
