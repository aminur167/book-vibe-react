import React, { useContext, useMemo } from "react";
import { BookContext } from "../../context/BookContextObject";
import BookCard from "../ui/BookCard";

const ListedWishList = ({ sortingType }) => {
  const { wishList, handleRemoveFromWishList } = useContext(BookContext);

  const filteredWishList = useMemo(() => {
    if (sortingType === "pages") {
      return [...wishList].sort((a, b) => a.totalPages - b.totalPages);
    }

    if (sortingType === "rating") {
      return [...wishList].sort((a, b) => a.rating - b.rating);
    }

    return wishList;
  }, [sortingType, wishList]);

  if (filteredWishList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center ">
        <h2 className="font-bold text-3xl">No wish list data found</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredWishList.map((book, ind) => (
          <div key={ind} className="space-y-3">
            <BookCard book={book} />
            <button
              className="btn btn-outline btn-error w-full"
              onClick={() => handleRemoveFromWishList(book.bookId)}
            >
              Remove from Wish List
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListedWishList;
