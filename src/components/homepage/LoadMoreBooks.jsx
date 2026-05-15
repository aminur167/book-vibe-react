import React from "react";

const LoadMoreBooks = ({ hasMoreBooks, onLoadMore, totalCount, visibleCount }) => {
  return (
    <div className="mt-10 flex flex-col items-center gap-3 text-center">
      <p className="text-sm font-semibold text-gray-500">
        Showing {visibleCount} of {totalCount} matching books
      </p>
      {hasMoreBooks && (
        <button className="btn btn-success text-white" onClick={onLoadMore}>
          Load More Books
        </button>
      )}
    </div>
  );
};

export default LoadMoreBooks;
