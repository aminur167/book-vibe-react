const getReadingStats = (readList) => {
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
  const maximumPages = Math.max(...readList.map((book) => book.totalPages));
  const categoryStats = readList.reduce((stats, book) => {
    stats[book.category] = (stats[book.category] || 0) + 1;
    return stats;
  }, {});

  return {
    averageRating,
    categoryStats,
    highestRatedBook,
    maximumPages,
    totalBooks,
    totalPages,
  };
};

export { getReadingStats };
