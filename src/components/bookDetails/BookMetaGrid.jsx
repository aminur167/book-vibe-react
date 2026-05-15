import React from "react";
import { FaBookOpen, FaCalendarAlt } from "react-icons/fa";
import { MdBusiness } from "react-icons/md";

const metaItems = [
  {
    icon: <FaBookOpen className="mb-3 text-2xl text-green-500" />,
    label: "Pages",
    key: "totalPages",
  },
  {
    icon: <MdBusiness className="mb-3 text-2xl text-green-500" />,
    label: "Publisher",
    key: "publisher",
  },
  {
    icon: <FaCalendarAlt className="mb-3 text-2xl text-green-500" />,
    label: "Year",
    key: "yearOfPublishing",
  },
];

const BookMetaGrid = ({ publisher, totalPages, yearOfPublishing }) => {
  const values = { publisher, totalPages, yearOfPublishing };

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {metaItems.map(({ icon, key, label }) => (
        <div key={key} className="rounded-lg bg-base-200 p-4">
          {icon}
          <p className="text-sm text-gray-500">{label}</p>
          <p className="font-bold">{values[key]}</p>
        </div>
      ))}
    </div>
  );
};

export default BookMetaGrid;
