import React from "react";

const ratingOptions = [
  { label: "All Ratings", value: "all" },
  { label: "4.8 and above", value: "4.8" },
  { label: "4.6 and above", value: "4.6" },
  { label: "4.4 and above", value: "4.4" },
];

const sortOptions = [
  { label: "Default", value: "default" },
  { label: "Top Rated", value: "rating" },
  { label: "Most Pages", value: "pages" },
  { label: "Newest", value: "year" },
];

const BookFilters = ({
  categories,
  filters,
  hasActiveFilters,
  onCategoryChange,
  onClearFilters,
  onMinimumRatingChange,
  onSearchTextChange,
  onSortByChange,
}) => {
  const { category, minimumRating, searchText, sortBy } = filters;

  return (
    <div className="mb-8 grid grid-cols-1 gap-4 rounded-lg bg-base-200 p-4 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_auto]">
      <label className="form-control">
        <span className="label-text mb-1 font-semibold">Search</span>
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Book name or author"
          value={searchText}
          onChange={(event) => onSearchTextChange(event.target.value)}
        />
      </label>

      <label className="form-control">
        <span className="label-text mb-1 font-semibold">Category</span>
        <select
          className="select select-bordered w-full"
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item === "all" ? "All Categories" : item}
            </option>
          ))}
        </select>
      </label>

      <label className="form-control">
        <span className="label-text mb-1 font-semibold">Rating</span>
        <select
          className="select select-bordered w-full"
          value={minimumRating}
          onChange={(event) => onMinimumRatingChange(event.target.value)}
        >
          {ratingOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <label className="form-control">
        <span className="label-text mb-1 font-semibold">Sort</span>
        <select
          className="select select-bordered w-full"
          value={sortBy}
          onChange={(event) => onSortByChange(event.target.value)}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <button
        className="btn btn-outline self-end"
        disabled={!hasActiveFilters && sortBy === "default"}
        onClick={onClearFilters}
      >
        Clear
      </button>
    </div>
  );
};

export default BookFilters;
