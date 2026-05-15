import React from "react";

const BooksEmptyState = ({ onClearFilters }) => {
  return (
    <div className="flex min-h-[260px] items-center justify-center rounded-lg bg-base-200 px-4 text-center">
      <div className="space-y-3">
        <h3 className="text-2xl font-bold">No books found</h3>
        <p className="text-gray-600">
          Try a different search term or reset the filters.
        </p>
        <button className="btn btn-success text-white" onClick={onClearFilters}>
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default BooksEmptyState;
