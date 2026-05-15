import React, { use } from "react";
import BookFilters from "./BookFilters";
import BooksEmptyState from "./BooksEmptyState";
import BooksGrid from "./BooksGrid";
import BooksSectionHeader from "./BooksSectionHeader";
import useBookFilters from "../../hooks/useBookFilters";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  const {
    categories,
    clearFilters,
    filteredBooks,
    filters,
    hasActiveFilters,
    setCategory,
    setMinimumRating,
    setSearchText,
    setSortBy,
  } = useBookFilters(books);

  return (
    <div className="container mx-auto my-12 px-4 lg:px-0">
      <BooksSectionHeader
        totalCount={books.length}
        visibleCount={filteredBooks.length}
      />

      <BookFilters
        categories={categories}
        filters={filters}
        hasActiveFilters={hasActiveFilters}
        onCategoryChange={setCategory}
        onClearFilters={clearFilters}
        onMinimumRatingChange={setMinimumRating}
        onSearchTextChange={setSearchText}
        onSortByChange={setSortBy}
      />

      {filteredBooks.length === 0 ? (
        <BooksEmptyState onClearFilters={clearFilters} />
      ) : (
        <BooksGrid books={filteredBooks} />
      )}
    </div>
  );
};

export default AllBooks;
