import React from "react";

const BookReview = ({ review }) => {
  return (
    <div className="space-y-2 border-y py-5">
      <h2 className="text-xl font-bold">Review</h2>
      <p className="leading-8 text-gray-600">{review}</p>
    </div>
  );
};

export default BookReview;
