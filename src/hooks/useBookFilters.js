import { useMemo, useState } from "react";

const useBookFilters = (books) => {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("all");
  const [minimumRating, setMinimumRating] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const categories = useMemo(
    () => ["all", ...new Set(books.map((book) => book.category))],
    [books],
  );

  const filteredBooks = useMemo(() => {
    const searchValue = searchText.toLowerCase().trim();

    const visibleBooks = books.filter((book) => {
      const matchesSearch =
        book.bookName.toLowerCase().includes(searchValue) ||
        book.author.toLowerCase().includes(searchValue);
      const matchesCategory = category === "all" || book.category === category;
      const matchesRating =
        minimumRating === "all" || book.rating >= Number(minimumRating);

      return matchesSearch && matchesCategory && matchesRating;
    });

    if (sortBy === "rating") {
      return [...visibleBooks].sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "pages") {
      return [...visibleBooks].sort((a, b) => b.totalPages - a.totalPages);
    }

    if (sortBy === "year") {
      return [...visibleBooks].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing,
      );
    }

    return visibleBooks;
  }, [books, category, minimumRating, searchText, sortBy]);

  const hasActiveFilters =
    searchText || category !== "all" || minimumRating !== "all";

  const clearFilters = () => {
    setSearchText("");
    setCategory("all");
    setMinimumRating("all");
    setSortBy("default");
  };

  return {
    categories,
    filteredBooks,
    filters: {
      searchText,
      category,
      minimumRating,
      sortBy,
    },
    hasActiveFilters,
    setSearchText,
    setCategory,
    setMinimumRating,
    setSortBy,
    clearFilters,
  };
};

export default useBookFilters;
