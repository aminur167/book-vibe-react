import React from "react";
import BooksGrid from "./BooksGrid";
import LoadMoreBooks from "./LoadMoreBooks";
import usePaginatedBooks from "../../hooks/usePaginatedBooks";

const BooksBrowser = ({ books }) => {
  const { hasMoreBooks, loadMoreBooks, visibleBooks, visibleCount } =
    usePaginatedBooks(books);

  return (
    <>
      <BooksGrid books={visibleBooks} />
      <LoadMoreBooks
        hasMoreBooks={hasMoreBooks}
        onLoadMore={loadMoreBooks}
        totalCount={books.length}
        visibleCount={visibleCount}
      />
    </>
  );
};

export default BooksBrowser;
