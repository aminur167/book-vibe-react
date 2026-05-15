import React from "react";

const BooksSectionHeader = ({ visibleCount, totalCount }) => {
  return (
    <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="font-semibold text-green-600">Explore Library</p>
        <h2 className="text-3xl font-bold md:text-4xl">Books Collection</h2>
        <p className="mt-2 max-w-xl text-gray-600">
          Search, filter, and sort books to quickly find the next title for
          your reading list.
        </p>
      </div>
      <div className="rounded-lg bg-base-200 px-4 py-3 text-sm font-semibold">
        Showing {visibleCount} of {totalCount} books
      </div>
    </div>
  );
};

export default BooksSectionHeader;
