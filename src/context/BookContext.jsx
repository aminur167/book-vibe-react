import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  addReadListToLocalDB,
  addWishListToLocalDB,
  getAllReadListFromLocalDB,
  getAllWishListFromLocalDB,
  removeReadListFromLocalDB,
  removeWishListFromLocalDB,
} from "../utils/localDB";
import { BookContext } from "./BookContextObject";

const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState(() => getAllReadListFromLocalDB());
  const [wishList, setWishList] = useState(() => getAllWishListFromLocalDB());

  const handleMarkAsRead = (currentBook) => {
    const isExistBook = readList.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error("The book is already exist");
      return;
    }

    const updatedWishList = wishList.filter(
      (book) => book.bookId !== currentBook.bookId,
    );

    addReadListToLocalDB(currentBook);
    removeWishListFromLocalDB(currentBook.bookId);
    setReadList([...readList, currentBook]);
    setWishList(updatedWishList);
    toast.success(`${currentBook.bookName} is added to read list`);
  };

  const handleWishList = (currentBook) => {
    const isExistInReadList = readList.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistInReadList) {
      toast.error("This book is already in read list");
      return;
    }

    const isExistBook = wishList.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error("The book is already exist");
      return;
    }

    addWishListToLocalDB(currentBook);
    setWishList([...wishList, currentBook]);
    toast.success(`${currentBook.bookName} is added to wish list`);
  };

  const handleRemoveFromReadList = (bookId) => {
    const remainingBooks = readList.filter((book) => book.bookId !== bookId);

    removeReadListFromLocalDB(bookId);
    setReadList(remainingBooks);
    toast.success("Book removed from read list");
  };

  const handleRemoveFromWishList = (bookId) => {
    const remainingBooks = wishList.filter((book) => book.bookId !== bookId);

    removeWishListFromLocalDB(bookId);
    setWishList(remainingBooks);
    toast.success("Book removed from wish list");
  };

  const data = {
    readList,
    setReadList,
    handleMarkAsRead,
    handleRemoveFromReadList,
    wishList,
    setWishList,
    handleWishList,
    handleRemoveFromWishList,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
