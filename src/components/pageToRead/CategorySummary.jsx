import React from "react";

const CategorySummary = ({ categoryStats }) => {
  return (
    <div className="rounded-lg bg-base-100 p-6 shadow-sm">
      <p className="font-semibold text-green-600">Category Mix</p>
      <h2 className="mb-6 text-2xl font-bold">Books by Category</h2>
      <div className="space-y-4">
        {Object.entries(categoryStats).map(([categoryName, count]) => (
          <div
            key={categoryName}
            className="flex items-center justify-between rounded-lg bg-base-200 px-4 py-3"
          >
            <span className="font-semibold">{categoryName}</span>
            <span className="badge badge-success text-white">
              {count} {count > 1 ? "books" : "book"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySummary;
