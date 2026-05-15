import React from "react";

const BookTags = ({ tags }) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="font-bold">Tags:</span>
      {tags.map((tag) => (
        <div key={tag} className="badge bg-green-100 font-bold text-green-600">
          {tag}
        </div>
      ))}
    </div>
  );
};

export default BookTags;
