import React from "react";

const PagesProgressChart = ({ books, maximumPages }) => {
  return (
    <div className="rounded-lg bg-base-100 p-6 shadow-sm">
      <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-semibold text-green-600">Reading Analytics</p>
          <h2 className="text-2xl font-bold">Pages by Book</h2>
        </div>
        <p className="text-sm text-gray-500">Based on your read list</p>
      </div>

      <div className="space-y-5">
        {books.map((book) => {
          const progressWidth = `${Math.max(
            (book.totalPages / maximumPages) * 100,
            8,
          )}%`;

          return (
            <div key={book.bookId} className="space-y-2">
              <div className="flex items-center justify-between gap-3">
                <p className="truncate font-semibold">{book.bookName}</p>
                <p className="shrink-0 text-sm font-bold text-green-600">
                  {book.totalPages} pages
                </p>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-base-200">
                <div
                  className="h-full rounded-full bg-green-500"
                  style={{ width: progressWidth }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PagesProgressChart;
