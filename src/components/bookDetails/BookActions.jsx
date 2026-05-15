import React from "react";

const BookActions = ({
  book,
  isAlreadyRead,
  isAlreadyWishListed,
  onMarkAsRead,
  onWishList,
}) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        className="btn btn-success text-white"
        disabled={isAlreadyRead}
        onClick={() => onMarkAsRead(book)}
      >
        {isAlreadyRead ? "Already Read" : "Mark as Read"}
      </button>
      <button
        className="btn btn-outline btn-success"
        disabled={isAlreadyRead || isAlreadyWishListed}
        onClick={() => onWishList(book)}
      >
        {isAlreadyWishListed ? "In Wishlist" : "Add to Wishlist"}
      </button>
    </div>
  );
};

export default BookActions;
