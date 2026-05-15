import React, { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookContextObject";
import BookActions from "../../components/bookDetails/BookActions";
import BookCover from "../../components/bookDetails/BookCover";
import BookDetailsHeader from "../../components/bookDetails/BookDetailsHeader";
import BookMetaGrid from "../../components/bookDetails/BookMetaGrid";
import BookReview from "../../components/bookDetails/BookReview";
import BookTags from "../../components/bookDetails/BookTags";

const BookDetails = () => {
  const { bookId: bookParamsId } = useParams();

  const books = useLoaderData();
  const expectedBook = books.find(
    (book) => book.bookId === Number(bookParamsId),
  );
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  const { handleMarkAsRead, handleWishList, readList, wishList } =
    useContext(BookContext);
  const isAlreadyRead = readList.some(
    (book) => book.bookId === expectedBook.bookId,
  );
  const isAlreadyWishListed = wishList.some(
    (book) => book.bookId === expectedBook.bookId,
  );

  return (
    <div className="container mx-auto my-8 px-4 lg:px-0">
      <div className="mb-5">
        <Link to="/" className="btn btn-ghost btn-sm">
          Back to Books
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 rounded-lg bg-base-100 p-4 shadow-sm md:grid-cols-[0.9fr_1.1fr] md:p-8">
        <BookCover image={image} title={bookName} />

        <div className="space-y-6">
          <BookDetailsHeader
            author={author}
            category={category}
            rating={rating}
            title={bookName}
          />
          <BookTags tags={tags} />
          <BookMetaGrid
            publisher={publisher}
            totalPages={totalPages}
            yearOfPublishing={yearOfPublishing}
          />
          <BookReview review={review} />
          <BookActions
            book={expectedBook}
            isAlreadyRead={isAlreadyRead}
            isAlreadyWishListed={isAlreadyWishListed}
            onMarkAsRead={handleMarkAsRead}
            onWishList={handleWishList}
          />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
