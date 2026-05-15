import React from "react";
import { FaRegStar } from "react-icons/fa";

const BookDetailsHeader = ({ author, category, rating, title }) => {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-3">
        <span className="badge badge-success text-white">{category}</span>
        <span className="flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 font-semibold text-amber-700">
          <FaRegStar /> {rating}
        </span>
      </div>
      <h1 className="text-3xl font-bold leading-tight md:text-5xl">{title}</h1>
      <p className="text-lg font-semibold text-gray-600">By: {author}</p>
    </div>
  );
};

export default BookDetailsHeader;
