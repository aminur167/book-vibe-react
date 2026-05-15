import React from "react";

const BookCover = ({ image, title }) => {
  return (
    <figure className="flex min-h-[360px] items-center justify-center rounded-lg bg-base-200 p-8">
      <img
        src={image}
        alt={title}
        className="max-h-[430px] w-full object-contain drop-shadow-xl"
      />
    </figure>
  );
};

export default BookCover;
