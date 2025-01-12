import React from "react";

const BookCover = ({ data }) => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden relative">
      <div className="relative">
          <img
            className="w-72 h-full object-cover"
            src={data.image}
            alt={data.heading}
          />
        <div className="absolute inset-0 flex items-end justify-end">
          <div className="text-center w-72 text-black p-3 bg-[white] bg-opacity-75">
            <h1 className="text-lg font-bold">{data.heading}</h1>
            <p className="text-sm">{data.parah}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCover;
