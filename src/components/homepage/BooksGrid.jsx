import React from "react";
import BookCard from "../ui/BookCard";

const BooksGrid = ({ books }) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <BookCard key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default BooksGrid;
