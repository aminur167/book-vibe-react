import React, { useContext } from "react";
import { FaBookOpen, FaRegStar } from "react-icons/fa";
import { TbBooks } from "react-icons/tb";
import { BookContext } from "../../context/BookContextObject";
import { Link } from "react-router";

const PageToRead = () => {
  const { readList } = useContext(BookContext);

  const totalBooks = readList.length;
  const totalPages = readList.reduce((sum, book) => sum + book.totalPages, 0);
  const averageRating =
    totalBooks > 0
      ? (
          readList.reduce((sum, book) => sum + Number(book.rating), 0) /
          totalBooks
        ).toFixed(1)
      : "0.0";
  const highestRatedBook = [...readList].sort((a, b) => b.rating - a.rating)[0];

  if (totalBooks === 0) {
    return (
      <div className="container mx-auto my-10 flex min-h-[55vh] items-center justify-center rounded-xl bg-base-200 px-4 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">No reading data found</h2>
          <p className="text-gray-600">
            Add books to your read list to see reading statistics here.
          </p>
          <Link to="/" className="btn btn-success text-white">
            Explore Books
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-10 space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Page to Read</h1>
        <p className="mt-2 text-gray-600">
          Your reading progress and book list summary.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="rounded-lg bg-base-100 p-6 shadow-sm">
          <TbBooks className="mb-4 text-4xl text-green-500" />
          <p className="text-gray-500">Books Read</p>
          <h2 className="text-4xl font-bold">{totalBooks}</h2>
        </div>
        <div className="rounded-lg bg-base-100 p-6 shadow-sm">
          <FaBookOpen className="mb-4 text-4xl text-green-500" />
          <p className="text-gray-500">Total Pages</p>
          <h2 className="text-4xl font-bold">{totalPages}</h2>
        </div>
        <div className="rounded-lg bg-base-100 p-6 shadow-sm">
          <FaRegStar className="mb-4 text-4xl text-green-500" />
          <p className="text-gray-500">Average Rating</p>
          <h2 className="text-4xl font-bold">{averageRating}</h2>
        </div>
      </div>

      {highestRatedBook && (
        <div className="grid grid-cols-1 items-center gap-6 rounded-lg bg-base-200 p-6 md:grid-cols-[180px_1fr]">
          <img
            src={highestRatedBook.image}
            alt={highestRatedBook.bookName}
            className="h-[240px] w-full rounded-lg object-contain"
          />
          <div className="space-y-3">
            <p className="font-semibold text-green-600">Highest Rated Book</p>
            <h2 className="text-3xl font-bold">{highestRatedBook.bookName}</h2>
            <p className="text-lg font-semibold">By: {highestRatedBook.author}</p>
            <p className="text-gray-600">
              {highestRatedBook.totalPages} pages · Rating{" "}
              {highestRatedBook.rating}
            </p>
            <Link
              to={`/bookDetails/${highestRatedBook.bookId}`}
              className="btn btn-outline btn-success"
            >
              View Details
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageToRead;
