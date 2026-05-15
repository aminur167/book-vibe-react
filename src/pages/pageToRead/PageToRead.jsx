import React, { useContext } from "react";
import { BookContext } from "../../context/BookContextObject";
import CategorySummary from "../../components/pageToRead/CategorySummary";
import EmptyReadingState from "../../components/pageToRead/EmptyReadingState";
import HighestRatedBook from "../../components/pageToRead/HighestRatedBook";
import PagesProgressChart from "../../components/pageToRead/PagesProgressChart";
import StatsOverview from "../../components/pageToRead/StatsOverview";
import { getReadingStats } from "../../utils/readingStats";

const PageToRead = () => {
  const { readList } = useContext(BookContext);
  const {
    averageRating,
    categoryStats,
    highestRatedBook,
    maximumPages,
    totalBooks,
    totalPages,
  } = getReadingStats(readList);

  if (totalBooks === 0) {
    return <EmptyReadingState />;
  }

  return (
    <div className="container mx-auto my-10 space-y-8 px-4 lg:px-0">
      <div>
        <h1 className="text-4xl font-bold">Page to Read</h1>
        <p className="mt-2 text-gray-600">
          Your reading progress and book list summary.
        </p>
      </div>

      <StatsOverview
        averageRating={averageRating}
        totalBooks={totalBooks}
        totalPages={totalPages}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <PagesProgressChart books={readList} maximumPages={maximumPages} />
        <CategorySummary categoryStats={categoryStats} />
      </div>

      <HighestRatedBook book={highestRatedBook} />
    </div>
  );
};

export default PageToRead;
