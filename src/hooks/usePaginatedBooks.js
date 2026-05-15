import { useMemo, useState } from "react";

const INITIAL_VISIBLE_COUNT = 12;
const LOAD_MORE_COUNT = 12;

const usePaginatedBooks = (books) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const visibleBooks = useMemo(
    () => books.slice(0, visibleCount),
    [books, visibleCount],
  );

  const hasMoreBooks = visibleCount < books.length;

  const loadMoreBooks = () => {
    setVisibleCount((currentCount) =>
      Math.min(currentCount + LOAD_MORE_COUNT, books.length),
    );
  };

  return {
    hasMoreBooks,
    loadMoreBooks,
    visibleBooks,
    visibleCount: visibleBooks.length,
  };
};

export default usePaginatedBooks;
