import React from "react";
import { Link } from "react-router";

const HighestRatedBook = ({ book }) => {
  if (!book) return null;

  return (
    <div className="grid grid-cols-1 items-center gap-6 rounded-lg bg-base-200 p-6 md:grid-cols-[180px_1fr]">
      <img
        src={book.image}
        alt={book.bookName}
        className="h-[240px] w-full rounded-lg object-contain"
      />
      <div className="space-y-3">
        <p className="font-semibold text-green-600">Highest Rated Book</p>
        <h2 className="text-3xl font-bold">{book.bookName}</h2>
        <p className="text-lg font-semibold">By: {book.author}</p>
        <p className="text-gray-600">
          {book.totalPages} pages | Rating {book.rating}
        </p>
        <Link
          to={`/bookDetails/${book.bookId}`}
          className="btn btn-outline btn-success"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default HighestRatedBook;
