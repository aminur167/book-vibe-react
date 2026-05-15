import React from "react";
import { FaBookOpen, FaRegStar } from "react-icons/fa";
import { TbBooks } from "react-icons/tb";

const statsCards = [
  {
    icon: <TbBooks className="mb-4 text-4xl text-green-500" />,
    label: "Books Read",
    key: "totalBooks",
  },
  {
    icon: <FaBookOpen className="mb-4 text-4xl text-green-500" />,
    label: "Total Pages",
    key: "totalPages",
  },
  {
    icon: <FaRegStar className="mb-4 text-4xl text-green-500" />,
    label: "Average Rating",
    key: "averageRating",
  },
];

const StatsOverview = ({ averageRating, totalBooks, totalPages }) => {
  const values = { averageRating, totalBooks, totalPages };

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {statsCards.map(({ icon, key, label }) => (
        <div key={key} className="rounded-lg bg-base-100 p-6 shadow-sm">
          {icon}
          <p className="text-gray-500">{label}</p>
          <h2 className="text-4xl font-bold">{values[key]}</h2>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
