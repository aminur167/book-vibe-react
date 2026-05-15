import React from "react";
import { Link } from "react-router";

const EmptyReadingState = () => {
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
};

export default EmptyReadingState;
